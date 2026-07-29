---
name: calidad
description: QA y filosofía de pruebas. Úsala al escribir o revisar pruebas, cuando una prueba falla, antes de afirmar que algo funciona, y cuando haya que decidir qué merece la pena probar.
---

# Calidad

## La regla de oro

**Una prueba que nunca falla es peor que no tenerla**, porque da falsa seguridad.

Después de escribir una prueba: **rompe el código a propósito** y comprueba que la
prueba salta. Si no salta, la prueba no vale y hay que rehacerla. Luego se deshace
el destrozo. Este paso no es opcional.

## Qué merece la pena probar

Por orden de importancia:

1. **Permisos** — quién entra dónde, quién no. Que un *modo* de interfaz no dé permisos reales.
2. **Datos que salen al exterior** — CSV y exportaciones: separadores, comillas, saltos de
   línea y celdas que empiezan por `=`, `+`, `-` o `@` (una hoja de cálculo las ejecuta como fórmula).
3. **Entradas que vienen de fuera** — sobre todo destinos de redirección: solo rutas internas,
   nunca una URL completa que alguien pueda meter por la barra de direcciones.
4. **Invariantes de seguridad** — que el candado siga siendo el candado correcto.

Lo que **no** merece la pena: probar que un botón renderiza, o que una librería de terceros
hace lo que promete.

## Cuando una prueba falla

**Si tocas permisos y una prueba falla, la prueba tiene razón.** Están puestas justo para eso.
No se ajusta la prueba para que pase: se arregla el código. Cambiar una prueba de seguridad
solo se hace si la regla de negocio ha cambiado de verdad, y se dice explícitamente.

## Antes de decir "ya funciona"

- [ ] `npm run lint` en verde
- [ ] `npm run typecheck` en verde
- [ ] `npm test` en verde
- [ ] `npm run build` en verde
- [ ] Lo he probado yo, o **he dicho claramente que no puedo y qué tiene que probar el dueño**

Lo que no se puede comprobar desde aquí (iniciar sesión de verdad, correos que llegan,
base de datos de producción) se dice tal cual, con los pasos exactos para que lo pruebe él.
Nunca "debería funcionar" presentado como "funciona".
