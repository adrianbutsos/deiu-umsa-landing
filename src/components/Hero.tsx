"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, BookOpen } from "lucide-react";

const stats = [
  { value: "200+", label: "Emprendedores formados" },
  { value: "50+", label: "Inversores en la red" },
  { value: "30+", label: "Eventos realizados" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Fondo geométrico decorativo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f4f7f9]" />
        <div className="absolute top-16 right-0 w-px h-48 bg-umsa-red opacity-40" />
        <div className="absolute bottom-0 left-0 w-48 h-px bg-umsa-navy opacity-20" />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: "#024966" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-umsa-red uppercase mb-6">
            UMSA La Mejor · Departamento de Innovación
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-umsa-navy leading-tight mb-5 sm:mb-6">
            Donde los emprendedores{" "}
            <span className="text-umsa-red">se convierten</span>{" "}
            en líderes
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            Desarrollamos las habilidades que los libros no enseñan. Conectamos
            emprendedores bolivianos con los inversores que buscan el talento
            local. Todo desde la Universidad Mayor de San Andrés.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4" id="postular">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-umsa-red text-white font-semibold rounded hover:bg-red-700 transition-colors text-sm"
            >
              Postular al programa
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-umsa-navy text-umsa-navy font-semibold rounded hover:bg-[#f4f7f9] transition-colors text-sm"
            >
              Ver programas
            </a>
          </div>
        </motion.div>

        {/* Panel derecho con stats */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Tarjeta principal */}
          <div className="bg-umsa-navy rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-umsa-red rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold">
                  Plataforma de Formación
                </h2>
                <p className="text-blue-200 text-sm mt-1">
                  Accede a talleres, mentorías y recursos
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-umsa-red">
                    {stat.value}
                  </p>
                  <p className="text-xs text-blue-200 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjetas secundarias */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f4f7f9] rounded-xl p-5 border border-gray-100">
              <Users className="w-6 h-6 text-umsa-navy mb-3" aria-hidden="true" />
              <p className="font-heading font-semibold text-umsa-navy text-sm">
                Red de Networking
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Inversores y empresarios activos
              </p>
            </div>
            <div className="bg-[#f4f7f9] rounded-xl p-5 border border-gray-100">
              <BookOpen className="w-6 h-6 text-umsa-navy mb-3" aria-hidden="true" />
              <p className="font-heading font-semibold text-umsa-navy text-sm">
                Habilidades Blandas
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Talleres prácticos y mentorías
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
