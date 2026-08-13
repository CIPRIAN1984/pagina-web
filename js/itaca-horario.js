/* ══════════════════════════════════════════════════════════════════════════
   HORARIO DE CLASES — ITACA JIU JITSU

   ESTE ES EL ÚNICO SITIO DONDE SE TOCAN LOS HORARIOS.

   De aquí salen las tres cosas que antes estaban por separado y podían
   contradecirse:
     · la tabla de horarios de la web de ordenador
     · las pestañas por día de la versión móvil
     · las clases que ofrece el formulario de clase de prueba

   Hasta ahora había tres copias. Si se cambiaba una y no las otras, el
   formulario acababa ofreciendo clases que ya no existían. Con esto, se
   cambia aquí y cambia en todas partes.

   ─── CÓMO AÑADIR O CAMBIAR UNA CLASE ────────────────────────────────────
   Busca el día y añade o edita una línea:
       { hora: '18:00 - 19:00', nombre: 'Iniciación Gi', para: 'adulto' }

   `para` dice a quién se le ofrece esa clase en el formulario de prueba:
       'adulto'   adultos
       'nino46'   niños de 4 a 6 años
       'nino710'  niños de 7 a 10 años
   ════════════════════════════════════════════════════════════════════════ */
window.ItacaHorario = (function () {
    'use strict';

    var DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    var CLASES = {
        'Lunes': [
            { hora: '07:00 - 08:00', nombre: 'Fundamentos', para: 'adulto' },
            { hora: '17:00 - 18:00', nombre: 'Fundamentos (Gi)', para: 'adulto' }
        ],
        'Martes': [
            { hora: '10:00 - 11:30', nombre: 'Grappling No Gi', para: 'adulto' },
            { hora: '16:45 - 17:45', nombre: 'Kids 7/10 Años', para: 'nino710' },
            { hora: '18:00 - 20:00', nombre: 'Avanzados No Gi', para: 'adulto' },
            { hora: '20:00 - 21:00', nombre: 'Iniciación No Gi', para: 'adulto' }
        ],
        'Miércoles': [
            { hora: '07:00 - 08:00', nombre: 'Fundamentos No Gi', para: 'adulto' },
            { hora: '17:00 - 18:00', nombre: 'No Gi Grappling', para: 'adulto' }
        ],
        'Jueves': [
            { hora: '10:00 - 11:30', nombre: 'BJJ Gi', para: 'adulto' },
            { hora: '16:45 - 17:45', nombre: 'Kids 4/6 Años', para: 'nino46' },
            { hora: '18:00 - 20:00', nombre: 'Avanzados Gi', para: 'adulto' },
            { hora: '20:00 - 21:00', nombre: 'Iniciación Gi', para: 'adulto' }
        ],
        'Viernes': [
            { hora: '07:00 - 08:00', nombre: 'Específico Sparring', para: 'adulto' },
            { hora: '16:45 - 17:45', nombre: 'BJJ Kids Gi 7/10 Años', para: 'nino710' },
            { hora: '18:30 - 20:00', nombre: 'Avanzado Gi', para: 'adulto' }
        ],
        'Sábado': [
            { hora: '10:00 - 11:00', nombre: 'BJJ Gi Libre', para: 'adulto' },
            { hora: '11:00 - 12:30', nombre: 'Open Mat', para: 'adulto' }
        ]
    };

    /* getDay() del navegador: 0 = domingo. Aquí los días van de lunes a
       sábado, así que el domingo no tiene ninguno. */
    function diaDeFecha(fechaTexto) {
        var d = new Date(fechaTexto);
        if (isNaN(d)) return null;
        var i = d.getDay();
        return i === 0 ? null : DIAS[i - 1];
    }

    function clasesDe(dia) {
        return CLASES[dia] || [];
    }

    /* Las clases que se ofrecen en el formulario de prueba para una fecha y
       una categoría. La etiqueta lleva solo la hora de inicio, que es como se
       venía mostrando. */
    function clasesParaReserva(fechaTexto, categoria) {
        var dia = diaDeFecha(fechaTexto);
        if (!dia) return [];
        return clasesDe(dia)
            .filter(function (c) { return c.para === categoria; })
            .map(function (c) { return c.hora.split(' - ')[0] + ' - ' + c.nombre; });
    }

    var DIAS_EN = {
        'Lunes': 'Monday', 'Martes': 'Tuesday', 'Miércoles': 'Wednesday',
        'Jueves': 'Thursday', 'Viernes': 'Friday', 'Sábado': 'Saturday'
    };

    /* Horario en el formato OpeningHoursSpecification de schema.org, para el
       marcado de datos estructurados (SEO). Se genera desde aquí, no a mano
       en cada HTML, para que sea imposible que se desincronice del horario
       real. */
    function horarioSchemaOrg() {
        var specs = [];
        DIAS.forEach(function (dia) {
            clasesDe(dia).forEach(function (c) {
                var partes = c.hora.split(' - ');
                specs.push({
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: DIAS_EN[dia],
                    opens: partes[0],
                    closes: partes[1]
                });
            });
        });
        return specs;
    }

    return {
        DIAS: DIAS,
        clasesDe: clasesDe,
        diaDeFecha: diaDeFecha,
        clasesParaReserva: clasesParaReserva,
        horarioSchemaOrg: horarioSchemaOrg,
        /* Índice del día de hoy dentro de DIAS; el domingo cae en lunes. */
        indiceHoy: function () {
            var i = (new Date().getDay() + 6) % 7;
            return i < DIAS.length ? i : 0;
        }
    };
})();
