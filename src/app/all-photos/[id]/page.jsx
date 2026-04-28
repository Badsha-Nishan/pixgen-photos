import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-photos.vercel.app/data.json");
  const photos = await res.json();
  const expectedCard = photos.find((photo) => photo.id == id);
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
  } = expectedCard;
  return (
    <Card className="border my-4">
      <div className="space-y-4">
        <div className="w-full relative aspect-square">
          <Image
            className="rounded-md object-cover"
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={title}
          ></Image>
          <Chip size="sm" className="absolute top-2 right-2">
            {category}
          </Chip>
        </div>
        <div>
          <h2 className="font-semibold text-xl">{title}</h2>
        </div>
        <div>
          <h2 className="">{prompt}</h2>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p className="text-red-500">
              {" "}
              <FaHeart />
            </p>
            <p>{likes}</p>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <p className="text-green-500">
              <FaDownload />
            </p>
            <p>{downloads}</p>
          </div>
        </div>
        <Link href={`/all-photos`}>
          <Button variant="secondary" className={"w-full"}>
            All Photos
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PhotoDetailsPage;
