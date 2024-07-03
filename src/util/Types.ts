import { ObjectId } from "mongoose";

export interface UserType {
  id: string;
  profile_picture: string;
  username: string;
  password: string;
  images: [ObjectId];
}

export interface ImageType {
  title: string;
  description: string;
  image_Url: string;
  uploadDate: Date;
  uploader: ObjectId;
}
