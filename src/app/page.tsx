import { auth } from "@/auth";
import AuthModal from "@/components/AuthModal/AuthModal";
import Hero from "@/components/home/Hero";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

import React from "react";

type Props = {};

async function page({}: Props) {
  const session = await auth();

  return (
    <>
      <SessionProvider session={session}>
        <Hero />
        <AuthModal />
      </SessionProvider>
    </>
  );
}

export default page;
