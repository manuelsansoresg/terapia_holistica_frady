# Terapia Holística Frady

Landing de Next.js 16 y React 19 para baño iónico de pies en Nuevo Laredo, Tamaulipas. Identidad editorial en crema, verde y dorado; fuentes locales Cormorant Garamond y Manrope. Reservas por WhatsApp con datos comerciales centralizados en `src/config/business.ts`.

## Desarrollo y comprobaciones

Node.js 20.9 o superior.

```sh
npm ci
npm run dev
npm run typecheck
npm test
npm run build
npm start
```

Desarrollo en `http://127.0.0.1:3000`. Producción escucha en `0.0.0.0` y utiliza `PORT` (3000 por defecto). El build usa Webpack, conservando la configuración compatible con el alojamiento existente. No descarga fuentes durante la compilación. Licencias de fuentes en `src/app/fonts/`.

## Contenido y conversión

Portada → experiencia → bienestar → proceso de sesión → video → material complementario opcional → preguntas → contacto → cierre. Se conservan los recursos aprobados. Las imágenes de ambiente son ilustrativas; no acreditan instalaciones, equipo o clientes reales. El video usa `public/video/frady-cuadrado-web.mp4`, portada `frady-cuadrado-portada.jpg` ambos cuadrados. El original `frady-cuadrado.mp4` se conserva solo en la carpeta local y está excluido de Git por superar el límite de 100 MB de GitHub; no estará disponible en un clon nuevo. Respaldarlo por separado y regenerar copia web/portada al sustituir el video. El enlace alternativo también utiliza la copia web.

Nombre y teléfono del formulario permanecen en memoria hasta continuar en WhatsApp. Incluye validación, consentimiento y campo trampa. El usuario debe enviar el mensaje; no existe backend de recepción, correo ni almacenamiento. No se registran consultas enviadas o citas confirmadas sin evidencia. Los accesos directos permiten consultar sin llenar el formulario.

Eventos locales `frady:conversion`: `whatsapp_click`, `booking_click`, `service_select`, `contact_handoff` y `video_play`. No contienen datos personales ni se conectan a un proveedor. El adaptador de analítica y el aviso de privacidad del negocio están pendientes. Ver especificación, limitaciones y recomendaciones en [la auditoría CRO](docs/AUDITORIA-CRO.md).

## SEO y despliegue

El dominio predeterminado es `https://fradybienestar.com`; puede sobrescribirse con `NEXT_PUBLIC_SITE_URL` antes de compilar (ver `.env.example`). Metadata local, canonical, imagen social, `/sitemap.xml`, `/robots.txt` y datos estructurados de negocio local. No se inventan horarios, precios, reseñas ni credenciales. El domicilio y cuatro teléfonos son los existentes en el proyecto.

Para publicar en el alojamiento Node.js existente: `npm ci`, `npm run build`, `npm start`. Los cambios de este trabajo son locales; compilar no publica el sitio. No se añadieron dependencias.

## Auditoría SEO final

Ver [SEO-FINAL.md](docs/SEO-FINAL.md) para hallazgos, mapa de palabras clave por oferta real, metadatos finales, validación oficial, configuración pendiente de Search Console/Cloudflare y Google Business Profile, evidencias y plan de medición de 90 días.

Los metadatos propios de inicio y su grafo JSON-LD se centralizan en `src/config/seo.ts`; el layout conserva la plantilla de títulos. Para repetir la comprobación SEO contra un build en ejecución: `npm run seo:check` (por defecto `http://127.0.0.1:3000`; cambiar con `SEO_BASE_URL`). El redirect de `www.fradybienestar.com` al dominio HTTPS sin www se configura en Next.js; DNS, certificado y HTTP→HTTPS requieren comprobación externa tras publicar.
