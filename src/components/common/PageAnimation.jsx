import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const PageAnimation = () => {
  const container = useRef(null);
  const location = useLocation();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Initial state: Stairs are below the screen
      tl.set(".stair", { y: "-100%" });

      // Animation: Slide up to cover, then slide up to reveal
      tl.to(".stair", {
        y: "0%",
        duration: 0.5,
        stagger: -0.04,
      }).to(".stair", {
        y: "100%",
        duration: 0.5,
        stagger: -0.04,
        delay: 0.3,
      });
    },
    { scope: container, dependencies: [location.pathname] },
  );

  return (
    <div
      ref={container}
      className="pointer-events-none fixed top-0 left-0 z-50 flex h-screen w-full"
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="stair h-full w-1/5 bg-black" />
      ))}
    </div>
  );
};

export default PageAnimation;
