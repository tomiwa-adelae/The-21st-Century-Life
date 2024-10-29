"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function WhyCard({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) {
	return (
		<div className="w-full md:max-w-sm group/card">
			<div
				className={cn(
					" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full md:max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
					"bg-cover"
				)}
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-30"></div>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
				<div className="text content">
					<h1 className="font-semibold text-xl text-gray-50 relative z-10">
						{title}
					</h1>
					<p className="font-normal text-xs text-gray-100 relative z-10 my-2 leading-normal">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
