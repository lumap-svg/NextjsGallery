import Box from "@/component/Box";
import ImageDetail from "@/component/ImageDetail";
import { Photo, PhotoDetailProps } from "@/lib/types";
import { getPhoto } from "@/lib/unsplash";
import { FC } from "react";

const PhotoDetailPage: FC<PhotoDetailProps> = async ({ params }) => {
  const response = await getPhoto(params.id);
  const photo = (await response.json()) as Photo;

  return (
    <div className="h-[100vh] ">
      <ImageDetail photo={photo} />
    </div>
  );
};

export default PhotoDetailPage;
