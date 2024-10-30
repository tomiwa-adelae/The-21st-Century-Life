import { Architects_Daughter } from "next/font/google";
import Header from "./shared/Header";
import Countdown from "./Countdown";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
		<main
			className="bg-scroll bg-no-repeat bg-cover bg-center h-[95vh] w-screen flex flex-col justify-between"
			style={{ backgroundImage: `url(/assets/showcase-bg.png)` }}
		>
			<Header />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container text-white pb-8">
				<div className="space-y-3 col-span-2 lg:col-span-2">
					<h4 className="font-semibold text-sm md:text-lg uppercase text-gray-300">
						16th of november, 2024
					</h4>
					<h1
						className={`${architectsDaughter.className} text-4xl sm:text-5xl lg:text-6xl uppercase leading-snug md:leading-snug lg:leading-snug`}
					>
						Business Sustenance in the New Normal
					</h1>
					<p className="text-xs md:text-sm text-gray-200 leading-loose md:leading-loose">
						Dive into the innovations and breakthroughs that define
						our times. See how life in the 21st century is evolving,
						shaping the future of technology, culture, and human
						experiences.
					</p>
				</div>
				<div className="flex items-end w-full">
					<Countdown />
				</div>
			</div>
		</main>
	);
};

export default Showcase;
