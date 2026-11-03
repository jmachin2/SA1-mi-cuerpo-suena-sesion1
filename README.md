# Mi cuerpo suena — Música de 1.º de Primaria

Repositorio **oficial de las sesiones de Música** del proyecto de 1.º de Primaria. El nombre histórico del repositorio termina en «sesion1», pero actualmente incluye **tres sesiones**.

**Abrir la web:** https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/

## Sesiones

| Sesión | Contenido | Abrir |
|---|---|---|
| 1 · Mi cuerpo suena | Sonidos corporales, silencio, imitación y ritmos | [Sesión 1](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion1.html) |
| 2 · Mi cuerpo tiene pulso | Pulso musical, latido y movimiento | [Sesión 2](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion2/) |
| 3 · Mi voz saluda | Voz hablada y cantada, escucha, eco, canción y evaluación | [Sesión 3](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion3/) |

## Documentación para continuar el proyecto

- **[ESTADO_DEL_PROYECTO.md](ESTADO_DEL_PROYECTO.md)** — inventario de los archivos y recursos, decisiones pedagógicas y técnicas, estado de las tres sesiones y próximos pasos.
- **[PROCEDIMIENTO_ACTUALIZACION.md](PROCEDIMIENTO_ACTUALIZACION.md)** — proceso de cambio seguro, comprobaciones y verificación de GitHub Pages.

## Estructura existente (no mover archivos sin necesidad)

```text
index.html                 Portada de las sesiones
sesion1.html               Sesión 1
sesion2/index.html         Sesión 2
sesion3/index.html         Sesión 3
sesion3/*.mp3              Audios de la sesión 3
app.js                     Recursos de la web original
styles.css                 Estilos de la web original
*.png y *.mp3              Ilustraciones y audios originales en raíz
```

## Regla de trabajo

**El repositorio, en su rama `main`, es la fuente oficial del código.** Editar siempre sobre los archivos existentes y conservar actividades y recursos no solicitados. Para cambios mayores, trabajar en una rama y revisar antes de fusionar. Cada cambio debe tener un commit descriptivo.

Los archivos HTML existentes usan rutas relativas y no deben sustituirse por un ZIP aislado. Antes de una modificación, leer la documentación anterior y comprobar el contenido real del repositorio.

## Publicación

El sitio se publica mediante **GitHub Pages**. La configuración se comprueba en **Settings → Pages**, donde debe verificarse si utiliza una rama o GitHub Actions. No confundir un commit guardado con un despliegue comprobado: después de actualizar, visitar la URL y revisar la página.

## Privacidad

El repositorio es **público**. No subir listas de alumnado, evaluaciones, grabaciones identificables, CSV de calificaciones ni datos personales. Las rúbricas de clase pueden mantenerse en el registro privado del docente; las fichas genéricas y código educativo sí pueden formar parte de la web.
