# SEO final — Terapia Holística Frady

Revisión e implementación local: **23 de octubre de 2026**. Dominio objetivo: **https://fradybienestar.com**. Mercado: **Nuevo Laredo, Tamaulipas, México**. No se ha publicado, modificado DNS ni accedido a las cuentas del propietario. Se preservaron los cambios locales que ya existían antes de esta tarea.

## 1. Auditoría: situación inicial y decisiones

| Área | Hallazgo antes de esta tarea | Resultado |
| --- | --- | --- |
| Arquitectura | Next.js App Router, React 19, una landing pública; contenido prerenderizado | Se conserva la página principal como centro comercial |
| Metadatos | Title, description, canonical, OG y Twitter ya configurados en layout | Se trasladan los metadatos propios de inicio a page.tsx; layout conserva metadataBase y plantilla de títulos para futuras páginas |
| Relevancia | Title centrado solo en baño iónico; varios H2 exclusivamente emocionales | Title vincula marca/terapia holística con localidad; dos H2 identifican la experiencia y el proceso |
| H1 | Un H1: «Baño iónico de pies. Un rato para ti.»; localidad inmediatamente antes y después | Se conserva: comunica el servicio sin alargar ni alterar la portada |
| Jerarquía | H2 de secciones, H3 de temas/pasos/FAQ, H4 dentro del contenido incluido | Correcta; no se introducen encabezados adicionales |
| Catálogo | Un servicio principal, masaje y té incluidos; reflexología en material informativo | Sin servicios nuevos ni páginas duplicadas |
| Canonical | Canonical de inicio heredable desde layout por cualquier página futura | Canonical propio de inicio; futuras páginas deberán declarar su canonical y metadatos únicos |
| Rastreo | Sitemap y robots ya presentes, sin bloqueos de inicio | Se conservan y verifican en producción local |
| Datos estructurados | Un LocalBusiness con teléfono, domicilio y mapa existentes | Se amplía a un grafo enlazado de LocalBusiness, WebSite, WebPage y Service, con logo y contactos |
| Dominio | Sin redirección de www en Next.js | Redirección permanente 308 de www a HTTPS sin www, conservando ruta y consulta |
| Imágenes | next/image, ALT naturales, tamaños responsivos y proporciones reservadas | Se conservan; 15 imágenes y sus recursos comprobados |
| Video | Copia web, poster, controles, formato cuadrado y preload=none | Se conserva; entrega por rangos comprobada |
| Rendimiento | Fuentes locales con swap, portada prioritaria, imágenes secundarias diferidas, página estática | Sin nuevas librerías ni JavaScript cliente; no se fuerzan cambios para conseguir una puntuación |
| Accesibilidad | Idioma es-MX, enlace de salto, etiquetas de formulario, acordeón con aria-expanded | Se conserva; revisión de navegación y contenido renderizado |
| Conversión | WhatsApp y cinco eventos locales sin proveedor analítico | Se mantienen los destinos y el contrato de eventos; guía de medición abajo |
| Producción externa | El navegador sí abre HTTPS, pero muestra una versión anterior: sin canonical, OG URL o JSON-LD detectables; robots y sitemap muestran 404 | Publicar este build es prioritario; los recursos SEO locales aún no están en producción |

No se añaden meta keywords, horas, precios, coordenadas, acreditaciones, reseñas, puntuaciones ni redes sociales sin confirmar.

## 2. Catálogo completo y mapa de palabras clave

La evidencia es el código y el contenido publicado en el proyecto: `business.ts`, Introduction, Session, Benefits, FAQ y el video existente. La duración publicada es **20–30 minutos**. No se asigna una duración individual al masaje ni se supone que dure lo mismo que el baño.

**Todos los términos son hipótesis de captación.** No hubo acceso a Keyword Planner, Search Console ni datos verificables de volúmenes, CPC, dificultad o posiciones. La prioridad de esta tabla es editorial y comercial, no una estimación estadística.

