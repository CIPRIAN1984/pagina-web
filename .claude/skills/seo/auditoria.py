#!/usr/bin/env python3
"""Revisión técnica de SEO de la web publicada. Solo lee; no cambia nada.

Uso: python3 .claude/skills/seo/auditoria.py [--json]
Sale con código 1 si encuentra algún problema GRAVE.
"""
import json
import re
import sys
import os
import time
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser

# SEO_BASE solo para probar la auditoría contra una copia local rota a propósito.
BASE = os.environ.get("SEO_BASE", "https://www.itacajiujitsu.com/")
VERIFICACION = "google2a711415f28faa26.html"
# Rutas internas que la web no debería servir. Hoy sí las sirve (pendiente);
# se informa como AVISO, no como GRAVE, hasta que se cierre.
INTERNAS = ["CLAUDE.md", "DECISIONS.md", ".claude/settings.json", "docs/hoja-de-calculo.md"]

hallazgos = []


def anotar(gravedad, que, detalle=""):
    hallazgos.append({"gravedad": gravedad, "que": que, "detalle": detalle})


def pedir(url, metodo="GET", seguir=True):
    req = urllib.request.Request(url, method=metodo, headers={"User-Agent": "itaca-seo-auditoria/1"})
    inicio = time.time()
    try:
        if not seguir:
            class NoSeguir(urllib.request.HTTPRedirectHandler):
                def redirect_request(self, *a, **k):
                    return None
            abre = urllib.request.build_opener(NoSeguir).open
        else:
            abre = urllib.request.urlopen
        with abre(req, timeout=30) as r:
            cuerpo = r.read() if metodo == "GET" else b""
            return r.status, dict(r.headers), cuerpo, time.time() - inicio
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers or {}), b"", time.time() - inicio
    except Exception as e:  # red caída, DNS, TLS
        return 0, {}, str(e).encode(), time.time() - inicio


class Lector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.titulo, self._en_titulo = "", False
        self.metas, self.links, self.imgs, self.anclas = [], [], [], []
        self.h1, self._en_h1, self.html_lang = [], False, None
        self.jsonld, self._en_jsonld, self._buf = [], False, ""
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "html":
            self.html_lang = a.get("lang")
        elif tag == "title":
            self._en_titulo = True
        elif tag == "meta":
            self.metas.append(a)
        elif tag == "link":
            self.links.append(a)
        elif tag == "img":
            self.imgs.append(a)
        elif tag == "a":
            self.anclas.append(a)
        elif tag == "h1":
            self._en_h1 = True
            self.h1.append("")
        elif tag == "script" and (a.get("type") or "").lower() == "application/ld+json":
            self._en_jsonld, self._buf = True, ""

    def handle_endtag(self, tag):
        if tag == "title":
            self._en_titulo = False
        elif tag == "h1":
            self._en_h1 = False
        elif tag == "script" and self._en_jsonld:
            self.jsonld.append(self._buf)
            self._en_jsonld = False

    def handle_data(self, data):
        if self._en_titulo:
            self.titulo += data
        if self._en_h1:
            self.h1[-1] += data
        if self._en_jsonld:
            self._buf += data


def meta(lector, **filtro):
    for m in lector.metas:
        if all((m.get(k) or "").lower() == v.lower() for k, v in filtro.items()):
            return m.get("content") or ""
    return None


def revisar_portada():
    cod, cab, cuerpo, t = pedir(BASE)
    if cod != 200:
        anotar("GRAVE", "La portada no responde bien", f"HTTP {cod}")
        return None
    if t > 3:
        anotar("AVISO", "La portada tarda en responder", f"{t:.1f} s")
    html = cuerpo.decode("utf-8", "replace")
    lec = Lector()
    lec.feed(html)
    lec.html = html

    titulo = re.sub(r"\s+", " ", lec.titulo).strip()
    if not titulo:
        anotar("GRAVE", "La portada no tiene título")
    elif not (30 <= len(titulo) <= 65):
        anotar("AVISO", "Título fuera del largo recomendado (30-65)", f"{len(titulo)} caracteres: {titulo}")

    desc = meta(lec, name="description")
    if not desc:
        anotar("GRAVE", "Falta la descripción (meta description)")
    elif not (70 <= len(desc) <= 165):
        anotar("AVISO", "Descripción fuera del largo recomendado (70-165)", f"{len(desc)} caracteres")

    if not lec.html_lang:
        anotar("AVISO", "Falta el idioma en <html lang>")
    vp = meta(lec, name="viewport") or ""
    if "width=device-width" not in vp:
        anotar("GRAVE", "El viewport no es width=device-width", vp)
    rob = (meta(lec, name="robots") or "").lower()
    if "noindex" in rob:
        anotar("GRAVE", "La portada lleva noindex: Google no la mostraría", rob)

    canon = [l.get("href") for l in lec.links if (l.get("rel") or "").lower() == "canonical"]
    if not canon:
        anotar("AVISO", "Falta la etiqueta canonical")
    elif canon[0] != BASE:
        anotar("GRAVE", "La canonical no apunta a la dirección principal", canon[0])

    if len(lec.h1) != 1:
        anotar("AVISO", "La portada debería tener exactamente un H1", f"tiene {len(lec.h1)}")

    for prop in ("og:title", "og:description", "og:image"):
        if meta(lec, property=prop) is None:
            anotar("AVISO", f"Falta {prop} (vista previa al compartir en WhatsApp/Instagram)")

    if not lec.jsonld:
        anotar("AVISO", "No hay datos estructurados (JSON-LD) de negocio local")
    for bloque in lec.jsonld:
        try:
            json.loads(bloque)
        except Exception as e:
            anotar("GRAVE", "Un bloque de datos estructurados no es JSON válido", str(e)[:120])

    sin_alt = [i.get("src") for i in lec.imgs if i.get("alt") is None]
    if sin_alt:
        anotar("AVISO", "Imágenes sin texto alternativo", ", ".join(sin_alt[:5]))

    for a in lec.anclas:
        h = a.get("href") or ""
        if h.startswith("#") and len(h) > 1 and h[1:] not in lec.ids:
            anotar("AVISO", "Enlace interno a una sección que no existe", h)
    return lec


