import React from "react";
import styles from "./home.module.scss";
import AuthNav from "./AuthNav";
import { IoSearch } from "react-icons/io5";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.nav}>
        <h1>Image Hive</h1>
        <AuthNav />
      </div>
      <div className={styles.searchSection}>
        <h1>Upload Your Stunning Pictures, Share Them With The World</h1>
        <div className={styles.searchHolder}>
          <input type="text" placeholder="Search here..." name="search"></input>
          <IoSearch className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
