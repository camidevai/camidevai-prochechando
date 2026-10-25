# Guías APOB

La ruta `/apob` contiene el catálogo de guías PDF de CamiDevAI.

- Datos: `src/apob/guides.json` (título, categoría editorial, resumen, fecha de incorporación a Drive y enlace original).
- Portadas: `public/apob/<id-de-drive>.webp`, miniaturas de las portadas de los PDF, guardadas localmente para evitar depender del acceso a imágenes de Drive.
- Filtros: temática, búsqueda sin distinción de tildes/mayúsculas, orden por fecha o título. Estado compartible en la URL.
- Accesos desde la navegación principal y la página de herramientas.
- GitHub Pages sirve un índice en `/apob/` para permitir acceso directo.

## Incorporar otra guía

1. Revisar el PDF y verificar su acceso público. Los nuevos PDF también pueden alojarse en `public/apob/`.
2. Agregar una entrada en `guides.json` con su ID y URL pública (Drive o PDF alojado en la página), fecha, título, descripción y una categoría existente.
3. Guardar su portada como `public/apob/<id>.webp`.
4. Compilar y publicar en la rama `prochechando.ai`. Los totales y filtros se calculan desde los datos.

La lista es editorial y no se sincroniza automáticamente con Drive. No se incluyó el flyer de maquillaje ni los documentos auxiliares que no son guías PDF. No se publican cupones ni promesas de descuento sin verificación actual.

La guía «Convierte las piedras en tu castillo» se aloja en `public/apob/Guia_APOB_Castillo_CamiDevAI.pdf`, con su portada local y enlace público directo.
