import type { Metadata } from "next";

// La pagina es un componente cliente y desde ahi no se puede exportar
// `metadata`, asi que el titulo propio de la ruta vive en este layout.
// Sin esto las tres paginas compartian el mismo <title>, que es lo que se
// lee en la pestana, en el historial y en un resultado de busqueda.
export const metadata: Metadata = {
  title: "Plataforma — Un agente que razona y ejecuta | Codeflow",
  description:
    "Un agente de IA encadena pasos de razonamiento y se conecta a Slack, Drive, Notion y Canva.",
};

export default function LayoutPlataforma({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
