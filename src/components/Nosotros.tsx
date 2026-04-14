"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Globe } from "lucide-react";

const valores = [
  {
    icon: GraduationCap,
    titulo: "Respaldo Académico",
    texto:
      "Somos parte de la Universidad Mayor de San Andrés, la institución de educación superior más grande de Bolivia. Eso nos da acceso, credibilidad y responsabilidad.",
  },
  {
    icon: Target,
    titulo: "Enfoque Práctico",
    texto:
      "No enseñamos a emprender desde teorías. Trabajamos con casos reales, mentores activos y problemas bolivianos con soluciones bolivianas.",
  },
  {
    icon: Globe,
    titulo: "Visión Nacional",
    texto:
      "El ecosistema emprendedor boliviano necesita una voz institucional. Somos ese nexo entre la academia, el sector privado y los emprendedores.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-[#f4f7f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-widest text-umsa-red uppercase">
              Quiénes somos
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-umsa-navy mt-3 mb-5 sm:mb-6">
              El departamento que Bolivia necesitaba
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              El Departamento de Innovación y Emprendedurismo nació con un
              propósito claro: hacer que el talento boliviano no se quede sin
              recursos ni sin conexiones.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Somos el puente entre los emprendedores que tienen ideas y los
              empresarios que buscan proyectos en qué creer. Y hacemos eso desde
              adentro de la universidad pública más grande del país.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-umsa-navy font-semibold text-sm border-b-2 border-umsa-red pb-0.5 hover:text-umsa-red transition-colors"
            >
              Conocer más sobre el departamento
            </a>
          </motion.div>

          {/* Valores derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {valores.map((valor) => {
              const Icon = valor.icon;
              return (
                <div
                  key={valor.titulo}
                  className="flex gap-5 bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-umsa-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-umsa-navy mb-1">
                      {valor.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {valor.texto}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
