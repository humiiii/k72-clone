import React from "react";
import { Link } from "react-router-dom";

const HomeLinks = ({ to }) => {
  return (
    <Link
      to={`/${to}`}
      className="flex w-fit items-center justify-center overflow-hidden rounded-full border-[3px] px-8 tracking-wide hover:border-[#D3FD50] hover:text-[#D3FD50]"
    >
      <span className="font-lausanne-regular translate-y-3 text-[7vw] leading-none uppercase">
        {to}
      </span>
    </Link>
  );
};

export default HomeLinks;
