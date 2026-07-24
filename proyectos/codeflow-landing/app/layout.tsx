import type { Metadata } from "next";
import { sora } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "[MARCA] — Sé parte de la 4ta revolución industrial",
  description:
    "Agentes de IA para Business Intelligence, automatización comercial y creación de contenido.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "[MARCA] — Sé parte de la 4ta revolución industrial",
    description:
      "Agentes de IA para Business Intelligence, automatización comercial y creación de contenido.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[MARCA] — Sé parte de la 4ta revolución industrial",
    description:
      "Agentes de IA para Business Intelligence, automatización comercial y creación de contenido.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
