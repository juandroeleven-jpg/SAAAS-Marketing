import type { Metadata } from "next";
import "./globals.css";
import ProveedorMovimiento from "@/components/ProveedorMovimiento";

export const metadata: Metadata = {
  title: "Codeflow — Automatización e IA aplicada",
  description:
    "Sistemas de IA y automatización con evidencia real: Copper Group/1HVAC, EDGE Helmet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-display antialiased">
        <ProveedorMovimiento>{children}</ProveedorMovimiento>
      </body>
    </html>
  );
}
