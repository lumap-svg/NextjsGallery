import Box from "@/component/Box";
import ImageDetail from "@/component/ImageDetail";
import { PhotoDetailProps, Photo } from "@/lib/types";
import { getPhoto } from "@/lib/unsplash";
import React, { FC } from "react";
import Image from "next/image";
import ButtonCloseModal from "@/component/ButtonCloseModal";

const ModalImageDetailPage: FC<PhotoDetailProps> = async ({ params }) => {
  const response = await getPhoto(params.id);
  const photo = (await response.json()) as Photo;
  // return <Box className="bg-slate-600">modal Page</Box>;
  return (
    <>
      <div className="fixed my-2 inset-0 bg-zinc-900/20 z-10">
        <div className="flex items-center h-full max-w-3xl mx-auto">
          <div className="relative bg-white w-full py-20 px-2 rounded-lg">
            <ButtonCloseModal />
            <ImageDetail photo={photo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalImageDetailPage;

// function imageDetailee(){
//   return (
//     <>
//      <div className="bg-cyan-400">

//     </div>
//     </>
//   )
// }
