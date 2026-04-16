"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-umsa-navy rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold font-heading">DEIU</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-umsa-navy font-heading leading-tight">
              Innovación y Emprendedurismo
            </p>
            <p className="text-xs text-gray-500">UMSA La Mejor</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-umsa-navy transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#postular"
          className="hidden md:inline-flex items-center px-5 py-2 bg-umsa-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
        >
          Postular ahora
        </a>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-umsa-navy rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DEIU</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-umsa-navy">DEIU</p>
                  <p className="text-xs text-gray-500">UMSA La Mejor</p>
                </div>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base text-gray-700 hover:text-umsa-navy transition-colors font-medium block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#postular"
                className="inline-flex items-center justify-center px-5 py-3 bg-umsa-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
              >
                Postular ahora
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
