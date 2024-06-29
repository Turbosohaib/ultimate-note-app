// app/api/notesApi/route.js
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
      createdAt: Math.floor(date / 1000),
      modifiedAt: Math.floor(date / 1000),
    };

    const noteCreated = await collection.insertOne(note);

    const allNotes = await collection.find({}).toArray();

    return NextResponse.json(
      { data: allNotes, insertedNote: noteCreated },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Error creating note" }, { status: 500 });
  }
}
