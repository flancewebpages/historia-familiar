import React from "react";
import { motion } from "framer-motion";

const Section3: React.FC = () => {
  return (
    <section
      id="mongui"
      className="relative bg-gradient-to-b from-amber-50 via-amber-100/40 to-white text-gray-800 py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* ======= TÍTULO ======= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-900"
        >
          Monguí, Boyacá:{" "}
          <span className="text-amber-800">una infancia entre política y tradición</span>
        </motion.h2>

        {/* ======= CONTENIDO ======= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white border border-amber-200 shadow-xl rounded-3xl p-8 md:p-12 text-justify leading-relaxed max-w-4xl"
        >
          <p className="mb-4 text-base md:text-lg text-gray-700">
            Mi abuela nació y creció en Monguí, un pequeño municipio boyacense
            conocido por su devoción religiosa y su fuerte tradición conservadora.
            En 1949, recuerda vívidamente la celebración del pueblo por la victoria
            de Laureano Gómez, impulsada por su padre, quien lideraba las fiestas
            locales. En ese momento, la política se vivía como una extensión de la
            identidad familiar.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            Sin embargo, el entusiasmo pronto se tornó en preocupación. La creciente
            violencia bipartidista comenzó a alterar la vida del campo, afectando la
            producción agrícola, el comercio y la seguridad. La promesa de estabilidad
            bajo el gobierno conservador se desvaneció, y hacia mediados de los
            cincuenta, su familia tomó la decisión de migrar a Bogotá.
          </p>

          {/* Cita destacada */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mt-8 border-l-4 border-amber-500 pl-6 italic text-gray-700 bg-amber-50/70 py-4 rounded-r-xl shadow-inner"
          >
            “Mi papá decía que nos íbamos sólo por un tiempo, mientras las cosas se
            calmaban… pero nunca volvimos”, recuerda mi abuela.
          </motion.blockquote>
        </motion.div>

        {/* ======= IMAGEN PRINCIPAL (MAPA) ======= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200 bg-white">
            <img
              src="/imagenes/Googlemaps.png"
              alt="Mapa de Monguí, Boyacá"
              className="w-full max-h-[500px] object-cover"
            />
            <p className="absolute bottom-3 right-4 bg-black/50 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Imagen tomada de Google Maps, consultada en noviembre de 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
