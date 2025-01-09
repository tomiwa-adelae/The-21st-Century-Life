"use client";

import { useEffect, useState } from "react";
import CountdownBox from "./CountdownBox";
import { Button } from "./ui/button";
import Link from "next/link";

const Countdown = () => {
	const targetDate = new Date("2025-11-23T00:00:00");

	const calculateTimeLeft = () => {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			return null;
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor(
			(difference % (1000 * 60 * 60)) / (1000 * 60)
		);
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	};

	const [timeLeft, setTimeLeft] = useState<{
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	} | null>(null);

	useEffect(() => {
		// Calculate the initial time left
		setTimeLeft(calculateTimeLeft());

		// Update the countdown every second
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer); // Clear the interval on component unmount
	}, []);
	if (timeLeft)
		return (
			<div className="w-full">
				<div className="flex items-center w-full justify-between gap-2">
					<CountdownBox
						title={"days"}
						count={timeLeft.days.toString().padStart(2, "0")}
					/>
					<h3 className="font-semibold text-2xl">:</h3>
					<CountdownBox
						title={"hours"}
						count={timeLeft.hours.toString().padStart(2, "0")}
					/>
					<h3 className="font-semibold text-2xl">:</h3>
					<CountdownBox
						title={"minutes"}
						count={timeLeft.minutes.toString().padStart(2, "0")}
					/>
					<h3 className="font-semibold text-2xl">:</h3>
					<CountdownBox
						title={"seconds"}
						count={timeLeft.seconds.toString().padStart(2, "0")}
					/>
				</div>
				<Button asChild className="w-full mt-4">
					<Link href="/register">Register now</Link>
				</Button>
			</div>
		);
};

export default Countdown;
