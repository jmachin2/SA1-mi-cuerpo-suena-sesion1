const slides = [...document.querySelectorAll('.slide')];
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressDots = document.getElementById('progressDots');
const progressCount = document.getElementById('progressCount');
const teacherBtn = document.getElementById('teacherBtn');
const teacherPanel = document.getElementById('teacherPanel');
const teacherBody = document.getElementById('teacherBody');
const teacherClose = document.getElementById('teacherClose');
const panelBackdrop = document.getElementById('panelBackdrop');
const fullscreenBtn = document.getElementById('fullscreenBtn');
let current = 0;

const teacherNotes = [
  {time:'2 min',objective:'Presentar el reto y activar la curiosidad.',say:'Empieza con el grupo en silencio. Pregunta: “¿Creéis que podemos hacer música sin instrumentos?”',observe:'Atención inicial y participación oral.',adapt:'No exigir lectura. Lee tú la pregunta en voz alta.'},
  {time:'4 min',objective:'Tomar conciencia de sonidos corporales y diferenciar sonido/silencio.',say:'Mano en el pecho → respiramos → escuchamos el aula → una palmada → volvemos al silencio.',observe:'Si paran cuando aparece la señal de silencio.',adapt:'Reduce verbalización. Modela con gestos y deja pequeños tiempos de escucha.'},
  {time:'5 min',objective:'Explorar cuatro fuentes de sonido corporal.',say:'“Ahora buscamos sonidos con las manos… muslos… pies… voz.”',observe:'Explora, imita y controla la intensidad.',adapt:'En VOZ usa “mmm”, “aaa” o “shhh”; evita los gritos.'},
  {time:'4 min',objective:'Responder rápidamente a señales de sonido y silencio.',say:'Alterna tarjetas: PALMAS → SILENCIO → PIES → SILENCIO.',observe:'Distingue sonido/silencio y detiene la acción a tiempo.',adapt:'Si el grupo se activa demasiado, aumenta SILENCIO y ralentiza los cambios.'},
  {time:'5 min',objective:'Imitar secuencias corporales breves.',say:'Primero una acción. Después dos. Usa tres solo si el grupo responde bien.',observe:'Atención, memoria inmediata e imitación.',adapt:'No expliques demasiado: vuelve a modelar.'},
  {time:'5 min',objective:'Seguir señales de inicio/parada y asumir el rol de director.',say:'Selecciona una acción, pulsa EMPEZAMOS y luego PARAMOS. Después cede el papel a un alumno.',observe:'Autocontrol y respuesta a una señal externa.',adapt:'Empieza con una sola acción y añade cambios cuando controlen la parada.'},
  {time:'4 min',objective:'Construir una secuencia colectiva con cinco niveles de intensidad y un final de silencio real.',say:'La tormenta crece: dedos → palmas → muslos → pies → TODOS (clímax) → silencio. Cada nivel debe sonar más intenso que el anterior.',observe:'Sigue el orden, regula la intensidad y es capaz de detenerse por completo al final.',adapt:'Modela tú el aumento de intensidad. El clímax debe ser breve y controlado; nunca gritos ni golpes fuertes.'},
  {time:'10 min',objective:'Crear un patrón propio de cuatro sonidos e imitar el de los compañeros.',say:'Cada niño elige 4 sonidos. Puede repetir o cambiar. Cuando complete las casillas, hace su ritmo y toda la clase lo imita. Mantén los turnos rápidos.',observe:'Crea una secuencia de cuatro acciones, recuerda el orden, la interpreta e imita a otros.',adapt:'Acepta patrones muy sencillos. Si alguien duda, ofrece dos opciones. No exigir variedad: repetir también es crear.'},
  {time:'5 min',objective:'Integrar palmas, muslos, pies, voz y silencio en una canción de cierre.',say:'Primera vez: escuchamos. Segunda vez: hacemos las acciones. La canción nunca empieza sola.',observe:'Participa y relaciona cada palabra con la acción corporal.',adapt:'Si el audio falla, canta tú la letra y usa la secuencia visual.'},
  {time:'2 min',objective:'Verbalizar el aprendizaje principal y hacer una comprobación rápida.',say:'Pregunta: “¿Qué hemos usado hoy para hacer música?” Termina con 👏 → 🦵 → 👣 → ✋.',observe:'Explora sonidos, crea, imita, diferencia sonido/silencio y responde a la señal de parada.',adapt:'Acepta respuesta oral, gesto o señalamiento.'}
];

