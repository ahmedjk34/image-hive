import { ImageType } from "@/util/Types";
import axios from "axios";
import React from "react";
import styles from "./imagePage.module.scss";
type Props = {
  params: {
    id: string;
  };
};

async function ImagePage({ params: { id } }: Props) {
  const response = await axios.get(`http://localhost:3000/api/image/${id}`);
  //console.log(response);
  const image: ImageType = response.data;
  //TO-DO: handle not finding an image properly
  if (response.status != 200) return;
  return (
    <div className={styles.imagePage}>
      <div className={styles.imageContainer}>
        <img src={image.image_Url} alt={image.title}></img>
        <div className={styles.imageInfo}>
          <h1 className={styles.title}>{image.title}</h1>
          <p className={styles.description}>{image.description}</p>
          <div>
            <div className={styles.authorInfo}>
              <img
                src={image.uploader.profile_picture}
                alt={image.uploader.username}
              ></img>
              <h4>
                <span>Uploaded by:</span>
                <br></br>
                <br></br>
                {image.uploader.username}
              </h4>
            </div>
            <h4>
              {" "}
              Upload Date: {`${image.uploadDate.toString().slice(0, 10)}`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePage;
