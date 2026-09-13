"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "duplicate" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			// MongoDB
			const dbResponse = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email.trim(),
				}),
			});

			const dbResult = await dbResponse.json();

			if (dbResponse.status === 409) {
				setStatus("duplicate");
				return;
			}

			if (!dbResponse.ok) {
				console.error("MongoDB error:", dbResult);
				setStatus("error");
				return;
			}

			// web3form
			const web3formResponse = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: "4a48eaa6-8b39-44df-8a04-b6dfb9463eed",
					email,
					message: `${email} has subscribed to the newsletter.`,
				}),
			});

			const web3formResult = await web3formResponse.json();

			if (!web3formResult.success) {
				console.error(web3formResult);
				setStatus("error");
				return;
			}

			setStatus("success");
			setEmail("");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};

	return (
		<section className="border-t border-neutral-200 bg-white px-6 py-16 sm:py-24">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
					Get the latest inspiration
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
					Subscribe to our newsletter and receive the best high-resolution
					photos directly in your inbox.
				</p>

				<form
					onSubmit={handleSubmit}
					className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
				>
					<div className="relative flex-1">
						<Mail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email address"
							className="w-full rounded-md border border-neutral-300 bg-white py-3 pl-11 pr-4 text-neutral-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
							disabled={status === "loading" || status === "success"}
						/>
					</div>
					<button
						type="submit"
						disabled={status === "loading" || status === "success"}
						className="flex items-center justify-center rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-neutral-800 disabled:bg-neutral-400"
					>
						{status === "loading"
							? "Submitting..."
							: status === "success"
								? "Subscribed!"
								: "Subscribe"}
					</button>
				</form>

				{status === "success" && (
					<p className="mt-3 text-sm text-green-600">Thanks for subscribing!</p>
				)}

				{status === "duplicate" && (
					<p className="mt-3 text-sm text-orange-600">
						This email is already subscribed.
					</p>
				)}

				{status === "error" && (
					<p className="mt-3 text-sm text-red-600">
						Something went wrong. Please try again later.
					</p>
				)}
			</div>
		</section>
	);
}
