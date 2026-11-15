const SLIDES = [
  {
    "title": "ออกแบบความคิด\nให้กลายเป็นโปรแกรม",
    "subtitle": "การเขียนโปรแกรมเชิงวัตถุ · Object Oriented Programming",
    "week": 1,
    "clo": "CLO1–CLO6",
    "kind": "intro",
    "points": [
      "Python เบื้องต้น → TypeScript OOP → React / NestJS / React Native",
      "TypeScript • ระบบยืม–คืน • React + NestJS • AI",
      "07-034-206 | ชั้นปีที่ 2 | ภาคปลาย 2569"
    ],
    "note": "ชี้ให้เห็นว่า Python มี OOP แต่ใช้ในวิชาพื้นฐานเพียงสะพานเชื่อม class/object ส่วนรายวิชานี้ใช้ TypeScript ศึกษาการออกแบบอย่างเป็นระบบ ชุดภาพรวม 30 หน้าใช้เลือกประกอบการสอน ไม่ใช่แทนทุกชั่วโมง"
  },
  {
    "title": "วันนี้เราจะทำอะไรได้",
    "subtitle": "Learning outcomes",
    "week": 1,
    "clo": "CLO1–CLO6",
    "kind": "reveal",
    "points": [
      "อธิบายคลาส วัตถุ และ TypeScript",
      "ออกแบบกฎการยืม–คืนและเชื่อม API",
      "ทดสอบ ตรวจข้อเสนอ AI และอธิบายงาน"
    ],
    "details": [
      "CLO1: วิเคราะห์โค้ด TypeScript/JavaScript",
      "CLO2–3: ออกแบบ OOP เชื่อม React กับ NestJS",
      "CLO4–6: ทดสอบ สื่อสาร และใช้ AI อย่างรับผิดชอบ"
    ],
    "note": "ให้ผู้เรียนเลือกเป้าหมายที่ยังไม่มั่นใจ เป็นการสำรวจพื้นฐาน ไม่ให้คะแนน"
  },
  {
    "title": "ก่อนเรียน: คลาสกับวัตถุ",
    "subtitle": "Pre-test · ไม่คิดคะแนนรายวิชา",
    "week": 1,
    "clo": "CLO1",
    "kind": "quiz",
    "points": [
      "Equipment เป็นคลาส ส่วน camera เป็นวัตถุ ข้อใดถูกต้อง?"
    ],
    "options": [
      "คลาสกำหนดข้อมูลและพฤติกรรม วัตถุมีสถานะของตนเอง",
      "ทุกวัตถุต้องมีสถานะเหมือนกัน",
      "คลาสเป็นเพียงชื่อไฟล์"
    ],
    "answer": 0,
    "explain": "คลาสเป็นแบบกำหนดโครงสร้างและพฤติกรรม วัตถุแต่ละตัวสร้างจากคลาสและมีสถานะต่างกันได้",
    "hint": "คิดถึงแบบอุปกรณ์เทียบกับอุปกรณ์สองชิ้น",
    "note": "ให้ตอบก่อนอธิบาย รับคำตอบผิดเป็นจุดเริ่มการสนทนา"
  },
  {
    "title": "ระบบยืม–คืนอุปกรณ์ของคณะ",
    "subtitle": "กรณีศึกษาสมมติสำหรับการเรียน",
    "week": 6,
    "clo": "CLO2",
    "kind": "scenario",
    "points": [
      "อุปกรณ์มีรหัสและสถานะพร้อมยืม",
      "นโยบายกำหนดระยะเวลายืมตามประเภทผู้ใช้",
      "ป้องกันยืมซ้ำและคืนซ้ำ"
    ],
    "options": [
      "เขียนกฎทั้งหมดใน React ทันที",
      "ระบุข้อมูล กฎ และความรับผิดชอบก่อน"
    ],
    "answer": 1,
    "explain": "แยก Equipment, Loan, LoanService และ LoanPolicy เพื่อออกแบบและทดสอบกฎ",
    "hint": "ใครรับผิดชอบสถานะ และใครตรวจนโยบาย?",
    "note": "กรณีสมมติ ไม่ใช่ระบบจริงของมหาวิทยาลัย ให้กลุ่มเขียนข้อกำหนด 3 ข้อใน 3 นาที"
  },
  {
    "title": "TypeScript ทำงานอย่างไร",
    "subtitle": "Source → Type check → JavaScript runtime",
    "week": 1,
    "clo": "CLO1",
    "kind": "flow",
    "points": [
      "ไฟล์ .ts: ระบุชนิดข้อมูลและพฤติกรรม",
      "tsc: ตรวจชนิดและแปลงเป็น JavaScript",
      "Node.js: รัน JavaScript ของ Backend"
    ],
    "note": "Type annotations และ interface ไม่คงอยู่ขณะรัน ต้อง validate ข้อมูลภายนอกอีกครั้ง"
  },
  {
    "title": "การหารของ number",
    "subtitle": "JavaScript และ TypeScript",
    "week": 2,
    "clo": "CLO1, CLO3",
    "kind": "quiz",
    "points": [
      "5 / 2 ให้ผลใด?"
    ],
    "code": "console.log(5 / 2); // ?",
    "options": [
      "2",
      "2.5",
      "3"
    ],
    "answer": 1,
    "explain": "number หารได้ 2.5 ไม่ตัดทศนิยมอัตโนมัติ",
    "hint": "อย่านำกฎการหารจำนวนเต็มของภาษาอื่นมาใช้",
    "note": "ต่อยอด Number.isInteger และ NaN เมื่อโจทย์ต้องการจำนวนเต็ม"
  },
  {
    "title": "ลูปต้องมีขอบเขตชัดเจน",
    "subtitle": "Conditions & loops",
    "week": 3,
    "clo": "CLO1, CLO3, CLO4",
    "kind": "flow",
    "points": [
      "เริ่ม i = 0",
      "ตรวจ i < 3 ก่อนทำงาน",
      "ทำงานที่ i = 0, 1, 2 แล้วหยุดเมื่อ i = 3"
    ],
    "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    "note": "ให้ทำนายจำนวนรอบก่อนกดขั้นต่อไป ถามผลเมื่อเปลี่ยน < เป็น <="
  },
  {
    "title": "เทียบข้อความและค้นอุปกรณ์",
    "subtitle": "Array & String",
    "week": 4,
    "clo": "CLO1, CLO3, CLO4",
    "kind": "reveal",
    "points": [
      "Array เริ่มที่ 0 และขยายขนาดได้",
      "string primitive ใช้ === เทียบค่า",
      "find ไม่พบคืน undefined"
    ],
    "details": [
      "const ids = [\"EQ01\", \"EQ02\"];",
      "\"EQ01\" === String(\"EQ01\") ให้ true",
      "วัตถุสองตัวที่ข้อมูลเท่ากัน อาจไม่เท่ากันด้วย ==="
    ],
    "note": "แยก primitive กับ reference และทดลองค้นไม่พบก่อนอ่านคุณสมบัติ"
  },
  {
    "title": "ฟังก์ชันที่ทดสอบได้",
    "subtitle": "Methods & testable design",
    "week": 5,
    "clo": "CLO1, CLO3, CLO4",
    "kind": "reveal",
    "points": [
      "กำหนด input และ output",
      "แยกการคำนวณจากการรับข้อมูล",
      "กำหนดค่าที่คาดหวังก่อนรัน"
    ],
    "details": [
      "canBorrowDays(days, limit) คืน boolean",
      "แยกกฎออกจาก UI และการรับ request",
      "days=7, limit=7 → true; days=8 → false"
    ],
    "code": "function canBorrowDays(days: number, limit: number): boolean {\n  return Number.isInteger(days) && days > 0 && days <= limit;\n}\nconsole.log(canBorrowDays(7, 7)); // true\nconsole.log(canBorrowDays(8, 7)); // false",
    "note": "ไม่จำเป็นต้องใช้คลาสกับกฎที่ไม่เก็บสถานะ"
  },
  {
    "title": "คลาสกำหนดขอบเขตความรับผิดชอบ",
    "subtitle": "Class, constructor & encapsulation",
    "week": 6,
    "clo": "CLO1, CLO2, CLO3",
    "kind": "reveal",
    "points": [
      "ข้อมูล: id, สถานะการยืม",
      "พฤติกรรม: borrow(), giveBack()",
      "เงื่อนไข: ห้ามยืมซ้ำและคืนซ้ำ"
    ],
    "details": [
      "แต่ละ instance มีสถานะของตนเอง",
      "constructor ตรวจข้อมูลเริ่มต้น",
      "#field จำกัดการเข้าถึงขณะรัน"
    ],
    "note": "แยก Equipment ออกจากหน้าจอและการเก็บข้อมูล"
  },
  {
    "title": "คลาสเดียว สร้างหลายวัตถุ",
    "subtitle": "Object explorer · แบบจำลองเชิงแนวคิด",
    "week": 6,
    "clo": "CLO1, CLO3",
    "kind": "three",
    "points": [
      "แต่ละกล่องแทนวัตถุ ไม่ใช่ผังหน่วยความจำจริง",
      "เลือกวัตถุเพื่อดูข้อมูลเฉพาะตัว"
    ],
    "model": "instances",
    "note": "หมุนแบบจำลองเพื่อเปรียบเทียบวัตถุจากคลาสเดียวกัน ย้ำว่าตำแหน่งและขนาดเป็นภาพสื่อ ไม่ใช่ตำแหน่ง RAM"
  },
  {
    "title": "เปลี่ยนวัตถุหนึ่ง ไม่เปลี่ยนอีกวัตถุโดยอัตโนมัติ",
    "subtitle": "Instance state",
    "week": 6,
    "clo": "CLO1, CLO3",
    "kind": "three",
    "points": [
      "cameraA และ cameraB มีสถานะของตนเอง",
      "ถ้าสองตัวแปรอ้างวัตถุเดียวกันจะเห็นสถานะร่วมกัน"
    ],
    "model": "state",
    "note": "แบบจำลองนี้ใช้ stock แทนจำนวนคงเหลือของชุดอุปกรณ์ เลือก cameraA แล้วเพิ่มจำนวนเพื่อเปรียบเทียบ"
  },
  {
    "title": "Encapsulation ปกป้องเงื่อนไขของข้อมูล",
    "subtitle": "State + behavior + rules",
    "week": 7,
    "clo": "CLO2, CLO3",
    "kind": "three",
    "points": [
      "แยกข้อมูล เมธอด และกฎ",
      "ทุกเส้นทางที่แก้จำนวนคงเหลือต้องตรวจเงื่อนไข"
    ],
    "model": "encapsulation",
    "note": "ภาพเชิงแนวคิด ไม่ใช่ผัง runtime; เชื่อมกับ #borrowed ในชุดโค้ดที่นับรายชิ้น"
  },
  {
    "title": "Loan ประกอบด้วย Equipment",
    "subtitle": "Composition · has-a",
    "week": 9,
    "clo": "CLO2, CLO3",
    "kind": "three",
    "points": [
      "รายการยืมอ้างอุปกรณ์",
      "Loan ไม่ใช่อุปกรณ์ชนิดย่อย"
    ],
    "model": "composition",
    "note": "อภิปราย has-a เทียบกับ is-a และอายุการใช้งานของวัตถุ"
  },
  {
    "title": "ผู้เรียกใช้ข้อตกลงเดียวกันได้",
    "subtitle": "Polymorphism & interface",
    "week": 10,
    "clo": "CLO1, CLO2, CLO3",
    "kind": "three",
    "points": [
      "LoanPolicy กำหนด maxDays()",
      "StudentPolicy และ StaffPolicy ให้ 7 และ 14 วัน"
    ],
    "model": "polymorphism",
    "note": "นโยบายสมมติ ไม่ใช่ระเบียบยืมจริงของมหาวิทยาลัย"
  },
  {
    "title": "ส่งนโยบายผ่าน constructor",
    "subtitle": "TypeScript · Interface และ DI",
    "week": 11,
    "clo": "CLO2, CLO3, CLO4",
    "kind": "reveal",
    "points": [
      "ผู้เรียกพึ่งพา LoanPolicy",
      "สลับ policy เพื่อทดสอบ",
      "interface ไม่มีตัวตนที่ runtime"
    ],
    "details": [
      "interface LoanPolicy { maxDays(): number; }",
      "StudentPolicy ให้ 7; StaffPolicy ให้ 14",
      "NestJS ใช้ class/token สำหรับ dependency ที่ runtime"
    ],
    "code": "const service = new LoanService(new StudentPolicy());\nconsole.log(service.canBorrow(8)); // false",
    "note": "snippet อ้างคลาสจากบทเรียนสัปดาห์ 11 ไม่ใช่ไฟล์สมบูรณ์"
  },
  {
    "title": "เลือก Collection ตามการใช้งาน",
    "subtitle": "Array & Map",
    "week": 12,
    "clo": "CLO3, CLO4",
    "kind": "scenario",
    "points": [
      "ค้นอุปกรณ์ด้วยรหัสไม่ซ้ำ ควรเริ่มจากโครงสร้างใด?"
    ],
    "options": [
      "Map<string, Equipment>",
      "Array ที่รับรหัสซ้ำโดยไม่ตรวจ"
    ],
    "answer": 0,
    "explain": "Map เหมาะกับ key แต่ set key เดิมจะแทนค่า ต้องตรวจ has เพื่อปฏิเสธรหัสซ้ำ",
    "hint": "โจทย์ต้องการค้นด้วย key",
    "note": "Repository แยกที่เก็บข้อมูล; รุ่นเรียนใช้หน่วยความจำ"
  },
  {
    "title": "ตรวจข้อมูลที่ runtime",
    "subtitle": "Exception handling",
    "week": 13,
    "clo": "CLO3, CLO4",
    "kind": "reveal",
    "points": [
      "request อาจผิดชนิด",
      "Number(\"abc\") ให้ NaN",
      "ตรวจข้อมูลก่อนเปลี่ยนสถานะ"
    ],
    "details": [
      "type assertion ไม่ใช่ validation",
      "ตรวจชนิด จำนวนเต็ม และขอบเขต",
      "แจ้งข้อผิดพลาดโดยไม่เปิดเผยข้อมูลลับ"
    ],
    "code": "// ส่วนประกอบใน NestJS project ที่ตั้งค่าแล้ว\nimport { Controller, Get, Injectable } from \"@nestjs/common\";\n@Injectable()\nexport class EquipmentService {\n  list() { return [{ id: \"EQ01\", name: \"Camera\" }]; }\n}\n@Controller(\"equipment\")\nexport class EquipmentController {\n  constructor(private readonly service: EquipmentService) {}\n  @Get() list() { return this.service.list(); }\n}",
    "note": "เพิ่ม tests ของ null string NaN และจำนวนติดลบ"
  },
  {
    "title": "AI ให้ข้อเสนอ เราต้องหาหลักฐาน",
    "subtitle": "AI-assisted learning",
    "week": 13,
    "clo": "CLO4, CLO6",
    "kind": "flow",
    "points": [
      "เขียนวิธีคิดและผลคาดหวังด้วยตนเอง",
      "ขอคำใบ้หรือกรณีทดสอบจาก AI",
      "รัน ทดสอบ แก้ไข และบันทึกสิ่งที่ใช้"
    ],
    "note": "เปิดผู้ช่วยสาธิตเพื่อย้ำว่าไม่ได้เรียกโมเดลจริง ห้ามใช้ AI ในแบบทดสอบย่อยและสอบจริง"
  },
  {
    "title": "React เรียก API ที่ใช้ OOP",
    "subtitle": "React → NestJS → Repository",
    "week": 14,
    "clo": "CLO2, CLO3, CLO4",
    "kind": "flow",
    "points": [
      "Function Component ส่ง request",
      "Controller → Service ตรวจนโยบายและสถานะ",
      "Repository อ่าน/เขียนข้อมูล แล้วส่งผลให้ UI"
    ],
    "note": "ใช้ template บนเครื่องเรียน ฐานข้อมูลเป็นส่วนต่อยอด; เว็บสไลด์ไม่เปิด Backend จริง"
  },
  {
    "title": "ทดลองนโยบายระยะเวลายืม",
    "subtitle": "Loan policy simulation",
    "week": 11,
    "clo": "CLO3, CLO4",
    "kind": "loanpolicy",
    "points": [
      "เลือกนักศึกษาหรือบุคลากร",
      "ทดลองจำนวนวันที่ขอบเขตและเกินสิทธิ์"
    ],
    "note": "กฎสมมติ นักศึกษา 7 วัน บุคลากร 14 วัน ไม่ใช่ระเบียบมหาวิทยาลัย"
  },
  {
    "title": "ป้องกันจำนวนอุปกรณ์ติดลบ",
    "subtitle": "Invariant simulation",
    "week": 7,
    "clo": "CLO3, CLO4",
    "kind": "stock",
    "points": [
      "เริ่มอุปกรณ์พร้อมยืม 5 ชิ้น",
      "จำนวนขอยืมต้องเป็นจำนวนเต็มบวกไม่เกินคงเหลือ"
    ],
    "note": "แบบจำลองนับจำนวนเพื่อฝึก invariant; โครงงานหลักติดตามอุปกรณ์รายรหัส"
  },
  {
    "title": "จับคู่แนวคิดกับความหมาย",
    "subtitle": "Matching activity · ลากหรือใช้เมนูเลือก",
    "week": 9,
    "clo": "CLO1, CLO2",
    "kind": "match",
    "points": [
      "จับคู่ 3 แนวคิดให้ถูกต้อง",
      "อภิปรายเหตุผลก่อนตรวจคำตอบ"
    ],
    "pairs": [
      [
        "Encapsulation",
        "ควบคุมการเข้าถึงและรักษาเงื่อนไขข้อมูล"
      ],
      [
        "Composition",
        "วัตถุหนึ่งประกอบด้วยวัตถุอื่น"
      ],
      [
        "Polymorphism",
        "เรียกผ่านชนิดหลักแต่ใช้พฤติกรรมของวัตถุจริง"
      ]
    ],
    "note": "ลากป้ายไปยังช่อง หรือใช้ dropdown ด้วยคีย์บอร์ด กิจกรรมนี้ไม่เก็บรายชื่อนักศึกษา"
  },
  {
    "title": "ออกแบบกรณีทดสอบก่อนแก้โค้ด",
    "subtitle": "Test cases & evidence",
    "week": 5,
    "clo": "CLO4",
    "kind": "testcases",
    "points": [
      "ข้อกำหนด: ยืมได้ 1–7 วัน",
      "ทดสอบปกติ ขอบเขต และเกินสิทธิ์"
    ],
    "note": "ผลจำลองสำหรับฝึกคาดการณ์ ไม่ใช่การรันชุดทดสอบ TypeScript จริง"
  },
  {
    "title": "ตรวจโครงงานก่อนส่งมอบ",
    "subtitle": "Code review & team discussion",
    "week": 15,
    "clo": "CLO2–CLO6",
    "kind": "checklist",
    "points": [
      "คลาสมีหน้าที่ชัดเจนและสอดคล้องกับโจทย์",
      "ทดสอบข้อมูลปกติและผิดเงื่อนไขแล้ว",
      "ผู้อื่นทำตาม README แล้วรันได้",
      "แยกหลักฐานรายบุคคลและเปิดเผย AI"
    ],
    "note": "ใช้กลุ่มละ 5 นาทีตรวจงานเพื่อน รายการนี้เป็นการประเมินเพื่อพัฒนา ไม่ใช่คะแนนโครงงานอัตโนมัติ"
  },
  {
    "title": "ภารกิจ 1: ตรวจความเข้าใจการห่อหุ้ม",
    "subtitle": "Knowledge check",
    "week": 7,
    "clo": "CLO1, CLO3",
    "kind": "quiz",
    "points": [
      "ใช้ private แล้วไม่ต้องตรวจข้อมูลในเมธอด จริงหรือไม่?"
    ],
    "options": [
      "จริง",
      "ไม่จริง"
    ],
    "answer": 1,
    "explain": "เมธอดในคลาสยังแก้ข้อมูลได้ ต้องรักษา invariant ทุกจุดที่เปลี่ยนสถานะ",
    "hint": "private ป้องกันใคร และเมธอดในคลาสยังทำอะไรได้?",
    "note": "ให้ยกตัวอย่าง setter ที่ยอมรับจำนวนติดลบ"
  },
  {
    "title": "ภารกิจ 2: Map กับข้อมูลซ้ำ",
    "subtitle": "Knowledge check",
    "week": 12,
    "clo": "CLO3, CLO4",
    "kind": "quiz",
    "points": [
      "set(\"EQ01\", \"Camera\") แล้ว set(\"EQ01\", \"Mic\") จะ get ได้ค่าใด?"
    ],
    "options": [
      "Camera",
      "Mic",
      "เกิดข้อยกเว้นเสมอ"
    ],
    "answer": 1,
    "explain": "key เดิมผูกกับค่าใหม่ Mic ต้องตรวจ has หากห้ามแทนค่า",
    "hint": "Map มี key ไม่ซ้ำ",
    "note": "ถามต่อว่าจะป้องกันการทับค่าโดยไม่ตั้งใจอย่างไร"
  },
  {
    "title": "ภารกิจ 3: หลักฐานเหนือคำตอบ AI",
    "subtitle": "Knowledge check",
    "week": 13,
    "clo": "CLO4, CLO6",
    "kind": "quiz",
    "points": [
      "AI บอกว่าโค้ดถูกต้องแล้ว ขั้นต่อไปที่เหมาะสมคืออะไร?"
    ],
    "options": [
      "ส่งงานทันที",
      "ทดสอบตามข้อกำหนด อธิบายผล และบันทึก AI",
      "ลบข้อผิดพลาดออกจากรายงาน"
    ],
    "answer": 1,
    "explain": "คำตอบ AI ไม่ใช่หลักฐานความถูกต้อง ต้องใช้การทดสอบและความเข้าใจของผู้พัฒนา",
    "hint": "หลักฐานใดทำซ้ำโดยผู้อื่นได้?",
    "note": "คะแนนเกมเป็นการฝึก ไม่มีผลต่อคะแนนรายวิชา"
  },
  {
    "title": "แผนที่แนวคิดของรายวิชา",
    "subtitle": "Concept map",
    "week": 16,
    "clo": "CLO1–CLO6",
    "kind": "map",
    "points": [
      "โจทย์ยืม–คืน → คลาสและความสัมพันธ์",
      "TypeScript + NestJS API + React Function Components",
      "ทดสอบ + สื่อสาร + จริยธรรม → ผลงานตรวจสอบได้"
    ],
    "note": "ให้ผู้เรียนเลือกโหนดหนึ่งแล้วอธิบายความเชื่อมโยงกับโครงงานของตน"
  },
  {
    "title": "Exit ticket: วันนี้คุณเปลี่ยนวิธีคิดอย่างไร",
    "subtitle": "Reflection & next step",
    "week": 16,
    "clo": "CLO5, CLO6",
    "kind": "exit",
    "points": [
      "แนวคิดที่เข้าใจชัดขึ้นหนึ่งเรื่อง",
      "ข้อเสนอ AI ที่ตรวจสอบหรือแก้ไข",
      "สิ่งที่จะปรับปรุงในโครงงานครั้งถัดไป"
    ],
    "note": "บันทึกอยู่ใน browser ของผู้เรียนเท่านั้น ให้ส่งออกแล้วส่งผ่านช่องทางที่ผู้สอนประกาศ ไม่มีระบบส่งงานในหน้านี้"
  }
];
