import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Image Hive</h2>
        <p className={styles.copy}>
          &copy; 2024 Image Hive. All rights reserved.
        </p>
        <p className={styles.madeBy}>Made by ahmedjk34</p>
      </div>
    </footer>
  );
};

export default Footer;
