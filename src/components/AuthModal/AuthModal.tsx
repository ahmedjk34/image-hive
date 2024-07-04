"use client";

import React, { useState } from "react";
import styles from "./modal.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoGoogle } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { login, register } from "@/actions/user";

type Props = {};

function AuthModal({}: Props) {
  const [isSignup, setIsSignup] = useState(true);
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className={styles.dialog}>
          <div className={styles.dialogContent}>
            <Link href={pathname}>
              <IoCloseSharp color="red" className={styles.closeButton} />
            </Link>
            <div className={styles.toggleButtons}>
              <button
                onClick={() => setIsSignup(true)}
                className={isSignup ? styles.active : ""}
              >
                Signup
              </button>
              <button
                onClick={() => setIsSignup(false)}
                className={!isSignup ? styles.active : ""}
              >
                Login
              </button>
            </div>
            {isSignup ? (
              <form className={styles.interface} action={register}>
                <label>
                  Name:
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </label>
                <div className={styles.authButtons}>
                  <button className={styles.googleButton}>
                    <IoLogoGoogle /> Sign up with Google
                  </button>
                  <button>Signup</button>
                </div>
              </form>
            ) : (
              <form className={styles.interface} action={login}>
                <label>
                  Email:
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </label>
                <div className={styles.authButtons}>
                  <button className={styles.googleButton}>
                    <IoLogoGoogle /> Login with Google
                  </button>
                  <button>Login</button>
                </div>
              </form>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}

export default AuthModal;