function buildDots(){
  slides.forEach((_,i)=>{
    const b=document.createElement('button');
    b.type='button'; b.setAttribute('aria-label',`Ir a pantalla ${i+1}`);
    b.addEventListener('click',()=>showSlide(i));
    progressDots.appendChild(b);
  });
}
function showSlide(index){
  current=Math.max(0,Math.min(slides.length-1,index));
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  [...progressDots.children].forEach((d,i)=>{
    d.classList.toggle('active',i===current); d.classList.toggle('done',i<current);
  });
  progressCount.textContent=`${current+1} / ${slides.length}`;
  prevBtn.disabled=current===0;
  nextBtn.disabled=current===slides.length-1;
  nextBtn.textContent=current===slides.length-1?'FIN ✓':'SIGUIENTE →';
  renderTeacher();
  document.body.classList.remove('silence-mode');
  const active=slides[current]; if(active) active.scrollTop=0;
  document.querySelectorAll('audio').forEach(a=>{if(!a.closest('.slide')?.classList.contains('active')) a.pause();});
}
function renderTeacher(){
  const n=teacherNotes[current];
  teacherBody.innerHTML=`
    <span class="teacher-chip">⏱ ${n.time}</span>
    <h3>Objetivo</h3><p>${n.objective}</p>
    <h3>Qué hacer / decir</h3><p>${n.say}</p>
    <h3>Qué observar</h3><p>${n.observe}</p>
    <h3>Adaptación rápida</h3><p>${n.adapt}</p>`;
}
function openTeacher(open=true){
  teacherPanel.classList.toggle('open',open); panelBackdrop.classList.toggle('show',open);
  teacherPanel.setAttribute('aria-hidden',String(!open)); teacherBtn.setAttribute('aria-expanded',String(open));
}

buildDots(); showSlide(0);
prevBtn.addEventListener('click',()=>showSlide(current-1));
nextBtn.addEventListener('click',()=>showSlide(current+1));
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showSlide(current+1)));
teacherBtn.addEventListener('click',()=>openTeacher(!teacherPanel.classList.contains('open')));
teacherClose.addEventListener('click',()=>openTeacher(false)); panelBackdrop.addEventListener('click',()=>openTeacher(false));

fullscreenBtn.addEventListener('click',async()=>{
  try{
    if(!document.fullscreenElement){await document.documentElement.requestFullscreen();}
    else{await document.exitFullscreen();}
  }catch(e){}
});
document.addEventListener('fullscreenchange',()=>{fullscreenBtn.innerHTML=document.fullscreenElement?'⛶ <span>SALIR</span>':'⛶ <span>PANTALLA</span>';});

document.addEventListener('keydown',e=>{
  if(e.target.matches('input')) return;
  if(e.key==='ArrowRight') showSlide(current+1);
  if(e.key==='ArrowLeft') showSlide(current-1);
  if(e.key.toLowerCase()==='d') openTeacher(!teacherPanel.classList.contains('open'));
  if(e.key.toLowerCase()==='f') fullscreenBtn.click();
  if(e.key==='Escape') openTeacher(false);
});

// Slide 2
const bodyPrompt=document.getElementById('bodyPrompt');
const soundStateVisual=document.getElementById('soundStateVisual');
const cueMessages={siente:'Pon una mano en el pecho. ¿Notas algo?',escucha:'Cierra un momento la boca y escucha.',respira:'Toma aire… y suéltalo despacio.'};
document.querySelectorAll('[data-cue]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-cue]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');bodyPrompt.textContent=cueMessages[btn.dataset.cue];
}));
document.querySelectorAll('[data-state]').forEach(btn=>btn.addEventListener('click',()=>{
  const silence=btn.dataset.state==='silence';
  soundStateVisual.className='visual-focus body-listen '+(silence?'silenced':'sounded')+' flash';
  soundStateVisual.innerHTML=silence?'<div class="big-symbol">🤫</div><p>SILENCIO. Nos quedamos quietos y escuchamos.</p>':'<div class="big-symbol">👏</div><p>SONIDO. Una palmada… y escuchamos cómo termina.</p>';
  document.body.classList.toggle('silence-mode',silence);
  setTimeout(()=>soundStateVisual.classList.remove('flash'),350);
}));

