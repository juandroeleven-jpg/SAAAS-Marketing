import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flujos — Herramientas conectadas | Codeflow",
  description:
    "Seis herramientas conectadas, corriendo sin intervención y sin pasos manuales por ejecución.",
};

export default function LayoutFlujos({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
