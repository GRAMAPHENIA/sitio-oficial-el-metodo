"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Definimos un tipo para los enlaces
type LinkItem = {
  title: string;
  href: string;
};

// Datos de las columnas (pueden venir de una API o un archivo JSON)
const footerColumns = [
  {
    title: "Enlaces Rápidos",
    links: [
      { title: "Inicio", href: "/" },
      { title: "Capacitaciones", href: "/capacitaciones" },
      { title: "nosotros", href: "/nosotros" },
    ],
  },
];

// Datos de contacto
const contactInfo = [{ label: "Email", value: "adulmaelmetodo@gmail.com" }];

// Componente para renderizar una columna de enlaces
const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mx-auto text-center sm:text-left">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <ul className="mt-4 space-y-2 ">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`hover:text-accent-foreground text-sm ${
                pathname === link.href ? "text-foreground" : "text-foreground"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente Footer principal
const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Columna 1: Logo y Descripción */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-primary">Mi Empresa</h2>
            <p className="flex mx-auto md:mx-0 mt-4 text-muted-foreground text-sm max-w-60 mb-4">
              Para profesionales que quieran enseñarlo y adultos mayores que
              deseen practicarlo.
            </p>
          </div>

          {/* Columnas dinámicas */}
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}

          {/* Columna 5: Contacto */}
          <div className="flex flex-col mx-auto text-center sm:text-left">
            <h3 className="text-lg font-semibold text-primary">Contacto</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="font-medium">{info.label}:</span>{" "}
                  {info.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} &quot;El Metodo&quot;, AdulMa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
