import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
	{
		asset: "/assets/images/1.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/2.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/3.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/4.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/5.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/6.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/7.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/8.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/9.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
	{
		asset: "/assets/images/10.jpg",
		width: 1080,
		height: 780,
		alt: "Hiking boots",
	},
].map(
	({ asset, alt, width, height }) =>
		({
			src: asset,
			alt,
			width,
			height,
			srcSet: breakpoints.map((breakpoint) => ({
				src: asset,
				width: breakpoint,
				height: Math.round((height / width) * breakpoint),
			})),
		} as Photo)
);

export default photos;
