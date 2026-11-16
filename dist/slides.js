'use strict';

const q = selector => document.querySelector(selector);
const h = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

const storageKey = 'oop-slides-javascript-v4';
const quizTotal = SLIDES.filter(slide => slide.kind === 'quiz').length;
let data = { answers: {}, practice: {} };
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && typeof saved.answers === 'object' && typeof saved.practice === 'object') data = saved;
} catch {}

let index = 0;
let showAnswers = false;
let notesOpen = false;
let assistantOpen = false;
let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
let remaining = 300;
let ticking = false;
let lastTick = Date.now();

function notice(message) {
  q('#notice').textContent = message;
  q('#notice').style.display = 'block';
  setTimeout(() => { q('#notice').style.display = 'none'; }, 2800);
}

function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch {
    notice('บันทึกในเบราว์เซอร์ไม่ได้');
    return false;
  }
}

function score() {
  return SLIDES.reduce((total, slide, slideIndex) =>
    total + (slide.kind === 'quiz' && data.answers[slideIndex] === slide.answer ? 1 : 0), 0);
}

function setIndex(nextIndex) {
  const safe = Math.max(0, Math.min(SLIDES.length - 1, nextIndex));
  location.hash = `slide-${safe + 1}`;
}

function makeButton(text, action, className = '') {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = className;
  button.onclick = action;
  return button;
}

function resourceLinks(slide) {
  return `<div class="slide-resources">
    <a href="${h(slide.codeLink)}" target="_blank" rel="noopener">⌘ เปิดโค้ดตัวอย่าง</a>
    <a href="${h(slide.worksheet)}" target="_blank" rel="noopener">▤ เปิดใบงานบทนี้</a>
  </div>`;
}

function jigsawPieces(currentChapter) {
  return CHAPTERS.map(chapter => {
    const state = chapter.id < currentChapter ? 'done' : chapter.id === currentChapter ? 'current' : '';
    return `<div class="jigsaw-piece ${state}"><strong>${chapter.id}</strong><span>${h(chapter.piece.replace(/^ชิ้นที่ \d+ · /, ''))}</span></div>`;
  }).join('');
}

function renderChapter(slide, activity) {
  activity.innerHTML = `<div class="chapter-card">
    <span class="chapter-number">บท ${slide.chapter}/10</span>
    <strong>${slide.chapter === 1 ? 'Quick Win: ทำตัวอย่างสำเร็จก่อน' : 'ต่อยอดจากชิ้นส่วนที่ทำได้แล้ว'}</strong>
    <p>${h(slide.piece)}</p>
    <div class="mini-roadmap">ดูผลลัพธ์ → เข้าใจแนวคิด → อ่านโค้ด → ฝึก → ตรวจ → ต่อ Jigsaw</div>
  </div>`;
}

function renderReveal(slide, activity) {
  activity.className = 'cards';
  slide.points.forEach((point, itemIndex) => {
    const wrapper = document.createElement('div');
    const explanation = document.createElement('p');
    explanation.className = 'revealed';
    explanation.textContent = slide.details[itemIndex];
    explanation.hidden = !showAnswers;
    const button = makeButton(`＋ ${point}`, () => {
      explanation.hidden = !explanation.hidden;
      button.setAttribute('aria-expanded', String(!explanation.hidden));
    }, 'reveal');
    button.setAttribute('aria-expanded', String(showAnswers));
    wrapper.append(button, explanation);
    activity.append(wrapper);
  });
  q('#left .points').innerHTML = '<li>เปิดทีละแนวคิด แล้วอธิบายด้วยคำของตนเอง</li>';
}

function renderCodeWalk(slide, activity) {
  activity.innerHTML = '<div class="code-steps"></div><div id="code-detail" class="feedback" role="status"></div>';
  const detail = q('#code-detail');
  slide.details.forEach((description, itemIndex) => {
    const button = makeButton(`${itemIndex + 1} · ${description}`, () => {
      [...activity.querySelectorAll('.code-step')].forEach(node => node.classList.remove('selected'));
      button.classList.add('selected');
      detail.textContent = `ขั้น ${itemIndex + 1}: ${description}`;
    }, 'code-step');
    activity.querySelector('.code-steps').append(button);
    if (itemIndex === 0) button.click();
  });
}

