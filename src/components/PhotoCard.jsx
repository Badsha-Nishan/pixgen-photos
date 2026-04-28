import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoCard = ({ photo }) => {
  const {
    title,
    imageUrl,
    prompt,
    category,
    model,
    resolution,
    likes,
    downloads,
    createdAt,
    tags,
  } = photo;
  return (
    <Card>
      <div>
        <Image src={imageUrl} width={200} height={200} alt={title}></Image>
        <h2>{title}</h2>
      </div>
    </Card>
  );
};

export default PhotoCard;
