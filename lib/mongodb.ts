import { MongoClient, ObjectId } from "mongodb";

export type User = {
	name: string;
	email: string;
};

const client = new MongoClient(process.env.MONGODB_URI!);

const db = client.db();

export const users = db.collection("users");

console.log(users.find())