function renderPractice(slide, activity) {
  const completed = Array.isArray(data.practice[index]) ? data.practice[index] : [];
  activity.innerHTML = '<div class="practice-list"></div><div id="practice-status" class="badge"></div>';
  slide.points.forEach((step, itemIndex) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed.includes(itemIndex);
    checkbox.onchange = () => {
      const current = new Set(data.practice[index] || []);
      checkbox.checked ? current.add(itemIndex) : current.delete(itemIndex);
      data.practice[index] = [...current];
      persist();
      update();
    };
    label.append(checkbox, document.createTextNode(` ขั้น ${itemIndex + 1} · ${step}`));
    activity.querySelector('.practice-list').append(label);
  });
  activity.append(makeButton('ขอคำใบ้ทีละขั้น', () => notice(slide.hint)));
  function update() {
    const count = (data.practice[index] || []).length;
    q('#practice-status').textContent = `ทำแล้ว ${count}/${slide.points.length} ขั้น${count === slide.points.length ? ' · ✓ พร้อมต่อ Jigsaw' : ''}`;
  }
  update();
}

function renderQuiz(slide, activity) {
  activity.innerHTML = '<div class="options"></div><div class="row"><button id="hint">ขอคำใบ้</button></div><div id="hint-text" class="small"></div><div id="feedback" role="status"></div><div class="badge" id="score"></div>';
  const options = activity.querySelector('.options');
  slide.options.forEach((option, optionIndex) => {
    options.append(makeButton(`${String.fromCharCode(65 + optionIndex)} · ${option}`, () => {
      data.answers[index] = optionIndex;
      persist();
      update();
    }));
  });
  q('#hint').onclick = () => { q('#hint-text').textContent = slide.hint; };
  function update() {
    const chosen = data.answers[index];
    const answered = Number.isInteger(chosen);
    [...options.children].forEach((button, optionIndex) => {
      button.classList.toggle('correct', (answered || showAnswers) && optionIndex === slide.answer);
      button.classList.toggle('wrong', answered && optionIndex === chosen && optionIndex !== slide.answer);
      button.setAttribute('aria-pressed', String(optionIndex === chosen));
    });
    q('#feedback').className = answered || showAnswers ? 'feedback' : '';
    q('#feedback').textContent = answered || showAnswers
      ? `${answered ? (chosen === slide.answer ? '✓ ถูกต้อง — ' : 'ลองทบทวน — ') : 'เฉลย — '}${slide.explain}` : '';
    q('#score').textContent = `ผ่านแบบตรวจ ${score()} / ${quizTotal} บท · ฝึกซ้ำได้ ไม่คิดคะแนนรายวิชา`;
  }
  update();
}

function renderJigsaw(slide, activity) {
  activity.innerHTML = `<div class="jigsaw-board">${jigsawPieces(slide.chapter)}</div>
    <div class="deliverable"><strong>หลักฐานชิ้นนี้</strong><p>${h(slide.deliverable)}</p></div>`;
}

function render() {
  const slide = SLIDES[index];
  document.title = `${index + 1}. ${slide.title.replace('\n', ' ')} · Object Lab`;
  q('#position').textContent = `${index + 1} / ${SLIDES.length}`;
  q('#bar').style.width = `${(index + 1) / SLIDES.length * 100}%`;
  q('#prev').disabled = index === 0;
  q('#next').disabled = index === SLIDES.length - 1;
  q('#chapter-rail').querySelectorAll('button').forEach(button => button.classList.toggle('active', Number(button.dataset.chapter) === slide.chapter));

  q('#stage').innerHTML = `<div class="meta">
      <span class="eyebrow">บท ${slide.chapter}/10 · หน้า ${String(index + 1).padStart(2, '0')}</span>
      <span>สัปดาห์ ${h(slide.week)} · ${h(slide.clo)} · ภาคปลาย 2569</span>
    </div>
    <h1>${h(slide.title)}</h1>
    <p class="subtitle">${h(slide.subtitle)}</p>
    <div class="content">
      <div id="left">
        <ul class="points">${slide.points.map(point => `<li>${h(point)}</li>`).join('')}</ul>
        ${slide.code ? `<pre><code>${h(slide.code)}</code></pre>` : ''}
        ${resourceLinks(slide)}
      </div>
      <div id="activity" aria-label="กิจกรรมสไลด์"></div>
    </div>`;

  const activity = q('#activity');
  if (slide.kind === 'chapter') renderChapter(slide, activity);
  if (slide.kind === 'reveal') renderReveal(slide, activity);
  if (slide.kind === 'codewalk') renderCodeWalk(slide, activity);
  if (slide.kind === 'practice') renderPractice(slide, activity);
  if (slide.kind === 'quiz') renderQuiz(slide, activity);
  if (slide.kind === 'jigsaw') renderJigsaw(slide, activity);
  updatePanels();
  q('#stage').focus({ preventScroll: true });
}

