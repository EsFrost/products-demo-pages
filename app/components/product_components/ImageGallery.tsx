import React from "react";
import Image from "next/image";
import { ImageType } from "@/app/interfaces/productInterface";

export const ImageGallery = ({
  images,
  onImageClick,
}: {
  images: ImageType[];
  onImageClick: (index: number) => void;
}) => {
  return (
    <div className="flex gap-x-4">
      {images.map((image: ImageType, index: number) => {
        return (
          <Image
            key={image.id}
            src={image.url}
            alt={image.alt}
            width={0}
            height={0}
            sizes="10vw"
            className="cursor-pointer object-none object-[50%_30%] w-20 h-20"
            onClick={() => onImageClick(index)}
          />
        );
      })}
    </div>
  );
};
