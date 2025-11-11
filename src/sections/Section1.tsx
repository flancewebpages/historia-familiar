import React from "react";
import { motion } from "framer-motion";

const Section1: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-white text-gray-800 overflow-hidden">
      {/* ==========================
          HERO principal
      =========================== */}
      <div className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Fondo principal */}
        <img
          src="imagenes/IMG_4784.jpg"
          alt="Escuela de monjas situada en el parque principal de Monguí"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Degradados para visibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent md:from-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700/70 via-rose-500/60 to-orange-400/60 mix-blend-multiply" />

        {/* ===== Nota principal (derecha en desktop, abajo en móvil) ===== */}
        <div className="absolute bottom-6 right-8 md:right-8 md:bottom-6 bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-sm text-white/95 text-xs italic px-4 py-2 rounded-lg shadow-md text-center md:text-right max-w-[420px] border border-white/10 md:block">
          Escuela de monjas situada en el parque principal de{" "}
          <span className="font-semibold text-white">Monguí.</span>
        </div>

        {/* ===== Imagen secundaria izquierda — SOLO DESKTOP/TABLET ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex absolute bottom-10 left-10 z-20 flex-col items-start"
        >
          <img
            src="imagenes/monguibyn.jpg"
            alt="Fachada de la Basílica menor de nuestra señora de Monguí"
            className="w-64 md:w-80 lg:w-[26rem] rounded-3xl shadow-2xl border-4 border-white/70 hover:scale-105 transition-transform duration-700"
          />
          <p className="mt-2 text-[11px] text-white/90 italic bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md shadow-md max-w-[340px] leading-snug">
            Fachada de la Basílica menor de nuestra señora de Monguí. Tomada del
            Observatorio de cultura y patrimonio de Boyacá.
          </p>
        </motion.div>

        {/* ===== Texto del hero ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6 mt-[-4rem]"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl leading-tight">
            De Monguí a Bogotá:{" "}
            <span className="text-emerald-200">Una historia familiar</span>{" "}
            en tiempos de violencia y migración
          </h1>
          <p className="mt-4 text-lg md:text-xl italic text-white/90 leading-relaxed">
            Una historia sobre cómo la polarización política y la urbanización
            de mediados del siglo XX transformaron la vida de una familia
            boyacense.
          </p>
        </motion.div>
      </div>

      {/* ===== Versión MÓVIL de la imagen (DEBAJO del hero) ===== */}
      <div className="md:hidden bg-gradient-to-b from-rose-900/70 via-rose-700/50 to-white pt-4 pb-8 px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm mx-auto flex flex-col items-center gap-2"
        >
          <img
            src="imagenes/monguibyn.jpg"
            alt="Fachada de la Basílica menor de nuestra señora de Monguí"
            className="w-full rounded-3xl shadow-lg border-4 border-white/70"
          />
          <p className="text-[11px] text-white/90 italic bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md shadow-md text-center leading-snug">
            Fachada de la Basílica menor de nuestra señora de Monguí. Tomada del
            Observatorio de cultura y patrimonio de Boyacá.
          </p>
        </motion.div>
      </div>

      {/* ==========================
          CUERPO DE TEXTO
      =========================== */}
      <div className="flex justify-center py-20 px-6 md:px-10 bg-white relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl rounded-2xl shadow-lg overflow-hidden border border-gray-300"
        >
          <img
            src="/imagenes/monguibyn.jpg"
            alt="Fondo difuminado de Monguí"
            className="absolute inset-0 w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

          <div className="relative z-10 p-8 md:p-12">
            <p className="text-justify text-base md:text-lg leading-relaxed mb-4">
              Entre las montañas frías de Monguí, Boyacá, mi abuela vivió su
              juventud marcada por la intensidad del bipartidismo colombiano. La
              violencia, el miedo y la búsqueda de oportunidades impulsaron a su
              familia a migrar a Bogotá en los años cincuenta.
            </p>
            <p className="text-justify text-base md:text-lg leading-relaxed">
              Esta historia personal es, al mismo tiempo, parte de la gran
              transformación económica y social que vivió Colombia: la transición
              de un país rural a uno urbano.
            </p>
            <div className="mt-10 bg-emerald-50/90 border-l-4 border-emerald-400 p-6 rounded-md shadow-inner text-center">
              <p className="italic text-base md:text-lg font-medium text-slate-800">
                La historia de mi abuela muestra cómo la polarización política y
                la incipiente violencia partidista impulsaron procesos de
                migración y cambio social que marcaron la historia económica de
                Colombia en el siglo XX.
              </p>
            </div>
            <div className="mt-10 text-center">
              <p className="text-sm italic text-gray-600">
                — Un testimonio familiar de los años cincuenta, entre la fe, la
                esperanza y la búsqueda de un nuevo hogar. —
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
