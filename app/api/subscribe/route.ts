import { NextResponse } from "next/server";
import { users } from "@/lib/mongodb";
import { MongoServerError } from "mongodb";

export async function GET(request: Request) {
	const result = await users.find().sort({ name: 1 }).toArray();
	return NextResponse.json({ users: result });
}

export async function POST(request: Request) {
	const { email } = await request.json();
	if (!email || typeof email !== "string") {
		return NextResponse.json(
			{
				error: "Email missing",
			},
			{ status: 400 },
		);
	}

	try {
		const normalizedEmail = email.trim().toLowerCase();

		await users.insertOne({
			email: normalizedEmail,
			subscribedAt: new Date(),
		});

		return NextResponse.json(
			{ success: true, message: "Email added successfully" },
			{ status: 201 },
		);
	} catch (error) {
		if (error instanceof MongoServerError && error.code === 11000) {
			return NextResponse.json(
				{ success: false, error: "email already exists" },
				{ status: 409 },
			);
		}
		console.error("Error in user insert:", error);
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 },
		);
	}
}
