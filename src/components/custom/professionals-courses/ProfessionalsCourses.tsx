"use client";

import {
  LucideGraduationCap,
  LucideCalendarDays,
  LucideCreditCard,
  BriefcaseMedical,
  LucideUsers,
  LucideFileBadge,
  LucideZap,
} from "lucide-react";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import React from "react";

const sourceSans = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sections = [
  {
    icon: LucideGraduationCap,
    title: "Clases prácticas",
    description:
      "El instructorado consta de un 80% de clases prácticas. Es la unica manera de aprender",
  },
  {
    icon: LucideCalendarDays,
    title: "Mes del año",
    description:
      "Organiza tu formación según el calendario anual para maximizar tu aprendizaje.",
  },
  {
    icon: LucideCreditCard,
    title: "Pagar o abonar",
    description:
      "Opciones de pago flexibles para adaptarse a tus necesidades económicas.",
  },
  {
    icon: BriefcaseMedical,
    title: "Primeros auxilios",
    description:
      "Capacitación en atención de emergencias y protocolos de seguridad esenciales.",
  },
  {
    icon: LucideUsers,
    title: "Grupo",
    description:
      "Forma parte de una comunidad de profesionales con intereses similares.",
  },
  {
    icon: LucideFileBadge,
    title: "Certificado",
    description:
      "Obtén un reconocimiento oficial al completar tu curso exitosamente.",
  },
  {
    icon: LucideZap,
    title: "Curso intensivo",
    description:
      "Capacitaciones aceleradas para aprender en el menor tiempo posible.",
  },
];

export function ProfessionalsCourses() {
  return (
    <section className="pb-12 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="container px-4 md:px-8">
        <h2
          className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl text-center font-normal mb-6 sm:mb-8 lg:mb-10 text-zinc-600 dark:text-zinc-300`}
        >
          Cursos para profesionales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-md transition-all duration-100 ease-in-out"
            >
              <section.icon className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 opacity-80 p-2 bg-orange-100 border border-orange-200/50 rounded-lg" />
              <div>
                <h3
                  className={`${playfair.className} text-lg sm:text-xl font-semibold text-zinc-500 dark:text-zinc-300`}
                >
                  {section.title}
                </h3>
                <p
                  className={`${sourceSans.className} text-sm sm:text-base text-zinc-400 dark:text-zinc-400`}
                >
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
