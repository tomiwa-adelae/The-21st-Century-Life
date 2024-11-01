"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: string }) => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		// This will only set after the component mounts on the client
		setIsClient(true);
	}, []);
	return (
		<div className="video-wrapper aspect-video rounded-lg">
			{isClient && (
				<ReactPlayer url={url} controls width="100%" height="100%" />
			)}
		</div>
	);
};

export default VideoPlayer;
