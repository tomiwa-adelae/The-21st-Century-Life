import React from "react";

const CountdownBox = ({ title, count }: { title: string; count: string }) => {
	return (
		<div className="flex items-center justify-center flex-col-reverse lg:flex-col gap-2">
			<h5 className="uppercase font-medium text-gray-300 text-xs">
				{title}
			</h5>
			<h1 className="text-xl md:text-2xl font-extrabold hover:text-blue-400 transition ease-in-out cursor-pointer">
				{count}
			</h1>
		</div>
	);
};

export default CountdownBox;
