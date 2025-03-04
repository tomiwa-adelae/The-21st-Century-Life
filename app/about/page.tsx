import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/Spotlight";
import { Check } from "lucide-react";
import { Architects_Daughter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Speakers from "@/components/Speakers";

export const metadata: Metadata = {
	title: "About | The 21st Century Life",
	description:
		"Discover the mission and vision behind Business Masterclass. We’re dedicated to providing quality education and mentorship for business professionals at every level.",
};

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div className="relative">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="blue"
			/>
			<Header />
			<div className="container">
				<Separator />
			</div>
			<div className="container py-8">
				<h1
					className={`${architectsDaughter.className} text-4xl sm:text-5xl lg:text-6xl uppercase leading-snug md:leading-snug lg:leading-snug text-blue-400`}
					data-aos="fade-up"
				>
					About
				</h1>
				<p
					className="text-sm leading-8 mt-2"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					The Business Masterclass is a full-day event dedicated to
					high-impact learning and networking. Guided by renowned
					industry leaders and thought leaders, attendees will gain
					valuable knowledge on key areas critical to sustaining and
					growing a business in an unpredictable world. From digital
					transformation to innovative problem-solving, this
					masterclass prepares you for the future of business.
				</p>
				<div className="my-8">
					<Separator />
				</div>
				<h2
					className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
					data-aos="fade-up"
				>
					Who should attend?
				</h2>
				<p
					className="text-sm leading-8 mt-4"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					Whether you’re a seasoned professional or just starting in
					the world of business, this event will provide practical
					tools and strategic insights to thrive. This class is ideal
					for:
				</p>
				<ul
					className="space-y-4 text-sm mt-4"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<li>
						<Check className="w-4 h-4 inline mr-2 text-blue-400" />
						<p className="text-blue-400 font-semibold inline-block">
							Entrepreneurs:
						</p>{" "}
						Start-up founders and small business owners aiming to
						scale and sustain growth.
					</li>
					<li>
						<Check className="w-4 h-4 inline mr-2 text-blue-400" />
						<p className="text-blue-400 font-semibold inline-block">
							Digital-preneurs:
						</p>{" "}
						Individuals leveraging online platforms to create and
						manage digital businesses.
					</li>
					<li>
						<Check className="w-4 h-4 inline mr-2 text-blue-400" />
						<p className="text-blue-400 font-semibold inline-block">
							Business Owners:
						</p>{" "}
						Owners of medium to large enterprises looking to enhance
						resilience and growth.
					</li>
					<li>
						<Check className="w-4 h-4 inline mr-2 text-blue-400" />
						<p className="text-blue-400 font-semibold inline-block">
							Senior Management Executives:
						</p>{" "}
						Leaders responsible for guiding company strategy and
						innovation.
					</li>
				</ul>
				<div className="my-8">
					<Separator />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div
						className="relative h-[40vh] lg:h-full"
						data-aos="fade-up"
					>
						<BackgroundLines className="flex items-center h-full justify-center px-4">
							<h2
								className={`${architectsDaughter.className} text-4xl lg:text-5xl leading-normal text-blue-400 uppercase text-center`}
							>
								Adapt. Innovate. Lead
							</h2>
						</BackgroundLines>
					</div>
					<div data-aos="fade-up">
						<h2
							className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
						>
							Theme: Business Sustenance in the New Normal
						</h2>
						<p className="text-sm leading-8 mt-4">
							In an era marked by rapid change, uncertainty, and
							evolving technologies, staying relevant requires
							more than traditional business knowledge. Our theme,
							“Business Sustenance in the New Normal,” emphasizes
							adaptive strategies, resilience, and innovative
							thinking to help businesses overcome current
							challenges and capitalize on new opportunities.
						</p>
					</div>
				</div>
				<div className="my-8">
					<Separator />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="col-span-2">
						<h2
							className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
							data-aos="fade-up"
						>
							Join us now
						</h2>
						<p
							className="text-sm leading-8 mt-4"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							Prepare yourself to lead, adapt, and thrive in the
							21st century. Sign up for the Business Masterclass
							today and start your journey to sustainable success.
						</p>
					</div>
					<div className="flex items-center justify-start">
						<Button
							className="hover:bg-blue-400 hover:text-white"
							variant={"outline"}
							asChild
							data-aos="fade-up"
							size={"lg"}
						>
							<Link href="/register">
								Register for Business Masterclass
							</Link>
						</Button>
					</div>
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
