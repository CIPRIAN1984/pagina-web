---
name: calidad
description: Cómo comprobar que la web funciona de verdad antes de decir que está hecha. Úsala antes de afirmar que algo funciona, al escribir o revisar pruebas, y cuando haya que decidir qué merece la pena comprobar.
---

# Calidad

## La regla de oro

**No se dice "ya funciona" sin haberlo abierto y mirado.** Esta web se puede levantar
y comprobar desde aquí, así que no hay excusa para dar nada por bueno leyendo el código.

```bash
python3 -m http.server 8899
# navegador: /opt/pw-browsers/chromium-1194/chrome-linux/chrome
```

Con Playwright se puede automatizar (instalarlo en la carpeta temporal, nunca en el
repositorio: aquí no hay dependencias y no las va a haber).

## Qué hay que comprobar siempre

Por orden de importancia. Los tres primeros son los que hacen perder alumnos:

1. **Los dos formularios, hasta el final.** Contacto y clase de prueba. Que se envíen,
   que avisen si falta algo y que el visitante vea una confirmación.
2. **Móvil, 390 px de ancho.** No es opcional: el tráfico de un gimnasio llega desde
   Instagram, o sea desde un teléfono. Todo lo que se comprueba en escritorio se
   comprueba también en móvil.
3. **Contenido escondido detrás del ratón.** En móvil no hay `:hover`. Si un texto solo
   aparece al pasar el ratón por encima, en un móvil **no existe**. Ya hay tres sitios
   así: instructores, etiquetas del carrusel y vídeos verticales.
4. **Que la rueda del ratón siga bajando la página** en todas las secciones. El carrusel
   captura la rueda; comprueba que no atrapa al visitante.
5. **La consola del navegador sin errores** y ningún archivo que no cargue (fotos, vídeos).
6. **Teclado y `Escape`**: se puede recorrer la página con el tabulador y cerrar los
   modales sin usar el ratón.

Lo que **no** merece la pena comprobar: que un color sea exactamente el que era, o que
una animación dure 0,3 segundos y no 0,35.

## Si algún día hay pruebas automáticas

**Una prueba que nunca falla es peor que no tenerla**, porque da falsa seguridad.
Después de escribir una prueba, **rompe el código a propósito** y comprueba que salta.
Si no salta, la prueba no vale. Luego deshaz el destrozo. Este paso no es opcional.

Los dos automatismos de `.claude/hooks/` se comprobaron así: se hizo fallar una tarea a
propósito para verificar que el commit quedaba bloqueado de verdad.

## Antes de decir "ya está"

- [ ] Abierto en escritorio y comprobado
- [ ] Abierto en móvil (390 px) y comprobado
- [ ] Consola sin errores, todos los archivos cargan
- [ ] Los dos formularios probados hasta el final
- [ ] Lo he probado yo, o **he dicho claramente que no puedo y qué tiene que probar Cipri**

Lo que no se puede comprobar desde aquí (que el correo llegue de verdad a la bandeja,
que el vídeo definitivo se reproduzca bien) se dice tal cual, con los pasos exactos para
que lo pruebe él. Nunca "debería funcionar" presentado como "funciona".
