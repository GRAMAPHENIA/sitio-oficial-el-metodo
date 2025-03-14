"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Definimos un tipo para los enlaces
type LinkItem = {
  title: string;
  href: string;
};

// Datos de las columnas (podrían venir de una API o archivo JSON)
const footerColumns = [
  {
    title: "Enlaces",
    links: [
      { title: "Inicio", href: "/" },
      { title: "Capacitaciones", href: "/capacitaciones" },
      { title: "Nosotros", href: "/nosotros" },
    ],
  },
];

// Datos de contacto
const contactInfo = [{ label: "Email", value: "adulmaelmetodo@gmail.com" }];

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
      <h3
        className={`${playfair.className} font-semibold text-amber-700 text-2xl`}
      >
        {title}
      </h3>
      <nav aria-label={title}>
        <ul className="mt-4 space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-sm transition-colors duration-200 hover:text-amber-950 ${
                  pathname === link.href
                    ? "text-muted-foreground hover:text-accent-foreground transition-colors duration-200"
                    : "text-muted-foreground hover:text-accent-foreground transition-colors duration-200"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      className={`bg-orange-300 text-foreground py-12 border-t border-border px-10 ${className}`}
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="footer-heading" className="sr-only">
          Pie de página
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Columna 1: Logo y Descripción */}
          <div className="text-center sm:text-left">
            <h2 className={`${playfair.className} font-semibold text-amber-700 text-2xl`}>
            &quot;El Metodo&quot;, AdulMa.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
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

          {/* Columna de Contacto */}
          <div className="flex flex-col mx-auto text-center sm:text-left">
            <h3 className={`${playfair.className} font-semibold text-amber-700 text-2xl`}>
              Contacto
            </h3>
            <address className="mt-4 not-italic text-sm text-muted-foreground">
              {contactInfo.map((info, index) => (
                <p key={index}>
                  <span className="font-medium">{info.label}:</span>{" "}
                  {info.value}
                </p>
              ))}
            </address>
            <div className="mt-4 flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.instagram.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-950 transition-colors duration-200 text-4xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-950 transition-colors duration-200 text-4xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-950 transition-colors duration-200 text-4xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="mt-12 border-amber-800 border-t border-border pt-8 text-center">
          <p className="text-sm text-amber-900/60">
            &copy; {new Date().getFullYear()} &quot;El Metodo&quot;, AdulMa.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
