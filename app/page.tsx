import LearningObjectives from "@/components/LearningObjectives";
import Register from "@/components/Register";
import Footer from "@/components/shared/Footer";
import Showcase from "@/components/Showcase";
import Speakers from "@/components/Speakers";
import { Separator } from "@/components/ui/separator";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Showcase />
			<Why />
			<div className="container">
				<Separator />
			</div>
			<LearningObjectives />
			<div className="container">
				<Separator />
				<Speakers />
				<Separator />
			</div>
			<div className="w-screen">
				<Image
					src={"/assets/register-bg.svg"}
					alt={"Banner"}
					width={1000}
					height={1000}
					className="w-full h-auto"
				/>
			</div>
			<div className="container">
				<Register />
				<Separator />
			</div>
			<Footer />
		</div>
	);
}
