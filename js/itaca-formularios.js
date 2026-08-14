/* ══════════════════════════════════════════════════════════════════════════
   ENVÍO DE FORMULARIOS — ITACA JIU JITSU

   Este archivo lo usan LAS DOS versiones de la web: index.html (ordenador) y
   movil.html. Existe por un motivo concreto: la clave de acceso, la dirección
   de la hoja de cálculo y la lógica de envío tienen que estar en UN SOLO
   SITIO. Duplicadas, el día que se cambie una se quedaría la otra vieja y los
   mensajes se perderían sin que nadie se entere.

   ─── DÓNDE SE TOCAN LAS COSAS ───────────────────────────────────────────
   · Clave de Web3Forms  → CONFIG.claveWeb3Forms (aquí abajo)
   · Hoja de seguimiento → CONFIG.urlHojaCalculo (aquí abajo)
   · Teléfono y correo   → CONFIG (aquí abajo)
   ════════════════════════════════════════════════════════════════════════ */
window.Itaca = (function () {
    'use strict';

    var CONFIG = {
        /* No es una contraseña: es un identificador público que solo sirve para
           entregar el mensaje en itacajiujitsu@gmail.com. Su API obliga a usarla
           desde el navegador; los envíos desde servidor los rechaza. */
        claveWeb3Forms: 'e6a72e8e-1963-4d39-b6d8-cad84ad95cae',

        /* Copia de cada solicitud en una hoja de Google, para el seguimiento.
           Vacío = desactivado; el correo funciona igual. Los pasos para
           obtener esta dirección están en docs/hoja-de-calculo.md */
        urlHojaCalculo: 'https://script.google.com/macros/s/AKfycbwi1x9HqLkd-uJt-bsHwqeZnEHqL8rG9be80jAbDK-X5cNvM4VUPEfC6wQsC9ZtNmOA/exec',

        email: 'itacajiujitsu@gmail.com',
        telefono: '664 78 41 21',
        /* Sin espacios ni signos: es el formato que necesita el enlace wa.me */
        whatsapp: '34664784121'
    };

    /* ── Utilidades ──────────────────────────────────────────────────── */

    function enlaceWhatsApp(texto) {
        return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(texto);
    }

    /* Enlace listo para responder por WhatsApp que viaja DENTRO del correo que
       recibe la escuela. Sin esto hay que copiar el número a mano cada vez. */
    function enlaceRespuesta(telefono, respuesta) {
        var num = (telefono || '').replace(/[^\d]/g, '');
        if (!num) return '';
        if (num.length === 9) num = '34' + num;              // móvil español sin prefijo
        else if (num.indexOf('0034') === 0) num = num.slice(2);
        if (num.length < 11) return '';
        return 'https://wa.me/' + num + '?text=' + encodeURIComponent(respuesta);
    }

    function textoCanal(canal) {
        if (canal === 'WhatsApp') return 'por WhatsApp';
        if (canal === 'Llamada') return 'por teléfono';
        return 'por email';
    }

    /* Qué vía ha pedido el visitante para que le contesten. */
    function canalElegido(nombreGrupo) {
        var marcado = document.querySelector('input[name="' + nombreGrupo + '"]:checked');
        return marcado ? marcado.value : 'Email';
    }

    /* Si piden WhatsApp o llamada, el teléfono deja de ser opcional: sin él esa
       preferencia no se puede cumplir. */
    function vincularCanalConTelefono(nombreGrupo, campoTelefono, etiqueta) {
        var opciones = document.querySelectorAll('input[name="' + nombreGrupo + '"]');
        if (!opciones.length || !campoTelefono) return;

        var textoBase = etiqueta ? etiqueta.textContent.replace('*', '').trim() : '';

        function actualizar() {
            var marcado = document.querySelector('input[name="' + nombreGrupo + '"]:checked');
            var haceFalta = !!(marcado && marcado.dataset.needsPhone);
            campoTelefono.required = haceFalta;
            if (etiqueta && textoBase) {
                etiqueta.innerHTML = textoBase + (haceFalta ? ' <span>*</span>' : '');
            }
        }

        Array.prototype.forEach.call(opciones, function (o) {
            o.addEventListener('change', actualizar);
        });
        actualizar();
    }

    /* Copia en la hoja de cálculo. Va aparte y sin esperar respuesta a
       propósito: si la hoja falla o tarda, el visitante no se entera y el
       correo se ha enviado igual. */
    function copiarEnHoja(tipo, datos) {
        if (!CONFIG.urlHojaCalculo) return;
        try {
            fetch(CONFIG.urlHojaCalculo, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(Object.assign({ tipo: tipo }, datos))
            }).catch(function () { });
        } catch (err) {
            /* El seguimiento nunca puede tumbar el envío del formulario. */
        }
    }

    /* ── Envío ───────────────────────────────────────────────────────── */

    /* `pintar` lo aporta cada página, porque el aviso se ve distinto en cada
       una: recibe ('ok' | 'error', textoHTML). */
    function enviar(opciones) {
        var form = opciones.form;
        var boton = opciones.boton;
        var pintar = opciones.pintar;
        var datos = opciones.datos || {};

        if (!form.reportValidity()) return Promise.resolve(false);

        pintar(null, '');

        /* Sin clave configurada se intenta abrir el programa de correo. Eso
           falla en muchos móviles y en quien usa webmail, así que se avisa y se
           dan dos vías que sí funcionan siempre. */
        if (!CONFIG.claveWeb3Forms) {
            window.location.href = 'mailto:' + CONFIG.email +
                '?subject=' + encodeURIComponent(opciones.asunto) +
                '&body=' + encodeURIComponent(opciones.cuerpoCorreo || '');
            pintar('error',
                '<strong>Casi.</strong> Hemos abierto tu programa de correo con el mensaje escrito: ' +
                'revisa que se haya enviado.<br>Si no se ha abierto nada, escríbenos por ' +
                '<a href="' + enlaceWhatsApp(opciones.whatsapp || 'Hola, os escribo desde la web.') +
                '" target="_blank" rel="noopener">WhatsApp</a> o llámanos al ' + CONFIG.telefono + '.');
            return Promise.resolve(false);
        }

        var textoOriginal = boton.textContent;
        boton.disabled = true;
        boton.textContent = 'Enviando…';

        var trampa = form.querySelector('[name="botcheck"]');

        return fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(Object.assign({
                access_key: CONFIG.claveWeb3Forms,
                subject: opciones.asunto,
                from_name: 'Web de Itaca Jiu Jitsu',
                /* Si viene marcada, lo ha rellenado un robot: Web3Forms lo tira. */
                botcheck: !!(trampa && trampa.checked)
            }, datos))
        })
            .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
            .then(function (res) {
                if (res.ok && res.j.success) {
                    copiarEnHoja(opciones.tipo, datos);
                    form.reset();
                    pintar('ok', opciones.exito);
                    return true;
                }
                pintar('error', mensajeError());
                return false;
            })
            .catch(function () {
                pintar('error', mensajeError());
                return false;
            })
            .then(function (bien) {
                boton.disabled = false;
                boton.textContent = opciones.textoBoton || textoOriginal;
                return bien;
            });
    }

    function mensajeError() {
        return 'No hemos podido enviar tu mensaje. Escríbenos a ' +
            '<a href="mailto:' + CONFIG.email + '">' + CONFIG.email + '</a> o llámanos al ' +
            CONFIG.telefono + '.';
    }

    return {
        CONFIG: CONFIG,
        enviar: enviar,
        enlaceWhatsApp: enlaceWhatsApp,
        enlaceRespuesta: enlaceRespuesta,
        textoCanal: textoCanal,
        canalElegido: canalElegido,
        vincularCanalConTelefono: vincularCanalConTelefono,
        mensajeError: mensajeError
    };
})();
