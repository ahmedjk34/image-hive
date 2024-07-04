import ImagesHolder from "@/components/profile/ImagesHolder";
import ProfileInfo from "@/components/profile/ProfileInfo";
import { UserType } from "@/util/Types";
import axios from "axios";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function page({ params: { id } }: Props) {
  const response = await axios.get(`http://localhost:3000/api/profile/${id}`);
  const user: UserType = response.data;
  return (
    <div>
      <ProfileInfo
        profile_picture={user.profile_picture}
        username={user.username}
      />
      <ImagesHolder images={user.images} />
    </div>
  );
}

export default page;
