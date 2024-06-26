import AuthModal from "@/components/AuthModal/AuthModal";
import Hero from "@/components/home/Hero";
import Link from "next/link";

import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Hero />

      <AuthModal />
    </>
  );
}

export default page;
