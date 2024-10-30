import React from "react";
import { Timeline } from "./ui/timeline";
import Image from "next/image";
import { Check } from "lucide-react";

const LearningObjectives = () => {
	const data = [
		{
			title: "Learning Objectives:",
			content: (
				<div className="grid text-xs md:text-sm gap-4">
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Develop a deep understanding of the new normal and its
						implications for business
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Identify opportunities for growth, innovation, and
						disruption
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Build resilience and adaptability in your organization
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						Foster a culture of innovation, agility, and
						collaboration
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" />
						⁠Develop strategies for sustainable finance, talent
						management, and customer centricity
					</p>
				</div>
			),
		},
		{
			title: "Who Should Attend?",
			content: (
				<div>
					<div className="grid text-xs md:text-sm gap-4">
						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Business Owners and Entrepreneurs
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							⁠CEOs, MDs, and Senior Executives
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							⁠⁠Managers and Leaders
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" />
							Entrepreneurs-in-Residence
						</p>

						<p>
							{" "}
							<Check className="w-4 h-4 inline mr-2" />
							⁠Innovation and Strategy Teams
						</p>

						<p>
							<Check className="w-4 h-4 inline mr-2" /> Business
							Consultants and Coaches
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Duration?",
			content: (
				<div className="text-xs md:text-sm">
					<p>
						<Check className="w-4 h-4 inline mr-2" /> 2 hours per
						session
					</p>
				</div>
			),
		},
		{
			title: "Format?",
			content: (
				<div className="grid text-xs md:text-sm gap-4">
					<p>
						<Check className="w-4 h-4 inline mr-2" /> In person
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" /> Virtually
					</p>
					<p>
						<Check className="w-4 h-4 inline mr-2" /> Interactive
					</p>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
};

export default LearningObjectives;
