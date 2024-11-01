import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleError = (error: any) => {
	console.log(error);
	return {
		status: error?.status || 400,
		message:
			error?.message || "Oops! Course does not exist! Try again later.",
	};
};
