"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export function MobileNavbar() {
	const pathname = usePathname();
	return (
		<nav className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Menu className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetClose asChild>
							<Link href="/">
								<AnimatedTooltip
									image={"/assets/logo-black.png"}
								/>
							</Link>
						</SheetClose>
					</SheetHeader>
					<div className="grid gap-4 py-8">
						{navLinks.map((link, index) => {
							const isActive =
								pathname === link.route ||
								pathname.startsWith(`${link.route}/`);
							return (
								<SheetClose asChild key={index}>
									<Link
										href={link.route}
										className={`flex items-center justify-start w-full rounded-md p-3 text-xs font-bold transition  ${
											isActive
												? "bg-blue-400 text-white"
												: "bg-transparent"
										} hover:bg-blue-200 dark:hover:bg-blue-300`}
									>
										{link.label}
									</Link>
								</SheetClose>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
