import mongoose from "mongoose";
import { UserType } from "../util/Types";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  images: {
    type: [String],
    default: [],
    required: true,
  },
});

const User =
  mongoose.models.User || mongoose.model<UserType>("User", userSchema);

export default User;
