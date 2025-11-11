import React from "react";
import { motion } from "framer-motion";

const Section6: React.FC = () => {
  return (
    <section
      id="conclusiones"
      className="relative bg-gradient-to-b from-emerald-50 via-amber-50 to-white text-gray-800 py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* ======= FONDO CON IMAGEN ======= */}
      <div className="absolute inset-0">
        <img
          src="/imagenes/paramooceta.png"
          alt="Páramo de Ocetá, Monguí"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* ======= CONTENIDO ======= */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10"
        >
          De lo personal a lo estructural:{" "}
          <span className="text-emerald-700">lecciones de una historia familiar</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md border border-emerald-100 shadow-xl rounded-3xl p-8 md:p-12 text-justify leading-relaxed"
        >
          <p className="mb-4 text-base md:text-lg text-gray-700">
            La historia de mi abuela evidencia que los grandes procesos
            históricos —violencia partidista, migración y urbanización— no solo
            se reflejaron en las cifras, sino también en la vida cotidiana de las
            personas. Su migración representó la transición entre dos modelos de
            vida: el campesino tradicional y el urbano moderno.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            La búsqueda de seguridad y oportunidades en la ciudad permitió a la
            familia acceder a educación y trabajo asalariado, mostrando cómo la
            transformación económica del país se tejió desde los hogares.
          </p>

          <p className="text-base md:text-lg text-gray-700">
            Al final, la historia de mi abuela es también la historia de
            Colombia: una nación que cambió a la fuerza, pero que encontró en la
            movilidad y la adaptación una forma de construir futuro.
          </p>
        </motion.div>

        {/* ======= IMAGEN Y NOTA ======= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white/90 backdrop-blur-sm">
            <img
              src="/imagenes/paramooceta.png"
              alt="Páramo de Ocetá, Monguí"
              className="w-full max-h-[550px] object-cover"
            />
            <p className="absolute bottom-3 right-4 bg-black/50 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Páramo de Ocetá (Monguí), por Javier Vargas, 2012.
            </p>
          </div>
        </motion.div>

        {/* ======= FRASE FINAL ======= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="italic text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            — Así, una historia familiar se convierte en un espejo del país:
            entre la tradición y la modernidad, entre el desarraigo y la
            esperanza. —
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
