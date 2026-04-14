"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-umsa-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-widest text-umsa-red uppercase">
              Contacto
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-blue-200 leading-relaxed mb-10">
              Seas emprendedor buscando formación o inversor buscando proyectos,
              estamos disponibles. Escríbenos y respondemos en menos de 48 horas
              hábiles.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:agbutron1+deiu@umsa.bo"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-umsa-red transition-colors">
                  <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                    Correo electrónico
                  </p>
                  <p className="text-white font-semibold">agbutron1+deiu@umsa.bo</p>
                </div>
              </a>

              <a
                href="https://wa.me/59178865318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-umsa-red transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-white font-semibold">
                    +591 78865318
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                    Ubicación
                  </p>
                  <p className="text-white font-semibold">
                    Universidad Mayor de San Andrés
                  </p>
                  <p className="text-blue-300 text-sm">La Paz, Bolivia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-300 uppercase tracking-wider mb-0.5">
                    Horario de atención
                  </p>
                  <p className="text-white font-semibold">
                    Lunes a viernes, 8:00 – 17:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-bold text-umsa-navy mb-6">
              Envíanos un mensaje
            </h3>
            {/* TODO: Reemplazar action con ID de Formspree cuando esté disponible */}
            <form
              action="mailto:deiu@umsa.bo"
              method="get"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ej. María Quispe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-umsa-navy focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-umsa-navy focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="tipo"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Soy
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-umsa-navy focus:border-transparent transition bg-white"
                >
                  <option value="">Seleccionar...</option>
                  <option value="emprendedor">Emprendedor</option>
                  <option value="inversor">Inversor / Empresario</option>
                  <option value="estudiante">Estudiante universitario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-umsa-navy focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-umsa-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
