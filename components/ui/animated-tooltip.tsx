"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
	image = "/assets/logo.png",
}: {
	image?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig
	);
	// translate the tooltip
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig
	);
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	return (
		<>
			<div
				className="-mr-4  relative group"
				onMouseEnter={() => setHoveredIndex(1)}
				onMouseLeave={() => setHoveredIndex(null)}
			>
				<AnimatePresence mode="popLayout">
					{hoveredIndex === 1 && (
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: "spring",
									stiffness: 260,
									damping: 10,
								},
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								translateX: translateX,
								rotate: rotate,
								whiteSpace: "nowrap",
							}}
							className="absolute -bottom-16 -left-0 translate-x-0 flex text-xs  flex-col items-center justify-center rounded-md bg-blue-400 z-50 shadow-xl px-4 py-4"
						>
							<div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
							<div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
							<div className="font-bold text-white relative z-30 md:text-sm">
								The 21st Century Life
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<Image
					src={image}
					alt={"The 21st Century Life logo"}
					width={170}
					height={170}
				/>
			</div>
		</>
	);
};
