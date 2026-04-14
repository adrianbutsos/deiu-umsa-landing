"use client";

import { motion } from "framer-motion";
import { Brain, Network, Handshake, Calendar } from "lucide-react";

const servicios = [
  {
    icon: Brain,
    titulo: "Talleres de Habilidades Blandas",
    descripcion:
      "Comunicación efectiva, liderazgo, negociación y resolución de conflictos. Competencias que marcan la diferencia entre un proyecto y un negocio real.",
    detalle: "Sesiones presenciales y en línea",
  },
  {
    icon: Network,
    titulo: "Red de Mentores",
    descripcion:
      "Acceso a empresarios y profesionales con experiencia que comparten lo que aprendieron en el camino. No teoría — práctica real, errores incluidos.",
    detalle: "Más de 30 mentores activos",
  },
  {
    icon: Handshake,
    titulo: "Conexión con Inversores",
    descripcion:
      "Presentamos tu proyecto a inversores bolivianos que buscan oportunidades locales. El nexo directo que ninguna incubadora estatal había construido antes.",
    detalle: "Pitch sessions mensuales",
  },
  {
    icon: Calendar,
    titulo: "Eventos de Networking",
    descripcion:
      "Ferias de emprendimiento, foros de innovación y encuentros con el sector privado. La sala donde los acuerdos reales comienzan con una conversación.",
    detalle: "Calendario activo todo el año",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="max-w-xl mb-10 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-umsa-red uppercase">
            Programas y Servicios
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-umsa-navy mt-3 mb-4">
            Lo que hacemos por los emprendedores bolivianos
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Cuatro pilares construidos para cubrir lo que más necesitan los
            emprendedores: formación, guía, capital y comunidad.
          </p>
        </div>

        {/* Grid de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {servicios.map((servicio, i) => {
            const Icon = servicio.icon;
            const isFirst = i === 0;
            return (
              <motion.div
                key={servicio.titulo}
                variants={itemVariants}
                className={`group rounded-xl p-5 sm:p-6 md:p-8 border transition-all duration-300 ${
                  isFirst
                    ? "bg-umsa-navy border-umsa-navy text-white"
                    : "bg-white border-gray-100 hover:border-umsa-navy hover:shadow-md"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors ${
                    isFirst
                      ? "bg-umsa-red"
                      : "bg-[#f4f7f9] group-hover:bg-umsa-navy"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                      isFirst
                        ? "text-white"
                        : "text-umsa-navy group-hover:text-white"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`font-heading text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 ${
                    isFirst ? "text-white" : "text-umsa-navy"
                  }`}
                >
                  {servicio.titulo}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-3 sm:mb-4 ${
                    isFirst ? "text-blue-200" : "text-gray-600"
                  }`}
                >
                  {servicio.descripcion}
                </p>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider text-umsa-red`}
                >
                  {servicio.detalle}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
