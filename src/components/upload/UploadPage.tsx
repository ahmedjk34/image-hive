"use client";
import React, { useEffect, useState } from "react";
import styles from "./uploadPage.module.scss";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Session } from "next-auth";
import { UserType } from "@/util/Types";
import axios from "axios";

type Props = { session: Session | null };

function UploadPage({ session }: Props) {
  const router = useRouter();
  const user = session?.user as UserType;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const uploadImageToAPI = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (!image) return;
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(
        "http://localhost:3000/api/image",
        formData,
        {
          params: {
            title,
            description,
            uploader: user.id,
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Upload Your Image</h1>
        <form onSubmit={(e) => uploadImageToAPI(e)}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="image" className={styles.chooseImage}>
              Choose an Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          {!isLoading ? (
            <button type="submit" className={styles.upload}>
              Upload
            </button>
          ) : (
            <button className={styles.upload} disabled>
              The image is uploading
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
