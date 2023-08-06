// src/Gallery.js
import React from "react";
import videos from "./data";
import VideoCard from "./VideoCard";

const Gallery = () => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Gallery;
