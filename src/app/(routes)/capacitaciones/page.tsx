// Ruta: /app/capacitaciones/page.tsx
// Página principal para la sección de la galería.

"use client";

import { ProfessionalsCourses } from "@/components/custom/professionals-courses/ProfessionalsCourses";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Capacitaciones() {
  return (
    <div className="container mx-auto px-4 pb-20 lg:px-20">
      {/* Encabezado de la página */}
      <h1
        className={`${playfair.className} text-6xl font-bold my-10
        text-amber-500`}
      >
        Capacitaciones
      </h1>
      {/* Contenido de la página */}
      <ProfessionalsCourses />
    </div>
  );
}
