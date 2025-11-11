import React from "react";
import { motion } from "framer-motion";

const Section4: React.FC = () => {
  return (
    <section
      id="violencia"
      className="relative bg-gradient-to-b from-slate-50 via-gray-100/60 to-white text-gray-800 py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* ======= TÍTULO ======= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-900"
        >
          Violencia y exclusión social:{" "}
          <span className="text-rose-700">
            motores poco visibles de la migración rural-urbana
          </span>
        </motion.h2>

        {/* ======= CONTENIDO PRINCIPAL ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white border-l-4 border-rose-600 shadow-xl rounded-3xl p-8 md:p-12 text-justify leading-relaxed max-w-4xl"
        >
          <p className="mb-4 text-base md:text-lg text-gray-700">
            Aunque la migración de mi familia desde Monguí (Boyacá) hacia Bogotá
            se enmarca en el patrón nacional de desplazamiento campo → ciudad,
            su impulso no provino únicamente de homicidios masivos o de conflicto
            armado directo, como los que se registraron más fuerte y
            sostenidamente en otras regiones del país.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            En Colombia entre 1948 y los primeros años de los años sesenta, la
            tasa nacional de homicidios era ya significativa: en 1960 se ubicó
            cerca de 30 homicidios por cada 100.000 habitantes. Sin embargo, en
            Boyacá los registros entre 1946–60 muestran tasas que aunque elevadas
            para la época, eran comparativamente más bajas que en los “focos de
            conflicto”.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            Esto indica que la decisión de abandonar el campo no fue motivada
            exclusivamente por un estallido violento visible, que como Chacón y
            Sánchez (2003) señalan en Boyacá alcanzó su máximo justo en 1949,
            sino por la amenaza estructural de exclusión social, pérdida de
            estatus político y económica, y miedo al cambio de poder local. La
            polarización bipartidista —en la que el padre de mi abuela era líder
            conservador local— implicaba una lógica de “pertenencia” y
            “exclusión” que se volvió insostenible cuando la dinámica regional
            empezó a favorecer al liberalismo.
          </p>

          <p className="text-base md:text-lg text-gray-700">
            En ese sentido, la migración fue una estrategia preventiva: migrar a
            la ciudad significaba anticipar un riesgo de marginalidad, cambiar de
            modelo de vida, adoptar el trabajo asalariado urbano en lugar de la
            agricultura familiar, y buscar una reintegración social diferente.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-700">
            Así, la experiencia de mi abuela muestra que los motores de la
            migración rural-urbana pueden combinar violencia explícita, violencia
            simbólica y exclusión económica/política, y que esos procesos
            operaron desde los años cincuenta hasta los setenta, en paralelo con
            la urbanización del país.
          </p>
        </motion.div>

        {/* ======= GRÁFICO 1 ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full max-w-5xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white">
            <img
              src="/imagenes/graficatasahomicidio.png"
              alt="Tasa de homicidios en Colombia, 1946–1960"
              className="w-full max-h-[500px] object-contain p-4"
            />
            <p className="absolute bottom-3 right-4 bg-black/50 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Gráfico tomado de “¿Es Colombia un país violento?” por Guerrero y
              Fandiño-Losada, 2017.
            </p>
          </div>
        </motion.div>

        {/* ======= GRÁFICO 2 ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-5xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white">
            <img
              src="/imagenes/homicidiosporregion.png"
              alt="Distribución regional de homicidios 1946–1963"
              className="w-full max-h-[550px] object-contain p-4"
            />
            <p className="absolute bottom-3 right-4 bg-black/50 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Gráfico tomado de “Polarización política y violencia durante ‘La
              Violencia’ (1946–1963)” por Chacón y Sánchez, 2003.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
