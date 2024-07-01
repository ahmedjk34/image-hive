import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectDB();
    console.log(request);
    const { username, password } = await request.json();
    const query = {
      ["username"]: username,
      ["password"]: password,
    };
    console.log(username, password);
    const user = await User.find(query);
    return user.length != 0
      ? NextResponse.json(user[0])
      : NextResponse.json(null);
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 404 });
  }
}
