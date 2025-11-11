import React from "react";
import { motion } from "framer-motion";

const Section2: React.FC = () => {
  return (
    <section
      id="contexto"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* ======= TÍTULO ======= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-900"
        >
          Colombia en transformación:{" "}
          <span className="text-rose-700">
            violencia, migración y urbanización (1949–1980)
          </span>
        </motion.h2>

        {/* ======= CUERPO DE TEXTO ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12 text-justify leading-relaxed max-w-4xl"
        >
          <p className="mb-4 text-base md:text-lg text-gray-700">
            La década de 1950 marcó una ruptura profunda en la historia
            colombiana. Tras el asesinato de Jorge Eliécer Gaitán en 1948, el
            país se sumió en una etapa de violencia partidista que dejó más de
            200.000 muertos y millones de desplazados rurales. Las tensiones
            políticas y la falta de seguridad impulsaron a muchas familias
            campesinas —como la de mi abuela— a buscar refugio en las ciudades.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            Durante el mismo periodo, Colombia vivió un proceso acelerado de
            urbanización. Según los censos del DANE, en 1951 el 61% de la
            población vivía en zonas rurales (un 39,55% de participación urbana),
            mientras que en 1973 esa proporción casi se había invertido: cerca
            del 60% ya era urbana. Bogotá se convirtió en el principal destino
            migratorio, pasando de 715.000 habitantes en 1951 a casi 2,9 millones
            en 1973.
          </p>

          <p className="text-base md:text-lg text-gray-700">
            Como señala Ocampo (2017), este cambio urbano-industrial modificó el
            patrón de crecimiento del país, desplazando la base agrícola hacia
            sectores de mayor productividad y configurando un nuevo mapa del
            empleo. Por tanto, este cambio estructural no solo transformó la
            geografía demográfica del país, sino también su economía: la
            agricultura perdió peso relativo frente a los sectores industrial y
            de servicios, lo que modificó las formas de trabajo, consumo y
            organización familiar.
          </p>

          {/* Cita y fuente */}
          <div className="mt-10 bg-emerald-50 border-l-4 border-emerald-400 p-5 rounded-md shadow-inner">
            <p className="text-sm md:text-base italic text-slate-700">
              Fuentes: DANE (1951, 1964, 1973). Censos Nacionales de Población y
              Vivienda. 🔗 Geoportal DANE – Urbanización en Colombia
            </p>
          </div>
        </motion.div>

        {/* ======= IMÁGENES HISTÓRICAS ======= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          {/* Gaitán */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <img
              src="/imagenes/Gaitan.png"
              alt="Gaitán en plaza pública"
              className="w-full h-72 object-cover"
            />
            <p className="absolute bottom-2 right-2 bg-black/50 text-white/90 text-[11px] italic px-2 py-1 rounded-md backdrop-blur-sm">
              Gaitán en plaza pública, circa 1946.
            </p>
          </motion.div>

          {/* Laureano */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <img
              src="/imagenes/LaureanoG.png"
              alt="Laureano Gómez en los años 50"
              className="w-full h-72 object-cover"
            />
            <p className="absolute bottom-2 right-2 bg-black/50 text-white/90 text-[11px] italic px-2 py-1 rounded-md backdrop-blur-sm">
              Laureano Gómez en la década de los 50s. Tomada de El Tiempo.
            </p>
          </motion.div>
        </div>

        {/* ======= GRÁFICO PRINCIPAL DESTACADO ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full max-w-5xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white">
            <img
              src="/imagenes/graficoatlasDANE.png"
              alt="Gráfico de urbanización DANE"
              className="w-full max-h-[600px] object-contain p-4"
            />
            <p className="absolute bottom-4 right-4 bg-black/60 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Gráfico tomado del Atlas Estadístico Tomo I Demográfico por DANE,
              2012.
            </p>
          </div>

          {/* Pequeña explicación debajo del gráfico */}
          <p className="mt-6 text-center text-sm md:text-base text-gray-700 max-w-3xl">
            El gráfico evidencia el cambio demográfico que transformó la
            estructura económica del país: entre 1951 y 1973, la población urbana
            casi se triplicó, marcando el inicio de un nuevo modelo de
            desarrollo centrado en las ciudades.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
