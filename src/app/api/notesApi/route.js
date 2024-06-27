import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  return NextResponse.json({ msg: "Hello World" });
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("ultimate-app");
    const collection = db.collection("notes");

    const date = new Date().getTime();

    const note = {
      title: "",
      content: "",
      createdAt: date / 1000,
      modifiedAt: date / 1000,
    };

    await collection.insertOne(note);

    return NextResponse.json({ date: date }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Error creating note" }, { status: 500 });
  }
}
