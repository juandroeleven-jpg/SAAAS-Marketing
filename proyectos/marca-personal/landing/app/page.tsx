import HeroVidrio from "@/components/HeroVidrio";
import SeccionAgentes from "@/components/SeccionAgentes";
import SeccionTarjetas from "@/components/SeccionTarjetas";

// Una sola pagina, tres secciones a las que se llega haciendo scroll. Los
// botones del hero ya no navegan a otra ruta: son anclas (#agentes, #flujos)
// y el desplazamiento suave lo da `scroll-behavior: smooth` de globals.css.
//
// Cada seccion trae su propio fondo y ocupa la altura de la ventana, asi que
// el recorrido se lee como tres pantallas encadenadas y no como un documento
// largo.
export default function Home() {
  return (
    <main>
      <HeroVidrio />
      <SeccionAgentes />
      <SeccionTarjetas />
    </main>
  );
}
