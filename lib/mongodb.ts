import { MongoClient } from "mongodb";

export type User = {
	email: string;
};

const client = new MongoClient(process.env.MONGODB_URI!);

const db = client.db();

export const users = db.collection("email");

