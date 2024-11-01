import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VideoLibrary from "@/components/VideoLibrary";
import { Architects_Daughter } from "next/font/google";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our videos | The 21st Century Life",
	description:
		"Watch our curated video library featuring event highlights, speaker sessions, workshops, and testimonials. See what makes Business Masterclass a transformative experience.",
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
			</div>
			<div className="container py-8">
				<h1
					className={`${architectsDaughter.className} text-4xl sm:text-5xl lg:text-6xl uppercase leading-snug md:leading-snug lg:leading-snug text-blue-400`}
					data-aos="fade-up"
				>
					Our videos
				</h1>
				<p
					className="text-sm leading-8 mt-2"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					Dive into our video library to catch highlights, insightful
					sessions, and testimonials from past attendees. Whether
					you’re joining us for the first time or returning, these
					videos will give you a glimpse of the knowledge and
					inspiration that the Business Masterclass offers.
				</p>
				<div className="my-8">
					<Separator />
				</div>
			</div>
			<div className="container">
				<VideoLibrary />
				<div>
					<Separator className="my-8" />
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
					<div className="col-span-2">
						<h2
							className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
							data-aos="fade-up"
						>
							Are you interested?
						</h2>
						<p
							className="text-sm leading-8 mt-4"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							Ready to join the experience? Register for our
							upcoming Business Masterclass and be part of the
							journey!
						</p>
					</div>
					<div className="flex items-center justify-start">
						<Button
							className="hover:bg-blue-400 hover:text-white"
							variant={"outline"}
							asChild
							data-aos="fade-left"
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
