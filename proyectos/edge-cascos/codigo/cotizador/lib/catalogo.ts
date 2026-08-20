import { Modelo } from "./types";

// Catálogo ficticio para Fase 1 (imagen estática por colorway).
// precioBase y demás valores son placeholders — no son precios reales de EDGE.
export const CATALOGO: Modelo[] = [
  {
    id: "stellar",
    nombre: "EDGE Stellar",
    precioBase: 189,
    tallesDisponibles: ["S", "M", "L", "XL"],
    colorways: [
      {
        id: "stellar-black",
        nombre: "Black Matte",
        hex: "#1A1C1F",
        premium: false,
        imagenUrl: "/cascos/stellar-black.png",
      },
      {
        id: "stellar-godfather",
        nombre: "Godfather Edition",
        hex: "#6B1414",
        premium: true,
        imagenUrl: "/cascos/stellar-godfather.png",
      },
    ],
  },
  {
    id: "top-gun",
    nombre: "EDGE Top Gun",
    precioBase: 219,
    tallesDisponibles: ["M", "L", "XL"],
    colorways: [
      {
        id: "topgun-olive",
        nombre: "Olive Drab",
        hex: "#5A5F42",
        premium: false,
        imagenUrl: "/cascos/topgun-olive.png",
      },
      {
        id: "topgun-chrome",
        nombre: "Chrome Limited",
        hex: "#C9CDD1",
        premium: true,
        imagenUrl: "/cascos/topgun-chrome.png",
      },
    ],
  },
  {
    id: "padrino",
    nombre: "EDGE Padrino",
    precioBase: 199,
    tallesDisponibles: ["S", "M", "L"],
    colorways: [
      {
        id: "padrino-black",
        nombre: "Family Black",
        hex: "#0F0F10",
        premium: false,
        imagenUrl: "/cascos/padrino-black.png",
      },
    ],
  },
];
