import About from "@/components/About";
import Showcase from "@/components/Showcase";
import { Separator } from "@/components/ui/separator";
import Why from "@/components/Why";
export default function Home() {
	return (
		<div>
			<Showcase />
			<About />
			<div className="container">
				<Separator />
			</div>
			<Why />
		</div>
	);
}
