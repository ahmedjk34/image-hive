import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import { auth } from "@/auth";

type Props = {};

async function AuthNav({}: Props) {
  const session = await auth();
  return (
    <div className={styles.actionCenter}>
      {!session ? (
        <>
          <h3>
            <Link href="/?modal=true"> Login</Link>
          </h3>
          <Link href="/?modal=true">
            <h3> Join Us</h3>
          </Link>
        </>
      ) : (
        <>
          <Link href="/?modal=true">
            <h3>My Profile</h3>
          </Link>
          <Link href="/?modal=true">
            <h3>Upload +</h3>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthNav;
