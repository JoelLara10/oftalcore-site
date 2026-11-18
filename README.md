# OftalCore · Sitio público y centro de confianza

Sitio estático de presentación de OftalCore, plataforma con sistema web, app móvil Android y prototipo IoT ESP32, desarrollada bajo la marca VISLY. Este sitio informativo es independiente del sistema web clínico. Incluye información del producto, privacidad, términos, soporte, eliminación de datos y navegación. Está separado del repositorio de la app móvil y del sitio corporativo VISLY.

## Publicar en Vercel

1. Importar el repositorio GitHub de este sitio.
2. Elegir **Framework Preset: Other**.
3. Usar la raíz del repositorio como **Root Directory**.
4. Dejar **Build Command** e **Install Command** vacíos. No necesita dependencias ni compilación.
5. Usar `.` como **Output Directory** si Vercel solicita una ruta explícita.
6. Publicar y comprobar `/`, `/privacidad`, `/terminos`, `/soporte`, `/eliminacion` y `/cookies`.

`vercel.json` activa clean URLs, redirecciones de los alias ingleses y encabezados de seguridad. Los enlaces `.html` también funcionan al abrir el sitio con un servidor estático local.

Para revisión local con Python disponible:

```powershell
python -m http.server 8099 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8099`. También puede abrirse `index.html` directamente. El sitio no envía solicitudes a la API clínica.

## Contacto y textos legales

El correo público de referencia es `soporte.visly@gmail.com`, tomado del sitio corporativo VISLY. Los botones abren `mailto:`; no envían mensajes ni crean solicitudes automáticamente.

Los textos describen el funcionamiento revisado del proyecto. El responsable confirmado es Joel Alejandro Lara Rodriguez, quien opera bajo la marca VISLY. El domicilio de contacto fue autorizado por el titular y no implica respaldo de la institución educativa ubicada allí. La institución que administra la atención debe proporcionar su propio aviso y definir los acuerdos de tratamiento con proveedores. El sitio no inventa una razón social ni acredita una certificación legal, médica o de seguridad.

Los cambios de datos de contacto deben aplicarse en todas las páginas. No incluir expedientes, claves, tokens, credenciales Firebase ni archivos privados en este repositorio.

## Distribución de la app

La publicación en APKPure está en preparación y sujeta a revisión de esa plataforma. No se ofrece un enlace de descarga no publicado ni un APK de QA desde este sitio. La aplicación requiere una cuenta institucional; descargarla no crea acceso a datos clínicos.

El identificador Android `com.ineo.hospital` se conserva para continuidad. La marca pública actual es **OftalCore**. El nombre anterior sólo se explica en soporte.

## Recursos y privacidad del sitio

- `assets/oftalcore-icon.png`: icono original de la aplicación.
- `assets/app-administracion.jpg`: captura real de demostración del cliente exportado a web, con datos sintéticos y sin información de pacientes reales.
- CSS y JavaScript locales, sin dependencias remotas ni imágenes de terceros.
- Sin cookies propias, analítica, anuncios, formularios remotos, localStorage o sessionStorage.
- El proveedor de alojamiento puede conservar sus propios registros técnicos de conexión.
- El menú móvil tiene foco visible, estado accesible y cierre con Escape. Se respeta movimiento reducido.

## Estructura

`index.html` presenta el producto. `privacidad.html`, `terminos.html`, `soporte.html`, `eliminacion.html` y `cookies.html` contienen las páginas informativas. `assets/styles.css` y `assets/main.js` comparten la presentación y la navegación. `robots.txt` permite el rastreo; el sitemap y los metadatos con dominio definitivo se añaden cuando se confirme la URL pública.

## Verificación realizada

La revisión estática comprobó los enlaces locales y sus anclas, un H1 por página, identificadores únicos, sintaxis JavaScript y la configuración JSON. La revisión visual en un navegador real quedó pendiente por fallos de las herramientas disponibles. Antes de publicar, revisar las seis páginas en escritorio y teléfono, el menú móvil, el foco por teclado, los correos y las rutas limpias en Vercel. Estos controles estáticos no sustituyen la comprobación visual ni acreditan aceptación de una tienda.
