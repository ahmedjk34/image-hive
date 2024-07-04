"use client";
import React from "react";
import styles from "../../../../components/AuthModal/modal.module.scss";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import ImagePage from "@/components/imagePage/ImagePage";
type Props = {
  params: {
    id: string;
  };
};

async function page({ params: { id } }: Props) {
  const router = useRouter();
  return (
    <dialog className={styles.dialog}>
      <div className={`${styles.dialogContent} ${styles.imagePreview}`}>
        <div className={styles.imageModal}>
          <div onClick={() => router.back()}>
            <MdCancel
              color="red"
              size={30}
              className={styles.cancelButton}
            ></MdCancel>
          </div>
          <ImagePage params={{ id }} />
        </div>
      </div>
    </dialog>
  );
}

export default page;
