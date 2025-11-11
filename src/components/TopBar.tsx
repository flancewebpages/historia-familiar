import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* ====== MENÚ DESKTOP ====== */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700 mx-auto">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#contexto", label: "Contexto histórico" },
            { href: "#mongui", label: "Monguí: raíces y tensiones" },
            { href: "#violencia", label: "Violencia, exclusión y migración" },
            {
              href: "#bogota",
              label: "Bogotá: nuevas oportunidades y conclusiones",
            },
            {
              href: "#conclusiones",
              label: "De lo personal a lo estructural",
            },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ====== BOTÓN HAMBURGUESA (SOLO MÓVIL) ====== */}
        <button
          className="md:hidden text-gray-800 focus:outline-none mx-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ====== MENÚ DESPLEGABLE MÓVIL ====== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-md"
          >
            <ul className="flex flex-col items-center py-4 text-gray-700 text-sm font-medium space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#contexto", label: "Contexto histórico" },
                { href: "#mongui", label: "Monguí: raíces y tensiones" },
                { href: "#violencia", label: "Violencia, exclusión y migración" },
                {
                  href: "#bogota",
                  label: "Bogotá: nuevas oportunidades y conclusiones",
                },
                {
                  href: "#conclusiones",
                  label: "De lo personal a lo estructural",
                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:text-rose-700 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;
