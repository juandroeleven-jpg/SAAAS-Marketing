/**
 * Reloj monotono compartido por todas las escenas 3D, en segundos.
 *
 * Por que NO se usa `state.clock` de react-three-fiber: su store REINICIA el
 * reloj cada vez que cambia `frameloop` (ver `setFrameloop` en
 * @react-three/fiber 8.18.0 -- hace `clock.stop(); clock.elapsedTime = 0` y,
 * al volver a arrancar, otra vez `clock.elapsedTime = 0`).
 *
 * Las tres escenas pasan a `frameloop="never"` mientras el usuario se
 * desplaza y vuelven a dibujar al parar, asi que con `state.clock` el tiempo
 * caia a cero en CADA scroll. Eso producia tres fallos a la vez:
 *
 *  - la animacion de entrada se reproducia de nuevo (el tiempo transcurrido
 *    salia negativo y el objeto se iba fuera del encuadre para volver a
 *    entrar),
 *  - el limitador de fps de las texturas comparaba contra una marca de tiempo
 *    del futuro y dejaba de redibujar hasta que el reloj la alcanzara -- el
 *    flujo se congelaba durante decenas de segundos,
 *  - las tres capas saltaban de fase en el mismo frame, que se leia como un
 *    tiron.
 *
 * `performance.now()` no retrocede nunca y no depende de si se esta
 * dibujando, que es justo el comportamiento que las escenas ya asumian: al
 * retomar el dibujo la animacion continua donde iba en vez de reiniciarse.
 */
export function ahora(): number {
  return performance.now() / 1000;
}
