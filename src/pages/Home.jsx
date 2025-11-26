import React from "react";
import Video from "../components/Home/Video";
import Hero from "../components/Home/Hero";
import HomeLinks from "../components/Home/HomeLinks";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
        <Video className="fixed h-screen"/>
      <div className="relative z-10 h-screen p-3 flex flex-col justify-between items-center ">
        <Hero />
        <div className="flex gap-4 justify-center">
        <HomeLinks to="work" />
        <HomeLinks to="agency" />
        </div>
      </div>
    </div>
  );
};

export default Home;
