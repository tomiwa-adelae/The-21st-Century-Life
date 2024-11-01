import { models, Schema, model } from "mongoose";

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	company?: string;
	jobTitle?: string;
	preferredSession?: string;
}

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	company: {
		type: String,
	},
	jobTitle: {
		type: String,
	},
	preferredSession: {
		type: String,
	},
});

const User = models.User || model("User", UserSchema);

export default User;
