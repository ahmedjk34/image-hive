import { auth } from "@/auth";
import UploadPage from "@/components/upload/UploadPage";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

async function page({}: Props) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return <UploadPage session={session} />;
}

export default page;
