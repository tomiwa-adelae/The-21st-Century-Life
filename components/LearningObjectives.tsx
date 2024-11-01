"use client";
import { Timeline } from "./ui/timeline";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { address } from "@/constants";

const LearningObjectives = async () => {
	const copyTextToClipboard = async ({ text }: { text: any }) => {
		try {
			await navigator.clipboard.writeText(text);
			return toast({
				title: `Account number copied to clipboard!`,
			});
		} catch (err) {
			return toast({
				title: "Failed to copy text!",
				variant: "destructive",
			});
		}
	};

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
			title: "Event details",
			content: (
				<div className="grid text-xs md:text-sm gap-4">
					<div>
						<Check className="w-4 h-4 inline mr-2" />
						<span className="font-semibold">
							{" "}
							Date & Location:
						</span>{" "}
						<ul className="grid gap-4 mt-4 ml-12">
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Date:
								</span>{" "}
								16th November, 2024{" "}
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Location:
								</span>{" "}
								{address}
							</li>
						</ul>
					</div>
					<div>
						<Check className="w-4 h-4 inline mr-2" />
						<span className="font-semibold">
							{" "}
							Session timings:
						</span>{" "}
						<ul className="grid gap-4 mt-4 ml-12">
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Duration:
								</span>{" "}
								2 hours per session
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Morning session:
								</span>{" "}
								10AM - 1PM
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Evening session:
								</span>{" "}
								3PM - 7PM
							</li>
						</ul>
					</div>
					<div>
						<Check className="w-4 h-4 inline mr-2" />
						<span className="font-semibold">
							{" "}
							Investment Fee:
						</span>{" "}
						<ul className="grid gap-4 mt-4 ml-12">
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Physical attendance cost:
								</span>{" "}
								&#8358;100,000
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Virtual attendance cost:
								</span>{" "}
								&#8358;60,000
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Bank name:
								</span>{" "}
								Providus Bank
							</li>
							<li>
								<Check className="w-4 h-4 inline mr-2" />
								<span className="font-semibold">
									Account number:
								</span>{" "}
								0500157752
								<Copy
									onClick={() =>
										copyTextToClipboard({
											text: "0500157752",
										})
									}
									className="w-4 h-4 ml-2 text-green-500 cursor-pointer inline"
								/>
							</li>
						</ul>
					</div>
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
