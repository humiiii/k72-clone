import React from "react";
import Video from "./Video";

const Hero = () => {
  return (
    <h1 className="font-lausanne-light text-center text-[9.5vw] leading-30 uppercase">
      <div className="">the spark for</div>
      <div className="flex items-center justify-center">
        <span>all</span>
        <div className="-mt-5 h-24 w-56 overflow-hidden rounded-full">
          <Video />
        </div>
        <span>things</span>
      </div>
      <div className="">creative</div>
    </h1>
  );
};

export default Hero;
