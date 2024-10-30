import LearningObjectives from "@/components/LearningObjectives";
import Footer from "@/components/shared/Footer";
import Showcase from "@/components/Showcase";
import Speakers from "@/components/Speakers";
import { Separator } from "@/components/ui/separator";
import Why from "@/components/Why";
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
			</div>
			<Speakers />
			<div className="container">
				<Separator />
			</div>
			<Footer />
		</div>
	);
}
