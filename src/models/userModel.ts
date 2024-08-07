import mongoose from "mongoose";
import { UserType } from "../util/Types";
import Image from "./imageModel";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
    default:
      "https://st2.depositphotos.com/5682790/10456/v/450/depositphotos_104564156-stock-illustration-male-user-icon.jpg",
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
      default: [],
      required: true,
    },
  ],
});

const User =
  mongoose.models.User || mongoose.model<UserType>("User", userSchema);

export default User;
