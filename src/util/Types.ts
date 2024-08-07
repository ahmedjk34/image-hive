import { ObjectId } from "mongoose";

export interface UserType {
  id: string;
  profile_picture: string;
  username: string;
  password: string;
  images: [ImageType];
}

export interface ImageType {
  _id: string;
  title: string;
  description: string;
  image_Url: string;
  uploadDate: Date;
  uploader: UserType;
}
