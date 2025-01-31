"use client";

import React from "react";
import { Lato, Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const VideoHero: React.FC = () => {
  return (
    <section
      role="region"
      aria-labelledby="video-hero-heading"
      className="relative max-w-xs lg:max-w-7xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden shadow-xl rounded-xl mt-5 mx-4 md:mx-auto"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-75 contrast-100 saturate-125"
        src="/video-hero/video-hero-ladys-one.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1} // Para evitar que el video sea accesible
      />
      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center backdrop-blur-[4px] bg-black/40">
        <h1
          id="video-hero-heading"
          className={`${lato.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold`}
        >
          &quot;El Método&quot;
        </h1>
        <p
          className={`${sourceSans.className} text-amber-50/90 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 font-thin`}
        >
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