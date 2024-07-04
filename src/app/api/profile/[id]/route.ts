import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const user = await User.findById(params.id).populate("images");
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse(`Error Fetching the User: ${error}`, {
      status: 400,
    });
  }
}