| Oferta o tema | Palabra clave principal y variantes | Intención y prioridad | Destino / siguiente acción |
| --- | --- | --- | --- |
| Marca y oferta general | terapia holística en Nuevo Laredo; Terapia Holística Frady Nuevo Laredo; terapias holísticas Nuevo Laredo Tamaulipas; Frady Bienestar | Local y navegación; alta relevancia de marca | `/`, title, presentación y contacto; consultar disponibilidad |
| Baño iónico de pies, servicio principal confirmado | baño iónico de pies Nuevo Laredo; baño iónico para pies Nuevo Laredo; sesión de baño iónico Nuevo Laredo | Contratación; máxima prioridad por correspondencia exacta | `/#experiencia`, `/#sesion`, `/#preguntas`; agenda por WhatsApp |
| Precio y cita del baño iónico | precio baño iónico Nuevo Laredo; agendar baño iónico de pies; baño iónico de pies cerca de mí | Comercial; prioridad alta, demanda sin medir | Proceso y FAQ de reserva; consultar precio vigente, sin publicar cantidades inventadas |
| Nombre tradicional del servicio | desintoxicación iónica de pies Nuevo Laredo | Informativa y comercial; prioridad secundaria | Explicar el nombre en `/#enfoque` y las limitaciones en `/#colores-del-agua`; no prometer eliminación de toxinas |
| Relajación y autocuidado | sesiones de bienestar y relajación Nuevo Laredo; terapias de relajación Nuevo Laredo; centro de bienestar en Nuevo Laredo | Descubrimiento local; relevancia parcial y menor especificidad | Inicio y bienestar; la oferta sigue siendo baño iónico, no un catálogo amplio |
| Masaje de pies incluido | baño iónico con masaje de pies; masaje de pies de cortesía Frady | Comercial como parte de la visita; no captación de masaje independiente | `/#regalo`; explicar inclusión sin precio o duración propios |
| Té de cortesía | baño de pies con té de cortesía | Información sobre lo incluido; sin objetivo independiente | `/#regalo`; sin página de servicio ni oferta de té a la venta |
| Reflexología, material informativo | reflexología podal Nuevo Laredo; reflexología de pies Nuevo Laredo | Demanda potencial fuera del servicio independiente confirmado | Solo contexto informativo existente en Bienestar. No se anuncia reserva independiente; confirmar modalidad, alcance, duración y formación antes de ampliar |
| Terapias complementarias | terapias complementarias Nuevo Laredo | Exploración amplia; prioridad baja por ambigüedad | No se añade un servicio genérico ni se presenta como atención médica |

**Decisión sobre páginas individuales:** no se crean `/servicios/bano-ionico-pies` ni `/servicios/reflexologia-podal`. La landing ya contiene proceso, duración, preparación, precauciones, video, inclusiones y reserva del único servicio principal. Copiar ese contenido dividiría su utilidad sin aportar información única. Si se confirma un segundo servicio, preparar una página con procedimiento propio, responsable, duración y FAQ reales, enlazada desde inicio y con metadatos, canonical, Service y BreadcrumbList propios.

**Competencia verificable consultada:**

