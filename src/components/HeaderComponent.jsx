import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-empresa.png";
import { Link } from "react-scroll";

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil o no
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-blue-bg" : "bg-transparent"
      }`}
    >
      <nav className="bg-transparent backdrop-blur-md dark:bg-transparent dark:border-gray-700 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Sucrimsoft
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="init"
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={isMobile ? "us-small" : "us-lg"}
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="thecnologies"
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Tecnologías
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
