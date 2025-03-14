// Ruta: /app/galeria/page.tsx
// Página principal para la sección de la galería.

"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { GaleriaItem } from "@/types/galleryTypes";
import { galleryData } from "@/data/galleryData";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function GaleriaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<GaleriaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulamos una carga de datos con un retardo.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setItems(galleryData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 pb-20 lg:px-20">
      {/* Encabezado de la página */}
      <h1 className={`${playfair.className} text-6xl font-bold my-10
        text-amber-800`}>Galería</h1>

      {/* Contenido de la galería */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? // Muestra esqueletos de carga mientras los datos se cargan
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-full" />
                </CardContent>
              </Card>
            ))
          : // Muestra los elementos de la galería cuando se cargan los datos
            items.map((item) => (
              <Card key={item.id} className="overflow-hidden group relative">
                <div className="w-full h-64 relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Detalles al pasar el ratón */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
      </div>
    </div>
  );
}
