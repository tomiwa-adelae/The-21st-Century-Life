import { Check } from "lucide-react";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Architects_Daughter } from "next/font/google";
const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Accomplishments = () => {
	const data = [
		{
			title: "Founder",
			content: (
				<div className="grid text-xs md:text-sm gap-4">
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Lekki Sunsplash, an iconic entertainment festival
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Made-In-Nigeria Exhibition, promoting Nigerian products
						abroad
					</p>
				</div>
			),
		},
		{
			title: "Leadership roles:",
			content: (
				<div>
					<div className="grid text-xs md:text-sm gap-4">
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							President of the Abuja Business Club
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Chairman, Dreamworks Integrated Systems Limited
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Chairman, Dradrock Real Estate Limited
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							President & CEO of PR Africa
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Chairman, Celtron Group
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Professional Affiliations:",
			content: (
				<div>
					<div className="grid text-xs md:text-sm gap-4">
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Fellow of the Nigerian Institute of Direct Marketing
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Fellow of the Nigerian Institute of Directors
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Chairman of the Ondo State Lawn Tennis Association
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Awards and Honors:",
			content: (
				<div>
					<div className="grid text-xs md:text-sm gap-4">
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							2007 Success Digest Nigeria Entrepreneur of the Year{" "}
						</p>
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Consecutive PMAN Music Promoter of the Year awards
						</p>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<div className="pt-4">
				<h2
					className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase text-center mb-4`}
				>
					Accomplishments & Positions
				</h2>
				<p className="text-neutral-700 text-sm leading-8 text-center">
					Prince Adedapo Adelegan is a trailblazing entrepreneur and
					leader, known for his transformative contributions to
					Nigerian business and his efforts to elevate local
					enterprises on the global stage. With a diverse portfolio
					spanning marketing, real estate, and media, Prince
					Adelegan’s impactful work has created new opportunities for
					Nigerian entrepreneurs and driven growth across multiple
					industries. Here’s a look at some of his most notable
					accomplishments.
				</p>
			</div>

			<Timeline data={data} />
		</div>
	);
};

export default Accomplishments;
