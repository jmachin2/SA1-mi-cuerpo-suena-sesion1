# Auditoría pedagógica, musical y de experiencia de usuario — 1.º Primaria
**Proyecto:** SA1 «Mi cuerpo suena» · CEIP Camino Largo  
**Fecha de revisión:** 16/11/2026  
**Alcance:** portada, sesiones 1–4 y cuaderno de actividades.

## Referentes
- Programación oficial del proyecto: [documento de Música](https://docs.google.com/document/d/14cnkea0l2EW5b_yTk0KrfaPepskwq_isVo6veHnnR8k/edit).
- Currículo de Educación Primaria de Canarias, Decreto 211/2022: https://www.gobiernodecanarias.org/boc/2022/231/001.html
- DUA CAST 3.0: https://udlguidelines.cast.org/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

**Criterio de evaluación de esta auditoría:** la calidad no se mide por la cantidad de animaciones, botones o pantallas, sino por la calidad de la escucha, la práctica, la toma de decisiones y la evidencia obtenida. Se distingue el funcionamiento verificado en código de las pruebas pendientes en navegador o aula.

## Hallazgos, gravedad y propuestas

### P0 — verificar antes de afirmar que funciona
**S1: contenido no recuperable mediante la lectura disponible del repositorio.** El lector de GitHub devuelve contenido vacío para `sesion1.html`, aunque suministra una huella de archivo no vacía. Esto **no demuestra que el archivo real esté vacío**: podría ser una limitación de recuperación por tamaño/formato. Abrir la URL publicada en un navegador real, comprobar su peso y restaurar desde una copia conocida solo si se confirma la incidencia. No sobrescribirla sin esa comprobación.

**Recursos audiovisuales: auditar reproducción real y archivos publicados.** S3 referencia cinco reproductores/archivos MP3 (hablo-o-canto.mp3, rap-de-la-semilla.mp3, el-cuco-modelo.mp3, el-cuco-cancion.mp3 y un reproductor cargable); S4 depende del visor de Google Drive para la audición. La presencia del elemento HTML no confirma que el archivo exista ni que el navegador lo reproduzca. Añadir test manual y alternativa local/autorizar acceso a los enlaces.

### P1 — pedagogía musical y acceso
1. **S4 confundía agrupación con compás 4/4.** Cuatro pulsos empleados en un ejercicio corporal no identifican la métrica de la obra escuchada. **Corregido:** sustituida la indicación de 4/4 por «4 PULSOS», y el clic ya no acentúa artificialmente el primer pulso de cada bloque de cuatro. Verificación de código realizada.
2. **Consignas sobrecargadas en algunas pantallas.** La información para docentes y las acciones infantiles deben separarse. Una misión debe contener **una acción observable a la vez**: escucho → hago → creo → comunico.
3. **La web no debe reemplazar la actividad corporal.** La pantalla muestra una referencia; no es el objeto principal de atención. Introducir fases de escucha con la pantalla quieta y períodos de movimiento sin mirar el proyector.
4. **Accesibilidad auditiva y comunicativa.** Mostrar señales de inicio/parada, no depender exclusivamente del clic audible, no hablar sobre música, permitir ver el rostro de quien da las consignas y evitar volumen alto sin comprobación. Ofrecer ejecución sentado/de pie, gestos y elección.
5. **Evaluación individual.** Registrar evidencia concreta, ayuda ofrecida y siguiente paso; no confundir participación grupal ni caligrafía con adquisición musical. Emplear escala A/B/C/NO establecida en la programación, no una nota automática basada en puntos.

### P2 — arquitectura de información y experiencia de aula
6. **Identidad visual y navegación no homogéneas.** S2, S3 y S4 usan estilos, controles y distribución distintos. Consolidar un patrón: inicio → actividades → cierre, botón grande y visible de volver, progreso y acceso a ayuda docente sin tapar los mandos del alumnado.
7. **Carga pesada de S2.** El HTML recuperado mide ~860 kB y contiene al menos seis imágenes incrustadas en `data:image`. Se recomienda extraer los recursos a archivos optimizados, diferir los no visibles y documentar un uso offline.
8. **Densidad de controles de S3.** El HTML contiene más de cincuenta botones. Mantenerlos si cada uno tiene función didáctica, pero organizar sus controles por misión y evitar que tareas distintas aparezcan simultáneamente. Revisar si las opciones de escucha se reducen en la vista infantil.
9. **S4: controles mejorables para ajuste en aula.** El bucle de cuatro tarjetas y los controles de velocidad funcionan como andamiaje, pero deben indicar visualmente qué se espera que haga el niño y separar el *modelo sonoro* de la *interpretación corporal*. Verificar en pizarra táctil tamaño de botones, disposición y recorte de pantalla.
10. **Cuaderno de actividades.** No debe sustituir la ejecución musical. El editor docente tiene Playwrite ES, pauta Montessori 5 mm y búsqueda de pictogramas ARASAAC; requiere inspección física a escala 100 % y confirmación de licencias/atribución, imágenes realmente cargadas y ausencia de desbordamientos.

### P3 — accesibilidad técnica
11. Comprobar foco visible, navegación por teclado, nombre accesible y estado de botones que conmutan y mensajes en `aria-live`. No basta con atributos aislados: se precisa prueba funcional con teclado.
12. No reproducir música automáticamente ni emitir sonido sin una acción explícita del docente. Los cambios de página deben parar los sonidos y respetar la decisión de silencio.
13. Asegurar contraste, controles grandes y visibilidad en proyector 16:9; comprobar pantallas pequeñas sin superposición ni desplazamiento innecesario.
14. Usar una nomenclatura coherente: pulso = continuidad regular; ritmo = secuencia de duraciones; velocidad = pulsos por minuto; voz hablada/cantada = formas de producción; eco = imitación posterior.

## Matriz de alineación por sesión

| Sesión | Núcleo de aprendizaje | Práctica observable | Evidencia válida |
|---|---|---|---|
| 1. Mi cuerpo suena | Sonido/silencio, timbre corporal, imitación y creación | Reconocer, reproducir y ordenar 4 acciones | Identifica y ejecuta una acción sonora/silencio; aporta una elección |
| 2. Mi cuerpo tiene pulso | Regularidad y velocidad de pulso | Moverse o señalar pulsos, comparar velocidades | Sigue un pulso con la ayuda registrada |
| 3. Mi voz saluda | Voz hablada/cantada y respuesta por eco | Imitar fragmento del Zurrón con gesto | Explora dos formas vocales y responde con intención |
| 4. Caminamos con la Pandorga | Escucha musical y respuesta corporal | Escuchar recurso, acompañar pulso y expresar una característica | Describe una característica accesible y muestra un acompañamiento |

## Cambios realizados y verificados en código

**Fecha de aplicación:** 16/11/2026. La verificación significa revisión de los archivos de GitHub y comprobación de sintaxis del JavaScript modificado, no prueba física.

| Componente | Cambio |
|---|---|
| Portada | Objetivo, acción infantil y evidencia observable en cada sesión; secuencia escuchar → practicar → crear → compartir; protocolo accesible; enlaces a diagnóstico y registro |
| Sesión 2 | Teclado protegido al usar campos, navegación de diapositivas con estado accesible, imágenes con decodificación asíncrona y carga diferida |
| Sesión 3 | MP3 bajo demanda, mensajes accesibles ante errores, enlaces alternativos a archivos, navegación por teclado protegida, ocultación de pantallas no activas |
| Sesión 4 | Eliminada atribución de compás 4/4; cuatro pulsos representados sin acentuar artificialmente el primero; consigna simplificada, estados visuales accesibles, enlace directo a la audición en Drive |
| Diagnóstico | Página `diagnostico/` para comprobar desde el equipo del aula páginas y MP3 mediante HTTP HEAD, escuchar los cuatro audios, y completar la lista de revisión del aula |
| Registro | Página `registro/` para anotar evidencias musicales individuales por sesión, ayuda ofrecida, escala A/B/C/NO, siguiente paso y fecha de revisión; exportación CSV sin envío remoto |
| Cuaderno | Se mantiene edición de consignas, Playwrite ES, pauta 5 mm y ARASAAC; continúa pendiente validación física de impresión y carga de pictogramas |

**Archivos que deliberadamente no se han sobrescrito:** `sesion1.html` (el lector conectado devuelve texto vacío con SHA no vacío; no se puede confirmar una incidencia real sin abrir la web), y las ilustraciones binarias incrustadas de `sesion2/index.html` (modificarlas o eliminarlas sin acceso completo al render puede causar pérdida de contenido).

**Limitación importante:** las cuatro referencias MP3 de S3 existen en GitHub según el conector (identificador SHA), pero su reproducción y duración real se deben comprobar en el navegador. Tampoco se ha podido comprobar desde este entorno la página pública de GitHub Pages ni el sonido de los altavoces del centro.

## Validaciones pendientes y orden de trabajo
1. **P0:** abrir `diagnostico/` desde Chrome/Chromebook del centro, ejecutar «Comprobar enlaces», reproducir cada MP3 y abrir la audición de Drive; revisar también S1 y anotar el resultado. La lista de verificación no se puede completar automáticamente desde el repositorio.
2. **P1:** observar una sesión real: medir escucha activa y movimiento frente a tiempo pasivo ante la pantalla; ajustar consignas y ritmo de páginas.
3. **P1:** comprobar `registro/`, exportar un CSV de prueba y verificar que se entiende la escala A/B/C/NO. Revisar ayudas visuales y accesibilidad con usuarios reales.
4. **P2:** probar en 16:9 de aula y en Chromebook pequeño; identificar botones solapados, scroll involuntario y lectores de pantalla.
5. **P2:** validar cuaderno en A4 al 100 %, licencias ARASAAC, fuente Playwrite ES cargada y medidas 5 mm verificadas con regla.
6. **P3:** una vez verificados los fallos, refactorizar estilos/audio de cada sesión manteniendo siempre una copia del archivo anterior.

**Estado:** auditoría inicial y primera batería de mejoras aplicadas en GitHub. Continúan pendientes las pruebas funcionales del navegador, las pruebas de sonido, el control de carga de la sesión 2 y la impresión física.
