#!/usr/bin/env python3
"""Lee los datos de Google Search Console de la web con una cuenta de servicio.

Solo lectura (alcance webmasters.readonly): no puede cambiar nada en Google.
La llave NO vive en el repositorio: se lee de la variable de entorno
GSC_SERVICE_ACCOUNT_JSON, que Cipri pone una vez en la configuración del
entorno. Nunca se pide por el chat.

Uso: python3 .claude/skills/seo/search_console.py [--json]
Códigos de salida: 0 bien · 2 sin llave configurada · 3 Google rechaza el acceso.
"""
import base64
import datetime as dt
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request

SITIO = "https://www.itacajiujitsu.com/"
VARIABLE = "GSC_SERVICE_ACCOUNT_JSON"
ALCANCE = "https://www.googleapis.com/auth/webmasters.readonly"
API = "https://searchconsole.googleapis.com"


class SinAcceso(Exception):
    pass


def credenciales():
    bruto = os.environ.get(VARIABLE, "").strip()
    if not bruto:
        return None
    if not bruto.startswith("{"):  # por si se guardó en base64
        bruto = base64.b64decode(bruto).decode("utf-8")
    # Si al pegarlo se juntaron las líneas, el JSON sigue siendo válido: la
    # clave privada usa "\n" escrito, no saltos de línea reales.
    return json.loads(bruto)


def b64url(datos):
    return base64.urlsafe_b64encode(datos).rstrip(b"=").decode()


def firmar(mensaje, clave_pem):
    # openssl y no la librería cryptography: en estos entornos la instalada
    # revienta al importarla (panic de pyo3, no un ImportError que se pueda
    # capturar). openssl viene con cualquier sistema.
    with tempfile.NamedTemporaryFile("w", suffix=".pem", delete=False) as f:
        f.write(clave_pem)
        ruta = f.name
    try:
        os.chmod(ruta, 0o600)
        return subprocess.run(["openssl", "dgst", "-sha256", "-sign", ruta],
                              input=mensaje, capture_output=True, check=True).stdout
    finally:
        os.unlink(ruta)


def token(cred):
    ahora = int(time.time())
    cab = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    carga = b64url(json.dumps({
        "iss": cred["client_email"], "scope": ALCANCE,
        "aud": "https://oauth2.googleapis.com/token", "iat": ahora, "exp": ahora + 3600,
    }).encode())
    firma = b64url(firmar(f"{cab}.{carga}".encode(), cred["private_key"]))
    datos = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": f"{cab}.{carga}.{firma}",
    }).encode()
    try:
        with urllib.request.urlopen("https://oauth2.googleapis.com/token", data=datos, timeout=30) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        raise SinAcceso(f"Google rechaza la llave ({e.code}): {e.read().decode()[:300]}")


