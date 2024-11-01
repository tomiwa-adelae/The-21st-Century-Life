import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { MobileNavbar } from "./MobileNavbar";
import { cn } from "@/lib/utils";

const Header = ({ text = "black" }: { text?: string }) => {
	return (
		<header data-aos="fade-down" className="py-4">
			<div
				className={cn(
					`container flex items-center justify-between gap-4`,
					text === "black" ? "text-black" : "text-white"
				)}
			>
				<Link href="/">
					<AnimatedTooltip color={text} />
				</Link>
				<div className="hidden md:flex items-center justify-center gap-4">
					<nav className="flex gap-4">
						{navLinks.map((link, index) => (
							<Link
								href={link.route}
								className="uppercase text-xs font-semibold hover:text-blue-400 transition-all p-3"
								key={index}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<Button asChild>
						<Link href="/register">Register now</Link>
					</Button>
				</div>
				<MobileNavbar />
			</div>
		</header>
	);
};

export default Header;
