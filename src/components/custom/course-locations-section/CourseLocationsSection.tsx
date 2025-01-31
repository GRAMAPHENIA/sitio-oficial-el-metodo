"use client";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import {
  LucideCalendarClock,
  LucideMapPinned,
  LucideUserCircle,
} from "lucide-react";
import React from "react";

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Configuración de la fuente Playfair Display
const playfair = Playfair_Display({
  weight: ["400", "700"], // Puedes ajustar los pesos según tus necesidades
  subsets: ["latin"],
  display: "swap",
});

interface CourseLocation {
  name: string;
  address: string;
  description: string;
  instructor: string;
}

const courseLocations: CourseLocation[] = [
  {
    name: "Olivos - Salón al fondo",
    address: "Ricardo Gutiérrez 1372, Olivos",
    description: "Lunes y jueves, de 11:10 a 12:10 hrs.",
    instructor: "Ana Martínez",
  },
  {
    name: "CACYP Don Torcuato",
    address: "Ruta 202 y Balbastro, Don Torcuato",
    description: "Lunes y miércoles, de 14:45 a 15:45 hrs.",
    instructor: "Carlos Rodríguez",
  },
  {
    name: "Amigos de Florida",
    address: "Gral. San Martín 2442, Florida",
    description: "Miércoles y viernes, de 10:00 a 11:00 hrs.",
    instructor: "Lucía Pérez",
  },
  {
    name: "La Redonda de Belgrano",
    address: "Vuelta de Obligado 2042, Belgrano",
    description:
      "Martes y viernes, de 11:00 a 12:00 hrs.",
    instructor: "Juan González",
  },
];

export function CourseLocationsSection() {
  return (
    <section className="pb-12 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="container px-4 md:px-8">
        <h2
          className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl text-center font-normal mb-6 sm:mb-8 lg:mb-10 text-zinc-600 dark:text-zinc-300`}
        >
          Nuestras sedes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseLocations.map((location, index) => (
            <section key={index} className="flex flex-col p-2 sm:p-4">
              <div className="border border-zinc-200 dark:border-zinc-700 p-4 lg:px-20 lg:py-5 rounded-lg hover:shadow-md transition-all duration-100 ease-in-out">
                <p
                  className={`${playfair.className} text-xl sm:text-2xl font-normal text-zinc-600 dark:text-zinc-300 mb-3 sm:mb-4`}
                >
                  {location.name}
                </p>
                <section className="flex items-center mb-3 sm:mb-4">
                  <LucideCalendarClock className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg mr-2 text-orange-600 opacity-60 p-1 bg-orange-100 border border-orange-200/50" />
                  <p className={`${sourceSans.className} text-sm sm:text-base`}>
                    {location.description}
                  </p>
                </section>
                <section className="flex items-center mb-3 sm:mb-4">
                  <LucideMapPinned className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg mr-2 text-orange-600 opacity-60 p-1 bg-orange-100 border border-orange-200/50" />
                  <p className={`${sourceSans.className} text-sm sm:text-base`}>
                    {location.address}
                  </p>
                </section>
                <section className="flex items-center mb-3 sm:mb-4">
                  <LucideUserCircle className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg mr-2 text-orange-600 opacity-60 p-1 bg-orange-100 border border-orange-200/50" />
                  <p className={`${sourceSans.className} text-sm sm:text-base`}>
                    {location.instructor}
                  </p>
                </section>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}