# Mi cuerpo suena · Sesión 1

Web educativa de Música para 1.º de Primaria, preparada para GitHub Pages.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube **todo el contenido de esta carpeta manteniendo la estructura**. `index.html` debe quedar en la raíz.
3. En el repositorio abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama **main** y la carpeta **/(root)**. Pulsa **Save**.
6. GitHub mostrará la dirección pública cuando termine el despliegue.

## Estructura

- `index.html` — página principal
- `styles.css` — estilos
- `app.js` — interactividad
- `assets/images/` — ilustraciones
- `assets/images/cards/` — tarjetas Palmas, Muslos, Pies, Voz y Silencio
- `assets/audio/` — canciones y bases musicales
- `.nojekyll` — evita procesamiento innecesario de Jekyll

La web usa rutas relativas, por lo que funciona correctamente tanto en un repositorio tipo `usuario.github.io` como en `usuario.github.io/nombre-del-repositorio/`.