- [Laura Ruiz](https://psiclauraruiz.com/) publica una oferta de terapia holística, WhatsApp y domicilio en Nuevo Laredo. Es competencia temática para consultas amplias; no se comprobó que ofrezca baño iónico ni se equiparan sus servicios psicológicos con Frady.
- [Fresha: reflexología en Nuevo Laredo](https://www.fresha.com/lp/es/tt/masajista-de-pies/mx-nuevo-laredo) y [AgendaPro: reflexología en Tamaulipas](https://agendapro.com/mp/mx/reflexologia-tamaulipas) aparecen para consultas relacionadas. Evidencian presencia de agregadores, sin demostrar reservas, volumen ni oferta vigente de cada establecimiento.
- Las consultas exactas de baño iónico y localidad no aportaron evidencia suficiente para evaluar competidores directos. Esto **no equivale a competencia baja o inexistente**.

Muestra pública consultada en la fecha de revisión; no es un estudio geolocalizado de Google Maps. La estrategia propuesta es concentrar contenido y llamadas a la acción en el servicio verificable, y validar los términos con las consultas reales posteriores al lanzamiento.

## 3. Título, descripción y contenido finales

Única página comercial indexable: `/`.

**Title:** Terapia Holística en Nuevo Laredo | Frady Bienestar

**Meta description:** Conoce Terapia Holística Frady en Nuevo Laredo, Tamaulipas. Baño iónico de pies de 20–30 minutos, masaje y té de cortesía. Consulta precio y agenda por WhatsApp.

**H1 conservado:** Baño iónico de pies. Un rato para ti.

**H2 ajustados:** «Baño iónico de pies en Frady.» y «Cómo es tu sesión de baño iónico.»

Se añade la localidad de forma natural en la explicación de la experiencia. El enlace secundario de portada ahora dice «Conoce el baño iónico» y mantiene el mismo destino y evento de interés. Los CTAs de reserva y mensajes de WhatsApp se conservan. El resto de las secciones mantiene sus textos salvo los cambios indicados. Google puede abreviar o reescribir el título y el fragmento mostrado.

Open Graph y Twitter comparten title/description y la imagen panorámica existente, con URL absoluta, dimensiones y ALT. Se añade la imagen explícita a Twitter. La imagen panorámica es ilustrativa y su recorte puede variar según la plataforma; no se la presenta como fotografía real del local.

## 4. Estado técnico y datos estructurados

- Metadata API resuelta durante el build; title, descripción, canonical, OG y Twitter presentes en el **HTML inicial**, sin depender del navegador.
- `lang="es-MX"`, Open Graph `es_MX`, JSON-LD `inLanguage: es-MX`.
- Canonical público HTTPS sin www, coherente con el sitemap. La diferencia de barra final en la representación de la raíz es equivalente.
- `/sitemap.xml`: una URL comercial real, sin rutas inventadas. No se añade lastmod con la hora de cada build.
- `/robots.txt`: permite `/` a todos los agentes e indica el sitemap. No bloquea recursos necesarios.
- Inicio responde 200 sin noindex ni X-Robots-Tag restrictivo. Una ruta inexistente devuelve 404 con noindex, correctamente.
- Redirección www comprobada localmente: 308 hacia `https://fradybienestar.com`, preservando ruta y parámetros.
- **El navegador terminó en HTTPS al abrir HTTP; no se verificó el código de redirección del servidor.** Comprobar la respuesta de HTTP desde otra conexión antes de dar por validado el alojamiento o Cloudflare. Se evita introducir redirecciones basadas en cabeceras de proxy que puedan producir bucles. No se cambiaron DNS ni SSL.
- `NEXT_PUBLIC_SITE_URL` sigue disponible; para producción mantener exactamente el dominio oficial del ejemplo. No apuntarlo a localhost ni a un alojamiento temporal al construir la versión pública.

El grafo usa identificadores estables para enlazar negocio, sitio, página y servicio. LocalBusiness ya es un subtipo de Organization: no se duplica la entidad. Incluye logo, teléfono principal, contactos existentes, domicilio ya publicado, ciudad, estado, país y mapa existente. Código postal centralizado en la configuración; la dirección publicada no se cambia. Se omiten horarios, precio, sameAs y geo porque no existen datos confirmados adicionales.

No se añade BreadcrumbList a una landing sin jerarquía de páginas. No se añade FAQPage para perseguir resultados enriquecidos. No se añade VideoObject porque falta la fecha real de primera publicación, requerida por Google; no se usa la fecha de archivo o de esta auditoría como sustituto. Para habilitarlo se necesita fecha verificada, derechos confirmados, nombre y descripción fieles, miniatura y URL del archivo accesibles; duración a partir del archivo. La presencia de un video secundario tampoco asegura indexación en resultados de video.

**Validación oficial realizada:** [Prueba de resultados enriquecidos de Google](https://search.google.com/test/rich-results/result?id=Iqc_js-KUYPf6nwFV3PEoQ), usando el código JSON-LD de la compilación local. Resultado: **2 elementos válidos**, negocio local y organización. Única recomendación no crítica observada: falta `priceRange` (opcional). Se deja ausente hasta recibir un rango real. El resultado prueba el marcado introducido, no el despliegue ni la indexación del dominio. [Captura](seo/google-resultados.png).

## 5. Multimedia, rendimiento y accesibilidad

Se conservan las imágenes aprobadas, nombres descriptivos, textos ALT existentes, next/image y sizes. Las imágenes con fill reservan la proporción en CSS; las restantes declaran dimensiones intrínsecas. La portada ya es prioritaria. No se renombra un recurso correcto ni se sustituyen fotografías o ilustraciones.

Los PNG de referencia originales pesan aproximadamente 1,3–2,1 MB; se sirven mediante next/image, con tamaños y optimización según navegador. Mantener originales evita pérdidas de calidad y referencias rotas. La ilustración principal WebP pesa aproximadamente 268 KB antes de las variantes optimizadas.

El video web pesa aproximadamente 6,3 MB; el original conservado localmente ronda 105 MB y se excluye de Git por el límite de GitHub. La alternativa manual utiliza la misma copia web para seguir disponible en los despliegues. El poster pesa aproximadamente 72 KB. `preload="none"`, sin autoplay y con controles nativos. Se comprobó una petición por rangos con respuesta 206 y tipo video/mp4. No se cambia el contenido aprobado. Pendientes: transcripción y subtítulos revisados contra el audio real; no se inventaron subtítulos ni información del video.

Se conservan fuentes locales con display swap y fallback, layout estático, imágenes responsivas y mapa diferido. No se añadieron dependencias, efectos visuales o código cliente. Los cambios SEO se ejecutan en el servidor. No hay medición de mejora de LCP, INP o CLS ni se afirma que Core Web Vitals esté aprobado. Lighthouse no estaba instalado y no se obtuvo un informe de PageSpeed del dominio.

**Verificación reproducible tras publicar:** ejecutar PageSpeed Insights sobre la raíz, móvil y escritorio, o Lighthouse en una instalación disponible, guardar al menos tres ejecuciones comparables y revisar el elemento LCP, tareas largas y desplazamientos. Para datos de campo revisar Core Web Vitals en Search Console cuando haya muestra: objetivo p75 LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1. Estos umbrales son objetivos, no resultados medidos. [Referencia de métricas](https://web.dev/articles/vitals).

La revisión responsive se hizo en un marco de navegador con viewport de 320, 375, 768 y 1440 px: documento con el mismo ancho, sin desbordamiento horizontal; revisión visual de portada en móvil, tableta y escritorio. No sustituye pruebas de hardware real ni una auditoría integral de accesibilidad. [Vista móvil](seo/movil-375.png), [vista de escritorio](seo/escritorio.png). No se modificaron CSS, fuentes, colores, distribución, secciones o audiovisuales durante esta tarea.

## 6. Search Console y Cloudflare: acciones del propietario

1. Publicar el build y comprobar desde una conexión externa que HTTPS devuelve 200, con el certificado correcto y sin autenticación, bloqueo de bots o desafíos que impidan el rastreo.
2. En [Search Console](https://search.google.com/search-console), agregar una propiedad **Dominio**: `fradybienestar.com` (sin protocolo ni www).
3. Copiar el valor TXT que Google entregue. En Cloudflare → dominio → DNS → agregar registro: tipo **TXT**, nombre **@**, contenido **el valor exacto proporcionado por Google**, TTL automático. No se dispone del token real; no usar un valor de ejemplo ni borrar registros existentes.
4. Volver a Google y verificar. Mantener el registro TXT después de verificar. Si ofrece verificación asistida con Cloudflare, revisar el alcance antes de autorizarla.
5. En Sitemaps enviar `https://fradybienestar.com/sitemap.xml` y comprobar su lectura sin errores.
6. Inspeccionar `https://fradybienestar.com/`, hacer prueba en vivo, revisar HTML y canonical declarada/seleccionada y solicitar indexación si es accesible. La solicitud no garantiza inclusión ni posiciones.
7. Revisar Indexación → Páginas, HTTPS, resultados enriquecidos y Core Web Vitals. Corregir exclusiones reales; no solicitar indexación de anclas, robots, sitemap ni rutas inexistentes.
8. Comprobar HTTP, www y variantes HTTPS: una URL final preferida, sin cadenas innecesarias. Si falta forzado HTTPS, configurar el alojamiento o la opción apropiada de Cloudflare **solo con autorización** y comprobando el modo SSL del origen. El redirect de www ya está preparado en Next.js, pero requiere que DNS/TLS permitan llegar al servidor.

No se ha verificado la propiedad, enviado el sitemap ni solicitado indexación. [Guía oficial de verificación](https://support.google.com/webmasters/answer/9008080).

## 7. Google Business Profile

**Pendiente de acceso del propietario y evidencia operativa.** No se creó ni editó una ficha. Buscar primero si existe y reclamar la correcta; evitar duplicados.

La dirección publicada en el proyecto es Bocanegra 918, local 3, col. Victoria, C.P. 88030, Nuevo Laredo. Para mostrarla en una ficha, verificar atención presencial, señalización permanente y presencia real del personal. Una dirección publicada en la web no acredita por sí sola elegibilidad. Si únicamente se visita a clientes en sus domicilios, considerar área de servicio y ocultar domicilio conforme a esa operación; no suponer que Frady ofrece visitas. Si solo se opera en línea, no presumir elegibilidad. [Normas oficiales](https://support.google.com/business/answer/3038177).

**Nombre:** Terapia Holística Frady, conforme a la marca real, sin añadir ciudad o palabras clave al nombre para posicionar.

**Categorías:** evaluar «Centro de bienestar» como candidata principal si aparece en el selector mexicano y describe la actividad real; no se ha confirmado su disponibilidad en la cuenta. «Spa» solo sería alternativa/secundaria si el local funciona efectivamente así. No usar «Reflexólogo», «Masajista» o categorías clínicas basándose únicamente en un mapa informativo o una cortesía. Elegir categorías existentes y específicas, sin agregar una por cada detalle de la sesión. [Gestión de categorías](https://support.google.com/business/answer/7249669?hl=es).

**Descripción propuesta para revisión del propietario:**

> Terapia Holística Frady ofrece sesiones de baño iónico de pies en Nuevo Laredo, Tamaulipas, en un espacio dedicado al descanso y al autocuidado. La experiencia dura aproximadamente de 20 a 30 minutos e incluye masaje de pies y té de cortesía. Atendemos con cita; consulta el precio, los horarios y las precauciones antes de reservar. Es una experiencia de bienestar y no sustituye la atención médica.

**Servicios:** registrar baño iónico de pies y explicar el masaje/té como inclusiones; no crear servicios médicos ni sesiones independientes no confirmadas. Publicar precio y horarios solo cuando el propietario los valide.

**Material:** fotografías auténticas del letrero, entrada, sala, dispositivo y equipo, con derechos y autorización de personas visibles. Las imágenes ilustrativas actuales no deben presentarse como prueba del establecimiento. Pedir reseñas honestas tras visitas reales, sin incentivos ni selección por satisfacción; responder sin exponer información de salud.

**Enlaces:** sitio oficial; para distinguir el tráfico de ficha se puede usar `https://fradybienestar.com/?utm_source=google&utm_medium=organic&utm_campaign=perfil_negocio`. Mantener canonical limpio. Usar el campo de chat/WhatsApp o reservas solo si la interfaz y sus reglas lo permiten; no suponer que existe ni sustituir campos arbitrariamente. El sitio contiene CTAs de WhatsApp, pero no un sistema que confirme reservas automáticamente.

## 8. Plan de medición de 90 días

Contar desde el día de publicación y conexión efectiva de medición; no desde esta auditoría local. Establecer una línea base y revisar semanalmente, con balance a 30, 60 y 90 días. No hay proveedor instalado ni resultados de tráfico o prospectos disponibles.

| Periodo | Trabajo y decisiones | Indicadores |
| --- | --- | --- |
| Días 1–7 | Publicar, verificar Search Console y sitemap, revisar dominio/redirects y configurar proveedor con el consentimiento correspondiente. Validar eventos en modo depuración | URL accesible e indexable; sitemap leído; recepción de eventos sin datos personales |
| Días 8–30 | Registrar línea base por móvil/escritorio y tráfico orgánico/ficha. Revisar consultas de marca y servicio y errores de rastreo | Impresiones, clics, CTR y posición orientativa en Search Console; visitas y clics WhatsApp por canal/ubicación del CTA |
| Días 31–60 | Contrastar términos reales con las hipótesis, revisar preguntas frecuentes del negocio y abandonos antes del contacto | Consultas relevantes, proporción de visitas orgánicas con clic WhatsApp, conversaciones recibidas y citas confirmadas |
| Días 61–90 | Comparar periodos equivalentes con muestra suficiente; ajustar un texto o CTA a la vez cuando los datos lo justifiquen; evaluar contenido único nuevo | Tendencia de clics no asociados a marca, contactos cualificados, conversión a cita y resultados móviles; evitar conclusiones con muestras pequeñas |

Se conserva `window` → evento `frady:conversion` con `detail.name`, `placement`, `service`:

| Evento | Uso |
| --- | --- |
| whatsapp_click | Apertura de WhatsApp; señal principal de intención, no conversación recibida |
| booking_click | Clic en CTA de reserva; coincide con whatsapp_click del mismo clic y no se suma como otro prospecto |
| service_select | Interés desde portada hacia experiencia |
| contact_handoff | Formulario validado antes del traspaso a WhatsApp; no confirma envío |
| video_play | Primera reproducción en esa carga de página |

El adaptador futuro debe permitir únicamente los campos enumerados, enviar con fiabilidad al salir de la página y evitar duplicar listeners. Nunca capturar nombre, teléfono, texto del mensaje, historial de salud ni URL completa de wa.me. Al configurar un proveedor, revisar también su medición automática de enlaces/formularios para que no recoja esos valores indirectamente. La conexión y el aviso de privacidad necesitan una decisión del propietario.

Para conversaciones y citas reales, llevar recuentos agregados en el proceso comercial con origen voluntariamente indicado. **Tasa de intención:** visitas orgánicas con al menos un clic WhatsApp / visitas orgánicas (requiere proveedor capaz de deduplicar por visita). **Tasa de cita:** citas confirmadas / conversaciones realmente recibidas. No dividir eventos de clic brutos para estimar personas. Evitar cruzar identidades con datos de búsqueda; el SEO se evalúa con datos agregados.

## 9. Pruebas ejecutadas y límites

- `npm test`: **5 pruebas aprobadas**, validación de contacto, teléfonos, codificación WhatsApp y eventos existentes.
- `npm run build`: **correcto**, página y recursos SEO estáticos; sin errores de compilación o TypeScript.
- `npm run typecheck`: **correcto**.
- `SEO_BASE_URL=http://127.0.0.1:3100 npm run seo:check`: **correcto** contra servidor de producción local.
- La comprobación SEO verifica HTML inicial, title, descripción local, canonical único, OG/Twitter, idioma, ausencia de noindex en inicio, grafo JSON-LD y sus referencias, ALT y dimensiones/modo fill, 15 imágenes, 17 enlaces WhatsApp con mensaje, anclas, poster, video por rangos, sitemap, robots, 404 con noindex y redirect www con ruta/consulta.
- Prueba oficial Google por código: 2 elementos válidos; priceRange opcional pendiente, sin inventar precios.
- Responsive 320/375/768/1440 px: sin desbordamiento horizontal; revisión visual de portada; menú móvil abre y el enlace a experiencia cierra el menú. Los tamaños se probaron mediante un marco local temporal, no una página incorporada al producto.
- Se conserva el código de eventos y reproducción. No se enviaron mensajes, no se verificaron titulares de cuentas WhatsApp ni recepción real de citas.

**Para repetir:** `npm run build`, `npm start`, y en otra terminal `npm run seo:check`. Si el servidor usa otro puerto, establecer SEO_BASE_URL. SEO_EXPECTED_ORIGIN permite comprobar otro origen canónico explícito. En el dominio público HTTPS el script no simula el host www: comprobar las variantes por separado desde una conexión externa. La prueba de marcado por código debe repetirse por URL después de publicar.

No se obtuvo medición Lighthouse/PageSpeed o datos CrUX; no se comprobó indexación, ficha Maps ni configuración de DNS/certificado. La herramienta web y la terminal no lograron consultar el dominio, pero el navegador sí abrió la raíz HTTPS. La versión pública observada conserva el H1 «Baja el ritmo. Vuelve a ti.», otro teléfono principal ya incluido entre los contactos locales y el title anterior; no se detectaron canonical, og:url ni JSON-LD en su DOM. Las rutas públicas `/robots.txt` y `/sitemap.xml` mostraron la página 404: [evidencia de sitemap](seo/sitemap-publicado-404.png). Al abrir HTTP el navegador terminó en HTTPS, sin prueba del código HTTP de la redirección. La navegación a www no pudo completarse; no se determina la causa. Estas observaciones corresponden a la versión publicada anterior, no al build preparado. Las pruebas locales no sustituyen validación después del despliegue.

## 10. Archivos de esta implementación y pendientes

| Archivo | Cambio en esta tarea |
| --- | --- |
| src/config/seo.ts | Nuevo: metadatos de inicio y grafo JSON-LD centralizados |
| src/app/layout.tsx | MetadataBase y plantilla global; se retiran el canonical y LocalBusiness globales para evitar herencia/duplicación |
| src/app/page.tsx | Exportación de metadata de inicio y un único script JSON-LD |
| src/config/business.ts | Código postal ya publicado centralizado como propiedad |
| next.config.ts | Redirect permanente del host www al dominio oficial |
| src/components/sections/hero.tsx | Texto del enlace específico del único servicio; mismo destino/evento |
| src/components/sections/introduction.tsx | H2 descriptivo y referencia local natural |
| src/components/sections/session.tsx | H2 descriptivo del proceso |
| scripts/verify-seo.mjs | Nueva comprobación reproducible contra el servidor de producción |
| package.json | Script seo:check; sin dependencias nuevas |
| README.md | Referencia a este informe y a las comprobaciones |
| docs/SEO-FINAL.md y docs/seo/*.png | Informe y evidencias |

Sitemap, robots, analítica, FAQ, ALT, CSS y multimedia ya eran correctos para el alcance confirmado y **no se reimplementaron**. El diff completo de Git incluye trabajo local anterior: no todo corresponde a esta tarea. No se hicieron commits ni publicación.

**Pendientes con propietario/acceso externo:** publicar; verificar dominio y sitemap en Search Console; revisar DNS, certificado, HTTP→HTTPS y redirección pública; confirmar operativa/categoría y administrar la ficha; aportar horarios, precios/rango, redes oficiales, fotografías reales, derechos/fecha del video y subtítulos revisados; aprobar aviso de privacidad y proveedor de medición. Resolver la divergencia entre versión local y publicada mediante el despliegue y repetir las pruebas por URL. Confirmar si reflexología existe como sesión independiente antes de anunciarla. No hay promesa de primera posición ni garantía de indexación.

Fuentes técnicas: [Metadata de Next.js](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [robots de Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots), [LocalBusiness de Google](https://developers.google.com/search/docs/appearance/structured-data/local-business), [VideoObject de Google](https://developers.google.com/search/docs/appearance/structured-data/video), [Search Console: propiedad de dominio](https://support.google.com/webmasters/answer/34592).

## Corrección de contacto: teléfono fijo

El propietario confirmó que **834 547 2783 es teléfono fijo**. Se conserva el número y se muestra con icono de llamada, etiqueta «Teléfono fijo» y enlace `tel:+528345472783` en contacto y pie de página. Solo los otros tres contactos mantienen enlaces WhatsApp. La configuración identifica explícitamente qué números usan WhatsApp; el teléfono fijo no emite eventos de WhatsApp. Los datos estructurados siguen incluyendo el número como contacto telefónico. Implementación compartida en `src/components/ui/contact-phone-link.tsx`; comprobación SEO ampliada para impedir que reaparezca un enlace WhatsApp al fijo.

## Envío al repositorio

GitHub rechazó el envío inicial por el original `public/video/frady-cuadrado.mp4` (105 MB) incluido en un commit local pendiente. Se conserva intacto en disco y en una rama local de respaldo; se excluye del historial enviado. La copia web y la portada se mantienen en el repositorio. El enlace alternativo apunta a la copia web. Se consolidan los commits no publicados sin forzar la rama remota. El respaldo original debe guardarse por separado antes de eliminar esta carpeta local.
