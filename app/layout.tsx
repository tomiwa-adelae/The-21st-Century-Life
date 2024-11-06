import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "The 21st Century Life",
	description:
		"Business sustenance in the new normal and it is for entrepreneurs, digital-prenuers, business owners and senior management executives. We have Prince Dapo Adelegan, F.CIOD as our faculty.",
	openGraph: {
		images: "/assets/logo.png",
	},
	metadataBase: new URL("https://the21stcenturylife.com"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/logo.png" />
				<meta property="og:image" content="/assets/logo.png" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body
				className={`${montserrat.className} antialiased overflow-x-hidden`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