function updatePanels() {
  const slide = SLIDES[index];
  q('#notes-panel').hidden = !notesOpen;
  q('#assistant-panel').hidden = !assistantOpen;
  q('#notes').setAttribute('aria-pressed', String(notesOpen));
  q('#assistant').setAttribute('aria-pressed', String(assistantOpen));
  q('#answers').setAttribute('aria-pressed', String(showAnswers));
  q('#answers').textContent = showAnswers ? 'ซ่อนเฉลย' : 'แสดงเฉลย';
  q('#notes-panel').innerHTML = `<h2>บันทึกผู้สอน · บท ${slide.chapter} หน้า ${index + 1}</h2><p>${h(slide.note)}</p><button id="hide-notes">ปิด</button>`;
  q('#hide-notes').onclick = () => { notesOpen = false; updatePanels(); };
  q('#assistant-panel').innerHTML = `<h2>ผู้ช่วยการเรียนรู้ · โหมดสาธิต</h2>
    <p class="small">ไม่เชื่อม AI API และไม่ส่งข้อมูลออกจากเครื่อง</p>
    <button id="explain">อธิบายแบบเริ่มต้น</button>
    <button id="practice-question">ตั้งคำถามฝึกคิด</button>
    <div id="ai-output" class="feedback" role="status">เลือกสิ่งที่ต้องการทบทวน</div>
    <button id="hide-ai">ปิด</button>`;
  q('#explain').onclick = () => { q('#ai-output').textContent = slide.points.join(' • '); };
  q('#practice-question').onclick = () => { q('#ai-output').textContent = `ชิ้นส่วนบท ${slide.chapter} ต่อกับบทก่อนหน้าอย่างไร และมีผลทดสอบใดใช้ยืนยัน?`; };
  q('#hide-ai').onclick = () => { assistantOpen = false; updatePanels(); };
}

function buildNavigation() {
  q('#chapter-rail').innerHTML = CHAPTERS.map(chapter => `<button data-chapter="${chapter.id}" title="${h(chapter.title)}">${chapter.id}</button>`).join('');
  q('#chapter-rail').onclick = event => {
    const button = event.target.closest('[data-chapter]');
    if (button) setIndex((Number(button.dataset.chapter) - 1) * 6);
  };
  q('#chapter-grid').innerHTML = CHAPTERS.map(chapter => `<button data-chapter="${chapter.id}">
    <strong>บท ${chapter.id} · ${h(chapter.title)}</strong>
    <small>${h(chapter.subtitle)}</small>
    <span>${h(chapter.piece)}</span>
  </button>`).join('');
  q('#chapter-grid').onclick = event => {
    const button = event.target.closest('[data-chapter]');
    if (!button) return;
    q('#chapter-dialog').close();
    setIndex((Number(button.dataset.chapter) - 1) * 6);
  };
  q('#overview-grid').innerHTML = CHAPTERS.map(chapter => `<section class="overview-chapter">
    <h3>บท ${chapter.id} · ${h(chapter.title)}</h3>
    ${SLIDES.map((slide, slideIndex) => ({ slide, slideIndex })).filter(item => item.slide.chapter === chapter.id).map(item => `<button data-slide="${item.slideIndex}">${String(item.slideIndex + 1).padStart(2, '0')} · ${h(item.slide.title.replace('\n', ' '))}<small>${h(item.slide.clo)}</small></button>`).join('')}
  </section>`).join('');
  q('#overview-grid').onclick = event => {
    const button = event.target.closest('[data-slide]');
    if (!button) return;
    q('#overview-dialog').close();
    setIndex(Number(button.dataset.slide));
  };
}

