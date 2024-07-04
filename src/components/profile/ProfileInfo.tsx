import React from "react";
import styles from "./profile.module.scss";
type Props = {
  username: string;
  profile_picture: string;
};

function ProfileInfo({ username, profile_picture }: Props) {
  return (
    <div className={styles.profileInfo}>
      <img src={profile_picture} alt={username}></img>
      <h1>{username}</h1>
    </div>
  );
}

export default ProfileInfo;