// Slide 3
const exploreFeedback=document.getElementById('exploreFeedback');
const exploreText={palmas:'👏 PALMAS · Prueba una palmada suave y otra normal.',muslos:'🦵 MUSLOS · Golpea suavemente con las manos.',pies:'👣 PIES · Marca el suelo sin dar golpes fuertes.',voz:'👄 VOZ · Prueba “mmm”, “aaa” o “shhh”. Sin gritar.'};
document.querySelectorAll('#exploreGrid [data-action]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('#exploreGrid [data-action]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');exploreFeedback.textContent=exploreText[btn.dataset.action];
}));

// Slide 4
const signalDisplay=document.getElementById('signalDisplay');
document.querySelectorAll('[data-signal]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-signal]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const sil=btn.dataset.signal==='SILENCIO';
  signalDisplay.className='signal-display '+(sil?'silent':'loud');
  signalDisplay.innerHTML=`<span>${btn.dataset.emoji}</span><b>${btn.dataset.signal}</b>`;
  document.body.classList.toggle('silence-mode',sil);
}));

// Slide 5
const mirrorChallenge=document.getElementById('mirrorChallenge');
const mirrorPatterns=['👏','👏 👏','🦵','👣','👏 🦵','🦵 👣','👏 🦵 👏','👣 👏'];
let mirrorIndex=0;
document.getElementById('newMirrorChallenge').addEventListener('click',()=>{
  mirrorIndex=(mirrorIndex+1)%mirrorPatterns.length;mirrorChallenge.textContent=mirrorPatterns[mirrorIndex];
});

// Slide 6
let director={emoji:'👏',name:'PALMAS'};
const directorDisplay=document.getElementById('directorDisplay');
document.querySelectorAll('[data-direct]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-direct]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');
  director={emoji:btn.dataset.direct,name:btn.dataset.name};directorDisplay.className='director-display';directorDisplay.innerHTML=`<span>${director.emoji}</span><b>${director.name} · PREPARADOS</b>`;
}));
document.getElementById('directorStart').addEventListener('click',()=>{directorDisplay.className='director-display go';directorDisplay.innerHTML=`<span>${director.emoji}</span><b>${director.name} · ¡YA!</b>`;document.body.classList.remove('silence-mode');});
document.getElementById('directorStop').addEventListener('click',()=>{directorDisplay.className='director-display stop';directorDisplay.innerHTML='<span>✋</span><b>SILENCIO · PARAMOS</b>';document.body.classList.add('silence-mode');});

// Slide 7
const stormButtons=[...document.querySelectorAll('#stormSteps button')];
const stormNow=document.getElementById('stormNow');
const stormLabels=[
  '🤌 NIVEL 1 · DEDOS · Muy suave… empiezan las primeras gotas.',
  '👏 NIVEL 2 · PALMAS · La lluvia crece un poco.',
  '🦵 NIVEL 3 · MUSLOS · Intensidad media: la tormenta se acerca.',
  '👣 NIVEL 4 · PIES · Fuerte y controlado: el trueno está cerca.',
  '⛈️ NIVEL 5 · TODOS · Clímax breve: el máximo de la tormenta.',
  '🤫 SILENCIO · Todo se detiene. Escuchamos el silencio.'
];
let stormIndex=-1;
function setStorm(i){
  stormIndex=i;
  stormButtons.forEach((b,j)=>b.classList.toggle('active',j===i));
  stormNow.textContent=i>=0?stormLabels[i]:'Pulsa EMPEZAR: la tormenta crecerá 5 veces y terminará en silencio.';
  stormNow.classList.toggle('silence',i===5);
  document.body.classList.toggle('silence-mode',i===5);
  if(i===5 && stormAudio && !stormAudio.paused){stormAudio.pause();stormAudio.currentTime=0;stormAudioToggle.textContent='▶ MÚSICA';}
}
stormButtons.forEach((b,i)=>b.addEventListener('click',()=>setStorm(i)));
document.getElementById('stormStart').addEventListener('click',()=>setStorm(stormIndex<5?stormIndex+1:0));
document.getElementById('stormReset').addEventListener('click',()=>setStorm(-1));

