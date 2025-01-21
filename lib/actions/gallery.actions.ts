"use server";

import cloudinary from "@/middleware/cloudinary";
import { handleError } from "../utils";

export const getImages = async () => {
	try {
		// Ensure `cloudinary.v2.api.resources` is called correctly
		const cloud = await cloudinary.v2.api.resources({
			type: "upload",
			prefix: "The 21st Century Life",
		});
		return cloud; // Return the response if needed
	} catch (error: any) {
		handleError(error);
	}
};
