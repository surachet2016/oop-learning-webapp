'use strict';
const params = new URLSearchParams(location.search);
const chapterNumber = Math.max(1, Math.min(10, Number(params.get('chapter')) || 1));
const type = params.get('type') === 'worksheet' ? 'worksheet' : 'code';
const chapter = CHAPTERS.find(item => item.id === chapterNumber);
const codeSlide = SLIDES.find(item => item.chapter === chapterNumber && item.kind === 'codewalk');
const rawPath = type === 'code'
  ? `examples/${chapter.codeFile}`
  : `worksheets/ch${String(chapterNumber).padStart(2, '0')}.md`;

document.title = `บท ${chapterNumber} · ${type === 'code' ? 'โค้ดตัวอย่าง' : 'ใบงาน'} · Object Lab`;
document.querySelector('#meta').textContent = `บท ${chapterNumber}/10 · ${chapter.title}`;
document.querySelector('#title').textContent = type === 'code' ? `โค้ดตัวอย่าง · ${chapter.codeFile}` : `ใบงานบทที่ ${chapterNumber}`;
document.querySelector('#description').textContent = chapter.subtitle;
document.querySelector('#resource-nav').innerHTML = `
  <a href="resource.html?type=code&chapter=${chapterNumber}" ${type === 'code' ? 'aria-current="page"' : ''}>โค้ดตัวอย่าง</a>
  <a href="resource.html?type=worksheet&chapter=${chapterNumber}" ${type === 'worksheet' ? 'aria-current="page"' : ''}>ใบงาน</a>
  <a href="${rawPath}" download>ดาวน์โหลดไฟล์ต้นฉบับ</a>
  <a href="slides.html#slide-${(chapterNumber - 1) * 6 + 1}">เปิดสไลด์บทนี้</a>`;

if (type === 'code' && codeSlide) {
  document.querySelector('#structure').hidden = false;
  document.querySelector('#structure-list').innerHTML = codeSlide.details.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

fetch(rawPath)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.text();
  })
  .then(text => { document.querySelector('#content').textContent = text; })
  .catch(() => { document.querySelector('#content').textContent = 'ไม่สามารถเปิดไฟล์ได้ กรุณากลับไปยังสไลด์แล้วลองใหม่'; });

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
}
