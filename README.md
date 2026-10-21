# Terapia Holística Frady

Landing editorial de bienestar implementada sobre el proyecto Next.js existente. Conserva las ocho secciones, la navegación, los eventos locales de conversión y los enlaces y mensaje de WhatsApp originales.

## Desarrollo y validación

Requiere Node.js 20.9 o superior.

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

Vista local: http://127.0.0.1:3000. `npm start` sirve la compilación de producción. La compilación requiere acceso a Google Fonts; `next/font/google` descarga Cormorant Garamond y Manrope para servirlas localmente, sin peticiones a Google desde el navegador.

## Archivos del rediseño

- `src/app/globals.css`: sistema visual, diseño responsive, transiciones, foco y movimiento reducido.
- `src/app/layout.tsx`: estilos oficiales de Font Awesome y efectos progresivos.
- `src/config/business.ts`: logo e imágenes locales; conserva teléfono y mensaje originales.
- `src/components/sections/hero.tsx`, `introduction.tsx`, `benefits.tsx`, `session.tsx`, `trust.tsx`, `faq.tsx`, `contact.tsx`, `final-cta.tsx`: rediseño de las ocho secciones y contenido para visitantes.
- `src/components/layout/mobile-menu.tsx`, `footer.tsx`, `booking-shortcuts.tsx`: iconografía, logo sobre crema y CTA móvil.
- `src/components/ui/brand-logo.tsx`, `media-slot.tsx`, `section-heading.tsx`, `whatsapp-link.tsx`: componentes reutilizables actualizados.
- `src/components/ui/visual-effects.tsx`: nuevo componente para scroll reveal con IntersectionObserver y estado del header; respeta movimiento reducido y mantiene el contenido visible sin JavaScript.
- `package.json` y `package-lock.json`: paquetes oficiales de Font Awesome; Lucide retirado.
- `public/images/hero.webp`, `experience.webp`, `details.webp`, `space.webp`: fotografías optimizadas. El archivo oficial `logo.png` permanece intacto.

## Fotografía y licencias

Cuatro fotografías de Pexels, descargadas el 21 de octubre de 2026 y convertidas localmente a WebP con calidad 82. Pesan aproximadamente 100–155 KB cada una. La licencia permite su uso en sitios comerciales: https://www.pexels.com/license/

| Archivo | Autor y fuente | Resolución |
| --- | --- | --- |
| `hero.webp` | Dasha — https://www.pexels.com/photo/close-up-photo-of-feet-in-a-bowl-15949785/ | 1400 × 2100 |
| `experience.webp` | Jonathan Borba — https://www.pexels.com/photo/person-holding-bath-salts-over-someones-legs-in-a-basin-19695949/ | 1100 × 1650 |
| `details.webp` | Dasha — https://www.pexels.com/photo/photo-of-a-person-washing-someones-feet-at-a-spa-15949782/ | 1100 × 1650 |
| `space.webp` | KoolShooters — https://www.pexels.com/photo/black-towels-on-the-table-6628486/ | 1400 × 2100 |

Las imágenes se identifican en pantalla como ilustrativas. No representan las instalaciones, clientes, equipamiento ni sesiones reales del negocio. No implican que el negocio ofrezca los elementos adicionales visibles en el stock. Al incorporar fotografías propias, actualizar los archivos, alt y leyendas en `business.ts` y en las secciones correspondientes.

Se utiliza `next/image` con tamaños responsive, encuadres reservados y carga diferida excepto el Hero y el logo del encabezado. El logo original mide 840 × 260; se muestra conservando su proporción, sin filtros ni recoloración.

## Dependencias y comportamiento

Font Awesome oficial: `@fortawesome/fontawesome-svg-core`, `@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`. No se incorpora una biblioteca de animación.

El acordeón usa botones con `aria-expanded`, regiones asociadas y cierre/apertura mediante CSS Grid. El menú conserva cierre por Escape, clic externo y salida de foco. El acceso fijo inferior aparece solo en móvil y el flotante solo en pantallas mayores. El footer reserva espacio para la barra móvil.

Los enlaces de WhatsApp conservan el evento local `frady:conversion` de `src/lib/analytics.ts`. No se conecta un proveedor de analítica ni se envía información adicional.

## Datos reales pendientes

Configurar en `src/config/business.ts` cuando se confirmen:

- Dirección exacta y enlaces verificados del local en Google Maps. El enlace actual muestra la ciudad y se identifica como tal. Solo se carga un mapa embebido si existe `location.mapEmbedUrl` verificado.
- Horarios y precio de las sesiones. La duración aproximada de 30–45 minutos procede de los folletos proporcionados; las indicaciones específicas se confirman al reservar.
- Fotografías propias autorizadas del establecimiento y servicio.
- Dominio final mediante `NEXT_PUBLIC_SITE_URL`, aviso de privacidad e imagen de Open Graph.

El servicio mantiene su nombre comercial sin prometer eliminación de toxinas ni resultados clínicos. No se incluyen testimonios, certificaciones ni promociones inventadas.

## Adaptación de los folletos comerciales

Se distribuyó el contenido proporcionado por el usuario entre la portada (duración), la introducción (baño con dispositivo iónico), seis ejes de bienestar, cuatro pasos de la sesión, una guía de comodidad antes/después y diez preguntas frecuentes. Se añadió el segundo WhatsApp del primer folleto (834 547 2783) como contacto alternativo; se conserva el principal y su mensaje. La dirección sigue sin configurarse por indicación del usuario.

Las cuatro visitas semanales y la posibilidad de volver cada dos o tres semanas se presentan como consultas de agenda, sin pautas terapéuticas ni resultados garantizados. No se replica la supuesta extracción de toxinas por los poros, ni promesas sobre circulación, inmunidad, inflamación o seguridad universal. Las sensaciones de ligereza y renovación se expresan como objetivos personales, no como resultados fisiológicos.

Referencia consultada para las respuestas sobre evidencia y precauciones: Cleveland Clinic, “Why Foot Detoxes Don’t Work”: https://health.clevelandclinic.org/foot-detox . Las sugerencias de hidratación no indican consumo excesivo ni contradicen restricciones médicas individuales.
