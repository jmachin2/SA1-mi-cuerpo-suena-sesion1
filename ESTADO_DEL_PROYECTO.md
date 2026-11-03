# ESTADO DEL PROYECTO — Música · 1.º de Primaria

**Repositorio oficial:** https://github.com/jmachin2/SA1-mi-cuerpo-suena-sesion1  
**Web:** https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/  
**Rama principal:** `main`  
**Revisión documental inicial:** 3 de noviembre de 2026

> Este documento es el punto de continuidad del proyecto entre conversaciones. Refleja los archivos localizados en GitHub, no certifica por sí solo que GitHub Pages haya terminado cada despliegue. Antes de modificar archivos, volver a consultar el árbol y el último commit de `main`.

## Identidad y alcance

Web para conducir sesiones musicales en 1.º de Primaria, diseñada para el uso en clase y pizarra digital. Las **tres sesiones existentes se consideran contenido pedagógico conservado**. La documentación no autoriza a modificar sus actividades, textos, imágenes, audios, tiempos, navegación o evaluación sin una petición expresa.

El nombre del repositorio contiene «sesion1» por razones históricas, pero aloja **las sesiones 1, 2 y 3**. No renombrar el repositorio sin planificar redirecciones y revisar enlaces externos.

## Sesiones existentes

| Sesión | Título | Entrada en el repositorio | URL pública prevista |
|---|---|---|---|
| 1 | Mi cuerpo suena | `sesion1.html` | [Sesión 1](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion1.html) |
| 2 | Mi cuerpo tiene pulso | `sesion2/index.html` | [Sesión 2](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion2/) |
| 3 | Mi voz saluda | `sesion3/index.html` | [Sesión 3](https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/sesion3/) |

### Sesión 3 — estado observado

- La página contiene **7 pantallas**, incluida una pantalla final de evaluación.
- La evaluación docente incluye indicadores 1–4, guardado local en el navegador, exportación CSV y opciones de impresión. **Ese guardado no sincroniza automáticamente con Google Sheets ni con GitHub.**
- Recursos MP3 locales existentes: `sesion3/el-cuco-modelo.mp3`, `sesion3/el-cuco-cancion.mp3`, `sesion3/hablo-o-canto.mp3` y `sesion3/rap-de-la-semilla.mp3`.
- Los videos externos de YouTube pueden necesitar conexión a Internet; los MP3 locales no.
- La rúbrica de aula del Google Sheets «ANOTACIONES DE CLASE», pestaña **MUSICA**, es un registro independiente: https://docs.google.com/spreadsheets/d/1FcmNTAAs2vT47S7zkXs0DKbrN4ygy4BBpcGUtdoCQmk/edit#gid=1193601695. **No copiar nombres, notas ni información personal del alumnado a este repositorio público.**

## Estructura REAL del repositorio (sin reordenarla)

```text
/
├── index.html                   # Portada de las tres sesiones
├── sesion1.html                # Sesión 1
├── sesion2/
│   └── index.html              # Sesión 2
├── sesion3/
│   ├── index.html              # Sesión 3, incluye evaluación
│   ├── el-cuco-cancion.mp3
│   ├── el-cuco-modelo.mp3
│   ├── hablo-o-canto.mp3
│   └── rap-de-la-semilla.mp3
├── app.js                      # Código de la web original / sesión 1
├── styles.css                  # Estilos de la web original / sesión 1
├── *.png                       # Ilustraciones originales en la raíz
├── *.mp3                       # Audios originales en la raíz
├── download                    # Archivo vacío preexistente
├── README.md                   # Guía del repositorio
├── ESTADO_DEL_PROYECTO.md      # Estado y decisiones
└── PROCEDIMIENTO_ACTUALIZACION.md # Cómo editar y publicar
```

Las ilustraciones y audios de la raíz, y el HTML de las sesiones 1 y 2, **se mantienen tal como están**. La estructura anterior describe los archivos; no representa un plan de moverlos a otras carpetas.

## Decisiones consolidadas

1. **GitHub es la fuente oficial del código y los recursos de la web.** No crear variantes paralelas como versión maestra ni reemplazar la web con un ZIP independiente.
2. **Publicación mediante GitHub Pages** en la URL del repositorio; comprobar la configuración actual en Settings → Pages antes de cambiarla.
3. **Edición conservadora:** identificar el archivo afectado, editar solamente lo solicitado y conservar intactos los demás.
4. **Los archivos multimedia se referencian por rutas relativas** cuando están alojados dentro del repositorio. No depender de enlaces de Google Drive como única reproducción.
5. **Diseño didáctico:** primera infancia, legible en pizarra, botones claros, pantalla adaptable, imágenes amables y música audible con controles.
6. **Evaluación:** observación de la ejecución, actividades vocales/rítmicas, artefactos imprimibles y escala 1–4 con interpretación explícita; mantener los datos personales fuera del repositorio.
7. **Nada de datos privados en GitHub público:** no subir listados de alumnos, puntuaciones, CSV de evaluación, credenciales ni grabaciones identificables.

## Comprobaciones después de cada modificación

- La portada abre las sesiones 1, 2 y 3.
- La navegación anterior/siguiente y el modo pantalla completa siguen funcionando.
- No hay botones superpuestos ni controles cortados en ordenador o pizarra.
- Las imágenes cargan sin enlaces rotos.
- Los MP3 de la sesión 3 se pueden iniciar y detener; el audio no se reproduce simultáneamente de forma accidental.
- La pantalla 7/7 de sesión 3 permite abrir evaluación, usar la escala 1–4 y generar impresión/CSV.
- GitHub Pages publica el commit esperado; no confundir «commit guardado» con «web publicada y verificada».
- Verificar en ventana privada o con recarga forzada si se sospecha caché.

## Pendiente / futuras tareas

- Confirmar desde Settings → Pages la fuente de publicación (rama/carpeta o workflow); el árbol del repositorio no demuestra por sí solo cuál está configurada.
- Validar la web publicada en los navegadores y tamaños de pantalla que se usan en el aula.
- Incorporar sesiones futuras **solo cuando se soliciten** y enlazarlas desde la portada.
- Mantener este documento actualizado cuando cambien las rutas o los recursos.

## Continuar en un chat nuevo

> Trabaja sobre `jmachin2/SA1-mi-cuerpo-suena-sesion1` como fuente oficial. Lee `README.md`, `ESTADO_DEL_PROYECTO.md` y `PROCEDIMIENTO_ACTUALIZACION.md`, inspecciona la rama `main` antes de editar y conserva las tres sesiones y todos sus recursos. Modifica únicamente lo que pida y verifica tanto el commit como GitHub Pages.

## Registro de documentación

- **2026-11-03:** documentación inicial del estado y del procedimiento de actualización segura, sin cambios pedagógicos ni reestructuración de los recursos.
