"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReactPlayer from "react-player";

const FormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	email: z
		.string()
		.email()
		.min(2, { message: "Email address must be at least 2 characters." }),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export function ContactForm() {
	const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
	});

	const handlePhoneNumberChange = (value: string | undefined) => {
		// Set the phone number, converting undefined to an empty string if necessary
		setPhoneNumber(value ?? "");
	};

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

	return (
		<div className="mt-4" data-aos="fade-left" data-aos-duration="3000">
			{/* <Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4 text-black"
				>
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									First name
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your first name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									Last name
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your last name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									Email
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your email"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<FormLabel className="text-white">
							Phone number
						</FormLabel>
						<PhoneInput
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							defaultCountry="NG"
							// flagComponent={true}
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-[16px] sm:text-sm  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-black"
						/>
						{error && (
							<p className="text-sm font-medium text-destructive mt-2">
								{error}
							</p>
						)}
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">
									Message
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="What do you want to talk about? Let us know"
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						onClick={() => {
							if (!phoneNumber)
								setError("Phone number must be included.");
						}}
						variant={"white"}
						type="submit"
					>
						Submit
					</Button>
				</form>
			</Form> */}
		</div>
	);
}
