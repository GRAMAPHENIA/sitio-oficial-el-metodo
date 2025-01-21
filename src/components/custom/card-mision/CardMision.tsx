import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import * as React from "react";

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

export function CardMision() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto">
        <div>
          <title>Nuestra Misión - Método AdulMa</title>
          <meta
            name="description"
            content="Descubre cómo el Método AdulMa mejora la calidad de vida de los adultos mayores desde 2004, promoviendo la salud física y neuroplasticidad."
          />
        </div>
        <article
          role="region"
          aria-labelledby="card-title"
          aria-describedby="card-description"
          className="w-full max-w-[320px] lg:max-w-[650px] mx-auto my-20 p-6 rounded-none md:rounded-lg"
        >
          <section className="text-center">
            <h1
              id="card-title"
              className={`${playfair.className} text-4xl lg:text-5xl text-zinc-600 dark:text-zinc-300 mb-10`}
            >
              Nuestra Misión
            </h1>
            <p
              id="card-description"
              className={`${sourceSans.className} text-base font-normal lg:text-xl text-stone-600 dark:text-stone-300`}
            >
              Desde 2004, implementando{" "}
              <span className="text-stone-800 dark:text-amber-200">
                &quot;El Método&quot; AdulMa
              </span>
              para mejorar la calidad de vida de los adultos mayores,
              potenciando su condición física y promoviendo la neuroplasticidad
              a través de una enseñanza evolutiva.
            </p>
          </section>
          <section className="flex justify-center py-8">
            <button className="hidden lg:block border px-4 py-2 rounded-md hover:bg-orange-100">
              Descubre más
            </button>
          </section>
        </article>
      </div>
    </>
  );
}
