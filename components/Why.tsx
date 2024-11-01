import { Architects_Daughter } from "next/font/google";
import { WhyCard } from "./WhyCard";
import { whyMasterClass } from "@/constants";
import Image from "next/image";
import { Timeline } from "./ui/timeline";
import { Check } from "lucide-react";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Why = () => {
	return (
		<div className="py-12">
			<div className="container">
				<h2
					className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase text-center`}
					data-aos="fade-up"
				>
					Why Business Masterclass?
				</h2>
				<p
					className="text-sm text-center leading-8 mt-4"
					data-aos="fade-up"
				>
					In today's rapidly evolving business landscape,
					sustainability is no longer a nicety, but a necessity. The
					COVID-19 pandemic and technology advances in the last decade
					has accelerated the shift to a new normal, characterized by
					uncertainty, disruption, and opportunity. This Masterclass
					is designed to equip business leaders, entrepreneurs, and
					professionals with the knowledge, skills, and strategies
					required to navigate this new reality and ensure their
					organizations thrive.
				</p>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					{whyMasterClass.map((why, index) => (
						<WhyCard
							key={index}
							title={why.title}
							description={why.description}
							image={why.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Why;
