import React from "react";
import styles from "./home.module.scss";

type Props = {};

function AuthNav({}: Props) {
  let isAuthenticated = false; //placeholder

  return (
    <div className={styles.actionCenter}>
      {!isAuthenticated ? (
        <>
          <h3>Login</h3>
          <h3>Join Us</h3>
        </>
      ) : (
        <>
          <h3>My Profile</h3>
          <h3>Upload +</h3>
        </>
      )}
    </div>
  );
}

export default AuthNav;