const stormAudio=document.getElementById('stormAudio');
const stormAudioToggle=document.getElementById('stormAudioToggle');
const stormAudioStatus=document.getElementById('stormAudioStatus');
stormAudio.addEventListener('loadedmetadata',()=>{stormAudioStatus.textContent='Pista de tormenta preparada automáticamente. Pulsa MÚSICA y después EMPEZAR.';stormAudioToggle.disabled=false;});
stormAudio.addEventListener('error',()=>{stormAudioStatus.textContent='Pista de tormenta pendiente de integrar. Añade “la-tormenta-del-cuerpo.mp3” a assets/audio.';stormAudioToggle.disabled=true;});
stormAudioToggle.addEventListener('click',async()=>{try{if(stormAudio.paused){stormAudio.currentTime=0;await stormAudio.play();stormAudioToggle.textContent='⏸ PAUSA';stormAudioStatus.textContent='Música en marcha · seguimos los 5 niveles.';}else{stormAudio.pause();stormAudioToggle.textContent='▶ MÚSICA';stormAudioStatus.textContent='Música en pausa.';}}catch(e){stormAudioStatus.textContent='La pista de tormenta todavía no está disponible.';}});
stormAudio.addEventListener('ended',()=>{stormAudioToggle.textContent='▶ MÚSICA';stormAudioStatus.textContent='Pista terminada · mantenemos el silencio final.';setStorm(5);});

// Slide 8 · Crea tu ritmo
const rhythmSlots=[...document.querySelectorAll('#rhythmSlots .rhythm-slot')];
const rhythmCall=document.getElementById('rhythmCall');
const childTurn=document.getElementById('childTurn');
const groupTurn=document.getElementById('groupTurn');
let rhythmPattern=[];
function renderRhythm(){
  rhythmSlots.forEach((slot,i)=>{const item=rhythmPattern[i];slot.classList.toggle('filled',!!item);slot.classList.remove('child-active','group-active');slot.querySelector('span').textContent=item?.emoji||'＋';slot.title=item?.name||`Sonido ${i+1}`;});
  const ready=rhythmPattern.length===4;childTurn.disabled=!ready;groupTurn.disabled=!ready;
  childTurn.classList.remove('active');groupTurn.classList.remove('active');
  rhythmCall.textContent=ready?'✅ ¡Ritmo preparado! Primero lo hace quien lo ha creado.':`Elige ${4-rhythmPattern.length} sonido${4-rhythmPattern.length===1?'':'s'} más.`;
}
document.querySelectorAll('[data-rhythm]').forEach(btn=>btn.addEventListener('click',()=>{if(rhythmPattern.length>=4)return;rhythmPattern.push({emoji:btn.dataset.rhythm,name:btn.dataset.rhythmName});renderRhythm();}));
document.getElementById('rhythmUndo').addEventListener('click',()=>{rhythmPattern.pop();renderRhythm();});
document.getElementById('rhythmClear').addEventListener('click',()=>{rhythmPattern=[];renderRhythm();});
function markTurn(type){
  if(rhythmPattern.length!==4)return;
  childTurn.classList.toggle('active',type==='child');groupTurn.classList.toggle('active',type==='group');
  rhythmSlots.forEach(s=>s.classList.remove('child-active','group-active'));
  rhythmCall.textContent=type==='child'?'🧒 TU RITMO · Haz tus 4 sonidos en orden.':'👥 TODOS IMITAMOS · Repetimos exactamente el mismo ritmo.';
  rhythmSlots.forEach((slot,i)=>setTimeout(()=>{rhythmSlots.forEach(s=>s.classList.remove(type==='child'?'child-active':'group-active'));slot.classList.add(type==='child'?'child-active':'group-active');if(i===3)setTimeout(()=>slot.classList.remove(type==='child'?'child-active':'group-active'),650);},i*620));
}
childTurn.addEventListener('click',()=>markTurn('child'));
groupTurn.addEventListener('click',()=>markTurn('group'));
renderRhythm();

