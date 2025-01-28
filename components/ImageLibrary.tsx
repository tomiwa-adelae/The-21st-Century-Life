"use client";
import React from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import images from "@/constants/images";

export function ImageLibrary({ images }: any) {
	const [open, setOpen] = React.useState(false);
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div>
			<div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image: any, index: number) => (
					<div key={index} onClick={() => handleOpen(index)}>
						<Image
							src={image.src}
							width={1000}
							height={1000}
							alt={`Image ${index + 1}`}
							className="cursor-pointer rounded-lg w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={images}
					index={currentIndex}
				/>
			)}
		</div>
	);
}
