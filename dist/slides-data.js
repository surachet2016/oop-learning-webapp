const CHAPTERS = [
  {
    "id": 1,
    "weeks": "1",
    "clo": "CLO1, CLO6",
    "title": "เริ่มจากความสำเร็จเล็ก ๆ",
    "subtitle": "Mini Equipment Catalog: ดูผลลัพธ์ก่อน แล้วค่อยแกะโครงสร้าง",
    "codeFile": "ch01-mini-equipment-catalog.js",
    "piece": "ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ"
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "chapter",
    "title": "บทที่ 1\nเริ่มจากความสำเร็จเล็ก ๆ",
    "subtitle": "Mini Equipment Catalog: ดูผลลัพธ์ก่อน แล้วค่อยแกะโครงสร้าง",
    "points": [
      "รันตัวอย่าง JavaScript ES6 และเห็นผลลัพธ์ทันที",
      "แยกข้อมูล ฟังก์ชัน และผลลัพธ์ออกจากกัน",
      "เชื่อมพื้นฐาน Python กับ JavaScript ที่คุ้นเคยได้"
    ],
    "piece": "ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ",
    "note": "เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "reveal",
    "title": "เริ่มจากความสำเร็จเล็ก ๆ: แนวคิดสำคัญ",
    "subtitle": "เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง",
    "points": [
      "โปรแกรมเล็กที่สมบูรณ์ช่วยให้เห็นภาพปลายทาง",
      "JavaScript ES6 รันด้วย Node.js โดยไม่ต้องแปลงภาษา",
      "เริ่มจากทำตามให้สำเร็จ แล้วเปลี่ยนข้อมูลหนึ่งจุดด้วยตนเอง"
    ],
    "details": [
      "แนวคิด 1: โปรแกรมเล็กที่สมบูรณ์ช่วยให้เห็นภาพปลายทาง",
      "แนวคิด 2: JavaScript ES6 รันด้วย Node.js โดยไม่ต้องแปลงภาษา",
      "แนวคิด 3: เริ่มจากทำตามให้สำเร็จ แล้วเปลี่ยนข้อมูลหนึ่งจุดด้วยตนเอง"
    ],
    "note": "ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "codewalk",
    "title": "อ่านโค้ดทีละส่วน",
    "subtitle": "ch01-mini-equipment-catalog.js",
    "points": [
      "items คือข้อมูลตัวอย่างแบบ array ของ object",
      "available เก็บสถานะด้วย boolean",
      "listAvailable รับข้อมูล คืนผลใหม่ และทดสอบแยกได้"
    ],
    "details": [
      "items คือข้อมูลตัวอย่างแบบ array ของ object",
      "available เก็บสถานะด้วย boolean",
      "listAvailable รับข้อมูล คืนผลใหม่ และทดสอบแยกได้"
    ],
    "code": "const items = [\n  { id: \"EQ01\", name: \"Camera\", available: true },\n  { id: \"EQ02\", name: \"Tripod\", available: false }\n];\n\nfunction listAvailable(data) {\n  return data.filter(item => item.available);\n}\n\nconsole.log(listAvailable(items));",
    "note": "อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "practice",
    "title": "ฝึกตามแบบมีขั้น",
    "subtitle": "ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก",
    "points": [
      "รันตัวอย่างและบันทึกผลลัพธ์",
      "เพิ่ม Microphone ที่พร้อมยืม แล้วทำนายผลก่อนรัน",
      "เปลี่ยนสถานะ Camera และอธิบายว่าผลเปลี่ยนเพราะอะไร"
    ],
    "hint": "หากติด ให้ย้อนดูโค้ดตัวอย่างบท 1 แล้วเปลี่ยนเพียงหนึ่งจุด",
    "note": "เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "quiz",
    "title": "ตรวจความเข้าใจบทที่ 1",
    "subtitle": "ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา",
    "points": [
      "ส่วนใดทำหน้าที่คัดเฉพาะอุปกรณ์พร้อมยืม?"
    ],
    "options": [
      "items",
      "listAvailable",
      "console.log เพียงอย่างเดียว"
    ],
    "answer": 1,
    "explain": "ฟังก์ชัน listAvailable รับรายการและคืนเฉพาะรายการที่ available เป็น true",
    "hint": "มองหาส่วนที่ใช้ filter",
    "note": "ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย"
  },
  {
    "chapter": 1,
    "week": "1",
    "clo": "CLO1, CLO6",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=1",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=1",
    "kind": "jigsaw",
    "title": "Jigsaw Checkpoint 1/10",
    "subtitle": "ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ",
    "points": [
      "ภาพผลการรัน + ข้อมูลที่เพิ่มเอง 1 รายการ + คำอธิบาย 3 บรรทัด",
      "นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า",
      "ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน"
    ],
    "piece": "ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ",
    "deliverable": "ภาพผลการรัน + ข้อมูลที่เพิ่มเอง 1 รายการ + คำอธิบาย 3 บรรทัด",
    "note": "ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร"
  },
  {
    "chapter": 2,
    "week": "2–3",
    "clo": "CLO1, CLO3, CLO4",
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=2",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=2",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=3",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=3",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=4",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=4",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=5",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=5",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=6",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=6",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=7",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=7",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=8",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=8",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=9",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=9",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
    "codeLink": "resource.html?version=js-es6-1&type=code&chapter=10",
    "worksheet": "resource.html?version=js-es6-1&type=worksheet&chapter=10",
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
