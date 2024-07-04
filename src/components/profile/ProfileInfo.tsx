import React from "react";
import styles from "./profile.module.scss";
import Link from "next/link";
import { auth } from "@/auth";
type Props = {
  userId: string;
  username: string;
  profile_picture: string;
};

async function ProfileInfo({ userId, username, profile_picture }: Props) {
  const session = await auth();
  const id = session?.user?.id;
  const isOwner = userId == id;
  return (
    <div className={styles.profileInfo}>
      <img src={profile_picture} alt={username}></img>
      <h1>{username}</h1>
      {isOwner ? <Link href="/upload">Upload + </Link> : ""}
    </div>
  );
}

export default ProfileInfo;