function makePrint() {
  q('#print-deck').innerHTML = SLIDES.map((slide, slideIndex) => `<section class="print-slide">
    <p>OBJECT LAB · บท ${slide.chapter}/10 · หน้า ${slideIndex + 1}/${SLIDES.length} · ${h(slide.clo)}</p>
    <h1>${h(slide.title)}</h1><p>${h(slide.subtitle)}</p>
    <ul>${slide.points.map(point => `<li>${h(point)}</li>`).join('')}</ul>
    ${slide.code ? `<pre>${h(slide.code)}</pre>` : ''}
    ${slide.options ? `<ol type="A">${slide.options.map(option => `<li>${h(option)}</li>`).join('')}</ol>${showAnswers ? `<p><strong>เฉลย:</strong> ${h(slide.options[slide.answer])} — ${h(slide.explain)}</p>` : ''}` : ''}
    <p><strong>โค้ด:</strong> ${h(slide.codeLink)} · <strong>ใบงาน:</strong> ${h(slide.worksheet)}</p>
    ${notesOpen ? `<p><strong>บันทึกผู้สอน:</strong> ${h(slide.note)}</p>` : ''}
  </section>`).join('');
}

q('#prev').onclick = () => setIndex(index - 1);
q('#next').onclick = () => setIndex(index + 1);
q('#chapters').onclick = () => q('#chapter-dialog').showModal();
q('#close-chapters').onclick = () => q('#chapter-dialog').close();
q('#overview').onclick = () => q('#overview-dialog').showModal();
q('#close-overview').onclick = () => q('#overview-dialog').close();
q('#fullscreen').onclick = async () => {
  try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); }
  catch { notice('ใช้คำสั่งเต็มจอของเบราว์เซอร์แทนได้'); }
};
q('#motion').onclick = () => {
  paused = !paused;
  document.body.classList.toggle('paused', paused);
  q('#motion').textContent = paused ? 'เล่นภาพเคลื่อนไหว' : 'หยุดภาพเคลื่อนไหว';
};
q('#replay').onclick = () => { render(); notice('เริ่มกิจกรรมหน้านี้ใหม่แล้ว'); };
q('#answers').onclick = () => { showAnswers = !showAnswers; render(); };
q('#notes').onclick = () => { notesOpen = !notesOpen; if (notesOpen) assistantOpen = false; updatePanels(); };
q('#assistant').onclick = () => { assistantOpen = !assistantOpen; if (assistantOpen) notesOpen = false; updatePanels(); };
q('#timer').onclick = () => { if (remaining === 0) remaining = 300; ticking = !ticking; lastTick = Date.now(); updateTimer(); };
q('#reset').onclick = () => q('#reset-dialog').showModal();
q('#cancel-reset').onclick = () => q('#reset-dialog').close();
q('#confirm-reset').onclick = () => {
  data = { answers: {}, practice: {} };
  persist();
  showAnswers = false;
  q('#reset-dialog').close();
  render();
};
q('#print').onclick = () => {
  makePrint();
  document.body.classList.add('print-preview');
  if (!q('#print-toolbar')) {
    const toolbar = document.createElement('div');
    toolbar.id = 'print-toolbar';
    toolbar.append(
      makeButton('← กลับสไลด์', () => document.body.classList.remove('print-preview')),
      makeButton('พิมพ์ / บันทึก PDF', () => window.print())
    );
    const note = document.createElement('span');
    note.textContent = `ฉบับพิมพ์ ${SLIDES.length} หน้า · เลือก Save as PDF`;
    toolbar.append(note);
    document.body.prepend(toolbar);
  }
  window.scrollTo(0, 0);
};

function updateTimer() {
  q('#timer').textContent = `${ticking ? 'หยุดเวลา' : 'เริ่มเวลา'} ${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
}

setInterval(() => {
  if (!ticking) return;
  const now = Date.now();
  const elapsed = Math.floor((now - lastTick) / 1000);
  if (!elapsed) return;
  remaining = Math.max(0, remaining - elapsed);
  lastTick += elapsed * 1000;
  if (remaining === 0) { ticking = false; notice('ครบเวลา 5 นาที'); }
  updateTimer();
}, 250);

window.addEventListener('beforeprint', makePrint);
window.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input,textarea,select,button') || document.querySelector('dialog[open]')) return;
  if (!['ArrowRight', 'PageDown', 'ArrowLeft', 'PageUp', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  if (['ArrowRight', 'PageDown'].includes(event.key)) setIndex(index + 1);
  else if (['ArrowLeft', 'PageUp'].includes(event.key)) setIndex(index - 1);
  else setIndex(event.key === 'Home' ? 0 : SLIDES.length - 1);
});

function route() {
  const match = location.hash.match(/^#slide-(\d+)$/);
  index = match ? Math.max(0, Math.min(SLIDES.length - 1, Number(match[1]) - 1)) : 0;
  render();
}

buildNavigation();
document.body.classList.toggle('paused', paused);
updateTimer();
window.addEventListener('hashchange', route);
route();
