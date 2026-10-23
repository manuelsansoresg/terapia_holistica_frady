# Auditoría y optimización de Frady

Revisión: 23 de octubre de 2026. Implementación en el repositorio local, sin publicación ni cambios de precios, teléfonos o domicilio.

## 1. Problemas detectados

- El H1 «Baja el ritmo. Vuelve a ti.» era cálido pero no identificaba el servicio. El visitante tenía que seguir leyendo para entender la oferta.
- El bloque del regalo aparecía antes del CTA. En 375 × 812, el botón original quedaba cerca del final de la primera pantalla y la fotografía comenzaba debajo.
- El recorrido acumulaba explicaciones celulares, reflexología y una tabla de doce asociaciones entre colores, órganos y síntomas antes de llegar a las dudas y el contacto.
- Se destacaban «Trabaja a nivel celular» y «Elimina toxinas de tu cuerpo», aunque después se desmentían. Esa contradicción perjudicaba claridad y confianza.
- El video estaba después del CTA de cierre, cuando el visitante ya debería tener argumentos suficientes para contactar.
- Todos los enlaces usaban el mismo mensaje, incluso «Consultar cómo llegar».
- La analítica solo distinguía clics de WhatsApp; no separaba intención de reserva, interés en el servicio o reproducción de video.
- El dominio y la imagen social no tenían valores predeterminados; faltaban sitemap, robots y datos estructurados.

Se conservan identidad, logo, fuentes locales, fotografías e ilustraciones aprobadas, video cuadrado, duración, masaje y té de cortesía, dirección y cuatro teléfonos. El README existente documentaba la confirmación del domicilio en Nuevo Laredo, Tamaulipas. No hay respaldo para cambiar la ciudad a Mérida.

## 2. Cambios y motivos

- H1: «Baño iónico de pies. Un rato para ti.» Subtítulo con localidad y descripción breve dirigida a quien necesita descansar después de un día largo.
- CTA antes del regalo. Este pasa a una nota breve enlazada con los detalles de la cortesía.
- «Qué incluye tu visita» sustituye las afirmaciones promocionales por los componentes reales del servicio. No se presentan masaje o té como servicios independientes de pago.
- Reflexología, progresión del baño e información celular quedan en desplegables nativos, accesibles también sin JavaScript. Se mantienen sus imágenes sin alterarlas.
- La tabla de enfermedades se sustituye por una explicación de los colores. Las asociaciones no validadas no son una herramienta útil para decidir ni interpretar la salud.
- Beneficios centrados en descanso, comodidad y atención cercana. Se mantienen las precauciones existentes.
- Video con controles nativos, proporción cuadrada, sin reproducción automática y `preload="none"`. Contexto visible sobre las explicaciones del material promocional.
- Se conserva `next/image`, carga diferida, proporciones reservadas y fuentes locales. No se añaden servicios ni dependencias.

