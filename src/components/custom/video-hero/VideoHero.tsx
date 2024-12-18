"use client";

import React from "react";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const VideoHero: React.FC = () => {
  return (
    <section
      role="region"
      aria-labelledby="video-hero-heading"
      className="relative max-w-7xl h-[500px] lg:h-[350px] overflow-hidden shadow-xl rounded-xl mt-5 mx-4 lg:mx-auto"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-50 contrast-100 saturate-150"
        src="/video-hero/video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center backdrop-blur-[4px] bg-black/40">
        <h1
          id="video-hero-heading"
          className={`${sen.className} text-white text-4xl md:text-6xl lg:text-8xl font-bold`}
        >
          &quot;El Método&quot;
        </h1>
        <p className="text-amber-50/90 text-lg md:text-xl lg:text-2xl mt-4 px-40">
          Para profesionales interesados en enseñarlo y{" "}
          <span className="font-semibold text-white">Adul</span>tos{" "}
          <span className="font-semibold text-white">Ma</span>yores que quieran
          practicarlo.
        </p>
      </div>
    </section>
  );
};

export default VideoHero;
