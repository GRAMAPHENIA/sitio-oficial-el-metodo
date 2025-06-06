import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/custom/footer/Footer";
import { Menu } from "@/components/custom/menu/menu";
import ResponsiveForm from "@/components/custom/responsive-form/ResponsiveForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Metodo, ADULMA",
  description:
    "El Método Adulma es un enfoque de actividad física y cognitiva diseñado para la tercera y cuarta edad, enfocado en mejorar la salud física, mental y social de los adultos mayores. Fue creado por Lic. Ana T. de León, una preparadora física y cognitiva especializada en la tercera y cuarta edad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto antialiased`}
      >
        <Menu />
        {children}
        <ResponsiveForm /> 
        <Footer currentYear={new Date().getFullYear()} />
      </body>
    </html>
  );
}
