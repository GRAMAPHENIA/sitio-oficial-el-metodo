"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaUsers, FaImages, FaChalkboardTeacher, FaBlog, FaEnvelope } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (action: string) => {
    console.log(`Sección seleccionada: ${action}`);
    // Aquí puedes agregar la lógica para manejar cada acción
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic en un botón
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <div className="md:hidden relative">
      <button
        onClick={handleMenuToggle}
        className="fixed top-4 right-4 z-50 p-2 bg-neutral-800 text-white rounded-full shadow-md transition-transform duration-300"
        aria-label="Abrir Menú"
      >
        <FaBars className="text-xl" />
      </button>
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
            <button
              onClick={handleMenuToggle}
              className="absolute top-3 left-3 text-neutral-800"
              aria-label="Cerrar Menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="mt-16">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleClick("Inicio")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaHome className="mr-3 text-2xl text-orange-400/60" />
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick("Nosotros")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaUsers className="mr-3 text-2xl text-orange-400/60" />
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick("Galería")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaImages className="mr-3 text-2xl text-orange-400/60" />
                    Galería
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick("Capacitaciones")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaChalkboardTeacher className="mr-3 text-2xl text-orange-400/60" />
                    Capacitaciones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick("Blog")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaBlog className="mr-3 text-2xl text-orange-400/60" />
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick("Contacto")}
                    className="flex items-center px-4 py-3 text-neutral-800 hover:bg-gray-100 w-full transition-colors duration-200"
                  >
                    <FaEnvelope className="mr-3 text-2xl text-orange-400/60" />
                    Contacto
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
