# Terapia Holística Frady

Landing Next.js 16 / React 19 con dirección editorial: crema, verde bosque, fotografía cálida y reservas por WhatsApp. Conserva App Router, las secciones comerciales y la configuración comercial centralizada. No hay nuevas dependencias ni biblioteca de animación.

## Desarrollo

Requiere Node.js 20.9 o superior.

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

Vista local: http://127.0.0.1:3000. `npm start` sirve la versión de producción. La compilación necesita acceso a Google Fonts; `next/font/google` sirve después Cormorant Garamond y Manrope desde el propio sitio.

## Diseño y contenido

- **Header:** logo original compacto, navegación, CTA principal y menú móvil con Escape, cierre exterior y salida de foco.
- **Hero:** composición editorial con retrato del baño iónico, dispositivo visible, información del servicio, duración y acceso inmediato a WhatsApp.
- **Experiencia:** fotografía horizontal y detalle de sales superpuesto; explicación breve del procedimiento.
- **Bienestar:** cuatro conceptos de autocuidado, una fotografía integrada y CTA contextual sobre verde bosque.
- **Sesión:** cuatro imágenes en secuencia escalonada en escritorio y recorrido vertical en móvil; guía resumida antes/después y CTA de precio/disponibilidad.
- **Recorrido directo:** por petición del usuario, se retiró la galería de atmósfera. La sesión enlaza directamente con las preguntas y el contacto, sin fotografías de supuestas instalaciones.
- **FAQ:** siete preguntas prácticas adaptadas de los folletos: duración, sensaciones, primera visita, preparación, frecuencia, precauciones y reserva. Sin apartado de evidencia científica en la landing. Se conservan las precauciones importantes y no se prometen resultados médicos. CTA directo para agendar al final.
- **Contacto:** domicilio confirmado por el usuario, teléfonos y formulario breve con nombre y teléfono. El botón prepara la consulta en WhatsApp; la persona revisa y envía el mensaje.
- **Cierre y footer:** composición de texto e imagen, CTA destacado y logo original sobre crema.

## Imágenes por sección

Todas las rutas y dimensiones reales están centralizadas en `src/config/business.ts`. Las 17 imágenes de `public/images/frady/` fueron proporcionadas por el usuario como ilustraciones generadas con IA. No representan local, personal, clientes, equipamiento ni amenidades reales. Por petición del usuario, se retiraron las menciones a IA de los textos visibles y alt. La galería de referencia se retiró del sitio; no se presentan supuestas instalaciones reales.

| Sección | Archivos dentro de `public/images/frady/` | Dimensiones originales |
| --- | --- | --- |
| Hero | `hero-bano-ionico.webp` | 1400 × 1749 |
| Experiencia | `experiencia-bano-pies.webp`; `experiencia-sales-preparacion.webp` | 713 × 480; 727 × 329 |
| Bienestar | `beneficio-relajacion.webp` | 694 × 482 |
| Sesión 01–04 | `proceso-preparacion.webp`; `proceso-dispositivo.webp`; `proceso-sesion.webp`; `proceso-finalizacion.webp` | 718 × 394; 636 × 485; 720 × 394; 679 × 377 |
| CTA final | `cta-final-ambiente.webp` | 718 × 377 |

Se integran 9 imágenes. Las cuatro imágenes de galería permanecen en disco y en el catálogo, sin utilizarse en la landing. Las otras cuatro (`hero-bano-ionico-horizontal.webp`, `experiencia-pies-primer-plano.webp`, `experiencia-cuidados.webp`, `beneficio-ambiente-natural.webp`) permanecen catalogadas en la configuración como alternativas, evitando añadir fotografías de relleno. La panorámica del Hero mide 1100 × 328: se prioriza la alternativa vertical para conservar el detalle del dispositivo. Las fotografías secundarias se muestran en superficies apropiadas para sus resoluciones; los encuadres evitan los márgenes vacíos de algunos recursos. No se modifican los originales.

`next/image` genera variantes responsive; cada composición tiene `sizes` y espacio reservado por proporción. El Hero y el logo del header se precargan; las fotografías secundarias usan carga diferida. Los antiguos recursos Pexels se conservan en disco pero ya no se referencian en la landing.

El logo oficial `public/images/logo.png` sigue intacto (840 × 260), sin recoloración, filtros ni cambios de proporción.

## Archivos del rediseño

