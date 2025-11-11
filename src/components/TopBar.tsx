import React from "react";

const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex justify-center items-center px-6 py-3">
        {/* ======= BOTONES DE NAVEGACIÓN ======= */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-gray-700">
          <li>
            <a
              href="#inicio"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#contexto"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              Contexto histórico
            </a>
          </li>
          <li>
            <a
              href="#mongui"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              Monguí: raíces y tensiones
            </a>
          </li>
          <li>
            <a
              href="#violencia"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              Violencia, exclusión y migración
            </a>
          </li>
          <li>
            <a
              href="#bogota"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              Bogotá: nuevas oportunidades y conclusiones
            </a>
          </li>
          <li>
            <a
              href="#conclusiones"
              className="relative whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full hover:text-rose-700"
            >
              De lo personal a lo estructural
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
