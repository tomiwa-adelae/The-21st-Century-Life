import { Architects_Daughter } from "next/font/google";
import {ImageLibrary} from "./ImageLibrary";
import { Button } from "./ui/button";
import Link from "next/link";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const GallerySnippet = () => {
	return (
		<div className="py-12">
			<div className="container">
				<h2
					className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase text-center`}
					data-aos="fade-up"
				>
					Masterclass Moments
				</h2>
				<p
					className="text-sm text-center leading-8 mt-4"
					data-aos="fade-up"
				>
					A glimpse into the enriching experiences of our masterclass.
					Witness the passion, learning, sessions—capturing moments of
					inspiration dynamic discussions and powerful networking
					opportunities that define Benvic Business Masterclass.
				</p>

				<div className="my-6">
					<ImageLibrary />
				</div>
				<div className="flex items-center justify-center">
					<Button asChild data-aos="fade-up">
						<Link href="/gallery">See more gallery</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default GallerySnippet;
