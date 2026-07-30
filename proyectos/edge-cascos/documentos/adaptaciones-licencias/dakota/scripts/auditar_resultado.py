#!/usr/bin/env python3
"""
Auditoría visual de resultados — Familia 8 (Agente Auditor).

Arma un tríptico (checkpoint real / ilustración / resultado generado)
y crops con zoom de las zonas que se quieran auditar, con etiquetas,
para dejar evidencia visual del análisis junto al veredicto en texto.

Uso:
    python3 auditar_resultado.py \
        --checkpoint ruta/checkpoint.webp \
        --ilustracion ruta/ilustracion.webp \
        --resultado ruta/resultado.png \
        --salida ruta/salida/prefijo \
        --crop "0.28,0.42,0.72,0.78:zona central" \
        --crop "0.02,0.35,0.30,0.60:ala izquierda"

Cada --crop es opcional y repetible: "l,t,r,b:etiqueta" con l/t/r/b
como fracción (0-1) del ancho/alto de la imagen completa.
"""
import argparse
from PIL import Image, ImageDraw

ALTO_TRIPTICO = 700
ALTO_CROP = 500
COLOR_CHECKPOINT = (140, 200, 255)
COLOR_ILUSTRACION = (255, 180, 120)
COLOR_RESULTADO = (160, 255, 160)
COLOR_DEFECTO = (255, 120, 120)
FONDO = (18, 18, 18)


def _con_etiqueta(im, texto, color, alto_barra=40):
    out = Image.new("RGB", (im.width, im.height + alto_barra), FONDO)
    out.paste(im, (0, alto_barra))
    ImageDraw.Draw(out).text((10, 12), texto, fill=color)
    return out


def _redimensionar_alto(im, alto):
    ancho = int(im.width * alto / im.height)
    return im.resize((ancho, alto), Image.LANCZOS)


def armar_triptico(checkpoint_path, ilustracion_path, resultado_path, salida_path):
    a = _con_etiqueta(
        _redimensionar_alto(Image.open(checkpoint_path).convert("RGB"), ALTO_TRIPTICO),
        "1) CHECKPOINT REAL (autoridad de forma)", COLOR_CHECKPOINT,
    )
    b = _con_etiqueta(
        _redimensionar_alto(Image.open(ilustracion_path).convert("RGB"), ALTO_TRIPTICO),
        "2) ILUSTRACION (autoridad de color)", COLOR_ILUSTRACION,
    )
    c = _con_etiqueta(
        _redimensionar_alto(Image.open(resultado_path).convert("RGB"), ALTO_TRIPTICO),
        "3) RESULTADO GENERADO", COLOR_RESULTADO,
    )
    ancho_total = a.width + b.width + c.width + 40
    tri = Image.new("RGB", (ancho_total, ALTO_TRIPTICO + 40), FONDO)
    x = 0
    for im in (a, b, c):
        tri.paste(im, (x, 0))
        x += im.width + 20
    out_path = f"{salida_path}-TRIPTICO.png"
    tri.save(out_path)
    return out_path


def _crop_fraccion(im, l, t, r, b):
    w, h = im.size
    return im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


def armar_crop(checkpoint_path, resultado_path, box, etiqueta, salida_path, es_defecto=False):
    l, t, r, b = box
    chk = _crop_fraccion(Image.open(checkpoint_path).convert("RGB"), l, t, r, b)
    res = _crop_fraccion(Image.open(resultado_path).convert("RGB"), l, t, r, b)
    chk = _redimensionar_alto(chk, ALTO_CROP)
    res = _redimensionar_alto(res, ALTO_CROP)
    color_res = COLOR_DEFECTO if es_defecto else COLOR_RESULTADO
    chk = _con_etiqueta(chk, f"CHECKPOINT | {etiqueta}", COLOR_CHECKPOINT, 36)
    res = _con_etiqueta(res, f"RESULTADO | {etiqueta}", color_res, 36)
    ancho_total = chk.width + res.width + 20
    crop = Image.new("RGB", (ancho_total, ALTO_CROP + 36), FONDO)
    crop.paste(chk, (0, 0))
    crop.paste(res, (chk.width + 20, 0))
    slug = etiqueta.lower().replace(" ", "-")
    out_path = f"{salida_path}-CROP-{slug}.png"
    crop.save(out_path)
    return out_path


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--checkpoint", required=True)
    ap.add_argument("--ilustracion", required=True)
    ap.add_argument("--resultado", required=True)
    ap.add_argument("--salida", required=True, help="prefijo de salida, ej: resultados/8.6")
    ap.add_argument("--crop", action="append", default=[],
                     help='"l,t,r,b:etiqueta" repetible, fracciones 0-1')
    ap.add_argument("--defecto", action="append", default=[],
                     help="etiqueta de un --crop que marca un defecto (se resalta en rojo)")
    args = ap.parse_args()

    tri = armar_triptico(args.checkpoint, args.ilustracion, args.resultado, args.salida)
    print(f"Triptico: {tri}")

    for c in args.crop:
        coords, etiqueta = c.rsplit(":", 1)
        l, t, r, b = (float(x) for x in coords.split(","))
        es_defecto = etiqueta in args.defecto
        path = armar_crop(args.checkpoint, args.resultado, (l, t, r, b), etiqueta, args.salida, es_defecto)
        print(f"Crop [{etiqueta}]: {path}")


if __name__ == "__main__":
    main()
