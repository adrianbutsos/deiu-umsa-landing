import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DEIU — Departamento de Innovación y Emprendedurismo | UMSA",
  description:
    "Desarrollamos las habilidades de los emprendedores bolivianos y los conectamos con inversores. Parte de la Universidad Mayor de San Andrés.",
  keywords: [
    "emprendimiento Bolivia",
    "startups bolivianas",
    "innovación UMSA",
    "inversores Bolivia",
    "habilidades blandas emprendedores",
    "networking emprendimiento",
  ],
  openGraph: {
    title: "DEIU — Departamento de Innovación y Emprendedurismo | UMSA",
    description:
      "Desarrollamos las habilidades de los emprendedores bolivianos y los conectamos con inversores.",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
