import { MapPinned, MessagesSquare, Phone } from "lucide-react";

export const navLinks = [
	{
		route: "/",
		label: "Home",
	},
	{
		route: "/about",
		label: "About",
	},
	{
		route: "/contact",
		label: "Contact",
	},
	{
		route: "/videos",
		label: "Our videos",
	},
];

export const whyMasterClass = [
	{
		title: "Stay Ahead of the Curve",
		description:
			'Gain cutting-edge insights into the rapidly changing business landscape and understand how the "new normal" impacts your industry. Equip yourself with actionable strategies to turn uncertainty into opportunity and foster sustainable growth.',
		image: "/assets/city.jpg",
	},
	{
		title: "Build Resilient Organizations",
		description:
			"Learn proven techniques to enhance organizational resilience, adaptability, and stability. This masterclass emphasizes practical skills to navigate disruptions with confidence, preparing you to lead your team through challenges and change.",
		image: "/assets/resilience.jpg",
	},
	{
		title: "Drive Innovation and Collaboration",
		description:
			"Discover how to instill a culture of innovation, agility, and collaboration that empowers your organization to thrive. You’ll uncover ways to harness emerging trends and embrace new approaches that will keep you competitive.",
		image: "/assets/workplace.jpg",
	},
];

export const sessions = [
	{
		name: "Both session",
		details: "Both session (10AM - 7PM)",
	},
	{
		name: "Morning session",
		details: "Morning Session (10AM - 1PM)",
	},
	{
		name: "Evening session",
		details: "Evening Session (3PM - 7PM)",
	},
];

export const address =
	"Metropolitan Club, 15 Kofo Abayomi St. Victoria Island, Lagos";

export const emailAddress = "info@the21stcenturylife";
export const phoneNumber = "+234 081 234 5678";

export const contactDetails = [
	{
		icon: MessagesSquare,
		title: "Chat to us",
		description: "Our friendly team is here to help.",
		cta: "info@the21stcenturylife.com",
	},
	{
		icon: MapPinned,
		title: "Visit us",
		description: "Come say hello at out office.",
		cta: address,
	},
	{
		icon: Phone,
		title: "Call us",
		description: "Mon-Fri from 8am to 5pm",
		cta: phoneNumber,
	},
];
