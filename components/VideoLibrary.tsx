import React from "react";
import VideoPlayer from "./VideoPlayer";
import { videoLists } from "@/constants";

const VideoLibrary = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{videoLists.map((video, index) => (
				<div
					key={index}
					data-aos="fade-up"
					data-aos-duration={1000 * (1 + index)}
				>
					<VideoPlayer url={video} />
				</div>
			))}
		</div>
	);
};

export default VideoLibrary;
