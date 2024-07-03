import { imageDetailProps } from "@/lib/types";
import Image from "next/image";
import React, { FC } from "react";

const ImageDetail: FC<imageDetailProps> = ({ photo }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-10 uppercase">
        {photo.alt_description}
      </h1>
      <Image
        src={photo.urls.regular}
        height={400}
        width={700}
        alt={photo.alt_description}
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default ImageDetail;