La revisión sobre afirmaciones y precauciones se contrastó con [Cleveland Clinic](https://health.clevelandclinic.org/foot-detox). No se editó el contenido del video aprobado; se recomienda revisar su guion antes de una futura actualización.

## 3. Recorrido final

Portada → experiencia y contenido de la visita → bienestar → proceso de sesión → video → información complementaria opcional → preguntas frecuentes → contacto y ubicación → cierre → pie.

Numeración principal 01–07. El material complementario permanece disponible sin exigir que cada visitante lo lea.

## 4. CTAs

- «Agenda tu sesión» en portada, cabecera, menú móvil, FAQ y barra inferior móvil.
- «Conoce nuestros servicios» muestra la experiencia y lo incluido. Solo existe un servicio principal confirmado.
- «Consultar precio y disponibilidad» después del proceso, con mensaje específico.
- «Resuelve tus dudas por WhatsApp» como acceso directo antes del formulario.
- Mensaje específico para confirmar cómo llegar al domicilio.
- Se conservan botón flotante en escritorio y barra en móvil; el pie reserva espacio y la barra se oculta al enfocar campos para facilitar la escritura.

Los enlaces usan `https://wa.me/` con teléfonos internacionales configurados y mensajes codificados. No se han enviado mensajes a los números del negocio ni se ha comprobado la titularidad o disponibilidad de esas cuentas.

## 5. Captación de prospectos

WhatsApp es el canal real de recepción. Los botones abren la conversación con un mensaje editable. El formulario existente se conserva como preparación opcional: nombre y teléfono, validación, consentimiento explícito y campo trampa básico. No existe servidor de formularios, base de datos ni envío por correo.

La persona debe revisar y enviar el mensaje en WhatsApp. Abrirlo no significa que Frady haya recibido una consulta, y una reserva solo queda confirmada al acordar los detalles con el negocio. No se agrega un selector ficticio: actualmente hay un único servicio confirmado. Tampoco se pide texto libre sobre salud.

## 6. Medición y pendientes

Se mantiene el evento del navegador `frady:conversion`. Su detalle contiene `name`, `placement` y, cuando corresponde, `service: "ionic-footbath"`.

| Evento | Significado |
| --- | --- |
| `whatsapp_click` | Clic para abrir WhatsApp, incluido el formulario válido |
| `booking_click` | Clic en un CTA con intención de reserva |
| `service_select` | Interés en el servicio al pulsar el enlace secundario de portada |
| `contact_handoff` | Formulario validado y con consentimiento antes de abrir WhatsApp |
| `video_play` | Primera reproducción del video en esa carga de página |

No se emite `form_success` porque no se puede comprobar recepción o envío en WhatsApp. No se envían nombre, teléfono, mensaje ni URL con datos personales a los eventos. Los eventos se disparan en el navegador, sin proveedor, cookies o persistencia adicional. Los eventos WhatsApp y reserva de un mismo clic son señales diferentes; no deben sumarse como dos prospectos.

Falta elegir y configurar un proveedor. El adaptador debe escuchar `frady:conversion`, enviar únicamente esos campos y soportar la salida de página (por ejemplo, con envío beacon). Configurar consentimiento si la solución elegida lo requiere. Para medir citas reales, registrar también en el proceso comercial qué conversaciones terminan en reserva.

Falta un aviso de privacidad real aprobado por el negocio y configurar `business.privacyUrl`. El texto actual explica el traspaso de datos; no sustituye ese aviso. No se añadió un documento legal inventado.

SEO: dominio predeterminado `https://fradybienestar.com`, canonical, Open Graph con ilustración existente, sitemap y robots. `LocalBusiness` usa domicilio y teléfono ya configurados, sin horarios, reseñas, credenciales ni precios inventados. Se conserva la posibilidad de cambiar el dominio mediante `NEXT_PUBLIC_SITE_URL` antes de compilar.

## 7. Verificación y siguientes aportaciones

- Compilación de producción y TypeScript.
- Pruebas automatizadas de normalización/validación, codificación de WhatsApp y contrato de eventos.
- Revisión de anclas y enlaces WhatsApp en la página renderizada.
- Revisión responsive en 320, 375, 768 y 1440 px sin desbordamiento horizontal.
- Menú móvil: apertura y cierre con Escape. Formulario: envío vacío, número inválido, foco en el error y bloqueo sin consentimiento.
- Desplegable de colores y FAQ de reservas verificados. Video reproduce y avanza, 720 × 720, sin deformarse.

No se ha medido una mejora de ventas ni Core Web Vitals de campo. Se necesita tráfico real y analítica para comparar contactos por visita. La herramienta de consulta web no pudo acceder al dominio público durante esta revisión; las comprobaciones corresponden a la compilación local.

Aportaciones recomendadas: precio vigente y horarios confirmados para resolver dudas antes del contacto; fotografías reales autorizadas del lugar y de quien atiende; testimonios con consentimiento; aviso de privacidad; subtítulos revisados a partir del audio real del video. Confirmar que los cuatro números siguen atendiendo consultas. Después de desplegar, verificar el dominio, Google Maps y cuentas de WhatsApp desde dispositivos reales y registrar el sitemap en Search Console.
