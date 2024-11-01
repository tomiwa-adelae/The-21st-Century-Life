"use server";

import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const registerUser = async ({
	user,
}: {
	user: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		company?: string;
		jobTitle?: string;
		preferredSession?: string;
		attendanceType?: string;
	};
}) => {
	try {
		await connectToDatabase();

		const { firstName, lastName, email, phoneNumber } = user;

		if (!firstName || !lastName || !email || !phoneNumber)
			return {
				status: 400,
				message: "Please fill the required form",
			};

		const existingUser = await User.findOne({ email });

		if (existingUser)
			return {
				status: 400,
				message:
					"You have already registered for this event. Please check your mail",
			};

		const registeredUser = await User.create(user);

		if (registeredUser) {
			const request = mailjet.post("send", { version: "v3.1" }).request({
				Messages: [
					{
						From: {
							Email: `${process.env.SENDER_EMAIL_ADDRESS}`,
							Name: `${process.env.COMPANY_NAME}`,
						},
						To: [
							{
								Email: `${email}`,
								Name: `${firstName}`,
							},
						],
						Subject: `Welcome to the Business Masterclass- Registration Confirmed!`,
						TextPart: `Welcome to the Business Masterclass- Registration Confirmed!`,
						HTMLPart: `<div 
										style="
											font-family: Montserrat, sans-serif;
											font-size: 15px;
											padding: 2rem;
										"
									>
										<h2>Dear, ${firstName} ${lastName}</h2>
	
										<p>Thank you for registering for the Business Masterclass organized by Benvic Academy. We are thrilled to have you join us for this insightful event focused on navigating and sustaining business success in today’s ever-evolving landscape.</p>

                                         <h1>Event Details</h1>
                                         <p><strong>Event:</strong> Business Masterclass</p>
                                         <p><strong>Theme:</strong> Business Sustenance in the New Normal</p>
                                         <p><strong>Date:</strong> 16th November 2024</p>
                                         <p><strong>Location:</strong> Metropolitan Club, 15 Kofo Abayomi St., Victoria Island, Lagos</p>
                                         <p><strong>Sessions:</strong> Morning (10AM - 1PM) & Evening (3PM - 7PM)</p>
                                         <br/>
                                         <p><strong>Investment fee: ₦100,000</strong></p>	

                                        <h1>What to Expect</h1>
                                        <p>The Business Masterclass will cover the following topics:</p>
                                         <ul>
                                            <li><strong>Life in the 21st Century</strong>
                                                <ul>
                                                <li>Overview of monumental changes and insights into life in the 21st century.</li>
                                                </ul>
                                            </li>
                                            <li><strong>The 21st Century Defined</strong>
                                                <ul>
                                                <li>Key discussions on the Age of Unreason and the Age of Paradox.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Solutions to the Challenges of the 21st Century</strong>
                                                <ul>
                                                <li>Practical strategies, including The Doughnut Principle and Business Survival Matrix.</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h1>Important Information</h1>
                                         <ul>
                                            <li><strong>Check-in:</strong>:Registration opens 30 minutes before each session. Please bring a valid ID and your registration number for check-in.</li>
                                            <li><strong>Venue Directions:</strong>: Find us at Metropolitan Club, located at 15 Kofo Abayomi St., Victoria Island, Lagos. [Link to Google Maps]</li>
                                            <li><strong>Contact:</strong>: For any further inquiries, feel free to contact us at:
                                                <ul>
                                                <a href={'tel:+234 705 863 8527'}>
                                                    <li>Timilehin: +234 705 863 8527</li>
                                                    </a>
                                                    <a href={'tel:+234 802 339 2653'}>
                                                    <li>Olaolu: +234 802 339 2653</li>
                                                    </a>
                                                </ul>
                                            </li>
                                            <li>Contact: ${process.env.TWITTER_URL}</li>
                                            <li>Instagram: ${process.env.Instagram_URL}</li>
                                            <li>LinkedIn: ${process.env.LINKEDIN_URL}</li>
                                        </ul>
	
										<h1>Stay Connected</h1>
										<p>We will send reminders and additional information as the event date approaches. In the meantime, follow us on social media for updates and exclusive content:</p>
                                        <ul>
                                            <li>Facebook: ${process.env.FACEBOOK_URL}</li>
                                            <li>Twitter: ${process.env.TWITTER_URL}</li>
                                            <li>Instagram: ${process.env.Instagram_URL}</li>
                                            <li>LinkedIn: ${process.env.LINKEDIN_URL}</li>
                                        </ul>

                                        <h1>We Look Forward to Seeing You!</h1>
	
										<p>Thank you once again for joining the Business Masterclass. Prepare to gain valuable insights and connect with like-minded professionals. We look forward to welcoming you and helping you discover strategies for success in the 21st century.</p>
	
										<p>Warm regards,</p>
										<p>The Business Masterclass Team</p>
										<p>Benvic Academy</p>
										<p>${process.env.WEBSITE_URL}</p>
									</div>
							`,
					},
				],
			});

			const requestAdmin = mailjet
				.post("send", { version: "v3.1" })
				.request({
					Messages: [
						{
							From: {
								Email: `${process.env.SENDER_EMAIL_ADDRESS}`,
								Name: `${process.env.COMPANY_NAME}`,
							},
							To: [
								{
									Email: `${process.env.ADMIN_EMAIL_ADDRESS}`,
									Name: `${process.env.COMPANY_NAME}`,
								},
							],
							Subject: `New Registration for Business Masterclass - ${firstName} ${lastName}`,
							TextPart: `New Registration for Business Masterclass - ${firstName} ${lastName}`,
							HTMLPart: `<div 
									style="
										font-family: Montserrat, sans-serif;
										font-size: 15px;
										padding: 2rem;
									"
								>
									<h2>Hello ${process.env.COMPANY_NAME},</h2>


									<p>A new registration has been successfully completed for the Business Masterclass event. Please find the details of the registrant below:</p>

									<h1>
									Attendee Information
                                    </h1>

									<ul>
                                        <li>
                                            <strong>First name:</strong> ${firstName}
                                        </li>
                                        <li>
                                            <strong>Last name:</strong> ${lastName}
                                        </li>
                                        <li>
                                            <strong>Email address:</strong> ${email}
                                        </li>
                                        <li>
                                            <strong>Phone number:</strong> ${phoneNumber}
                                        </li>
                                        <li>
                                            <strong>Session Preference:</strong> ${user.preferredSession}
                                        </li>
                                    </ul>

                                    <h2>Action Required</h2>
									<p>Please ensure this registration is recorded, and prepare to welcome [First Name] [Last Name] at the event. If there are any special notes or instructions regarding this registration, please reach out to the attendee directly</p>

									<p>Thank you for your attention, and let’s make this event a success!</p>

									<p>Warm regards,</p>
									<p>The Business Masterclass Team</p>
									<p>Benvic Academy</p>
									<p>${process.env.WEBSITE_URL}</p>
								</div>
						`,
						},
					],
				});

			// Send email
			request
				.then(() => console.log("User sent"))
				.catch((err: any) => {
					return err;
				});

			requestAdmin
				.then(() => console.log("Admin sent"))
				.catch((err) => {
					console.log(err);
				});
		}
	} catch (error: any) {
		handleError(error);
	}
};
