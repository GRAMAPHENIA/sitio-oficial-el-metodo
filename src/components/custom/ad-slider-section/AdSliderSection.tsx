"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ads } from "@/data/ads";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function AdSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = ads.length;
  const maxIndex = totalItems - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <section className="px-4 md:px-0 lg:my-20 max-w-xs md:max-w-screen-sm lg:max-w-7xl mx-auto relative mb-10">
      <h2
        className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl text-center font-normal mb-6 sm:mb-8 lg:mb-10 text-zinc-600 dark:text-zinc-300`}
      >
        Espacio publicitario
      </h2>
      <div className="w-full max-w-7xl mx-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerPage}%`, padding: "0 8px" }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border relative">
                <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 mb-4 overflow-hidden">
                  <Image
                    src={ad.image}
                    alt={ad.title}
                    fill
                    className="rounded-lg border object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-stone-600 dark:text-stone-200">
                  {ad.title}
                </h3>
                <p className="sr-only">{ad.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-14 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="text-orange-400 px-4 py-2 rounded-md bg-orange-200 border border-orange-200/50 transition-all ease-in-out duration-200"
          aria-label="Anterior"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="text-orange-400 px-4 py-2 rounded-md bg-orange-200 border border-orange-200/50 transition-all ease-in-out duration-200"
          aria-label="Siguiente"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
