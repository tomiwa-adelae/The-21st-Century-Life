import { RegistrationForm } from "@/components/RegistrationForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";
import { Architects_Daughter } from "next/font/google";

import type { Metadata } from "next";
import { AOSProvider } from "@/components/shared/AOSProvider";

export const metadata: Metadata = {
	title: "Register | The 21st Century Life",
	description:
		"Reserve your place in our Business Masterclass event. Choose between virtual and in-person attendance to gain actionable business insights and connect with professionals.",
};

const architectsDaughter = Architects_Daughter({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div>
			<AOSProvider />
			<Header />
			<div className="container">
				<Separator />
			</div>
			<div className="container py-8">
				<h1
					className={`${architectsDaughter.className} text-3xl sm:text-4xl lg:text-5xl uppercase leading-snug md:leading-snug lg:leading-snug text-blue-400`}
					data-aos="fade-up"
				>
					Join the Business Masterclass
				</h1>
				<p
					className="text-sm leading-8 mt-2"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					Secure your spot for the upcoming masterclass designed for
					entrepreneurs, business owners, and professionals ready to
					thrive in today’s business landscape.
				</p>
			</div>
			<div className="container mb-8">
				<Separator />
			</div>
			<RegistrationForm />
			<div className="container mt-8">
				<Separator />
			</div>
			<Footer />
		</div>
	);
};

export default page;
