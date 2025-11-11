import React from "react";
import { motion } from "framer-motion";

const Section5: React.FC = () => {
  return (
    <section
      id="bogota"
      className="relative bg-gradient-to-b from-emerald-100/60 via-emerald-50 to-white text-gray-800 py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* ======= TÍTULO ======= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-900"
        >
          De campesinos a urbanos:{" "}
          <span className="text-emerald-700">la adaptación en la capital</span>
        </motion.h2>

        {/* ======= TEXTO NARRATIVO ======= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/90 border border-emerald-200 shadow-lg rounded-3xl p-8 md:p-12 text-justify leading-relaxed max-w-4xl backdrop-blur-sm"
        >
          <p className="mb-4 text-base md:text-lg text-gray-700">
            El cambio fue radical. En Bogotá, la familia pasó de una economía
            agrícola de subsistencia a insertarse en el mercado laboral urbano.
            Mi abuela y sus hermanas encontraron trabajo en talleres de
            confección y servicios domésticos; sus hijos, en cambio, pudieron
            acceder a educación secundaria y técnica, algo impensable en Monguí.
          </p>

          <p className="mb-4 text-base md:text-lg text-gray-700">
            Además, con el tiempo, la estabilidad en Bogotá permitió que la
            segunda generación —mi madre— completara sus estudios universitarios
            y dos maestrías, hecho que simboliza el ascenso social
            intergeneracional que acompañó el proceso de urbanización.
          </p>

          <p className="text-base md:text-lg text-gray-700">
            Estas transformaciones reflejan un proceso más amplio de movilidad
            social: el paso del trabajo familiar al asalariado, del autoconsumo
            al salario monetario. La experiencia familiar fue parte del proceso
            de industrialización ligera y expansión del sector servicios que
            caracterizó a la economía colombiana durante el Frente Nacional.
          </p>
        </motion.div>

        {/* ======= TABLA COMPARATIVA ======= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl overflow-x-auto"
        >
          <table className="min-w-full text-sm md:text-base border-collapse rounded-xl overflow-hidden shadow-md">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Monguí (1950)
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Bogotá (1960–1980)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800 divide-y divide-gray-200">
              <tr className="hover:bg-emerald-50 transition">
                <td className="px-4 py-3 font-medium">Ocupación familiar</td>
                <td className="px-4 py-3">Agricultura</td>
                <td className="px-4 py-3">Servicios y manufactura ligera</td>
              </tr>
              <tr className="hover:bg-emerald-50 transition">
                <td className="px-4 py-3 font-medium">Nivel educativo</td>
                <td className="px-4 py-3">Primaria incompleta</td>
                <td className="px-4 py-3">Secundaria o técnica</td>
              </tr>
              <tr className="hover:bg-emerald-50 transition">
                <td className="px-4 py-3 font-medium">Vivienda</td>
                <td className="px-4 py-3">Propia, en terreno rural</td>
                <td className="px-4 py-3">Arriendo en barrios periféricos</td>
              </tr>
              <tr className="hover:bg-emerald-50 transition">
                <td className="px-4 py-3 font-medium">Rol de la mujer</td>
                <td className="px-4 py-3">Doméstico y agrícola</td>
                <td className="px-4 py-3">Asalariado urbano</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* ======= GRÁFICO FINAL ======= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full max-w-5xl flex flex-col items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white/95 backdrop-blur-sm">
            <img
              src="/imagenes/crecimientopobbogota.png"
              alt="Crecimiento poblacional de Bogotá"
              className="w-full max-h-[550px] object-contain p-4"
            />
            <p className="absolute bottom-3 right-4 bg-black/50 text-white/90 text-[11px] italic px-3 py-1 rounded-md backdrop-blur-sm">
              Gráfico tomado de “Migración en Colombia: causas, efectos y
              estrategias de retorno” por Torres Franco, 2021.
            </p>
          </div>

          {/* Explicación final */}
          <p className="mt-6 text-center text-sm md:text-base text-gray-700 max-w-3xl">
            El crecimiento acelerado de la capital reflejó el impacto de la
            migración rural-urbana: una ciudad que se expandía en población,
            servicios y oportunidades, integrando a miles de familias como la
            mía en un nuevo proyecto de país.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
