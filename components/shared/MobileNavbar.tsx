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
		<nav className="lg:hidden">
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
										className={`flex items-center justify-start w-full rounded-md px-3 py-2 text-xs font-bold transition  ${
											isActive
												? "text-blue-400"
												: "bg-transparent"
										} hover:text-gray-700`}
									>
										{link.label}
									</Link>
								</SheetClose>
							);
						})}
						<SheetClose>
							<Button className="w-full" asChild>
								<Link href="/register">Register now</Link>
							</Button>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
