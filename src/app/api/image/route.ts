import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import Image from "@/models/imageModel";
import connectDB from "@/lib/connectDB";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.formData();
    const params = await request.nextUrl.searchParams;
    const uploadedImage = await axios.post(
      `https://api.imgbb.com/1/upload`,
      data,
      {
        params: {
          key: process.env.IMAGEBB_API_KEY,
          name: params.get("title"),
        },
      }
    );
    if (uploadedImage.status != 200)
      throw new Error("Error while uploading the image to the API");
    const uploadDate = new Date(
      1000 * uploadedImage.data.data.time
    ).toLocaleDateString();

    await connectDB();
    await Image.create({
      title: params.get("title"),
      description: params.get("description"),
      uploadDate: uploadDate,
      image_Url: uploadedImage.data.data.url,
      uploader: params.get("uploader"),
    });
    return new NextResponse("Success", {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new NextResponse(`$Error Uploading the Image ${e}`, {
      status: 400,
    });
  }
}
