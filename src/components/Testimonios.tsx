"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonios = [
  {
    texto:
      "El programa de habilidades blandas cambió la forma en que me presento ante los inversores. Antes tenía el producto. Ahora sé cómo comunicarlo.",
    nombre: "Marcela Quispe Flores",
    cargo: "Fundadora, AgroTech Bolivia",
    iniciales: "MQ",
  },
  {
    texto:
      "Gracias al evento de networking del DEIU conocí al inversor que hoy financia mi empresa. Esa conexión no habría ocurrido de otra manera.",
    nombre: "Carlos Mamani Chávez",
    cargo: "CEO, LogiRed S.R.L.",
    iniciales: "CM",
  },
  {
    texto:
      "Como inversor, el DEIU me da acceso a proyectos locales con potencial real. La calidad de los emprendedores que forman habla por sí sola.",
    nombre: "Roberto Sánchez Vargas",
    cargo: "Empresario e Inversor Ángel",
    iniciales: "RS",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-umsa-red uppercase">
            Lo que dicen
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-umsa-navy mt-3 mb-4">
            Voces del ecosistema
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Emprendedores que crecieron y empresarios que encontraron lo que
            buscaban.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className={`rounded-2xl p-8 flex flex-col ${
                i === 1
                  ? "bg-umsa-navy text-white"
                  : "bg-[#f4f7f9] border border-gray-100"
              }`}
            >
              <Quote
                className={`w-8 h-8 mb-5 ${
                  i === 1 ? "text-umsa-red" : "text-umsa-navy opacity-30"
                }`}
                aria-hidden="true"
              />
              <p
                className={`text-sm leading-relaxed flex-1 mb-6 ${
                  i === 1 ? "text-blue-100" : "text-gray-700"
                }`}
              >
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading flex-shrink-0 ${
                    i === 1
                      ? "bg-umsa-red text-white"
                      : "bg-umsa-navy text-white"
                  }`}
                >
                  {t.iniciales}
                </div>
                <div>
                  <p
                    className={`text-sm font-bold font-heading ${
                      i === 1 ? "text-white" : "text-umsa-navy"
                    }`}
                  >
                    {t.nombre}
                  </p>
                  <p
                    className={`text-xs ${
                      i === 1 ? "text-blue-300" : "text-gray-500"
                    }`}
                  >
                    {t.cargo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
