# FRAMEWORK ELEGIDO - PUNTO 2

# Proyecto Angular 20 + Bootstrap

Este proyecto utiliza **Bootstrap 5** como framework. 

# TEMPLATE DESCARGADO - PUNTO 3

- Nombre del template: [Creative Template](https://startbootstrap.com/previews/creative)
- Fuente: Start Bootstrap
- Licencia: [MIT License](https://github.com/startbootstrap/startbootstrap-creative/blob/master/LICENSE)
- Bootstrap Version: [5.2.3]


# PWA Offline - PUNTO 8
La página principal (`/home`) funciona sin conexión gracias al *precaching* (o prealmacenamiento en caché) es una técnica para almacenar recursos de datos o archivos en una memoria caché de alta velocidad antes de que se necesiten:

- HTML (`index.html`)
- Archivos CSS y JS generados
- Imágenes clave del template
- Recursos en `/assets`

En el archivo ngsw-config.json para precaching debe configurarse las rutas

# Prueba Offline
1. Para activar el Service Worker (Compilar en modo producción)-> `ng build --configuration production`  
2. La ruta que recomienda Angular es `http-server -p 8080 -c-1 dist/segundoexamen-fernanda-justiniano`
3. Abrir en Chrome `http://localhost:8080/browser/`
Starting up http-server, serving dist/segundoexamen-fernanda-justiniano/browser
stiniano/browser
http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: -1 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://192.168.56.1:8080
  http://192.168.0.12:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server

4. En DevTools pestaña de aplicacion se debe activar **Offline**
5. Refrescar y la Home sigue visible sin conexión ✅