const rhythmAudio=document.getElementById('rhythmAudio');
const playRhythmAudio=document.getElementById('playRhythmAudio');
const restartRhythmAudio=document.getElementById('restartRhythmAudio');
const rhythmAudioBar=document.getElementById('rhythmAudioBar');
const rhythmAudioStatus=document.getElementById('rhythmAudioStatus');
playRhythmAudio.addEventListener('click',async()=>{
  try{
    if(rhythmAudio.paused){await rhythmAudio.play();playRhythmAudio.textContent='⏸ PAUSAR MÚSICA';rhythmAudioStatus.textContent='Música en marcha · sigue los turnos de la base.';}
    else{rhythmAudio.pause();playRhythmAudio.textContent='▶ MÚSICA DEL JUEGO';rhythmAudioStatus.textContent='Música en pausa.';}
  }catch(e){rhythmAudioStatus.textContent='No se ha podido reproducir la base. Comprueba el audio del USB.';}
});
restartRhythmAudio.addEventListener('click',()=>{rhythmAudio.currentTime=0;if(!rhythmAudio.paused) rhythmAudio.play();});
rhythmAudio.addEventListener('timeupdate',()=>{if(rhythmAudio.duration) rhythmAudioBar.style.width=`${(rhythmAudio.currentTime/rhythmAudio.duration)*100}%`;});
rhythmAudio.addEventListener('play',()=>{playRhythmAudio.textContent='⏸ PAUSAR MÚSICA';});
rhythmAudio.addEventListener('pause',()=>{playRhythmAudio.textContent='▶ MÚSICA DEL JUEGO';});
rhythmAudio.addEventListener('error',()=>{rhythmAudioStatus.textContent='No encuentro “CREA TU RITMO”. Revisa la carpeta assets/audio.';});

// Slide 9 song
const audio=document.getElementById('songAudio');
const playSong=document.getElementById('playSong');
const restartSong=document.getElementById('restartSong');
const audioBar=document.getElementById('audioBar');
const audioStatus=document.getElementById('audioStatus');
const audioFile=document.getElementById('audioFile');
let localAudioUrl=null;
playSong.addEventListener('click',async()=>{
  try{
    if(audio.paused){await audio.play();playSong.textContent='⏸ PAUSA';audioStatus.textContent='Reproduciendo “Con mi cuerpo hago música”.';}
    else{audio.pause();playSong.textContent='▶ REPRODUCIR';audioStatus.textContent='Canción en pausa.';}
  }catch(e){audioStatus.textContent='No encuentro el MP3 todavía. Usa “CARGAR MP3” o añade el archivo a assets/audio/.';}
});
restartSong.addEventListener('click',()=>{audio.currentTime=0;if(!audio.paused) audio.play();});
audio.addEventListener('timeupdate',()=>{if(audio.duration) audioBar.style.width=`${(audio.currentTime/audio.duration)*100}%`;});
audio.addEventListener('ended',()=>{playSong.textContent='▶ REPRODUCIR';audioBar.style.width='0%';audioStatus.textContent='Canción terminada.';});
audio.addEventListener('error',()=>{audioStatus.textContent='No se pudo cargar assets/audio/con-mi-cuerpo-hago-musica.mp3.';});
audioFile.addEventListener('change',()=>{
  const file=audioFile.files?.[0];if(!file)return;if(localAudioUrl)URL.revokeObjectURL(localAudioUrl);localAudioUrl=URL.createObjectURL(file);audio.src=localAudioUrl;audio.load();audioStatus.textContent=`MP3 cargado para esta prueba: ${file.name}`;
});
document.querySelectorAll('[data-songmode]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-songmode]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');audioStatus.textContent=btn.dataset.songmode==='listen'?'Primera vez: escuchamos y observamos las acciones.':'Segunda vez: cantamos y hacemos palmas, muslos, pies, voz y silencio.';}));

// Slide 10
const closingFeedback=document.getElementById('closingFeedback');
const finalPattern=document.getElementById('finalPattern');
document.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-answer]').forEach(b=>b.classList.remove('correct','wrong'));
  if(btn.dataset.answer==='cuerpo'){
    btn.classList.add('correct');closingFeedback.textContent='¡Sí! Nuestro cuerpo también es un instrumento.';finalPattern.hidden=false;
  }else{btn.classList.add('wrong');closingFeedback.textContent='Hoy no hemos necesitado instrumentos. ¡Prueba la otra opción!';finalPattern.hidden=true;}
}));
document.getElementById('finishSession').addEventListener('click',()=>{closingFeedback.textContent='⭐ ¡Sesión terminada! Mi cuerpo suena y también sabe parar.';});