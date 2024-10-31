import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
	return (
		<div className="py-8">
			<div className="container">
				<div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-8 md:gap-4 pb-8">
					<h3 className="font-semibold text-sm">
						Metropolitan Club, 15 Kofo Abayomi St. Victoria Island,
						Lagos
					</h3>
					<div className="flex md:flex-col items-center justify-center gap-2 font-semibold text-sm">
						<h3 className="uppercase">Contact us</h3>
						<a
							href={`mailto:info@the21stcenturylife`}
							className="text-blue-400"
						>
							info@the21stcenturylife
						</a>
					</div>
					<div>
						<div className="flex gap-8 justify-end">
							<a href="">
								<Facebook className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
							</a>
							<a href="">
								<Twitter className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
							</a>
							<a href="">
								<Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
							</a>
							<a href="">
								<Youtube className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-400" />
							</a>
						</div>
					</div>
				</div>
				<Separator />
				<div>
					<p className="text-sm text-center md:text-left pt-8">
						&copy; 2024 The 21st Century Life. All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
