import { Architects_Daughter } from "next/font/google";
import { WhyCard } from "./WhyCard";
import { whyMasterClass } from "@/constants";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Why = () => {
	return (
		<div className="py-12">
			<div className="container">
				<h2
					className={`${architectsDaughter.className} text-3xl md:text-4xl leading-normal text-blue-400 uppercase text-center`}
				>
					Why Business Masterclass?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
