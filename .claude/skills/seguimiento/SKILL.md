---
name: seguimiento
description: Lista de cosas importantes que hay que revisar de vez en cuando para que no se olviden entre sesiones — comprobaciones periódicas, seguimientos pendientes que no dependen de que Cipri se acuerde. Consúltala al empezar una sesión si no está claro qué toca revisar, y añade aquí cualquier cosa nueva que Cipri diga que "no se puede olvidar".
---

# Seguimiento

Cosas que no dependen de que Cipri se acuerde. Si surge algo que "no se puede
olvidar", se añade aquí en el momento — no queda solo en el chat de esa sesión.

## Activo

### SEO y Search Console → lo lleva el ayudante de SEO

Desde el 5 de octubre de 2026 no hace falta acordarse de nada: la skill `seo`
(`.claude/skills/seo/`) se ejecuta sola cada lunes con una rutina programada
dentro de la conversación de trabajo con Cipri (una sesión nueva no tiene
el repositorio), revisa la web publicada, arregla lo técnico, y el
primer lunes de cada mes lee Search Console por su cuenta y anota la
evolución en `docs/seo-historial.md`. A Cipri solo le llega el informe.

## Cómo añadir algo aquí

Cuando Cipri diga algo tipo "que no se me olvide X" o "esto hay que
revisarlo de vez en cuando": añadir una entrada nueva con el mismo formato
— por qué importa, cada cuánto, qué hace falta comprobar, y si hace falta
una rutina programada o basta con anotarlo para que la próxima sesión lo
vea aquí.

## Resuelto / ya no aplica

### Search Console — revisión mensual por capturas (agosto-octubre 2026)

Una rutina el día 1 de cada mes pedía a Cipri capturas de Search Console.
Se retiró el 5 de octubre de 2026 porque no funcionaba como se pensaba:
**la web no estaba dada de alta en Search Console** (lo que Cipri veía era el
Perfil de Empresa y la propiedad de Instagram) y depender de que él mandara
capturas no era automático de verdad. La sustituye el ayudante de SEO, que
lee los datos directamente con una cuenta de servicio de solo lectura.
