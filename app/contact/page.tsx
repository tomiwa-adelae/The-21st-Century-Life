import Header from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";
import { contactDetails } from "@/constants";
import React from "react";
import { Architects_Daughter } from "next/font/google";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/shared/Footer";
import { Phone } from "lucide-react";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<Separator />
			</div>
			<div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 py-12">
				<div>
					<div className="grid gap-6">
						{contactDetails.map((details, index) => {
							const Icon = details.icon;
							return (
								<div
									key={index}
									className="flex items-start gap-3"
									data-aos="fade-right"
								>
									<div className="p-2 rounded-md border inline-block">
										<Icon className="w-4 h-4" />
									</div>
									<div>
										<h3 className="font-semibold text-base uppercase">
											{details.title}
										</h3>
										<p className="text-[13px] text-gray-700 mt-1">
											{details.description}
										</p>
										{details.type === "email" ? (
											<a href={`mailto:${details.cta}`}>
												<p className="text-[13px] font-semibold mt-2">
													{details.cta}
												</p>
											</a>
										) : (
											<p className="text-[13px] font-semibold mt-2">
												{details.cta}
											</p>
										)}
									</div>
								</div>
							);
						})}
						<div
							className="flex items-start gap-3"
							data-aos="fade-right"
						>
							<div className="p-2 rounded-md border inline-block">
								<Phone className="w-4 h-4" />
							</div>
							<div>
								<h3 className="font-semibold text-base uppercase">
									Call us
								</h3>
								<p className="text-[13px] text-gray-700 mt-1">
									Mon-Fri from 8am to 5pm
								</p>
								<a href="tel:0705 863 8527">
									<p className="text-[13px] font-semibold mt-2">
										Timi - 0705 863 8527
									</p>
								</a>
								<a href="tel:0807 201 9008">
									<p className="text-[13px] font-semibold mt-2">
										Toba - 0807 201 9008
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-2 bg-blue-400 py-8 px-4 lg:px-8 rounded-lg text-white">
					<h1
						className={`${architectsDaughter.className} text-2xl md:text-3xl lg:text-4xl uppercase leading-snug md:leading-snug lg:leading-snug`}
						data-aos="fade-up"
					>
						Got ideas? Get in touch
					</h1>
					<p
						className="text-sm leading-8 mt-2"
						data-aos="fade-up"
						data-aos-duration="2000"
					>
						We’re here to answer any questions about the Business
						Masterclass, registration details, or general inquiries.
						Feel free to reach out to us using the contact details
						below or by filling out the form.
					</p>
					<ContactForm />
				</div>
			</div>
			<div className="container">
				<Separator />
			</div>
			<Footer />
		</div>
	);
};

export default page;
