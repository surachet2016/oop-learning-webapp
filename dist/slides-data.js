const CHAPTERS = [
  {
    "id": 1,
    "weeks": "1",
    "clo": "CLO1, CLO6",
    "title": "อ่านโครงสร้าง JavaScript และมองแบบ OOP",
    "subtitle": "จากคำสั่งทีละบรรทัด สู่ข้อมูลและพฤติกรรมของอุปกรณ์",
    "codeFile": "ch01-mini-equipment-catalog.js",
    "piece": "ชิ้นที่ 1 · วัตถุ ข้อมูล สถานะ และพฤติกรรม"
  },
  {
    "id": 2,
    "weeks": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "title": "ข้อมูลและกฎเงื่อนไข",
    "subtitle": "สร้างรหัส สถานะ จำนวนวัน และเงื่อนไขที่ตรวจสอบได้",
    "codeFile": "ch02-loan-rules.js",
    "piece": "ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม"
  },
  {
    "id": 3,
    "weeks": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "title": "ฟังก์ชันบริสุทธิ์และการทดสอบ",
    "subtitle": "เปลี่ยนข้อกำหนดให้เป็นตัวอย่างที่พิสูจน์ได้",
    "codeFile": "ch03-pure-function.test.js",
    "piece": "ชิ้นที่ 3 · ชุดทดสอบกฎธุรกิจ"
  },
  {
    "id": 4,
    "weeks": "6",
    "clo": "CLO1, CLO2, CLO3",
    "title": "คลาสและวัตถุ",
    "subtitle": "ให้ Equipment ดูแลข้อมูลและพฤติกรรมของตนเอง",
    "codeFile": "ch04-equipment-class.js",
    "piece": "ชิ้นที่ 4 · Equipment class"
  },
  {
    "id": 5,
    "weeks": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "title": "Encapsulation และ Invariant",
    "subtitle": "ป้องกันสถานะผิดด้วยเมธอดที่ตรวจเงื่อนไข",
    "codeFile": "ch05-equipment-invariant.js",
    "piece": "ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้"
  },
  {
    "id": 6,
    "weeks": "9",
    "clo": "CLO2, CLO3",
    "title": "Composition ก่อน Inheritance",
    "subtitle": "ประกอบ Loan จาก Equipment และข้อมูลผู้ยืม",
    "codeFile": "ch06-loan-composition.js",
    "piece": "ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ"
  },
  {
    "id": 7,
    "weeks": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "title": "Polymorphism, Strategy และ DI",
    "subtitle": "เปลี่ยนนโยบายได้โดยไม่แก้ LoanService",
    "codeFile": "ch07-loan-policy.js",
    "piece": "ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้"
  },
  {
    "id": 8,
    "weeks": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "title": "Repository และ Runtime Validation",
    "subtitle": "แยกแหล่งข้อมูลและไม่เชื่อข้อมูลจากภายนอกทันที",
    "codeFile": "ch08-repository-validation.js",
    "piece": "ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input"
  },
  {
    "id": 9,
    "weeks": "14",
    "clo": "CLO2, CLO3, CLO4",
    "title": "เชื่อม Express API กับ React",
    "subtitle": "React แสดงผล · Route รับคำขอ · Service บังคับกฎ",
    "codeFile": "ch09-express-react-flow.jsx",
    "piece": "ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ"
  },
  {
    "id": 10,
    "weeks": "15–16",
    "clo": "CLO2–CLO6",
    "title": "ประกอบ Jigsaw เป็น Mini Project",
    "subtitle": "รวมชิ้นส่วน ตรวจคุณภาพ แล้วออกแบบโครงงานของตนเอง",
    "codeFile": "ch10-mini-project-blueprint.js",
    "piece": "ชิ้นที่ 10 · ระบบสมบูรณ์และแนวคิดของตนเอง"
  }
];

