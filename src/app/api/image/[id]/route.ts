import connectDB from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import Image from "@/models/imageModel";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const id = params.id;
    const images = await Image.findById(id).populate("uploader");
    return NextResponse.json(images);
  } catch (error) {
    console.log(error);
    return new NextResponse(`$Error Fetching the Image ${error}`, {
      status: 400,
    });
  }
}
