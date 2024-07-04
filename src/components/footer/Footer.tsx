import React from "react";
import styles from "./footer.module.scss";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; 2024 Image Hive. All rights reserved.
        </p>
        <p className={styles.madeBy}>
          Made by ahmedjk34 <FaGithub />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
