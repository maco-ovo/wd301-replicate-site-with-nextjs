import { NextResponse } from "next/server";
import { users } from "@/lib/mongodb";
import { MongoServerError } from "mongodb";

export async function GET(request: Request) {
	const result = await users.find().sort({ name: 1 }).toArray();
	return NextResponse.json({ users: result });
}

export async function POST(request: Request) {
	const body = await request.json();
	if (!body.name || !body.email) {
		return NextResponse.json({
			error: "Name or email missing",
			status: 400,
		});
	}

	try {
		const result = await users.insertOne(body);
		return NextResponse.json({
			user: { _id: result.insertedId, ...body },
		});
	} catch (error) {
		if (error instanceof MongoServerError && error.code === 11000) {
			return NextResponse.json({
				error: "email already exists",
			});
		}
		throw new Error("Error in user insert " + error);
	}
}
