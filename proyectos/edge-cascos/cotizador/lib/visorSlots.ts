// Prototipo: coordenadas calibradas manualmente sobre las fotos reales de
// Simulacion 6a (Bob Esponja) y 6b (Godfather) — mismo molde/angulo de
// camara, por eso la ranura del visor cae casi en el mismo lugar en ambas.
// Formato: poligono en PORCENTAJE del ancho/alto de la imagen (0-100),
// para que funcione igual sin importar el tamaño real del archivo.

export interface RanuraVisor {
  fotoBase: string;
  nombreLicencia: string;
  poligonoVisor: [number, number][]; // [x%, y%]
}

export const RANURAS_VISOR: RanuraVisor[] = [
  {
    fotoBase: "/prototipo/bob-esponja.jpg",
    nombreLicencia: "Bob Esponja",
    poligonoVisor: [
      [14, 88],
      [13, 46],
      [24, 36],
      [45, 34],
      [68, 45],
      [69, 90],
    ],
  },
  {
    fotoBase: "/prototipo/godfather.jpg",
    nombreLicencia: "Godfather",
    poligonoVisor: [
      [15, 88],
      [14, 44],
      [25, 33],
      [46, 31],
      [69, 42],
      [70, 90],
    ],
  },
];

export function poligonoACss(poligono: [number, number][]): string {
  return `polygon(${poligono.map(([x, y]) => `${x}% ${y}%`).join(", ")})`;
}

export interface VisorVariante {
  id: string;
  nombre: string;
  colorOverlay: string; // color CSS aplicado como tinte sobre la ranura
  opacidad: number;
}

export const VISOR_VARIANTES: VisorVariante[] = [
  { id: "clear", nombre: "Transparente (original)", colorOverlay: "transparent", opacidad: 0 },
  { id: "ahumado", nombre: "Ahumado", colorOverlay: "#0B0D10", opacidad: 0.55 },
  { id: "espejado-dorado", nombre: "Espejado dorado", colorOverlay: "#D4A94A", opacidad: 0.45 },
  { id: "azul", nombre: "Azul", colorOverlay: "#2B6CB0", opacidad: 0.4 },
];
