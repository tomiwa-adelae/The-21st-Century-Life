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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { sessions } from "@/constants";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const FormSchema = z.object({
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	company: z.string().optional(),
	jobTitle: z.string().optional(),
	preferredSession: z.string().optional(),
	email: z
		.string()
		.email()
		.min(2, { message: "Email address must be at least 2 characters." }),
	termsAndConditions: z.boolean(),
});

export function RegistrationForm() {
	const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			company: "",
			jobTitle: "",
			preferredSession: "",
			termsAndConditions: false,
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
		<div className="container">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name *</FormLabel>
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
									<FormLabel>Last name *</FormLabel>
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
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email *</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter your email address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
						<FormLabel className={cn(error && "text-destructive")}>
							Phone number *
						</FormLabel>
						<PhoneInput
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							defaultCountry="NG"
							// flagComponent={true}
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-[16px] sm:text-sm  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						/>
						{error && (
							<p className="text-sm font-medium text-destructive mt-2">
								{error}
							</p>
						)}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="company"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Company/Organization</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your company or organization"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="jobTitle"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Job Title/Position</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your job title or position"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="preferredSession"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Preferred session</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a preferred session" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{sessions.map((session, index) => (
											<SelectItem
												key={index}
												value={session.name}
											>
												{session.details}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="termsAndConditions"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center space-x-3 space-y-0">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel>
									I agree to the terms & conditions
								</FormLabel>
							</FormItem>
						)}
					/>
					<Button
						onClick={() => {
							if (!phoneNumber)
								setError("Phone number must be included.");
						}}
						type="submit"
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
