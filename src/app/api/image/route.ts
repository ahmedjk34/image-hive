import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Image from "@/models/imageModel";
import connectDB from "@/lib/connectDB";
import User from "@/models/userModel";

//uploads an image
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
    const newImage = await Image.create({
      title: params.get("title"),
      description: params.get("description"),
      uploadDate: uploadDate,
      image_Url: uploadedImage.data.data.url,
      uploader: params.get("uploader"),
    });
    await User.findByIdAndUpdate(params.get("uploader"), {
      $push: { images: newImage._id },
    });
    return new NextResponse("Success", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(`$Error Uploading the Image ${error}`, {
      status: 400,
    });
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectDB();
    const images = await Image.find({});
    return NextResponse.json(images);
  } catch (error) {
    console.log(error);
    return new NextResponse(`$Error Fetching the Images ${error}`, {
      status: 400,
    });
  }
}
