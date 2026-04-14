import { Separator } from "@/components/ui/separator";
import { Globe, Play, Video, Link2, AtSign } from "lucide-react";

const redes = [
  { icon: AtSign, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: AtSign, label: "X / Twitter", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
];

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-umsa-red rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold font-heading">DEIU</span>
              </div>
              <span className="text-white font-heading font-semibold text-sm">
                DEIU — UMSA
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Departamento de Innovación y Emprendedurismo. Universidad Mayor de
              San Andrés. La Paz, Bolivia.
            </p>
            <p className="mt-4 text-xs text-gray-600 font-semibold uppercase tracking-widest">
              UMSA La Mejor
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white font-heading font-semibold text-sm mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <p className="text-white font-heading font-semibold text-sm mb-5">
              Redes Sociales
            </p>
            <div className="flex flex-col gap-3">
              {redes.map((red) => {
                const Icon = red.icon;
                return (
                  <a
                    key={red.label}
                    href={red.href}
                    aria-label={red.label}
                    className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
                  >
                    <Icon
                      className="w-4 h-4 group-hover:text-umsa-red transition-colors"
                      aria-hidden="true"
                    />
                    {red.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Departamento de Innovación y
            Emprendedurismo — UMSA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700 text-center">
            Built with{" "}
            <span className="text-gray-600">Claude Web Builder</span> by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
