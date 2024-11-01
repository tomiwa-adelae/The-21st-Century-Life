import { Architects_Daughter } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const Register = () => {
	return (
		<div className="py-12">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="col-span-2">
						<h3
							className={`${architectsDaughter.className} text-2xl md:text-3xl leading-normal text-blue-400 uppercase`}
							data-aos="fade-up"
						>
							Stay ahead of the curve!
						</h3>
						<p
							className="text-sm text-gray-700  leading-8 mt-4"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							Sign up now to secure your spot at the upcoming
							Business Masterclass. Pre-registering ensures you’ll
							receive early access to event updates, exclusive
							materials, and priority registration when seats
							open.
						</p>
					</div>
					<div className="flex items-center justify-start">
						<Button
							className="hover:bg-blue-400 hover:text-white"
							variant={"outline"}
							asChild
							data-aos="fade-left"
						>
							<Link href="/register">
								Pre-register for Business Masterclass
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
