import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDGE Cascos — Cotizador",
  description: "Arma tu casco EDGE y obtén tu cotización al instante.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-display">{children}</body>
    </html>
  );
}
