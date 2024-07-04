import AuthModal from "@/components/AuthModal/AuthModal";
import Hero from "@/components/home/Hero";
import HomeImages from "@/components/home/HomeImages";

import React from "react";

type Props = {};

async function page({}: Props) {
  return (
    <>
      <Hero />
      <HomeImages />
      <AuthModal />
    </>
  );
}

export default page;
