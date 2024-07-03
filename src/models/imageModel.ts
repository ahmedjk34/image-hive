import mongoose from "mongoose";
import User from "./userModel";
import { ImageType } from "@/util/Types";

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_Url: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Image =
  mongoose.models.Image || mongoose.model<ImageType>("Image", imageSchema);
export default Image;
