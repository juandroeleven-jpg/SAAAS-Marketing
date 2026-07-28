import { NextResponse, type NextRequest } from "next/server";

/**
 * Puerta de acceso para /hub (Lead Hub + informe de viabilidad).
 *
 * Estas paginas contienen datos que NO deben ser publicos: nombres de empresas
 * prospecto con su puntuacion, cuales se descartaron y los mensajes redactados
 * sin enviar. La landing es publica; esta ruta no.
 *
 * Autenticacion basica HTTP, que es lo unico que se puede hacer sin servidor
 * propio ni base de datos. La clave vive en la variable de entorno
 * CLAVE_INFORME (Vercel: Settings -> Environment Variables).
 *
 * FALLA CERRADO a proposito: si la variable no esta configurada, la ruta
 * devuelve 503 en vez de quedar abierta. Un despliegue mal configurado tiene
 * que romperse, no filtrar.
 */
export function middleware(req: NextRequest) {
  const esperada = process.env.CLAVE_INFORME;

  if (!esperada) {
    return new NextResponse(
      "No disponible: falta configurar CLAVE_INFORME.",
      { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }

  const cabecera = req.headers.get("authorization");
  if (cabecera?.startsWith("Basic ")) {
    // atob existe en el runtime edge; Buffer no.
    const [, clave] = atob(cabecera.slice(6)).split(":");
    // Comparacion de longitud constante: sin esto, el tiempo de respuesta
    // filtra cuantos caracteres iniciales son correctos.
    if (clave && iguales(clave, esperada)) return NextResponse.next();
  }

  return new NextResponse("Acceso restringido", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Informe", charset="UTF-8"' },
  });
}

function iguales(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let dif = 0;
  for (let i = 0; i < a.length; i++) dif |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return dif === 0;
}

// Solo el hub interno. La landing sigue siendo publica.
// `:path*` con asterisco cubre tambien la ruta sin segmentos, o sea /hub.
export const config = { matcher: ["/hub/:path*"] };
