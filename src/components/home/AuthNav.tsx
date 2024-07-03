import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import { auth } from "@/auth";
import { UserType } from "@/util/Types";

type Props = {};

async function AuthNav({}: Props) {
  const session = await auth();
  const user = session?.user as UserType;
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
          <Link href={`/profile/${user.id}`}>
            <h3>My Profile</h3>
          </Link>
          <Link href="/upload">
            <h3>Upload +</h3>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthNav;