- `src/app/globals.css`: sistema visual, composiciones, breakpoints, foco y movimiento reducido.
- `src/app/layout.tsx`: metadata local más específica del servicio.
- `src/config/business.ts`: manifiesto de las 17 imágenes y datos comerciales existentes.
- `src/components/sections/{hero,introduction,benefits,session,faq,contact,final-cta}.tsx`: secciones comerciales. Se retiró `trust.tsx` y su renderizado de `src/app/page.tsx`.
- `src/components/layout/{header,footer}.tsx`: navegación y cierre de marca.
- `src/components/ui/media-slot.tsx`: tamaños por contexto y leyendas opcionales.
- `src/components/ui/visual-effects.tsx`: observación de las nuevas composiciones.
- `src/components/ui/contact-form.tsx`: formulario accesible de nombre y teléfono, con envío preparado en WhatsApp.
- `src/lib/contact-validation.ts`: normalización y validación de los dos campos.
- `src/lib/analytics.ts`: orígenes adicionales para las conversiones.
- `README.md`: entrega y decisiones de mantenimiento.

## Conversión, accesibilidad y rendimiento

Se mantienen número, mensaje precargado y función central de WhatsApp. Los clics siguen emitiendo `frady:conversion` con `name: "whatsapp_click"`; se distinguen `hero`, `benefits`, `session`, `faq`, `contact`, `contact-secondary`, `contact-form`, `final`, `header`, `footer`, `floating`, `mobile-menu` y `mobile-bar`. No se conecta un proveedor de analítica ni se envía información adicional.

El formulario pide únicamente nombre (2–60 caracteres, letras con acentos, espacios, guiones y apóstrofos) y teléfono mexicano (10 dígitos, con 52 o +52 opcional). Normaliza espacios, prefijo y puntuación; rechaza campos vacíos, letras en teléfono, longitudes incorrectas y números repetidos. Valida formato, no titularidad ni existencia del número. Los errores se asocian al campo y el foco va al primer dato inválido. No se guarda información ni se envían mensajes automáticamente: el usuario continúa en WhatsApp y debe enviar el mensaje para completar la consulta.

El enlace secundario utiliza el segundo teléfono de la configuración. No hay números ni URLs de WhatsApp duplicados manualmente en las secciones. Las CTA principales aparecen en portada, después del proceso y en el cierre. La barra móvil y el botón flotante de escritorio son mutuamente excluyentes; el footer reserva espacio para la barra.

HTML semántico, h1 único, texto alternativo, foco visible, controles táctiles y acordeones con `aria-expanded`, `aria-controls`, regiones asociadas e `inert` en paneles cerrados. El menú es un disclosure, no un diálogo que requiera trampa de foco. El scroll reveal es progresivo, usa IntersectionObserver y no oculta el contenido sin JavaScript; `prefers-reduced-motion` desactiva animaciones y desplazamientos. Sin degradados, parallax ni sombras pesadas.

## Validación

- `npm run typecheck`.
- `npm run build` (compilación, TypeScript y prerenderizado de `/`).
- Revisión responsive en navegador a 320, 375, 430, 768, 1024 y 1440 px; sin desbordamiento horizontal.
- Revisión visual del Hero, secuencia y cierre; comprobación de anclas, menú, acordeones de preguntas frecuentes, carga de imágenes y enlaces de WhatsApp.
- Formulario: 16 casos de datos válidos/incorrectos, normalización de nombre y teléfono, codificación del mensaje y URL de dirección. Prueba en navegador de envío vacío, teléfono incorrecto, foco en el primer error y corrección de los campos. No se enviaron mensajes reales.

No se afirma una puntuación de Lighthouse ni una mejora de ventas medida. Para medir consultas que terminan en citas se requiere una integración de analítica y un proceso de seguimiento comercial.

## Información real pendiente

Horarios, precio, fotografías reales autorizadas, dominio final (`NEXT_PUBLIC_SITE_URL`), aviso de privacidad, imagen de Open Graph y un mapa embebido verificado si se desea incorporarlo. La duración aproximada de 30–45 minutos procede de los folletos del usuario. El usuario confirmó Bocanegra 918, local 3, col. Victoria, C.P. 88030, Nuevo Laredo, Tamaulipas. La dirección está en contacto y footer; Google Maps busca ese domicilio completo, sin inventar coordenadas ni identificadores de un lugar.

Las sesiones se describen como relajación y autocuidado. No se promete extracción de toxinas, grasas o metales pesados, efectos médicos ni seguridad universal. Se conservan las precauciones; referencia de la revisión previa: https://health.clevelandclinic.org/foot-detox . Las opciones de varias citas son consultas de agenda, no pautas médicas ni garantías de resultados.
