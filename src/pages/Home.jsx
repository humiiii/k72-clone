import React from "react";
import Video from "../components/Home/Video";
import Hero from "../components/Home/Hero";
import HomeLinks from "../components/Home/HomeLinks";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      <Video className="fixed h-screen" />
      <div className="relative z-10 flex h-screen flex-col items-center justify-between p-3">
        <Hero />
        <div className="flex justify-center gap-4">
          <HomeLinks to="work" />
          <HomeLinks to="agency" />
        </div>
      </div>
    </div>
  );
};

export default Home;
