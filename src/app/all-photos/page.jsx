import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-photos.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-4">All Photos</h2>
      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
