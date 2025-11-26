import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { modelImages } from "../constants/images";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const containerRef = useRef(null);
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    modelImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, []);

  useGSAP(
    () => {
      if (!imgRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: imgRef.current,
        start: "top 30%",
        end: "top -80%",
        scrub: true,
        pin: true,
        // markers: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (modelImages.length - 1));
          if (modelImages[index] && imgRef.current) {
            imgRef.current.src = modelImages[index].src;
          }
        },
      });

      const img = imgRef.current;
      if (img) {
        img.onload = () => {
          ScrollTrigger.refresh();
        };
      }

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative h-screen">
      <div
        ref={imgDivRef}
        className="absolute bottom-[35vh] h-auto overflow-hidden"
        style={{
          left: "calc((100% - 11.875rem) * 6 / 20 + 3.75rem)",
          width: "calc((100% - 11.875rem) * 3 / 20 + 1.875rem)",
        }}
      >
        <img
          ref={imgRef}
          className="block h-full w-full rounded-[1.25rem] object-cover"
          src={modelImages[0]?.src}
          alt="Agency Work"
          loading="eager"
        />
      </div>

      <div className="font-lausanne-regular relative">
        <div className="pt-[55vh] text-center text-[20vw] leading-[0.9] uppercase">
          <div className="">seven7y</div>
          <div className="">two</div>
        </div>
        <div className="ml-auto w-[65%] indent-[5em] text-6xl">
          <p>
            We’re inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing, with
            values, a personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agency;
