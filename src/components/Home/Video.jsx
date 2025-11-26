import React from "react";

const Video = ({ className = "" }) => {
  return (
    <video
      src="/videos/home-video.mp4"
      autoPlay
      loop
      muted
      playsInline
      className={`h-auto w-full object-cover ${className}`}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