def revisar_recursos(lec):
    vistos = set()
    candidatos = [i.get("src") for i in lec.imgs] + [l.get("href") for l in lec.links if (l.get("rel") or "").lower() in ("icon", "apple-touch-icon", "stylesheet", "manifest")]
    candidatos += [a.get("href") for a in lec.anclas]
    # Las fotos del carrusel y los vídeos se cargan desde el JavaScript, no
    # desde <img>: sin esto, una foto renombrada se rompería sin que salte nada.
    sin_comentarios = re.sub(r"<!--[\s\S]*?-->", "", lec.html)  # hay plantillas comentadas con fotos de ejemplo
    candidatos += re.findall(r"(?:images|videos)/[\w./-]+\.(?:webp|jpe?g|png|gif|svg|mp4|webm)", sin_comentarios)
    for c in candidatos:
        if not c or c.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        url = urllib.parse.urljoin(BASE, c)
        if urllib.parse.urlparse(url).netloc != urllib.parse.urlparse(BASE).netloc or url in vistos:
            continue
        vistos.add(url)
        cod, cab, cuerpo, _ = pedir(url)
        if cod != 200:
            anotar("GRAVE", "Un enlace o archivo de la web no carga", f"{url} → HTTP {cod}")
            continue
        tipo = (cab.get("Content-Type") or cab.get("content-type") or "")
        if tipo.startswith("image/") and len(cuerpo) > 400 * 1024:
            anotar("AVISO", "Imagen pesada (más de 400 KB)", f"{url} → {len(cuerpo)//1024} KB")


def revisar_estructura():
    cod, _, cuerpo, _ = pedir(BASE + "robots.txt")
    if cod != 200:
        anotar("GRAVE", "robots.txt no responde", f"HTTP {cod}")
    else:
        txt = cuerpo.decode("utf-8", "replace")
        if re.search(r"(?im)^\s*disallow:\s*/\s*$", txt):
            anotar("GRAVE", "robots.txt bloquea toda la web a Google")
        if "sitemap:" not in txt.lower():
            anotar("AVISO", "robots.txt no indica dónde está el sitemap")

    cod, _, cuerpo, _ = pedir(BASE + "sitemap.xml")
    if cod != 200:
        anotar("GRAVE", "sitemap.xml no responde", f"HTTP {cod}")
    else:
        urls = re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", cuerpo.decode("utf-8", "replace"))
        if not urls:
            anotar("GRAVE", "El sitemap no contiene ninguna dirección")
        for u in urls:
            c, _, _, _ = pedir(u)
            if c != 200:
                anotar("GRAVE", "Una dirección del sitemap no carga", f"{u} → HTTP {c}")

    cod, _, cuerpo, _ = pedir(BASE + VERIFICACION)
    if cod != 200 or VERIFICACION not in cuerpo.decode("utf-8", "replace"):
        anotar("GRAVE", "Falta el archivo de verificación de Search Console: Google dejará de dar datos", f"HTTP {cod}")

    for origen in ("https://itacajiujitsu.com/", "http://www.itacajiujitsu.com/"):
        cod, cab, _, _ = pedir(origen, seguir=False)
        destino = cab.get("Location") or cab.get("location") or ""
        if cod not in (301, 308) or destino.rstrip("/") + "/" != BASE:
            anotar("AVISO", "Una variante de la dirección no redirige de forma permanente a la principal", f"{origen} → {cod} {destino}")

    for ruta in INTERNAS:
        cod, _, _, _ = pedir(BASE + ruta)
        if cod == 200:
            anotar("AVISO", "La web sirve un archivo interno del proyecto", ruta)


def main():
    lec = revisar_portada()
    if lec:
        revisar_recursos(lec)
    revisar_estructura()
    graves = [h for h in hallazgos if h["gravedad"] == "GRAVE"]
    if "--json" in sys.argv:
        print(json.dumps({"web": BASE, "hallazgos": hallazgos}, ensure_ascii=False, indent=2))
    else:
        print(f"Revisión de {BASE}: {len(graves)} graves, {len(hallazgos) - len(graves)} avisos")
        for h in hallazgos:
            print(f"  [{h['gravedad']}] {h['que']}" + (f" — {h['detalle']}" if h["detalle"] else ""))
        if not hallazgos:
            print("  Todo en orden.")
    sys.exit(1 if graves else 0)


if __name__ == "__main__":
    main()
