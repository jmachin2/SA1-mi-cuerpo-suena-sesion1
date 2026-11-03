# PROCEDIMIENTO DE ACTUALIZACIÓN SEGURA — Música 1.º de Primaria

Este procedimiento permite mantener **GitHub como única fuente oficial del código**. El repositorio ya contiene tres sesiones. No se deben rehacer ni sustituir por proyectos nuevos durante una corrección puntual.

## 1. Preparar un cambio

1. Abrir [el repositorio](https://github.com/jmachin2/SA1-mi-cuerpo-suena-sesion1) y comprobar la rama predeterminada `main`, el último commit y los archivos afectados.
2. Consultar `ESTADO_DEL_PROYECTO.md` y leer el archivo concreto que se quiere cambiar.
3. Delimitar el cambio: sesión, pantalla, incidencia, comportamiento esperado y pruebas.
4. **No mover ni renombrar archivos existentes** salvo necesidad comprobada, porque sus enlaces relativos dependen de la estructura.

## 2. Edición y control de versiones

**Para cambios pequeños y de bajo riesgo:** editar únicamente el archivo afectado, obtener el SHA actual antes de escribir, crear un commit con un mensaje específico (por ejemplo, `fix(sesion3): corregir control de audio`) y verificar el resultado.

**Para cambios mayores o de riesgo:** usar una rama de trabajo y abrir una pull request para revisar diferencias antes de incorporar a `main`. No mezclar correcciones independientes en el mismo commit.

Antes de cualquier sustitución de HTML, conservar el código de las otras sesiones tal como está. No sobrescribir `index.html` de la raíz con una página de sesión, ni `sesion3/index.html` con una versión aislada que omita parte de la sesión.

Git guarda el historial; para volver a una versión anterior se puede **revertir el commit concreto** en lugar de borrar o reconstruir la web.

## 3. Mapa de edición

| Qué se quiere cambiar | Archivo(s) objetivo |
|---|---|
| Portada, orden o acceso a sesiones | `index.html` |
| Sesión 1 | `sesion1.html`; revisar también dependencias `app.js`, `styles.css` y recursos en raíz |
| Sesión 2 | `sesion2/index.html` |
| Sesión 3: pantallas, eco, controles, ficha de evaluación | `sesion3/index.html` |
| Sesión 3: archivos de audio | MP3 existentes en `sesion3/`; conservar los nombres o actualizar todas las referencias |
| Historia, decisiones y tareas pendientes | `ESTADO_DEL_PROYECTO.md` |
| Procedimiento técnico | Este archivo |

Al editar los recursos, comprobar que el HTML sigue apuntando a rutas relativas correctas. El repositorio es público: no incluir credenciales, nombres de alumnos, notas ni otros datos personales.

## 4. Comprobación antes de publicar

- Confirmar que el HTML y JavaScript modificados no tienen errores evidentes.
- Revisar que **la portada enlaza a las tres sesiones**.
- Probar la pantalla afectada y al menos una pantalla anterior y posterior.
- Revisar audios MP3 reales, con botón de reproducción y pausa; no asumir que un enlace de Drive incrustado funcionará como un reproductor.
- Si el cambio afecta navegación, comprobar indicadores del tipo `1/7`, el último «Siguiente» y la opción «Atrás».
- Si el cambio afecta evaluación, comprobar formulario, escala 1–4, guardado local, exportación y modo impresión.
- Revisar los tamaños de pantalla habituales y evitar controles recortados o superpuestos.

## 5. GitHub Pages

La dirección pública es:

https://jmachin2.github.io/SA1-mi-cuerpo-suena-sesion1/

**Verificación de configuración (no presumirla):**
1. Entrar en repositorio → **Settings → Pages**.
2. Consultar **Build and deployment**.
3. Si está configurado como *Deploy from a branch*, verificar que la rama y carpeta seleccionadas corresponden a la publicación prevista (habitualmente `main` y `/(root)` en una web con `index.html` en raíz).
4. Si está configurado con **GitHub Actions**, revisar el workflow correspondiente en Actions y su resultado; no sustituirlo sin necesidad.
5. Revisar el estado del despliegue en **Actions** o en la sección Pages, cuando esté disponible.

**Importante:** un commit correcto en GitHub **no prueba** que Pages ya haya publicado el contenido. Verificar siempre la URL pública y el cambio visible. Si aparece una versión anterior, comprobar primero el despliegue y después realizar recarga forzada (Ctrl+F5) o abrir en ventana privada.

## 6. Lista de comprobación de publicación

- [ ] El commit incluye solo los archivos previstos.
- [ ] Las sesiones 1, 2 y 3 continúan accesibles.
- [ ] La página afectada muestra el cambio.
- [ ] Audios y materiales siguen funcionando.
- [ ] Navegación, modo pantalla completa e impresión funcionan cuando corresponda.
- [ ] Ningún recurso ni contenido pedagógico no solicitado se ha perdido.
- [ ] La publicación en GitHub Pages se ha verificado, o se ha indicado expresamente que no fue posible comprobarla.
- [ ] Se actualizó `ESTADO_DEL_PROYECTO.md` si cambió el estado, la estructura o las decisiones.

## 7. Cómo solicitar futuras actualizaciones a ChatGPT

Ejemplo:

> En el repositorio `jmachin2/SA1-mi-cuerpo-suena-sesion1`, corrige el reproductor de la pantalla 5/7 de la sesión 3. Lee primero `ESTADO_DEL_PROYECTO.md` y `PROCEDIMIENTO_ACTUALIZACION.md`. Conserva los demás contenidos. Haz un commit y comprueba la web publicada. Dime exactamente qué archivos cambiaste.

Con estas instrucciones se puede abrir una conversación nueva sin copiar el historial completo.

## 8. Evaluaciones del alumnado

La web de GitHub Pages es estática. El guardado en el navegador no equivale a una base de datos compartida. La hoja de observación de la clase se mantiene en el Google Sheets utilizado por el docente. **Nunca subir CSV, nombres, calificaciones ni otros registros personales de alumnos a GitHub público.**

## 9. Estado del procedimiento

Creado el **3 de noviembre de 2026**. El procedimiento es documentación, no una nueva configuración de GitHub Pages ni una automatización de despliegue.
