"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/custom/list-item/ListItem";
import { menu } from "@/data/menu";
import { SocialLinks } from "@/components/custom/social-link/SocialLinks";

export function Menu() {
  return (
    <div className="flex justify-between items-center w-full">
      {/* Menú principal */}
      <NavigationMenu className="z-50">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Principal</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src={"/flag/brand.png"}
                        alt="Esta es la imagen que representa al método Adulma."
                        height={565}
                        width={1080}
                        className="rounded-lg mb-9"
                      />
                      <p className="text-sm leading-tight text-muted-foreground">
                        Actividad física y cognitiva, enfocada en mejorar la
                        salud física, mental y social de los adultos mayores.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Inicio">
                  Página principal con toda la información esencial.
                </ListItem>
                <ListItem href="/sobre-nosotros" title="Nosotros">
                  Conoce más sobre nuestra misión, visión y valores.
                </ListItem>
                <ListItem href="/#contact" title="Contacto">
                  Ponete en contacto con nosotros para más información o
                  consultas.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contenido</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {menu.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/instructorado" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Instructorado
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Redes sociales */}
      <SocialLinks />
    </div>
  );
}
