import Image from "next/image";
import { Architects_Daughter } from "next/font/google";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/shared/Header";
import { Check, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Accomplishments from "@/components/Accomplishments";
import Footer from "@/components/shared/Footer";
import Register from "@/components/Register";

export const metadata: Metadata = {
	title: "Prince Adedapo | The 21st Century Life",
	description:
		"Discover the mission and vision behind Business Masterclass. We’re dedicated to providing quality education and mentorship for business professionals at every level.",
};

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
				<div className="container py-8">
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
									education, entrepreneurship, and leadership.
									His journey commenced at Ladi-lak Institute
									in Yaba for primary education, followed by
									the prestigious CMS Grammar School, Lagos,
									where he completed his O levels. He pursued
									his A levels at the School of Arts and
									Science in Ikare, Ondo State, culminating in
									his academic foundation.
								</p>
								<p>
									In 1987, Prince Adelegan graduated from the
									University of Ilorin with a BA Hons in
									English Language, marking the inception of
									his academic prowess. His quest for
									knowledge led him to the Owner Manager
									Program at the Lagos Business School in
									2002, followed by the Chief Executive
									Program in 2012, shaping him into a dynamic
									leader with a global perspective. Prince
									Adelegan has augmented his executive acumen
									through management training across South
									Africa, Spain, the United Kingdom, and the
									United States.
								</p>
								<p>
									Renowned as a consummate Marketer and PR
									Consultant, Prince Adelegan's vision extends
									beyond business to encompass a profound
									impact on society. His journey into
									entrepreneurship commenced with the
									groundbreaking Lekki Sunsplash in 1988,
									which revolutionized Nigeria's musical
									landscape, heralding an era of talent
									exploration and cultural celebration.
								</p>
								<p>
									In subsequent years, Prince Adelegan
									spearheaded initiatives such as the
									Made-In-Nigeria Exhibition in the UK and
									South Africa, showcasing Nigeria's rich
									cultural heritage and fostering
									international trade relations. In 2002, his
									innovative spirit birthed the Introduction
									of Electronic Outdoor Advertising in
									Nigeria, amplifying the nation's presence in
									the global marketing arena.
								</p>
								<p>
									Acknowledged as one of Nigeria's top 50
									marketing experts, Prince Adelegan's
									contributions transcend accolades. He
									champions the 'Made-In-Nigeria' narrative
									and imparts leadership and entrepreneurship
									training to Nigerian youths through his
									"Life in the 21st Century" lecture series.
								</p>
								<p>
									At the helm of Celtron Group as Group
									Managing Director, Prince Adelegan has
									steered the company to its 25th year of
									excellence, cementing its status as a leader
									in the PR/Marketing industry.
								</p>
								<p>
									Prince Adelegan's distinguished career is
									marked by a plethora of accolades, including
									consecutive PMAN Music Promoter of the Year
									awards and the esteemed 2007 Success Digest
									Nigeria Entrepreneur of the Year title. As a
									Fellow of both the Nigerian Institute of
									Direct Marketing and the Institute of
									Directors, he embodies excellence in his
									field. Holding the prestigious position of
									President of the Abuja Business Club, he
									extends his leadership further as Chairman
									of the board for notable entities such as
									Dreamworks Integrated Systems Limited,
									Dradrock Real Estate Limited, Creative Zone
									Advertising Limited, and Maxx Connections
									Limited. Additionally, as President and CEO
									of PR Africa, and Chairman of Celtron Group,
									he commands influence in the realms of
									public relations and corporate leadership.
									His commitment to community and sport is
									evident in his roles as Chairman of the Ondo
									State Lawn Tennis Association and he is the
									14th President & Chairman of Council,
									Nigeria British Chamber of Commerce,
									reflecting his dedication to driving
									progress across diverse spheres of
									influence.
								</p>
								<p>
									Beyond his professional endeavors, Prince
									Adelegan finds fulfillment in his family
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
				</div>
				<div className="mb-8">
					<Separator />
				</div>
				<div>
					<h2
						className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase text-center`}
					>
						Areas of Expertise
					</h2>
					<div className="grid text-xs md:text-sm gap-4 py-4">
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Strategic Marketing and Branding
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Real Estate Development
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							International Business Relations
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Entrepreneurship and Startup Development
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Music and Media Promotion
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Business Chamber Leadership
						</p>
					</div>
				</div>
				<div className="mb-8">
					<Separator />
				</div>
				<Accomplishments />
				<div className="mb-8">
					<Separator />
				</div>
				<div>
					<h2
						className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase text-center`}
					>
						Connect on social media
					</h2>
					<div className="flex gap-8 justify-center items-center mt-8">
						<a href="">
							<Facebook className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
						</a>
						<a href="">
							<Twitter className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
						</a>
						<a href="">
							<Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
						</a>
						<a href="">
							<Instagram className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
						</a>
					</div>
				</div>
			</div>
			<div className="container mt-8">
				<Separator />
				<Register />
				<Separator />
			</div>
			<Footer />
		</div>
	);
};

export default page;
