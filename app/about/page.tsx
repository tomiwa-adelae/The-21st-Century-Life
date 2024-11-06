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
import { AOSProvider } from "@/components/shared/AOSProvider";

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
			<AOSProvider />
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
				<div className="my-8" id="faculty">
					<Separator />
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					id="faculty"
				>
					<div className="order-last md:order-first">
						<h2
							className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
							data-aos="fade-up"
						>
							Meet the Faculty
						</h2>
						<h3
							className={`text-lg font-semibold leading-normal text-blue-400 uppercase mt-4`}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							Prince Dapo Adelegan, F.CIOD
						</h3>
						<div
							className="text-sm space-y-3 leading-8 mt-4"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<p>
								Born in Lagos on April 20, 1962,{" "}
								<span className="text-blue-400 font-semibold">
									Prince Adedapo Oluwaseyi Adelegan
								</span>
								, known as Dapo, embodies a rich tapestry of
								education, entrepreneurship, and leadership. His
								journey commenced at Ladi-lak Institute in Yaba
								for primary education, followed by the
								prestigious CMS Grammar School, Lagos, where he
								completed his O levels. He pursued his A levels
								at the School of Arts and Science in Ikare, Ondo
								State, culminating in his academic foundation.
							</p>
							<p>
								In 1987, Prince Adelegan graduated from the
								University of Ilorin with a BA Hons in English
								Language, marking the inception of his academic
								prowess. His quest for knowledge led him to the
								Owner Manager Program at the Lagos Business
								School in 2002, followed by the Chief Executive
								Program in 2012, shaping him into a dynamic
								leader with a global perspective. Prince
								Adelegan has augmented his executive acumen
								through management training across South Africa,
								Spain, the United Kingdom, and the United
								States.
							</p>
							<p>
								Renowned as a consummate Marketer and PR
								Consultant, Prince Adelegan's vision extends
								beyond business to encompass a profound impact
								on society. His journey into entrepreneurship
								commenced with the groundbreaking Lekki
								Sunsplash in 1988, which revolutionized
								Nigeria's musical landscape, heralding an era of
								talent exploration and cultural celebration. In
								subsequent years, Prince Adelegan spearheaded
								initiatives such as the Made-In-Nigeria
								Exhibition in the UK and South Africa,
								showcasing Nigeria's rich cultural heritage and
								fostering international trade relations. In
								2002, his innovative spirit birthed the
								Introduction of Electronic Outdoor Advertising
								in Nigeria, amplifying the nation's presence in
								the global marketing arena.
							</p>
							<p>
								Acknowledged as one of Nigeria's top 50
								marketing experts, Prince Adelegan's
								contributions transcend accolades. He champions
								the 'Made-In-Nigeria' narrative and imparts
								leadership and entrepreneurship training to
								Nigerian youths through his "Life in the 21st
								Century" lecture series. At the helm of Celtron
								Group as Group Managing Director, Prince
								Adelegan has steered the company to its 25th
								year of excellence, cementing its status as a
								leader in the PR/Marketing industry.
							</p>
							<p>
								Prince Adelegan's distinguished career is marked
								by a plethora of accolades, including
								consecutive PMAN Music Promoter of the Year
								awards and the esteemed 2007 Success Digest
								Nigeria Entrepreneur of the Year title. As a
								Fellow of both the Nigerian Institute of Direct
								Marketing and the Institute of Directors, he
								embodies excellence in his field. Holding the
								prestigious position of President of the Abuja
								Business Club, he extends his leadership further
								as Chairman of the board for notable entities
								such as Dreamworks Integrated Systems Limited,
								Dradrock Real Estate Limited, Creative Zone
								Advertising Limited, and Maxx Connections
								Limited. Additionally, as President and CEO of
								PR Africa, and Chairman of Celtron Group, he
								commands influence in the realms of public
								relations and corporate leadership. His
								commitment to community and sport is evident in
								his roles as Chairman of the Ondo State Lawn
								Tennis Association and he is the 14th President
								& Chairman of Council, Nigeria British Chamber
								of Commerce, reflecting his dedication to
								driving progress across diverse spheres of
								influence. Beyond his professional endeavors,
								Prince Adelegan finds fulfillment in his family
								life, and is married with children.
							</p>
						</div>
					</div>
					<div className="transition hover:translate-y-2">
						<Image
							src={"/assets/dapo-adelegan.jpg"}
							alt="Prince Dapo Adelegan"
							width={1000}
							height={1000}
							className="aspect-square object-cover rounded-md"
							data-aos="fade-up"
						/>
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