def llamar(tok, metodo, ruta, cuerpo=None):
    req = urllib.request.Request(API + ruta, method=metodo,
                                 data=json.dumps(cuerpo).encode() if cuerpo is not None else None,
                                 headers={"Authorization": f"Bearer {tok}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        texto = e.read().decode()[:400]
        if e.code in (401, 403):
            raise SinAcceso(f"Sin permiso en Search Console ({e.code}). ¿Está la cuenta de servicio añadida como usuario de {SITIO}? {texto}")
        raise RuntimeError(f"{metodo} {ruta} → {e.code}: {texto}")


def consulta(tok, desde, hasta, dimensiones=None, filas=25):
    sitio = urllib.parse.quote(SITIO, safe="")
    cuerpo = {"startDate": desde.isoformat(), "endDate": hasta.isoformat(), "rowLimit": filas, "type": "web"}
    if dimensiones:
        cuerpo["dimensions"] = dimensiones
    return llamar(tok, "POST", f"/webmasters/v3/sites/{sitio}/searchAnalytics/query", cuerpo).get("rows", [])


def resumen(filas):
    if not filas:
        return {"clics": 0, "impresiones": 0, "ctr": 0.0, "posicion": None}
    f = filas[0]
    return {"clics": f["clicks"], "impresiones": f["impressions"],
            "ctr": round(f["ctr"] * 100, 2), "posicion": round(f["position"], 1)}


def main():
    cred = credenciales()
    if cred is None:
        print(f"SIN LLAVE: la variable {VARIABLE} no está configurada en el entorno. "
              "No se pueden leer datos de Search Console todavía.")
        sys.exit(2)
    try:
        tok = token(cred)
        # Search Console publica los datos con 2-3 días de retraso: se corta ahí
        # para no comparar días incompletos con días cerrados.
        fin = dt.date.today() - dt.timedelta(days=3)
        ini = fin - dt.timedelta(days=27)
        fin_ant, ini_ant = ini - dt.timedelta(days=1), ini - dt.timedelta(days=28)

        sitio = urllib.parse.quote(SITIO, safe="")
        sitemaps = llamar(tok, "GET", f"/webmasters/v3/sites/{sitio}/sitemaps").get("sitemap", [])
        indexacion = []
        for url in (SITIO, SITIO + "legal/privacidad.html", SITIO + "legal/terminos.html"):
            r = llamar(tok, "POST", "/v1/urlInspection/index:inspect", {"inspectionUrl": url, "siteUrl": SITIO})
            ir = r.get("inspectionResult", {}).get("indexStatusResult", {})
            indexacion.append({"url": url, "veredicto": ir.get("verdict"), "estado": ir.get("coverageState"),
                               "ultimo_rastreo": ir.get("lastCrawlTime")})

        datos = {
            "sitio": SITIO,
            "periodo": {"desde": ini.isoformat(), "hasta": fin.isoformat()},
            "periodo_anterior": {"desde": ini_ant.isoformat(), "hasta": fin_ant.isoformat()},
            "total": resumen(consulta(tok, ini, fin)),
            "total_anterior": resumen(consulta(tok, ini_ant, fin_ant)),
            "consultas": [{"consulta": f["keys"][0], "clics": f["clicks"], "impresiones": f["impressions"],
                           "posicion": round(f["position"], 1)} for f in consulta(tok, ini, fin, ["query"])],
            "paginas": [{"pagina": f["keys"][0], "clics": f["clicks"], "impresiones": f["impressions"],
                         "posicion": round(f["position"], 1)} for f in consulta(tok, ini, fin, ["page"], 10)],
            "dispositivos": [{"dispositivo": f["keys"][0], "clics": f["clicks"], "impresiones": f["impressions"]}
                             for f in consulta(tok, ini, fin, ["device"], 5)],
            "sitemaps": [{"ruta": s.get("path"), "ultimo_envio": s.get("lastSubmitted"),
                          "errores": s.get("errors"), "avisos": s.get("warnings")} for s in sitemaps],
            "indexacion": indexacion,
        }
    except SinAcceso as e:
        print(f"SIN ACCESO: {e}")
        sys.exit(3)

    if "--json" in sys.argv:
        print(json.dumps(datos, ensure_ascii=False, indent=2))
        return
    t, a = datos["total"], datos["total_anterior"]
    print(f"Search Console {SITIO} · {datos['periodo']['desde']} a {datos['periodo']['hasta']}")
    print(f"  Clics {t['clics']} (antes {a['clics']}) · Impresiones {t['impresiones']} (antes {a['impresiones']})"
          f" · Posición media {t['posicion']} (antes {a['posicion']})")
    for c in datos["consultas"][:10]:
        print(f"  «{c['consulta']}»: {c['clics']} clics, {c['impresiones']} impresiones, posición {c['posicion']}")
    print(f"  Sitemaps: {datos['sitemaps'] or 'ninguno enviado'}")
    for i in datos["indexacion"]:
        print(f"  {i['url']}: {i['veredicto']} — {i['estado']}")


if __name__ == "__main__":
    main()
