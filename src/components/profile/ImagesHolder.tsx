import { ImageType } from "@/util/Types";
import styles from "../home/home.module.scss";

import React from "react";
import Link from "next/link";

type Props = { images: [ImageType] };

function ImagesHolder({ images }: Props) {
  return (
    <div className={styles.imagesHolder}>
      {images.map((image) => {
        return (
          <Link
            href={`/image/${image._id}`}
            className={styles.image}
            key={"image" + image._id}
          >
            <img alt={image.title} src={image.image_Url}></img>
            <h2>{image.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default ImagesHolder;
