"use client";

import { ImageType } from "@/util/Types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { useRouter } from "next/navigation";

type Props = {};

function HomeImages({}: Props) {
  const [images, setImages] = useState<ImageType[]>([]);
  const router = useRouter();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("http://localhost:3000/api/image");
        setImages(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className={styles.imagesHolder}>
      {images.map((image, index) => {
        return (
          <div
            className={styles.image}
            onClick={() => router.push(`image/${image._id}`)}
          >
            <img alt={image.title} src={image.image_Url}></img>
            <h2>{image.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default HomeImages;
