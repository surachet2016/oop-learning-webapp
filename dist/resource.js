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
  <a href="resource.html?version=js-es6-2&type=code&chapter=${chapterNumber}" ${type === 'code' ? 'aria-current="page"' : ''}>โค้ดตัวอย่าง</a>
  <a href="resource.html?version=js-es6-2&type=worksheet&chapter=${chapterNumber}" ${type === 'worksheet' ? 'aria-current="page"' : ''}>ใบงาน</a>
  <a href="${rawPath}" download>ดาวน์โหลดไฟล์ต้นฉบับ</a>
  <a href="slides.html?version=js-es6-2#slide-${(chapterNumber - 1) * 6 + 1}">เปิดสไลด์บทนี้</a>
  ${type === 'worksheet' ? '<button type="button" id="print-resource">พิมพ์ใบงาน / PDF</button>' : ''}`;

document.querySelector('#print-resource')?.addEventListener('click', () => window.print());

if (type === 'code' && codeSlide) {
  document.querySelector('#structure').hidden = false;
  document.querySelector('#structure-list').innerHTML = codeSlide.details.map(item => `<li>${escapeHtml(item)}</li>`).join('');
}

fetch(rawPath)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.text();
  })
  .then(text => {
    const content = document.querySelector('#content');
    if (type === 'worksheet') {
      content.className = 'worksheet';
      content.innerHTML = renderMarkdown(text);
    } else {
      content.className = 'resource-code';
      content.textContent = text;
    }
  })
  .catch(() => { document.querySelector('#content').textContent = 'ไม่สามารถเปิดไฟล์ได้ กรุณากลับไปยังสไลด์แล้วลองใหม่'; });

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html = [];
  let list = null;
  let inCode = false;
  let code = [];

  const closeList = () => {
    if (list) html.push(`</${list}>`);
    list = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith('```')) {
      closeList();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
        code = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      code.push(line);
      continue;
    }
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      closeList();
      html.push('<hr>');
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (line.startsWith('|') && lines[i + 1]?.match(/^\|(?:\s*:?-+:?\s*\|)+$/)) {
      closeList();
      const header = tableCells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(tableCells(lines[i]));
        i += 1;
      }
      i -= 1;
      html.push(`<table><thead><tr>${header.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      continue;
    }
    const checkbox = line.match(/^- \[ \]\s+(.+)$/);
    if (checkbox) {
      closeList();
      html.push(`<label class="task"><input type="checkbox">${inlineMarkdown(checkbox[1])}</label>`);
      continue;
    }
    const bullet = line.match(/^-\s+(.+)$/);
    if (bullet) {
      if (list !== 'ul') {
        closeList();
        list = 'ul';
        html.push('<ul>');
      }
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }
    const ordered = line.match(/^(\d+)\.\s+(.+)$/);
    if (ordered) {
      if (list !== 'ol') {
        closeList();
        list = 'ol';
        html.push(`<ol${ordered[1] === '1' ? '' : ` start="${ordered[1]}"`}>`);
      }
      const task = ordered[2].match(/^\[ \]\s+(.+)$/);
      html.push(task
        ? `<li><label><input type="checkbox">${inlineMarkdown(task[1])}</label></li>`
        : `<li>${inlineMarkdown(ordered[2])}</li>`);
      continue;
    }
    closeList();
    if (line.startsWith('> ')) {
      html.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
    } else {
      html.push(`<p>${inlineMarkdown(line)}</p>`);
    }
  }
  closeList();
  if (inCode) html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
  return html.join('\n');
}

function tableCells(line) {
  return line.slice(1, -1).split('|').map(cell => cell.trim());
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
}
