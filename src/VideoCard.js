// src/VideoCard.js
import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.views} views</p>
        <p>{video.likes} likes</p>
        <div className="channel-info">
          <img src={video.channel.logo} alt={video.channel.name} />
          <p>{video.channel.name}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
