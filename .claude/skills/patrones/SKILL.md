---
name: patrones
description: Arquitectura reutilizable y convenciones de código del proyecto. Úsala antes de crear un archivo nuevo, un componente, una ruta o una función de acceso a datos, para seguir el patrón que ya existe en vez de inventar uno nuevo.
---

# Patrones

> 🚧 Pendiente de concretar cuando el proyecto tenga código. Lo de abajo son las
> reglas que se aplican desde el primer archivo; los ejemplos con `[corchetes]`
> se rellenan con lo real en cuanto exista.

## La regla que manda

**Copia el patrón que ya está en el repositorio.** Antes de crear algo nuevo, busca
si ya hay algo parecido y sigue esa forma: mismos nombres, misma estructura, mismo
sitio. Un proyecto con tres maneras de hacer lo mismo es un proyecto que nadie mantiene.

## Dónde va cada cosa

```
src/
  app/          rutas y páginas
  components/   componentes reutilizables
    ui/         piezas sueltas (botón, campo, aviso)
  lib/          lógica: acceso a datos, utilidades
tests/          pruebas
docs/           documentación
```

## Reglas de código

- **Componentes de servidor por defecto.** `"use client"` solo si hay interactividad real
  (un clic, un formulario, un estado que cambia).
- **El acceso a datos vive en `lib/`**, nunca suelto dentro de un componente. Así hay un
  único sitio donde comprobar quién puede leer qué.
- **El usuario siempre por la misma función** (p. ej. `getSessionUser()`). Nunca se leen
  la sesión o el rol por libre en dos sitios distintos: es la forma más fácil de que uno
  de los dos se olvide de comprobar algo.
- **Nunca se confía en un valor que venga del navegador** para decidir un permiso.
- **Comentarios solo para el *porqué* no evidente.** Lo que hace el código ya lo dice el código.
- **Textos de interfaz en castellano**; nombres de funciones, variables y tablas en inglés.
- **No se añaden dependencias sin permiso.** Si hace falta una, se pide explicando qué
  problema resuelve y qué pasa si no se pone.

## Nombres

- Archivos de componente: `MiComponente.tsx` · el resto: `mi-modulo.ts`
- Tablas y columnas en la base de datos: minúsculas con guion bajo (`user_id`, `created_at`)
- Nada de abreviaturas inventadas: `usuario` mejor que `usr`.
