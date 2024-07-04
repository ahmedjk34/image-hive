import ImagePage from "@/components/imagePage/ImagePage";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
function page({ params: { id } }: Props) {
  return <ImagePage params={{ id }} />;
}

export default page;