const SLIDES = [
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "chapter",
    "title": "บทที่ 1\nอ่านโครงสร้าง JavaScript และมองแบบ OOP",
    "subtitle": "จากคำสั่งทีละบรรทัด สู่ข้อมูล สถานะ และพฤติกรรมของอุปกรณ์",
    "points": [
      "เริ่มจากโค้ดที่อ่านได้ ไม่เริ่มจาก class",
      "ทำนายผลก่อนรันและอธิบายด้วยภาษาของตนเอง",
      "ประกอบความรู้ทีละชิ้นจนสร้าง catalog.js ได้"
    ],
    "piece": "ชิ้นที่ 1 · วัตถุ ข้อมูล สถานะ และพฤติกรรม",
    "note": "ยืนยันก่อนเริ่มว่าแต่ละคนผ่านบทที่ 0: เปิด VS Code, node -v และ node hello.js ได้"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "แผนที่การเรียนรู้บทที่ 1",
    "subtitle": "รู้ลำดับก่อนเรียน ช่วยให้คำศัพท์ใหม่ไม่แยกจากกัน",
    "points": [
      "ช่วงที่ 1 · อ่านคำสั่งและชนิดข้อมูล",
      "ช่วงที่ 2 · รวมข้อมูลใน object",
      "ช่วงที่ 3 · สร้างพฤติกรรมด้วย function และ if",
      "ช่วงที่ 4 · เชื่อมเป็นแนวคิด OOP และชิ้นงาน"
    ],
    "details": [
      "อ่าน comment, statement, ลำดับบนลงล่าง, string และ boolean",
      "ใช้ property เก็บ id, name และ available ของอุปกรณ์หนึ่งชิ้น",
      "รับ object เข้า function ตรวจสถานะ แล้วคืนข้อความออกมา",
      "ระบุวัตถุ ข้อมูล สถานะ พฤติกรรม และสร้าง catalog.js ที่รันได้"
    ],
    "note": "แสดงภาพรวมไม่เกิน 3 นาที และย้อนมาชี้ตำแหน่งบนแผนที่เมื่อเปลี่ยนช่วง"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "เครื่องมือแต่ละตัวทำหน้าที่อะไร",
    "subtitle": "แยก Editor, Runtime, Terminal และภาษาออกจากกัน",
    "points": [
      "VS Code ใช้สร้างและแก้ไฟล์",
      "JavaScript คือภาษาที่เราเขียน",
      "Node.js อ่านและรัน JavaScript",
      "Terminal ใช้ส่งคำสั่งและรับผลลัพธ์"
    ],
    "details": [
      "VS Code ช่วยพิมพ์ จัดสี และเปิดโฟลเดอร์ แต่ไม่ใช่ตัวภาษา",
      "ไฟล์นามสกุล .js เก็บคำสั่ง JavaScript",
      "คำสั่ง node catalog.js ให้ Node.js ทำงานตามคำสั่งในไฟล์",
      "Terminal แสดงทั้ง output และข้อความผิดพลาด จึงเป็นหลักฐานสำคัญ"
    ],
    "note": "ถามกลับ: ถ้ามี VS Code แต่ไม่มี Node.js จะรัน node catalog.js ได้หรือไม่"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "โปรแกรมคือชุดคำสั่งที่มีเป้าหมาย",
    "subtitle": "อย่าเริ่มจากการจำสัญลักษณ์ ให้เริ่มจากสิ่งที่โปรแกรมต้องทำ",
    "points": [
      "Input · ข้อมูลที่โปรแกรมได้รับ",
      "Process · กฎหรือขั้นตอนที่ใช้กับข้อมูล",
      "Output · ผลที่โปรแกรมส่งกลับหรือแสดง",
      "โปรแกรมที่ดีต้องอธิบายทั้งสามส่วนได้"
    ],
    "details": [
      "ตัวอย่าง input คือ object ของ Camera",
      "ตัวอย่าง process คือการตรวจ available และสร้างข้อความสถานะ",
      "ตัวอย่าง output คือข้อความ EQ01 - Camera - พร้อมยืม",
      "ถ้าชี้ input/process/output ไม่ได้ แสดงว่ายังอ่านโค้ดไม่ครบความหมาย"
    ],
    "note": "ใช้ตัวอย่างเครื่องคิดเลขหรือใบเสร็จก่อนเชื่อมกับระบบยืมอุปกรณ์"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "Comment, Statement และ Block",
    "subtitle": "องค์ประกอบเล็กที่สุดที่ต้องมองให้ออก",
    "points": [
      "comment อธิบายเจตนาและไม่ถูกรัน",
      "statement คือคำสั่งหนึ่งหน่วย",
      "block รวมหลายคำสั่งด้วย { }"
    ],
    "details": [
      "บรรทัดที่ขึ้นต้น // เป็นคำอธิบายสำหรับคนอ่าน",
      "const name = \"Camera\"; และ console.log(name); เป็น statements",
      "คำสั่งภายใน function หรือ if อยู่ใน block และทำงานตามเงื่อนไขของ block"
    ],
    "code": "// comment: อธิบายสิ่งที่จะทำ\nconst name = \"Camera\"; // statement\n\nif (name === \"Camera\") { // เริ่ม block\n  console.log(name);      // statement ใน block\n}",
    "note": "ให้ผู้เรียนวง comment ขีดเส้นใต้ statement และตีกรอบ block ด้วยสีคนละสี"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "JavaScript อ่านจากบนลงล่าง",
    "subtitle": "ลำดับคำสั่งเปลี่ยนผลลัพธ์ได้",
    "points": [
      "สร้างค่าก่อนนำค่าไปใช้",
      "function declaration เตรียมพฤติกรรมไว้",
      "การเรียก function คือจุดที่พฤติกรรมเริ่มทำงาน"
    ],
    "details": [
      "ขั้น 1 สร้าง name และเก็บ Camera",
      "ขั้น 2 เตรียม function show แต่ยังไม่แสดงผล",
      "ขั้น 3 เรียก show(name) จึงเข้า function และแสดง Camera"
    ],
    "code": "const name = \"Camera\";       // ขั้น 1\n\nfunction show(value) {          // ขั้น 2\n  console.log(value);\n}\n\nshow(name);                     // ขั้น 3",
    "note": "ให้ผู้เรียนใส่หมายเลขลำดับการทำงานก่อนรัน และเน้นว่าการประกาศ function ไม่เท่ากับการเรียกใช้"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "ค่าและชนิดข้อมูล",
    "subtitle": "ค่าแต่ละชนิดตอบคำถามต่างกัน",
    "points": [
      "string เก็บข้อความ",
      "number เก็บจำนวน",
      "boolean เก็บจริง/เท็จ",
      "ชนิดข้อมูลต้องตรงความหมายของโจทย์"
    ],
    "details": [
      "\"Camera\" และ \"EQ01\" เป็นข้อความ แม้ EQ01 มีตัวเลขอยู่ข้างใน",
      "2 หรือ 7 เหมาะกับจำนวนชิ้นและจำนวนวัน",
      "true/false เหมาะกับคำถามสองคำตอบ เช่น พร้อมยืมหรือไม่",
      "ถ้าเก็บ available เป็น \"yes\"/\"no\" จะตรวจเงื่อนไขยากและสะกดผิดได้"
    ],
    "note": "ให้ผู้เรียนจัดหมวดค่า 6–8 ตัวอย่างก่อนเปิดคำอธิบาย"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "String: ข้อความต้องอยู่ในเครื่องหมายคำพูด",
    "subtitle": "รหัสและชื่อเป็นข้อความ แม้ไม่ได้ใช้คำนวณ",
    "points": [
      "ใช้ \"...\" หรือ '...' ครอบข้อความ",
      "ต่อข้อความด้วย + ได้",
      "ข้อความกับชื่อตัวแปรไม่ใช่สิ่งเดียวกัน"
    ],
    "details": [
      "\"Camera\" คือค่า string",
      "id + \" - \" + name สร้าง string ใหม่จากหลายส่วน",
      "console.log(name) อ่านค่าตัวแปร แต่ console.log(\"name\") แสดงคำว่า name"
    ],
    "code": "const id = \"EQ01\";\nconst name = \"Camera\";\nconst label = id + \" - \" + name;\n\nconsole.log(label); // EQ01 - Camera",
    "note": "สาธิตเอา quote ออกหนึ่งตำแหน่งเพื่อให้เห็น SyntaxError แล้วคืนค่าเดิม"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "Boolean: สถานะที่มีสองคำตอบ",
    "subtitle": "true และ false ไม่มีเครื่องหมายคำพูด",
    "points": [
      "true หมายถึงจริง",
      "false หมายถึงเท็จ",
      "boolean ใช้เป็นเงื่อนไขได้โดยตรง"
    ],
    "details": [
      "available: true สื่อว่าอุปกรณ์พร้อมยืม",
      "available: false สื่อว่าอุปกรณ์ไม่พร้อมยืม",
      "\"false\" เป็น string ที่มีข้อความ ไม่ใช่ boolean false"
    ],
    "code": "const available = true;\n\nconsole.log(available);        // true\nconsole.log(typeof available); // boolean\nconsole.log(typeof \"true\");    // string",
    "note": "ถามว่าค่า \"false\" ใน if เป็นจริงหรือเท็จ แล้วอธิบายว่าจึงไม่ควรใช้ string แทน boolean"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "const: ตั้งชื่อให้ค่าอ้างอิง",
    "subtitle": "ใช้เป็นค่าเริ่มต้นเมื่อยังไม่จำเป็นต้องกำหนดใหม่",
    "points": [
      "ประกาศด้วย const ชื่อ = ค่า",
      "อ่านชื่อแทนการเขียนค่าซ้ำ",
      "ห้ามกำหนดตัวแปร const ใหม่ด้วย ="
    ],
    "details": [
      "const name = \"Camera\" สร้างชื่อ name ให้อ้างถึงข้อความ",
      "ชื่อที่สื่อความหมายทำให้โค้ดอ่านเหมือนประโยค",
      "name = \"Tripod\" หลังประกาศ const จะเกิด TypeError"
    ],
    "code": "const equipmentId = \"EQ01\";\nconst equipmentName = \"Camera\";\n\nconsole.log(equipmentId);\nconsole.log(equipmentName);",
    "note": "เน้นว่าคำว่า constant binding ไม่ได้แปลว่า object ภายในแก้ property ไม่ได้ทั้งหมด ซึ่งจะอธิบายในสไลด์ object"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "let: ค่าที่ต้องกำหนดใหม่ระหว่างทำงาน",
    "subtitle": "ใช้เมื่อกฎของโปรแกรมทำให้ค่าต้องเปลี่ยน",
    "points": [
      "ประกาศค่าเริ่มต้นด้วย let",
      "กำหนดค่าใหม่ได้ภายหลัง",
      "ใช้เท่าที่จำเป็นเพื่อควบคุมการเปลี่ยนแปลง"
    ],
    "details": [
      "status เริ่มเป็น \"ถูกยืม\"",
      "เมื่อ available เป็น true จึงกำหนด status ใหม่เป็น \"พร้อมยืม\"",
      "ถ้าค่าไม่ต้องถูกกำหนดใหม่ควรใช้ const เพื่อบอกเจตนา"
    ],
    "code": "let status = \"ถูกยืม\";\nconst available = true;\n\nif (available === true) {\n  status = \"พร้อมยืม\";\n}\n\nconsole.log(status);",
    "note": "ติดตามค่าของ status ก่อนเข้า if และหลังออกจาก if ด้วยตาราง trace"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจ · const หรือ let",
    "subtitle": "เลือกจากพฤติกรรมของค่า ไม่เลือกจากความเคยชิน",
    "points": [
      "ตัวแปร status เริ่มเป็น “ถูกยืม” และอาจเปลี่ยนเป็น “พร้อมยืม” ควรประกาศอย่างไร?"
    ],
    "options": [
      "const status",
      "let status",
      "ไม่ต้องประกาศ"
    ],
    "answer": 1,
    "explain": "status ถูกกำหนดค่าใหม่ตามเงื่อนไข จึงใช้ let ส่วนค่าที่ไม่กำหนดใหม่ควรเริ่มด้วย const",
    "hint": "ถามว่ามีคำสั่ง status = ... เกิดขึ้นหลังการประกาศหรือไม่",
    "note": "ให้ผู้เรียนอธิบายเหตุผลก่อนเลือก ไม่ให้คะแนนจากการเดาสัญลักษณ์"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "Object: รวมข้อมูลของสิ่งเดียวกัน",
    "subtitle": "จากตัวแปรกระจัดกระจาย สู่ข้อมูลที่มีความหมายเป็นหนึ่งหน่วย",
    "points": [
      "object แทนสิ่งหนึ่งสิ่งในโจทย์",
      "property คือคุณลักษณะของสิ่งนั้น",
      "value คือค่าปัจจุบันของ property",
      "object ทำให้ส่งข้อมูลทั้งชุดเข้า function ได้"
    ],
    "details": [
      "equipment แทนอุปกรณ์หนึ่งชิ้น",
      "id, name และ available เป็นชื่อ properties",
      "\"EQ01\", \"Camera\" และ true เป็น values",
      "แทนที่จะส่งสามค่าแยกกัน เราส่ง equipment หนึ่ง object"
    ],
    "note": "ให้ผู้เรียนเสนอ properties ของนักศึกษา หนังสือ และห้องเรียน แล้วตัด property ที่ไม่เกี่ยวกับโจทย์ออก"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่าน Object Literal ทีละสัญลักษณ์",
    "subtitle": "ชื่อ object → วงเล็บปีกกา → property: value",
    "points": [
      "{ } ครอบข้อมูลของ object",
      ": เชื่อม property กับ value",
      ", แยกแต่ละ property",
      "ปิด statement ด้วย ;"
    ],
    "details": [
      "equipment เป็นชื่อตัวแปรที่อ้างถึง object",
      "id: \"EQ01\" หมายถึง property id มีค่า EQ01",
      "comma บอกว่ายังมี property ถัดไป",
      "semicolon จบคำสั่งประกาศ object"
    ],
    "code": "const equipment = {\n  id: \"EQ01\",\n  name: \"Camera\",\n  available: true\n};",
    "note": "ให้ผู้เรียนชี้ทุกสัญลักษณ์และอ่านออกเสียงเป็นประโยคก่อนคัดลอกโค้ด"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่าน Property ด้วยเครื่องหมายจุด",
    "subtitle": "object.property หมายถึงค่าหนึ่งภายใน object",
    "points": [
      "equipment.id อ่านรหัส",
      "equipment.name อ่านชื่อ",
      "equipment.available อ่านสถานะ",
      "property ที่ไม่มีจะได้ undefined"
    ],
    "details": [
      "จุดหลัง equipment เลือก property ของ object นั้น",
      "ค่าที่อ่านยังคงมีชนิดข้อมูลเดิม",
      "การสะกด property ต้องตรงตัวพิมพ์",
      "equipment.price คืน undefined เพราะตัวอย่างยังไม่มี price"
    ],
    "code": "console.log(equipment.id);        // EQ01\nconsole.log(equipment.name);      // Camera\nconsole.log(equipment.available); // true\nconsole.log(equipment.price);     // undefined",
    "note": "ให้ผู้เรียนทำนายทั้ง 4 บรรทัดและอธิบาย undefined โดยไม่ใช้คำว่า error เหมารวม"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "practice",
    "title": "ฝึกเปลี่ยน Property และสังเกต State",
    "subtitle": "เปลี่ยนทีละจุดเพื่อเห็นเหตุและผล",
    "points": [
      "ทำนาย equipment.available ก่อนแก้",
      "กำหนด equipment.available = false",
      "อ่านค่าเดิมอีกครั้งและเปรียบเทียบ",
      "อธิบายว่า object เดิมมี state เปลี่ยนไป"
    ],
    "hint": "พิมพ์ console.log ก่อนและหลังการกำหนดค่า แล้วดูว่าเป็น object เดิมหรือไม่",
    "note": "ชี้ความแตกต่างระหว่าง const equipment กับการแก้ property: ตัวแปรยังอ้าง object เดิม จึงแก้ property ได้"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "Function: ตั้งชื่อให้กระบวนการ",
    "subtitle": "รวบคำสั่งที่ทำหน้าที่เดียวกันและเรียกใช้ซ้ำได้",
    "points": [
      "function มีชื่อที่บอกพฤติกรรม",
      "รับ input ผ่าน parameter",
      "ทำงานภายใน block",
      "ส่ง output กลับด้วย return"
    ],
    "details": [
      "describeEquipment บอกว่าพฤติกรรมคืออธิบายอุปกรณ์",
      "item เป็นชื่อชั่วคราวของ input ภายใน function",
      "คำสั่งใน { } ทำงานเมื่อ function ถูกเรียก",
      "return ส่งข้อความกลับไปยังจุดที่เรียก"
    ],
    "note": "เปรียบ function เป็นเครื่อง: ใส่ input → ทำ process → รับ output โดยไม่ต้องลงรายละเอียดเครื่องจักรทั้งหมด"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "กายวิภาคของ Function Declaration",
    "subtitle": "อ่านหัว function ให้ครบก่อนอ่านคำสั่งภายใน",
    "points": [
      "function คือคำสำคัญ",
      "describeEquipment คือชื่อ",
      "(item) คือ parameter list",
      "{ ... } คือ function body"
    ],
    "details": [
      "keyword บอก JavaScript ว่าเรากำลังประกาศ function",
      "ชื่อควรเป็นคำกริยาและสื่อหน้าที่",
      "parameter คือช่องรับข้อมูล ไม่ใช่ข้อมูลจริงจนกว่าจะเรียก",
      "body เก็บขั้นตอนที่ทำทุกครั้งเมื่อเรียกใช้"
    ],
    "code": "function describeEquipment(item) {\n  const label = item.id + \" - \" + item.name;\n  return label;\n}",
    "note": "ให้ผู้เรียนปิด body แล้วอธิบายหน้าที่จากชื่อและ parameter ก่อน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "Parameter กับ Argument ต่างกันอย่างไร",
    "subtitle": "ชื่อช่องรับข้อมูล กับค่าจริงที่ส่งเข้าไป",
    "points": [
      "parameter อยู่ตอนประกาศ function",
      "argument อยู่ตอนเรียก function",
      "แต่ละครั้งส่ง object คนละตัวได้",
      "function เดิมจึงใช้ซ้ำได้"
    ],
    "details": [
      "item คือ parameter ใน function describeEquipment(item)",
      "camera คือ argument ใน describeEquipment(camera)",
      "ครั้งถัดไปส่ง tripod ได้โดยไม่เขียน function ใหม่",
      "ระหว่างทำงาน item จะอ้างถึง argument ของครั้งนั้น"
    ],
    "code": "function showName(item) { // item = parameter\n  return item.name;\n}\n\nconst camera = { name: \"Camera\" };\nconst tripod = { name: \"Tripod\" };\n\nconsole.log(showName(camera)); // camera = argument\nconsole.log(showName(tripod)); // tripod = argument",
    "note": "ใช้ภาพกล่อง parameter และลูกศรจาก arguments สองตัว เพื่อแก้ความเข้าใจว่า item เป็น object ถาวร"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "Local Variable และขอบเขตการใช้งาน",
    "subtitle": "ตัวแปรภายใน function มีหน้าที่ชั่วคราวของการเรียกครั้งนั้น",
    "points": [
      "status ถูกสร้างภายใน function",
      "ใช้ได้ภายใน block ของ function",
      "การเรียกแต่ละครั้งมี status ของตนเอง",
      "ช่วยไม่ให้ตัวแปรชั่วคราวรบกวนภายนอก"
    ],
    "details": [
      "status เป็น local variable เพราะประกาศใน describeEquipment",
      "โค้ดภายนอกไม่ควรพึ่ง status โดยตรง",
      "เรียกด้วย camera และ tripod จะคำนวณ status แยกกัน",
      "local scope ลดโอกาสชื่อชนกันและสถานะค้างจากครั้งก่อน"
    ],
    "note": "ยังไม่ลงรายละเอียด lexical scope ลึก ให้ยึดหลักว่า { } ของ function เป็นพื้นที่ทำงานของตัวแปรชั่วคราว"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "if: เลือกทำงานเมื่อเงื่อนไขเป็นจริง",
    "subtitle": "เงื่อนไขอยู่ใน ( ) และคำสั่งที่เลือกอยู่ใน { }",
    "points": [
      "ประเมินเงื่อนไขก่อน",
      "ถ้า true จึงเข้า block",
      "ถ้า false ข้าม block",
      "จากนั้นทำคำสั่งถัดไป"
    ],
    "details": [
      "item.available === true เปรียบเทียบค่าและได้ boolean",
      "เมื่อ true จึงกำหนด status เป็น พร้อมยืม",
      "เมื่อ false status ยังคงเป็น ถูกยืม",
      "หลัง if โปรแกรมไปยัง return ไม่ว่าจะเข้าหรือข้าม block"
    ],
    "code": "let status = \"ถูกยืม\";\n\nif (item.available === true) {\n  status = \"พร้อมยืม\";\n}\n\nreturn status;",
    "note": "วาดลูกศรสองเส้น true/false แล้วให้ผู้เรียน trace ทั้งสองกรณี"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "Trace เงื่อนไขสองเส้นทาง",
    "subtitle": "อย่าเดา ให้บันทึกค่าทีละขั้น",
    "points": [
      "กรณี A: available = true",
      "กรณี B: available = false",
      "ค่าเริ่มต้นเหมือนกันแต่เส้นทางต่างกัน",
      "ทั้งสองกรณีต้องมี output ที่อธิบายได้"
    ],
    "details": [
      "A เริ่ม status=ถูกยืม → เงื่อนไข true → status=พร้อมยืม → return พร้อมยืม",
      "B เริ่ม status=ถูกยืม → เงื่อนไข false → ข้าม block → return ถูกยืม",
      "การเขียน trace table ช่วยเห็นว่าค่าเปลี่ยนที่บรรทัดใด",
      "test ที่ดีต้องตรวจทั้งเส้นทาง true และ false"
    ],
    "code": "// Trace A\navailable: true  → if: true  → status: \"พร้อมยืม\"\n\n// Trace B\navailable: false → if: false → status: \"ถูกยืม\"",
    "note": "ให้ครึ่งห้อง trace true อีกครึ่ง trace false แล้วแลกอธิบายกัน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "return: ส่งผลกลับและจบการทำงานของ Function",
    "subtitle": "ค่าที่ return ต้องถูกรับหรือนำไปใช้ต่อ",
    "points": [
      "return ส่งค่าออกจาก function",
      "คำสั่งหลัง return ในเส้นทางเดียวกันไม่ทำงาน",
      "ผู้เรียกเก็บผลในตัวแปรได้",
      "function ที่ไม่มี return ชัดเจนคืน undefined"
    ],
    "details": [
      "return message ส่ง string กลับไปยังจุดเรียก",
      "เมื่อ return แล้วการเรียกครั้งนั้นจบ",
      "const message = describeEquipment(equipment) รับ output",
      "console.log ภายใน function ไม่ทดแทน return เมื่อต้องใช้ค่าต่อ"
    ],
    "code": "function createLabel(item) {\n  const label = item.id + \" - \" + item.name;\n  return label;\n}\n\nconst result = createLabel(equipment);",
    "note": "ใช้ลูกศรจาก argument เข้า function และลูกศร return กลับมาที่ result"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "console.log: แสดงผลเพื่อสังเกต",
    "subtitle": "แสดงค่าใน Terminal แต่ไม่ได้ส่งค่ากลับจาก function",
    "points": [
      "ใช้ดูค่าและลำดับการทำงาน",
      "output ปรากฏใน Terminal",
      "เหมาะกับการเรียนรู้และตรวจข้อผิดพลาด",
      "ไม่ควรสับสนกับ return"
    ],
    "details": [
      "console.log(message) แสดงข้อความให้ผู้ใช้หรือผู้พัฒนาเห็น",
      "ค่าที่แสดงไม่ถูกเก็บอัตโนมัติ",
      "เราใช้ log ก่อน–หลังการเปลี่ยน state เพื่อเป็นหลักฐาน",
      "ในระบบจริงอาจส่งผลให้ UI หรือ API แทนการ log"
    ],
    "code": "const message = describeEquipment(equipment);\n\nconsole.log(message);\nconsole.log(\"จบโปรแกรม\");",
    "note": "ให้ผู้เรียนลบ console.log ชั่วคราวแล้วสังเกตว่า function ยังคืนค่าได้แต่หน้าจอไม่แสดง"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจ · return กับ console.log",
    "subtitle": "สองคำสั่งนี้ทำหน้าที่คนละอย่าง",
    "points": [
      "ถ้าต้องการให้ค่าจาก function ถูกนำไปใช้คำนวณต่อ ควรใช้สิ่งใด?"
    ],
    "options": [
      "console.log อย่างเดียว",
      "return",
      "comment"
    ],
    "answer": 1,
    "explain": "return ส่งค่ากลับให้ผู้เรียกนำไปเก็บหรือใช้ต่อ ส่วน console.log เพียงแสดงค่าใน Terminal",
    "hint": "มองหาคำสั่งที่มีลูกศรส่ง output กลับจาก function",
    "note": "หลังตอบ ให้ผู้เรียนเขียนหนึ่งประโยคเปรียบเทียบ return กับ console.log"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "ประกอบเป็น Input → Process → Output",
    "subtitle": "กรอบอ่านโปรแกรมที่ใช้ได้กับทุกภาษา",
    "points": [
      "Input คือ equipment",
      "Process คือ describeEquipment",
      "Output คือ message",
      "Display คือ console.log(message)"
    ],
    "details": [
      "object ถูกส่งเป็น argument เข้า function",
      "function อ่าน properties ตรวจ if และสร้าง string",
      "return ส่ง string มาเก็บใน message",
      "console.log แสดง message ใน Terminal"
    ],
    "code": "// INPUT\nconst equipment = { id: \"EQ01\", name: \"Camera\", available: true };\n\n// PROCESS\nconst message = describeEquipment(equipment);\n\n// OUTPUT / DISPLAY\nconsole.log(message);",
    "note": "ให้ผู้เรียนวาดกล่อง 4 กล่องและลูกศรจากค่าจริงในโค้ด ไม่ใช้เพียงคำจำกัดความ"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "แนวคิด OOP: Object มี Data, State และ Behavior",
    "subtitle": "เข้าใจแบบจำลองก่อนเรียนไวยากรณ์ class",
    "points": [
      "Object · สิ่งที่ระบบสนใจ",
      "Data · ข้อมูลระบุตัวตนและรายละเอียด",
      "State · ค่าที่เปลี่ยนตามเวลา",
      "Behavior · การกระทำหรือกฎที่เกี่ยวข้อง"
    ],
    "details": [
      "equipment คือ object ที่แทนอุปกรณ์หนึ่งชิ้น",
      "id และ name เป็น data ของอุปกรณ์",
      "available เป็น state เพราะเปลี่ยนหลังยืมหรือคืน",
      "describeEquipment เป็น behavior ที่อ่านข้อมูลและสถานะเพื่อสร้างผลลัพธ์"
    ],
    "note": "ย้ำว่า OOP ไม่เท่ากับการเขียน class จำนวนมาก แต่คือการจัดความรับผิดชอบให้แบบจำลองชัดเจน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "Object วันนี้ กับ Class ในบทถัดไป",
    "subtitle": "รู้ขอบเขตของสิ่งที่เรียน ไม่รีบกระโดดไปไวยากรณ์ยาก",
    "points": [
      "วันนี้ใช้ object literal หนึ่งหรือสองชิ้น",
      "function ยังอยู่นอก object เพื่ออ่านง่าย",
      "ภายหลัง class จะเป็นแบบสำหรับสร้างหลาย objects",
      "method จะวาง behavior ใกล้ data ที่รับผิดชอบ"
    ],
    "details": [
      "เราเริ่มจากสิ่งที่มองเห็นและรันได้ก่อน",
      "การแยก function ทำให้ฝึก input/process/output ได้ชัด",
      "เมื่อพบว่าต้องสร้าง Equipment หลายชิ้นโครงสร้างเดียวกัน class จึงมีเหตุผล",
      "บท class จะอธิบาย constructor, this, instance และ method หลังพื้นฐานพร้อม"
    ],
    "note": "ไม่สอน syntax class ในหน้านี้ ให้ตอบเพียงว่าปัญหาใดทำให้ class มีประโยชน์"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่านโปรแกรมเต็ม · ส่วนที่ 1 ข้อมูล",
    "subtitle": "เริ่มจาก object ก่อนอ่าน function",
    "points": [
      "ชื่อตัวแปร equipment",
      "properties id, name, available",
      "ชนิด string, string, boolean",
      "available คือ state ที่เงื่อนไขจะอ่าน"
    ],
    "details": [
      "equipment แทนอุปกรณ์หนึ่งชิ้น",
      "id ใช้ระบุ EQ01 และ name ใช้แสดง Camera",
      "true ไม่มี quote จึงเป็น boolean",
      "ยังไม่มีคำสั่งใดเปลี่ยน object ในส่วนนี้"
    ],
    "code": "const equipment = {\n  id: \"EQ01\",\n  name: \"Camera\",\n  available: true\n};",
    "note": "ห้ามเลื่อนไป function จนผู้เรียนกรอกตาราง property–value–type ครบ"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่านโปรแกรมเต็ม · ส่วนที่ 2 พฤติกรรม",
    "subtitle": "ติดตาม parameter → local variable → if → return",
    "points": [
      "item รับ object จากผู้เรียก",
      "status เป็น local variable",
      "if อ่าน item.available",
      "return สร้าง output จาก properties และ status"
    ],
    "details": [
      "เมื่อเรียกด้วย equipment ค่า item จึงอ้าง object นั้น",
      "status เริ่มด้วยค่าของเส้นทาง false",
      "เส้นทาง true กำหนด status ใหม่",
      "output ไม่แก้ equipment แต่สร้าง string ใหม่"
    ],
    "code": "function describeEquipment(item) {\n  let status = \"ถูกยืม\";\n  if (item.available === true) {\n    status = \"พร้อมยืม\";\n  }\n  return item.id + \" - \" + item.name + \" - \" + status;\n}",
    "note": "ให้ผู้เรียนชี้ input, condition, state ชั่วคราว และ output จากบรรทัดจริง"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่านโปรแกรมเต็ม · ส่วนที่ 3 เรียกใช้และ Trace",
    "subtitle": "ทำนาย output ก่อนกดรันทุกครั้ง",
    "points": [
      "ส่ง equipment เป็น argument",
      "รับค่าที่ return ใน message",
      "แสดง message ด้วย console.log",
      "เปลี่ยน available แล้ว trace ใหม่"
    ],
    "details": [
      "describeEquipment(equipment) เริ่มการทำงานของ function",
      "return กลับมาเป็น string ที่เก็บใน message",
      "Terminal แสดง EQ01 - Camera - พร้อมยืม",
      "ถ้า available=false เงื่อนไขไม่เข้า block และข้อความจบด้วย ถูกยืม"
    ],
    "code": "const message = describeEquipment(equipment);\nconsole.log(message);\n\n// คาดหวัง: EQ01 - Camera - พร้อมยืม",
    "note": "ปิดจอผลลัพธ์ก่อน ให้ทุกคนเขียน expected output แล้วจึงรันพร้อมกัน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "practice",
    "title": "ฝึกประกอบความเข้าใจทีละขั้น",
    "subtitle": "เปลี่ยนหนึ่งสิ่ง ทำนาย รัน และอธิบาย ก่อนทำขั้นต่อไป",
    "points": [
      "รันโค้ดเดิมและบันทึก output",
      "เปลี่ยน name เป็น Microphone แล้วทำนายก่อนรัน",
      "เปลี่ยน available เป็น false และ trace if",
      "เพิ่ม category แล้วแสดงในข้อความ",
      "สร้าง equipment2 และใช้ function เดิม"
    ],
    "hint": "ถ้าติด ให้กลับไปหากล่อง Input → Process → Output และตรวจชื่อ property ทีละตัว",
    "note": "ตรวจ checkpoint หลังขั้น 3: ผู้เรียนต้องอธิบายบรรทัดที่ทำให้ผลเปลี่ยน ไม่รับเพียงภาพผลรัน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจรวมบทที่ 1",
    "subtitle": "ใช้เหตุผลจากโค้ด ไม่ใช้การจำคำศัพท์",
    "points": [
      "เหตุใด equipment2 จึงใช้ describeEquipment function เดิมได้?"
    ],
    "options": [
      "เพราะ function รับ object ผ่าน parameter และอ่าน properties ที่กำหนด",
      "เพราะ console.log สร้าง object ใหม่ให้",
      "เพราะตัวแปรทุกตัวใน JavaScript มีค่าเหมือนกัน"
    ],
    "answer": 0,
    "explain": "parameter ทำให้ function รับ argument ต่างกันได้ หาก object มี properties ที่ function ต้องใช้ ก็ประมวลผลด้วยขั้นตอนเดิมได้",
    "hint": "มองที่ item ใน function และค่าที่ส่งเข้า describeEquipment(...)",
    "note": "ให้ผู้เรียนยกตัวอย่าง camera และ tripod ประกอบคำตอบก่อนเปิดเฉลย"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=1",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 1/10",
    "subtitle": "ชิ้นที่ 1 · วัตถุ ข้อมูล สถานะ และพฤติกรรม",
    "points": [
      "ไฟล์ catalog.js ที่รันได้",
      "แผนภาพ Input → Process → Output",
      "คำอธิบาย Object–Data–State–Behavior",
      "ผลรัน available ทั้ง true และ false"
    ],
    "piece": "ชิ้นที่ 1 · วัตถุ ข้อมูล สถานะ และพฤติกรรม",
    "deliverable": "catalog.js + ภาพผลรัน 2 เส้นทาง + ตาราง property–value–type + คำอธิบายด้วยภาษาของตนเอง",
    "note": "ตรวจด้วยการถามสดหนึ่งข้อ เช่น เปลี่ยน property ใดแล้ว output เปลี่ยน เพราะบรรทัดใด"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "chapter",
    "title": "บทที่ 2\nข้อมูลและกฎเงื่อนไข",
    "subtitle": "สร้างรหัส สถานะ จำนวนวัน และเงื่อนไขที่ตรวจสอบได้",
    "points": [
      "เลือกชนิดข้อมูลได้เหมาะกับโจทย์",
      "เขียนกฎอนุญาตยืมโดยไม่เปลี่ยนสถานะก่อนตรวจ",
      "สร้างตารางกรณีปกติและกรณีขอบเขต"
    ],
    "piece": "ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "reveal",
    "title": "ข้อมูลและกฎเงื่อนไข: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "number ต้องตรวจจำนวนเต็มและขอบเขต",
      "ค่าข้อความต้องตรวจเทียบกับรายการสถานะที่อนุญาต",
      "กฎสำคัญต้องตรวจที่ Backend ไม่ใช่เฉพาะหน้าจอ"
    ],
    "details": [
      "แนวคิด 1: number ต้องตรวจจำนวนเต็มและขอบเขต",
      "แนวคิด 2: ค่าข้อความต้องตรวจเทียบกับรายการสถานะที่อนุญาต",
      "แนวคิด 3: กฎสำคัญต้องตรวจที่ Backend ไม่ใช่เฉพาะหน้าจอ"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch02-loan-rules.js",
    "points": [
      "VALID_STATUSES ระบุสถานะที่ระบบยอมรับ",
      "validDays รวมเงื่อนไขจำนวนเต็มและช่วง 1–7",
      "return รวมกฎสถานะและจำนวนวันโดยยังไม่แก้ข้อมูล"
    ],
    "details": [
      "VALID_STATUSES ระบุสถานะที่ระบบยอมรับ",
      "validDays รวมเงื่อนไขจำนวนเต็มและช่วง 1–7",
      "return รวมกฎสถานะและจำนวนวันโดยยังไม่แก้ข้อมูล"
    ],
    "code": "const VALID_STATUSES = [\"available\", \"borrowed\"];\n\nfunction canBorrow(status, days) {\n  if (!VALID_STATUSES.includes(status)) return false;\n  const validDays = Number.isInteger(days) && days >= 1 && days <= 7;\n  return status === \"available\" && validDays;\n}\n\nconsole.log(canBorrow(\"available\", 7)); // true\nconsole.log(canBorrow(\"borrowed\", 7));  // false\nconsole.log(canBorrow(\"available\", 8)); // false",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "ทำตาราง status 2 ค่า × days 0, 1, 7, 8",
      "ทำนาย true/false ก่อนรัน",
      "เพิ่มกรณี NaN และ 1.5 พร้อมเหตุผล"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 2 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 2",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "เหตุใดจึงตรวจ Number.isInteger(days)?"
    ],
    "options": [
      "เพื่อเปลี่ยน string เป็น number",
      "เพื่อปฏิเสธทศนิยมเมื่อโจทย์ต้องการจำนวนวันเต็ม",
      "เพื่อทำให้ทุกค่ากลายเป็น 7"
    ],
    "answer": 1,
    "explain": "JavaScript ใช้ number ทั้งจำนวนเต็มและทศนิยม จึงต้องตรวจตามกฎธุรกิจ",
    "hint": "ชนิด number ไม่ได้หมายถึงจำนวนเต็มเท่านั้น",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=2",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 2/10",
    "subtitle": "ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม",
    "points": [
      "ตารางทดสอบอย่างน้อย 6 กรณี พร้อม expected result",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม",
    "deliverable": "ตารางทดสอบอย่างน้อย 6 กรณี พร้อม expected result",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "chapter",
    "title": "บทที่ 3\nฟังก์ชันบริสุทธิ์และการทดสอบ",
    "subtitle": "เปลี่ยนข้อกำหนดให้เป็นตัวอย่างที่พิสูจน์ได้",
    "points": [
      "แยกฟังก์ชันที่ไม่มีผลข้างเคียง",
      "เขียน automated test ด้วย node:test",
      "ใช้ผลทดสอบตรวจคำตอบจาก AI"
    ],
    "piece": "ชิ้นที่ 3 · ชุดทดสอบกฎธุรกิจ",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "reveal",
    "title": "ฟังก์ชันบริสุทธิ์และการทดสอบ: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "เริ่มจาก input และ expected result",
      "pure function ให้ผลเหมือนเดิมเมื่อ input เหมือนเดิม",
      "แก้โค้ดแล้วต้องรัน regression tests ซ้ำ"
    ],
    "details": [
      "แนวคิด 1: เริ่มจาก input และ expected result",
      "แนวคิด 2: pure function ให้ผลเหมือนเดิมเมื่อ input เหมือนเดิม",
      "แนวคิด 3: แก้โค้ดแล้วต้องรัน regression tests ซ้ำ"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch03-pure-function.test.js",
    "points": [
      "ฟังก์ชันแยกกฎออกจาก UI และฐานข้อมูล",
      "test ตั้งชื่อเป็นพฤติกรรมที่อ่านเข้าใจได้",
      "assert เปรียบเทียบผลจริงกับผลที่คาดหวัง"
    ],
    "details": [
      "ฟังก์ชันแยกกฎออกจาก UI และฐานข้อมูล",
      "test ตั้งชื่อเป็นพฤติกรรมที่อ่านเข้าใจได้",
      "assert เปรียบเทียบผลจริงกับผลที่คาดหวัง"
    ],
    "code": "import test from \"node:test\";\nimport assert from \"node:assert/strict\";\n\nexport function maxLoanDays(role) {\n  return role === \"student\" ? 7 : 14;\n}\n\ntest(\"นักศึกษายืมได้ไม่เกิน 7 วัน\", () => {\n  assert.equal(maxLoanDays(\"student\"), 7);\n});\n\ntest(\"บุคลากรยืมได้ไม่เกิน 14 วัน\", () => {\n  assert.equal(maxLoanDays(\"staff\"), 14);\n});",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "รัน tests ให้ผ่านก่อนแก้",
      "เพิ่ม role guest ที่ยืมได้ 3 วันโดยเขียน test ก่อน",
      "ให้ AI เสนอกรณีที่ขาด แล้วเลือกเพิ่มเฉพาะกรณีที่มีเหตุผล"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 3 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 3",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "ลำดับใดเหมาะกับการพัฒนาแบบ test-first?"
    ],
    "options": [
      "เขียน implementation → ลบ test",
      "กำหนด expected result → เขียน test → เขียนโค้ดให้ผ่าน",
      "ถาม AI แล้วไม่ต้องรัน"
    ],
    "answer": 1,
    "explain": "เริ่มจากผลที่คาดหวัง ทำให้เกณฑ์ความสำเร็จชัดก่อนแก้โค้ด",
    "hint": "เริ่มจากสิ่งที่โปรแกรมควรทำ",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 3,
    "week": "4–5",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=3",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 3/10",
    "subtitle": "ชิ้นที่ 3 · ชุดทดสอบกฎธุรกิจ",
    "points": [
      "ไฟล์ test ที่ผ่านอย่างน้อย 3 กรณี + ภาพผล npm test",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 3 · ชุดทดสอบกฎธุรกิจ",
    "deliverable": "ไฟล์ test ที่ผ่านอย่างน้อย 3 กรณี + ภาพผล npm test",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "chapter",
    "title": "บทที่ 4\nคลาสและวัตถุ",
    "subtitle": "ให้ Equipment ดูแลข้อมูลและพฤติกรรมของตนเอง",
    "points": [
      "อธิบาย class, instance และ constructor",
      "วางข้อมูลกับพฤติกรรมที่เกี่ยวข้องไว้ด้วยกัน",
      "สร้างวัตถุสองตัวที่มีสถานะแยกกัน"
    ],
    "piece": "ชิ้นที่ 4 · Equipment class",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "reveal",
    "title": "คลาสและวัตถุ: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "class เป็นแบบกำหนดโครงสร้างและพฤติกรรม",
      "instance แต่ละตัวมีสถานะของตนเอง",
      "constructor รับข้อมูลเริ่มต้นที่จำเป็น"
    ],
    "details": [
      "แนวคิด 1: class เป็นแบบกำหนดโครงสร้างและพฤติกรรม",
      "แนวคิด 2: instance แต่ละตัวมีสถานะของตนเอง",
      "แนวคิด 3: constructor รับข้อมูลเริ่มต้นที่จำเป็น"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch04-equipment-class.js",
    "points": [
      "constructor รับ id และ name ตอนสร้างวัตถุ",
      "this เก็บข้อมูลของ instance แต่ละตัว",
      "#borrowed ซ่อนสถานะภายในและเปิดอ่านผ่านเมธอด"
    ],
    "details": [
      "constructor รับ id และ name ตอนสร้างวัตถุ",
      "this เก็บข้อมูลของ instance แต่ละตัว",
      "#borrowed ซ่อนสถานะภายในและเปิดอ่านผ่านเมธอด"
    ],
    "code": "export class Equipment {\n  #borrowed = false;\n\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  }\n\n  isAvailable() {\n    return !this.#borrowed;\n  }\n}\n\nconst camera = new Equipment(\"EQ01\", \"Camera\");\nconst tripod = new Equipment(\"EQ02\", \"Tripod\");\nconsole.log(camera.isAvailable(), tripod.isAvailable());",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "วาดกล่อง class ก่อนเขียนโค้ด",
      "สร้างอุปกรณ์ 2 ชิ้นและพิมพ์สถานะ",
      "อธิบายความต่างระหว่าง class กับ camera instance"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 4 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 4",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "camera ในตัวอย่างคืออะไร?"
    ],
    "options": [
      "คลาส",
      "อินสแตนซ์ของ Equipment",
      "ชนิดข้อมูล boolean"
    ],
    "answer": 1,
    "explain": "camera เป็นวัตถุที่สร้างจากคลาส Equipment และมีสถานะของตนเอง",
    "hint": "ดูคำสั่ง new Equipment",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 4,
    "week": "6",
    "clo": "CLO1, CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=4",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 4/10",
    "subtitle": "ชิ้นที่ 4 · Equipment class",
    "points": [
      "Class diagram 1 คลาส + โค้ดสร้างอุปกรณ์ 2 ชิ้น",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 4 · Equipment class",
    "deliverable": "Class diagram 1 คลาส + โค้ดสร้างอุปกรณ์ 2 ชิ้น",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "chapter",
    "title": "บทที่ 5\nEncapsulation และ Invariant",
    "subtitle": "ป้องกันสถานะผิดด้วยเมธอดที่ตรวจเงื่อนไข",
    "points": [
      "อธิบาย invariant ของอุปกรณ์",
      "ป้องกันยืมซ้ำและคืนซ้ำ",
      "ทดสอบว่ากรณีผิดไม่เปลี่ยนสถานะ"
    ],
    "piece": "ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "reveal",
    "title": "Encapsulation และ Invariant: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "ข้อมูล private ไม่ควรถูกแก้จากภายนอกโดยตรง",
      "เมธอดตรวจเงื่อนไขก่อนเปลี่ยนสถานะ",
      "ข้อผิดพลาดต้องชัดเจนและทดสอบได้"
    ],
    "details": [
      "แนวคิด 1: ข้อมูล private ไม่ควรถูกแก้จากภายนอกโดยตรง",
      "แนวคิด 2: เมธอดตรวจเงื่อนไขก่อนเปลี่ยนสถานะ",
      "แนวคิด 3: ข้อผิดพลาดต้องชัดเจนและทดสอบได้"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch05-equipment-invariant.js",
    "points": [
      "#borrowed ถูกบังคับความเป็นส่วนตัวขณะรัน",
      "borrow ตรวจ invariant ก่อนแก้ค่า",
      "giveBack ใช้กฎตรงข้ามและคงสถานะเมื่อเกิด error"
    ],
    "details": [
      "#borrowed ถูกบังคับความเป็นส่วนตัวขณะรัน",
      "borrow ตรวจ invariant ก่อนแก้ค่า",
      "giveBack ใช้กฎตรงข้ามและคงสถานะเมื่อเกิด error"
    ],
    "code": "export class Equipment {\n  #borrowed = false;\n\n  borrow() {\n    if (this.#borrowed) throw new Error(\"ยืมซ้ำไม่ได้\");\n    this.#borrowed = true;\n  }\n\n  giveBack() {\n    if (!this.#borrowed) throw new Error(\"คืนซ้ำไม่ได้\");\n    this.#borrowed = false;\n  }\n\n  isAvailable() { return !this.#borrowed; }\n}",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "ทดสอบยืมครั้งแรกและยืมซ้ำ",
      "ทดสอบคืนครั้งแรกและคืนซ้ำ",
      "บันทึกสถานะก่อน–หลังกรณีผิดเงื่อนไข"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 5 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 5",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "เหตุใด borrowed จึงควรเป็น private field?"
    ],
    "options": [
      "เพื่อให้โค้ดยาวขึ้น",
      "เพื่อบังคับให้เปลี่ยนสถานะผ่านกฎในเมธอด",
      "เพราะ JavaScript ใช้ boolean ไม่ได้"
    ],
    "answer": 1,
    "explain": "การซ่อนสถานะช่วยป้องกันภายนอกข้ามกฎยืมและคืน",
    "hint": "ใครควรรับผิดชอบ invariant ของ Equipment",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 5,
    "week": "7",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=5",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 5/10",
    "subtitle": "ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้",
    "points": [
      "โค้ด borrow/giveBack + tests กรณีปกติและผิดเงื่อนไข",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้",
    "deliverable": "โค้ด borrow/giveBack + tests กรณีปกติและผิดเงื่อนไข",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "chapter",
    "title": "บทที่ 6\nComposition ก่อน Inheritance",
    "subtitle": "ประกอบ Loan จาก Equipment และข้อมูลผู้ยืม",
    "points": [
      "แยกความสัมพันธ์ has-a กับ is-a",
      "สร้าง Loan ที่อ้างถึง Equipment",
      "เลือก composition เมื่อวัตถุร่วมงานกัน"
    ],
    "piece": "ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "reveal",
    "title": "Composition ก่อน Inheritance: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "Loan has an Equipment จึงเป็น composition",
      "inheritance ใช้เมื่อชนิดย่อยเป็นชนิดหลักจริง",
      "อย่าสร้างคลาสย่อยเพียงเพื่อเก็บข้อมูลต่างกัน"
    ],
    "details": [
      "แนวคิด 1: Loan has an Equipment จึงเป็น composition",
      "แนวคิด 2: inheritance ใช้เมื่อชนิดย่อยเป็นชนิดหลักจริง",
      "แนวคิด 3: อย่าสร้างคลาสย่อยเพียงเพื่อเก็บข้อมูลต่างกัน"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch06-loan-composition.js",
    "points": [
      "equipment field แสดงความสัมพันธ์ has-a",
      "borrowerId และ days เป็นข้อมูลของรายการยืม",
      "constructor ตรวจข้อมูลที่ Loan ต้องรับผิดชอบ"
    ],
    "details": [
      "equipment field แสดงความสัมพันธ์ has-a",
      "borrowerId และ days เป็นข้อมูลของรายการยืม",
      "constructor ตรวจข้อมูลที่ Loan ต้องรับผิดชอบ"
    ],
    "code": "// รับ object ของ Equipment ที่สร้างจากบทก่อนหน้า\nexport class Loan {\n  constructor(equipment, borrowerId, days) {\n    if (!Number.isInteger(days) || days < 1) {\n      throw new Error(\"จำนวนวันไม่ถูกต้อง\");\n    }\n    this.equipment = equipment;\n    this.borrowerId = borrowerId;\n    this.days = days;\n  }\n}\n\n// Loan มี Equipment เป็นส่วนประกอบ ไม่ได้สืบทอดจาก Equipment",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "วาดความสัมพันธ์ Equipment 1 — 0..* Loan",
      "สร้าง Loan ปกติ 1 รายการ",
      "ลอง days = 0 และยืนยันว่า object ไม่ถูกสร้าง"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 6 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 6",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "ความสัมพันธ์ระหว่าง Loan กับ Equipment เหมาะกับข้อใด?"
    ],
    "options": [
      "Loan extends Equipment",
      "Loan has an Equipment",
      "Loan และ Equipment ต้องเป็นคลาสเดียวกัน"
    ],
    "answer": 1,
    "explain": "Loan อ้างถึง Equipment เพื่อบอกว่ายืมชิ้นใด จึงเป็น has-a",
    "hint": "ถามว่า Loan เป็นอุปกรณ์หรือมีอุปกรณ์",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 6,
    "week": "9",
    "clo": "CLO2, CLO3",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=6",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 6/10",
    "subtitle": "ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ",
    "points": [
      "Class diagram 2 คลาส + โค้ด Loan + test จำนวนวันผิด",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ",
    "deliverable": "Class diagram 2 คลาส + โค้ด Loan + test จำนวนวันผิด",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "chapter",
    "title": "บทที่ 7\nPolymorphism, Strategy และ DI",
    "subtitle": "เปลี่ยนนโยบายได้โดยไม่แก้ LoanService",
    "points": [
      "กำหนดข้อตกลงจากเมธอดที่ผู้เรียกต้องใช้",
      "สลับ strategy ผ่าน constructor injection",
      "ทดสอบ service ด้วย fake policy"
    ],
    "piece": "ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "reveal",
    "title": "Polymorphism, Strategy และ DI: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "JavaScript ใช้ duck typing: วัตถุที่มีเมธอดตามข้อตกลงทำงานร่วมกันได้",
      "polymorphism ให้ object หลายแบบใช้ผ่านเมธอดเดียวกัน",
      "dependency injection ลดการผูกกับรายละเอียด"
    ],
    "details": [
      "แนวคิด 1: JavaScript ใช้ duck typing: วัตถุที่มีเมธอดตามข้อตกลงทำงานร่วมกันได้",
      "แนวคิด 2: polymorphism ให้ object หลายแบบใช้ผ่านเมธอดเดียวกัน",
      "แนวคิด 3: dependency injection ลดการผูกกับรายละเอียด"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch07-loan-policy.js",
    "points": [
      "เมธอด maxDays คือข้อตกลงที่ service ต้องใช้",
      "StandardLoanPolicy เป็น strategy หนึ่งแบบ",
      "LoanService รับ dependency จากภายนอก จึงสลับ fake ใน test ได้"
    ],
    "details": [
      "เมธอด maxDays คือข้อตกลงที่ service ต้องใช้",
      "StandardLoanPolicy เป็น strategy หนึ่งแบบ",
      "LoanService รับ dependency จากภายนอก จึงสลับ fake ใน test ได้"
    ],
    "code": "export class StandardLoanPolicy {\n  maxDays(role) {\n    return role === \"student\" ? 7 : 14;\n  }\n}\n\nexport class LoanService {\n  constructor(policy) {\n    if (typeof policy?.maxDays !== \"function\") {\n      throw new Error(\"policy ต้องมีเมธอด maxDays\");\n    }\n    this.policy = policy;\n  }\n\n  canBorrow(role, days) {\n    return days >= 1 && days <= this.policy.maxDays(role);\n  }\n}",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "สร้าง FakeLoanPolicy ที่คืน 2 วันเสมอ",
      "ส่ง fake เข้า LoanService และเขียน test",
      "เปรียบเทียบผลกับ StandardLoanPolicy"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 7 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 7",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "ประโยชน์หลักของ constructor injection ในตัวอย่างคืออะไร?"
    ],
    "options": [
      "ไม่ต้องเขียน test",
      "สลับ policy ได้โดยไม่แก้ LoanService",
      "ทำให้ทุก policy ให้ผลเหมือนกัน"
    ],
    "answer": 1,
    "explain": "Service พึ่งเมธอดตามข้อตกลง จึงเปลี่ยน object และทดสอบแยกได้",
    "hint": "มองหาสิ่งที่ส่งเข้าทาง constructor",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 7,
    "week": "10–11",
    "clo": "CLO1, CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=7",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 7/10",
    "subtitle": "ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้",
    "points": [
      "Policy จริง + fake policy + test เปรียบเทียบ",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้",
    "deliverable": "Policy จริง + fake policy + test เปรียบเทียบ",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "chapter",
    "title": "บทที่ 8\nRepository และ Runtime Validation",
    "subtitle": "แยกแหล่งข้อมูลและไม่เชื่อข้อมูลจากภายนอกทันที",
    "points": [
      "แยกการเก็บข้อมูลผ่าน repository",
      "ใช้ Map ป้องกันรหัสซ้ำ",
      "ตรวจข้อมูล request ก่อนเรียก domain"
    ],
    "piece": "ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "reveal",
    "title": "Repository และ Runtime Validation: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "repository ซ่อนรายละเอียดแหล่งข้อมูล",
      "in-memory repository เหมาะกับการเรียนและการทดสอบ",
      "ข้อมูล JSON จากภายนอกต้องตรวจที่ runtime"
    ],
    "details": [
      "แนวคิด 1: repository ซ่อนรายละเอียดแหล่งข้อมูล",
      "แนวคิด 2: in-memory repository เหมาะกับการเรียนและการทดสอบ",
      "แนวคิด 3: ข้อมูล JSON จากภายนอกต้องตรวจที่ runtime"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch08-repository-validation.js",
    "points": [
      "Map เก็บคู่ id → item และตรวจซ้ำได้",
      "find คืน undefined เมื่อไม่พบ",
      "isLoanRequest ตรวจข้อมูลจริงก่อนส่งเข้าสู่ domain"
    ],
    "details": [
      "Map เก็บคู่ id → item และตรวจซ้ำได้",
      "find คืน undefined เมื่อไม่พบ",
      "isLoanRequest ตรวจข้อมูลจริงก่อนส่งเข้าสู่ domain"
    ],
    "code": "export class EquipmentRepository {\n  #items = new Map();\n\n  add(item) {\n    if (this.#items.has(item.id)) throw new Error(\"รหัสซ้ำ\");\n    this.#items.set(item.id, item);\n  }\n\n  find(id) {\n    return this.#items.get(id);\n  }\n}\n\nexport function isLoanRequest(value) {\n  if (typeof value !== \"object\" || value === null) return false;\n  return typeof value.id === \"string\" && Number.isInteger(value.days);\n}",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "เพิ่ม EQ01 แล้วลองเพิ่มรหัสเดิม",
      "ค้นหารหัสที่มีและไม่มี",
      "ทดสอบ validator ด้วย null, string, days ทศนิยม และข้อมูลถูกต้อง"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 8 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 8",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "เหตุใด request จาก API จึงต้องตรวจที่ runtime?"
    ],
    "options": [
      "เพราะข้อมูลจากภายนอกอาจผิดรูปแบบ",
      "เพื่อให้ไม่ต้องตรวจค่า null",
      "เพราะ React รับประกันข้อมูลให้แล้ว"
    ],
    "answer": 0,
    "explain": "ข้อมูลภายนอกอาจหาย ผิดชนิด หรืออยู่นอกขอบเขต จึงต้องตรวจค่าจริงก่อนใช้",
    "hint": "อย่าเชื่อข้อมูลเพียงเพราะส่งมาจากหน้าจอของเรา",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 8,
    "week": "12–13",
    "clo": "CLO3, CLO4, CLO5",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=8",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 8/10",
    "subtitle": "ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input",
    "points": [
      "Repository + validator + tests รหัสซ้ำ/ไม่พบ/ข้อมูลผิดรูปแบบ",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input",
    "deliverable": "Repository + validator + tests รหัสซ้ำ/ไม่พบ/ข้อมูลผิดรูปแบบ",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "chapter",
    "title": "บทที่ 9\nเชื่อม Express API กับ React",
    "subtitle": "React แสดงผล · Route รับคำขอ · Service บังคับกฎ",
    "points": [
      "อธิบาย request flow ตั้งแต่หน้าจอถึง repository",
      "วางกฎธุรกิจไว้ใน service/domain",
      "ใช้ React Function Component เรียก API"
    ],
    "piece": "ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "reveal",
    "title": "เชื่อม Express API กับ React: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "React ไม่ควรเป็นแหล่งกฎธุรกิจเพียงแห่งเดียว",
      "Express route แปลง HTTP เป็นการเรียกใช้ service",
      "Service และ domain ต้องทดสอบได้โดยไม่เปิดเซิร์ฟเวอร์"
    ],
    "details": [
      "แนวคิด 1: React ไม่ควรเป็นแหล่งกฎธุรกิจเพียงแห่งเดียว",
      "แนวคิด 2: Express route แปลง HTTP เป็นการเรียกใช้ service",
      "แนวคิด 3: Service และ domain ต้องทดสอบได้โดยไม่เปิดเซิร์ฟเวอร์"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch09-express-react-flow.jsx",
    "points": [
      "Express route รับ GET /api/equipment และเรียก service",
      "Function Component เก็บ state ด้วย hook",
      "fetch รับข้อมูลภายนอก จึงต้องจัดการ loading/error และตรวจข้อมูลที่ Backend"
    ],
    "details": [
      "Express route รับ GET /api/equipment และเรียก service",
      "Function Component เก็บ state ด้วย hook",
      "fetch รับข้อมูลภายนอก จึงต้องจัดการ loading/error และตรวจข้อมูลที่ Backend"
    ],
    "code": "// Express route (ฝั่ง Backend)\napp.get(\"/api/equipment\", (req, res) => {\n  res.json(equipmentService.list());\n});\n\n// React Function Component (อยู่ในโปรเจกต์ React)\nexport function EquipmentList() {\n  const [items, setItems] = useState([]);\n  useEffect(() => {\n    fetch(\"/api/equipment\").then(r => r.json()).then(setItems);\n  }, []);\n  return <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>;\n}",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "วาด React → Express Route → Service → Repository",
      "ใช้ template ผู้สอนเปิด GET /api/equipment",
      "ทดสอบ success, loading และ error โดยไม่ใช้ Class Component"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 9 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 9",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "กฎห้ามยืมซ้ำควรอยู่ที่ใด?"
    ],
    "options": [
      "เฉพาะปุ่มใน React",
      "Service/domain ที่ API เรียกใช้",
      "เฉพาะ CSS"
    ],
    "answer": 1,
    "explain": "Backend service/domain ต้องรักษากฎแม้มีผู้เรียก API โดยตรง",
    "hint": "หน้าจอไม่ใช่ทางเข้าเดียวของระบบ",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 9,
    "week": "14",
    "clo": "CLO2, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=9",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 9/10",
    "subtitle": "ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ",
    "points": [
      "แผนภาพ request flow + ภาพหน้าจอ 3 สถานะ + ผลทดสอบ service",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ",
    "deliverable": "แผนภาพ request flow + ภาพหน้าจอ 3 สถานะ + ผลทดสอบ service",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "chapter",
    "title": "บทที่ 10\nประกอบ Jigsaw เป็น Mini Project",
    "subtitle": "รวมชิ้นส่วน ตรวจคุณภาพ แล้วออกแบบโครงงานของตนเอง",
    "points": [
      "ประกอบ 9 ชิ้นส่วนเป็นระบบที่อธิบายได้",
      "สาธิตตัวอย่างระบบยืม–คืนฉบับสมบูรณ์",
      "เสนอ mini project ของตนเองด้วยกฎและหลักฐานทดสอบ"
    ],
    "piece": "ชิ้นที่ 10 · ระบบสมบูรณ์และแนวคิดของตนเอง",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "reveal",
    "title": "ประกอบ Jigsaw เป็น Mini Project: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "รวมเฉพาะสิ่งที่ตอบโจทย์ ไม่เพิ่มคลาสเพื่อให้ดูซับซ้อน",
      "ตรวจ acceptance criteria ทีละข้อ",
      "โครงงานใหม่เปลี่ยนบริบทได้ แต่ต้องมีกฎ สถานะ และการทดสอบ"
    ],
    "details": [
      "แนวคิด 1: รวมเฉพาะสิ่งที่ตอบโจทย์ ไม่เพิ่มคลาสเพื่อให้ดูซับซ้อน",
      "แนวคิด 2: ตรวจ acceptance criteria ทีละข้อ",
      "แนวคิด 3: โครงงานใหม่เปลี่ยนบริบทได้ แต่ต้องมีกฎ สถานะ และการทดสอบ"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch10-mini-project-blueprint.js",
    "points": [
      "UI ส่งคำขอแต่ไม่ถือกฎทั้งหมด",
      "Service ประสาน policy, domain และ repository",
      "acceptance criteria เชื่อมโจทย์กับการสาธิตและ tests"
    ],
    "details": [
      "UI ส่งคำขอแต่ไม่ถือกฎทั้งหมด",
      "Service ประสาน policy, domain และ repository",
      "acceptance criteria เชื่อมโจทย์กับการสาธิตและ tests"
    ],
    "code": "// โครงสร้างตัวอย่าง Mini Equipment Loan\n// React Function Component\n//   ↓ HTTP request\n// Express Route\n//   ↓ validated command\n// LoanService → LoanPolicy\n//   ↓\n// Equipment + Loan (domain objects)\n//   ↓\n// EquipmentRepository (in-memory ในรายวิชา)\n\nexport const acceptanceCriteria = [\n  \"แสดงรายการอุปกรณ์\",\n  \"ยืมได้เมื่อพร้อมและจำนวนวันถูกต้อง\",\n  \"ปฏิเสธยืมซ้ำโดยไม่เปลี่ยนสถานะ\",\n  \"คืนได้หนึ่งครั้ง\",\n  \"ชุดทดสอบผ่านและอธิบายเหตุผลได้\"\n];",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "เปิด starter แล้วจับคู่ไฟล์กับ Jigsaw 9 ชิ้น",
      "รัน npm test และสาธิตเส้นทางยืมสำเร็จ/ยืมซ้ำ",
      "ใช้ Project Canvas เลือกบริบทใหม่ เช่น จองห้อง คลังสินค้า หรือคิวบริการ"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 10 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 10",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "Mini project ของตนเองควรเริ่มจากสิ่งใด?"
    ],
    "options": [
      "เลือก framework ให้มากที่สุด",
      "ระบุผู้ใช้ ปัญหา กฎสำคัญ และผลที่พิสูจน์ได้",
      "สร้างคลาสจำนวนมากก่อนรู้โจทย์"
    ],
    "answer": 1,
    "explain": "โจทย์และกฎที่ตรวจสอบได้เป็นฐานของการออกแบบ ไม่ใช่จำนวนเทคโนโลยี",
    "hint": "เริ่มจากปัญหาและหลักฐานความสำเร็จ",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 10,
    "week": "15–16",
    "clo": "CLO2–CLO6",
    "codeLink": "resource.html?version=js-es6-6&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-6&type=worksheet&chapter=10",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 10/10",
    "subtitle": "ชิ้นที่ 10 · ระบบสมบูรณ์และแนวคิดของตนเอง",
    "points": [
      "Project Canvas 1 หน้า + demo 3 นาที + tests + README + AI log",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 10 · ระบบสมบูรณ์และแนวคิดของตนเอง",
    "deliverable": "Project Canvas 1 หน้า + demo 3 นาที + tests + README + AI log",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  }
];
