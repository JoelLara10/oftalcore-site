# Publicación de OftalCore en APKPure

## Versión que corresponde publicar

Usar un APK Release firmado del perfil `production-apk`, con nombre visible OftalCore y API de producción. No subir QA, los perfiles de Actividad 24, Debug, credenciales de prueba ni firmware. El paquete Android conserva `com.ineo.hospital`: el cambio de marca no obliga a cambiar este identificador y cambiarlo impediría la continuidad de las actualizaciones.

Se solicitó el 17 de noviembre de 2026 una nueva compilación 1.0.0 build 9, código `ad369bae92d5ef152d5db21ffa5aeceeedb7704e`:
[Ver compilación en Expo](https://expo.dev/accounts/joeeel10/projects/ineo-hospital/builds/e7c0418c-3d3d-4ed6-8e91-7e6a5981340d).
Comprobar que termine en FINISHED y descargar el APK desde esa página. La existencia de este enlace no significa que la compilación haya finalizado ni que APKPure haya aprobado la aplicación.

## Primero publicar el sitio

1. Importar este repositorio en Vercel con la cuenta propietaria.
2. Elegir Framework Preset **Other**, directorio raíz del repositorio, sin comando de build y Output Directory `.`. No se requieren variables de entorno.
3. Abrir el dominio público asignado y comprobar inicio, privacidad, soporte, términos y eliminación. Deben funcionar sin iniciar sesión en Vercel.
4. Usar la URL real asignada, seguida de `/privacidad`, como política de privacidad y `/eliminacion` como procedimiento de eliminación. No usar el antiguo dominio de INEO para representar el nombre nuevo sin actualizar su contenido.

## Ficha sugerida

- Nombre: **OftalCore**.
- Desarrollador: **VISLY**; titular/contacto del producto: Joel Alejandro Lara Rodriguez.
- Correo público: **soporte.visly@gmail.com**.
- Categoría: elegir la opción que describa gestión clínica o medicina según el catálogo de la consola; no declarar certificación médica.
- Descripción corta: **Gestión clínica y seguimiento de pacientes para personal autorizado.**
- Idioma principal: español; la aplicación incluye apartados en español e inglés.

Descripción larga:

> OftalCore reúne funciones de administración de pacientes, atención médica y de enfermería, estudios y configuración para personal habilitado por una institución. El acceso requiere una cuenta y depende de los permisos asignados.
>
> El módulo de monitoreo permite consultar las lecturas y alertas de dispositivos previamente asociados al ambiente de la institución. Las notificaciones requieren activación, permiso del dispositivo, conectividad y configuración del servicio.
>
> OftalCore está en desarrollo y validación. Las demostraciones utilizan datos sintéticos. El prototipo de monitoreo es complementario: no es un dispositivo médico certificado, un diagnóstico ni un servicio de emergencias. La descarga no crea una cuenta pública ni concede acceso a expedientes.
>
> Soporte y privacidad: soporte.visly@gmail.com.

Notas de versión propuestas:

> Actualización de dependencias compatibles con Expo y correcciones de seguridad del árbol de herramientas. Se mantienen los módulos de gestión y monitoreo. El acceso requiere cuenta institucional.

## En la consola de APKPure

1. Entrar en [APKPure Developer Console](https://developer.apkpure.com/) e iniciar sesión o registrar la cuenta de desarrollador. La verificación humana y la aceptación de condiciones las realiza el titular.
2. Agregar una aplicación o reclamar la ficha existente del mismo paquete si ya está registrada. No crear una identidad de empresa distinta de la que puedes acreditar.
3. Completar los campos que muestre la consola: nombre, descripción, categoría, contacto, web, política de privacidad, icono y capturas. Preparar el icono con las dimensiones que solicite la consola; conservar la marca real. Las capturas deben corresponder a la versión Android que se distribuye y usar datos ficticios.
4. En la sección de versiones cargar el APK Release firmado. Conservar la clave de firma existente en EAS: nunca subirla como archivo público.
5. Si se requiere revisión con acceso, facilitar una cuenta sintética dedicada por el canal privado de la tienda. No publicar la cuenta Alex ni contraseñas en el sitio o en GitHub.
6. Revisar las declaraciones de datos y permisos conforme a la aplicación y la política. No declarar que la app no trata datos: el sistema puede procesar información de salud y registros push.
7. Tras probar el APK en un teléfono y revisar la ficha, enviarlo a revisión. Esperar la decisión de APKPure; subir un archivo no equivale a su aprobación.

## Comprobación en teléfono antes de enviar

Instalar el APK de producción, comprobar nombre y versión, acceso válido y rechazo de credenciales incorrectas, permisos por rol, cierre de sesión y apertura de documentos. Para monitoreo se necesita un dispositivo asociado a producción: el ESP32 actual de QA no aparece automáticamente en ese ambiente. Los avisos push en producción necesitan configuración y una prueba específica; no prometerlos como aprobados por una prueba de QA.

## Fuentes consultadas

- [Centro de ayuda de APKPure / APK.com](https://apk.com/support): acceso a la consola, envío de aplicaciones y documentación de titularidad.
- [Ley Federal de Protección de Datos Personales en Posesión de los Particulares](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).

La consola puede cambiar sus pantallas y campos. En esta preparación su acceso mostró una verificación humana de Cloudflare; no se completó el envío a la tienda.
