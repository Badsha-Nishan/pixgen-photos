import React from "react";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-photos.vercel.app/data.json");
  const data = await res.json();
  const topPhotos = data.slice(0, 8);
  return (
    <div>
      <h1 className="text-2xl font-bold">Top Generation Photos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
