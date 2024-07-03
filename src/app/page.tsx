import { auth } from "@/auth";
import AuthModal from "@/components/AuthModal/AuthModal";
import Hero from "@/components/home/Hero";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

import React from "react";

type Props = {};

async function page({}: Props) {
  return (
    <>
      <Hero />
      <AuthModal />
    </>
  );
}

export default page;
