import { Architects_Daughter } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Speakers = () => {
	return (
		<div className="bg-white py-12">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<Image
					src={"/assets/dapo-adelegan.jpg"}
					alt="Prince Dapo Adelegan"
					width={1000}
					height={1000}
					className="aspect-square object-cover rounded-md"
				/>
				<div>
					<h2
						className={`${architectsDaughter.className} text-3xl md:text-4xl leading-normal text-blue-400 uppercase`}
					>
						Our speaker
					</h2>
					<div className="text-sm space-y-3 leading-8 mt-4">
						<p>
							Born in Lagos on April 20, 1962,{" "}
							<span className="text-blue-400 font-semibold">
								Prince Adedapo Oluwaseyi Adelegan
							</span>
							, known as Dapo, embodies a rich tapestry of
							education, entrepreneurship, and leadership. His
							journey commenced at Ladi-lak Institute in Yaba for
							primary education, followed by the prestigious CMS
							Grammar School, Lagos, where he completed his O
							levels. He pursued his A levels at the School of
							Arts and Science in Ikare, Ondo State, culminating
							in his academic foundation.
						</p>
						<p>
							In 1987, Prince Adelegan graduated from the
							University of Ilorin with a BA Hons in English
							Language, marking the inception of his academic
							prowess. His quest for knowledge led him to the
							Owner Manager Program at the Lagos Business School
							in 2002, followed by the Chief Executive Program in
							2012, shaping him into a dynamic leader with a
							global perspective. Prince Adelegan has augmented
							his executive acumen through management training
							across South Africa, Spain, the United Kingdom, and
							the United States.
						</p>
					</div>
					<Button
						variant={"outline"}
						className="mt-6 hover:bg-blue-400 hover:text-white"
						asChild
					>
						<Link href="/">Learn more about Adedapo</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Speakers;
