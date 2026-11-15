const LESSONS = [
  {
    "week": 1,
    "title": "เริ่มต้น OOP ด้วย TypeScript",
    "subtitle": "บทที่ 1 JavaScript → TypeScript → JavaScript runtime",
    "clo": "CLO1, CLO6",
    "goal": "อธิบายคลาส วัตถุ และเส้นทางการรัน TypeScript ได้",
    "body": [
      "เชื่อมจากวิชาหลักการเขียนโปรแกรมที่ใช้ Python เบื้องต้น: Python และ TypeScript ต่างมี class/object แต่รายวิชานี้จะศึกษาการออกแบบ OOP และการทดสอบอย่างเป็นระบบ โดยไม่สอน Python OOP ซ้ำทั้งรายวิชา",
      "ใช้ระบบยืม–คืนอุปกรณ์เป็นกรณีศึกษาตลอดภาค คลาสกำหนดข้อมูลและพฤติกรรม ส่วนวัตถุแต่ละตัวมีสถานะของตนเอง React Function Components เป็นส่วนแสดงผล ไม่จำเป็นต้องเปลี่ยนเป็น Class Components",
      "TypeScript เพิ่มการตรวจชนิดให้ JavaScript ใช้ tsc ตรวจชนิดและแปลงไฟล์ .ts เป็น .js แล้วรันด้วย Node.js เริ่มจากชุดตัวอย่างที่ดาวน์โหลดบนหน้าหลัก ใช้ npm ci, npm test และ npm run demo หลังติดตั้ง Node.js และ npm ตาม README"
    ],
    "code": "const course: string = \"OOP Equipment Loan\";\nconsole.log(course);",
    "lab": "รันชุดตัวอย่าง บันทึกผลทดสอบ วาดเส้นทาง React → API → Service → Repository และแยกว่าส่วนใดทำงานในเบราว์เซอร์หรือเซิร์ฟเวอร์",
    "ai": "อธิบาย type error นี้เป็นคำใบ้ แล้วให้ฉันทดลองแก้และรันเอง",
    "evidence": "บันทึกคำสั่งที่ใช้รัน ผลลัพธ์ และสิ่งที่แก้ไข พร้อมระบุการใช้ AI",
    "question": "การตรวจชนิด TypeScript ช่วยรับรองข้อมูลจากผู้ใช้ขณะรันทั้งหมดหรือไม่?",
    "options": [
      "รับรองทั้งหมด",
      "ไม่ ต้องตรวจข้อมูลขณะรันด้วย",
      "ไม่จำเป็นต้องทดสอบ"
    ],
    "answer": 1,
    "explain": "ชนิดข้อมูลช่วยตอนพัฒนา แต่ข้อมูลจากเครือข่ายยังต้องตรวจขณะรัน",
    "exam": false
  },
  {
    "week": 2,
    "title": "ข้อมูลและเงื่อนไขการยืม",
    "subtitle": "บทที่ 2 number string boolean และ union type",
    "clo": "CLO1, CLO3",
    "goal": "กำหนดชนิดข้อมูลและตรวจค่าจำนวนวันยืมได้",
    "body": [
      "ใช้ number สำหรับจำนวน string สำหรับรหัส และ boolean สำหรับสถานะ JavaScript และ TypeScript คำนวณ 5/2 ได้ 2.5 ไม่ตัดทศนิยมแบบการหารจำนวนเต็มบางภาษา",
      "ชนิด number รวม NaN และ Infinity ต้องตรวจ Number.isInteger และขอบเขตเมื่อโจทย์ต้องการจำนวนเต็ม กำหนดสถานะด้วย union type เพื่อลดการสะกดผิด"
    ],
    "code": "type Status = \"available\" | \"borrowed\";\nconst status: Status = \"available\";\nconst days: number = 7;\nconsole.log(Number.isInteger(days) && days > 0);\nconsole.log(5 / 2); // 2.5",
    "lab": "กำหนดรหัสอุปกรณ์และจำนวนวัน ตรวจ -1, 0, 1, 7, 1.5 และ NaN พร้อมผลที่คาดหวัง",
    "ai": "เสนอข้อมูลขอบเขตสำหรับจำนวนวันยืม โดยยังไม่บอกผลที่คาดหวัง",
    "evidence": "ใบงาน 2 ส่วนที่ 1: ค่าป้อนเข้า ผลที่คาดหวัง และผลจริง",
    "question": "5 / 2 ใน JavaScript และ TypeScript ได้เท่าไร?",
    "options": [
      "2",
      "2.5",
      "3"
    ],
    "answer": 1,
    "explain": "การหาร number ให้ 2.5 หากต้องการจำนวนเต็มต้องกำหนดวิธีปัดเศษเอง",
    "exam": false
  },
  {
    "week": 3,
    "title": "เงื่อนไขและการวนซ้ำ",
    "subtitle": "บทที่ 2 ตรวจสิทธิ์และรายการอุปกรณ์",
    "clo": "CLO1, CLO3, CLO4",
    "goal": "เขียนเงื่อนไขอนุญาตยืมและตรวจจำนวนรอบได้",
    "body": [
      "ใช้ if ตรวจสถานะอุปกรณ์และสิทธิ์ผู้ยืมก่อนเปลี่ยนข้อมูล การตรวจที่หน้าจอช่วยผู้ใช้ แต่กฎสำคัญต้องตรวจซ้ำใน Backend",
      "ใช้ for หรือ for...of ประมวลผลหลายรายการ ระวังขอบเขตลูปและเงื่อนไขที่ไม่สิ้นสุด ทำนายผลก่อนรัน"
    ],
    "code": "const ids = [\"EQ01\", \"EQ02\", \"EQ03\"];\nfor (const id of ids) { console.log(id); }\nconst active = true;\nconst available = false;\nconsole.log(active && available); // false",
    "lab": "เขียนตารางเงื่อนไขสมาชิกมีสิทธิ์/ไม่มีสิทธิ์และอุปกรณ์ว่าง/ไม่ว่าง แล้วทดสอบทุกคู่",
    "ai": "ตรวจว่าตารางเงื่อนไขนี้ขาดกรณีใด พร้อมเหตุผลโดยไม่แก้โค้ดแทน",
    "evidence": "ใบงาน 2 ส่วนที่ 2 และแบบทดสอบย่อยครั้งที่ 1 ในชั้นเรียนโดยไม่ใช้ AI",
    "question": "for(let i=0; i<3; i++) ทำงานกี่รอบ?",
    "options": [
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explain": "ค่า i คือ 0, 1, 2 รวม 3 รอบ",
    "exam": false
  },
  {
    "week": 4,
    "title": "แถวลำดับและการค้นหา",
    "subtitle": "บทที่ 3 Array String และ object reference",
    "clo": "CLO1, CLO3, CLO4",
    "goal": "ค้นหาอุปกรณ์และแยกการเทียบข้อความกับวัตถุได้",
    "body": [
      "Array เริ่มดัชนีจาก 0 และเปลี่ยนขนาดได้ find คืน undefined เมื่อไม่พบ การอ่านดัชนีนอกขอบเขตให้ undefined จึงต้องตรวจผลก่อนใช้",
      "ใช้ === เปรียบเทียบ string primitive ตามค่า ส่วนวัตถุเปรียบเทียบตามการอ้างอิง วัตถุคนละตัวแม้ข้อมูลเหมือนกันก็ไม่เท่ากันด้วย ==="
    ],
    "code": "const items = [{ id: \"EQ01\", name: \"Camera\" }];\nconst item = items.find(x => x.id === \"EQ02\");\nconsole.log(item?.name ?? \"ไม่พบอุปกรณ์\");\nconsole.log(\"EQ01\" === String(\"EQ01\")); // true",
    "lab": "ค้นอุปกรณ์ด้วยรหัส ทดสอบรายการว่าง ไม่พบ และรหัสซ้ำ โดยกำหนดนโยบายปฏิเสธรหัสซ้ำ",
    "ai": "เสนอกรณีทดสอบสำหรับ find และอธิบายความแตกต่างของ undefined กับรายการว่าง",
    "evidence": "ใบงาน 3 พร้อมบันทึกข้อผิดพลาดและผลหลังแก้ไข",
    "question": "เมื่อ Array.find ไม่พบข้อมูล จะคืนค่าใด?",
    "options": [
      "null เสมอ",
      "undefined",
      "เกิดข้อยกเว้นเสมอ"
    ],
    "answer": 1,
    "explain": "ต้องตรวจ undefined ก่อนใช้คุณสมบัติของผลค้นหา",
    "exam": false
  },
  {
    "week": 5,
    "title": "ฟังก์ชันและการทดสอบ",
    "subtitle": "บทที่ 4 Pure function และ automated tests",
    "clo": "CLO1, CLO3, CLO4",
    "goal": "แยกกฎที่ทดสอบได้และเขียนผลคาดหวังได้",
    "body": [
      "กฎคำนวณที่ไม่ต้องเก็บสถานะเหมาะกับ pure function ส่วนคลาสเหมาะเมื่อข้อมูลและพฤติกรรมต้องรักษาเงื่อนไขร่วมกัน ไม่บังคับทุกฟังก์ชันให้อยู่ในคลาส",
      "เริ่มจากข้อกำหนดและ expected result แล้วเขียนการทดสอบด้วย node:test ในชุดตัวอย่าง ทดสอบกรณีปกติ ขอบเขต และผิดเงื่อนไข"
    ],
    "code": "function canBorrowDays(days: number, limit: number): boolean {\n  return Number.isInteger(days) && days > 0 && days <= limit;\n}\nconsole.log(canBorrowDays(7, 7)); // true\nconsole.log(canBorrowDays(8, 7)); // false",
    "lab": "เขียนฟังก์ชันตรวจจำนวนวันและ tests สำหรับ 0, 1, ค่าสูงสุด และเกินค่าสูงสุด",
    "ai": "เสนอข้อผิดพลาดที่ชุดทดสอบของฉันยังตรวจไม่พบ ให้ฉันเขียน test เพิ่มก่อนแก้",
    "evidence": "ใบงาน 4 พร้อมชุดทดสอบและผลการรัน",
    "question": "กฎคำนวณที่ไม่เก็บสถานะจำเป็นต้องใช้คลาสหรือไม่?",
    "options": [
      "จำเป็นเสมอ",
      "ไม่ ฟังก์ชันอาจเหมาะกว่า",
      "ไม่ต้องทดสอบ"
    ],
    "answer": 1,
    "explain": "เลือกโครงสร้างตามความรับผิดชอบและความจำเป็นในการเก็บสถานะ",
    "exam": false
  },
  {
    "week": 6,
    "title": "คลาสและวัตถุอุปกรณ์",
    "subtitle": "บทที่ 5 Class Constructor และ Instance",
    "clo": "CLO1, CLO2, CLO3",
    "goal": "ออกแบบคลาส Equipment และสร้างวัตถุที่มีสถานะแยกกันได้",
    "body": [
      "Equipment แทนอุปกรณ์ Loan แทนรายการยืม และ LoanService ประสานกฎการทำรายการ กำหนดความรับผิดชอบก่อนเขียนคลาส",
      "constructor กำหนดข้อมูลเริ่มต้น readonly ช่วยป้องกันการกำหนดค่าใหม่ขณะตรวจชนิด แต่ไม่ใช่การแช่แข็งข้อมูลทั้งหมดขณะรัน"
    ],
    "code": "class Equipment {\n  constructor(public readonly id: string, public readonly name: string) {\n    if (!id.trim() || !name.trim()) throw new Error(\"ข้อมูลไม่ครบ\");\n  }\n}\nconst camera = new Equipment(\"EQ01\", \"Camera\");\nconsole.log(camera.name);",
    "lab": "วาดคลาสและสร้างอุปกรณ์สองตัว อธิบายข้อมูล instance และความแตกต่างจาก static",
    "ai": "ทบทวนหน้าที่ของ Equipment, Loan และ LoanService โดยถามคำถามก่อนเสนอคลาสเพิ่ม",
    "evidence": "ใบงาน 5 ส่วนที่ 1 แผนภาพคลาสและโค้ด",
    "question": "วัตถุสองตัวจากคลาสเดียวกันจำเป็นต้องมีค่าเหมือนกันหรือไม่?",
    "options": [
      "จำเป็น",
      "ไม่จำเป็น",
      "เป็นวัตถุเดียวกันเสมอ"
    ],
    "answer": 1,
    "explain": "แต่ละ instance มีสถานะของตนเอง",
    "exam": false
  },
  {
    "week": 7,
    "title": "ห่อหุ้มและป้องกันการยืมซ้ำ",
    "subtitle": "บทที่ 5 Encapsulation และ Invariant",
    "clo": "CLO2, CLO3, CLO4, CLO6",
    "goal": "รักษาสถานะอุปกรณ์ผ่านเมธอดยืมและคืนได้",
    "body": [
      "ใช้ #borrowed เพื่อเก็บสถานะภายในแบบ private field ขณะรัน ไม่เปิดให้ภายนอกเปลี่ยนโดยตรง เมธอด borrow และ giveBack ต้องตรวจเงื่อนไขก่อนแก้สถานะ",
      "TypeScript private ตรวจการเข้าถึงหลัก ๆ ตอนตรวจชนิด ส่วน #field มีการบังคับที่ runtime ทั้งสองแนวทางยังต้องออกแบบกฎในเมธอดให้ถูกต้อง"
    ],
    "code": "class Equipment {\n  #borrowed = false;\n  borrow(): void {\n    if (this.#borrowed) throw new Error(\"อุปกรณ์ถูกยืมแล้ว\");\n    this.#borrowed = true;\n  }\n  giveBack(): void {\n    if (!this.#borrowed) throw new Error(\"ไม่มีรายการยืม\");\n    this.#borrowed = false;\n  }\n}",
    "lab": "ทดสอบยืมครั้งแรก ยืมซ้ำ คืนครั้งแรก และคืนซ้ำ ส่งขอบเขตและแบบจำลองโครงงาน",
    "ai": "ตรวจว่ามีเส้นทางใดเปลี่ยนสถานะโดยไม่ตรวจเงื่อนไข แล้วเสนอ test ที่พิสูจน์ได้",
    "evidence": "ใบงาน 5 ส่วนที่ 2 โครงงานจุดตรวจที่ 1 และทดสอบย่อยครั้งที่ 2 ไม่ใช้ AI",
    "question": "การใช้ private field เพียงอย่างเดียวรับรองกฎธุรกิจหรือไม่?",
    "options": [
      "รับรอง",
      "ไม่ ต้องตรวจในเมธอดด้วย",
      "ไม่ต้องมีเมธอด"
    ],
    "answer": 1,
    "explain": "การจำกัดการเข้าถึงไม่ทดแทนการตรวจเงื่อนไข",
    "exam": false
  },
  {
    "week": 8,
    "title": "สอบกลางภาค",
    "subtitle": "บทที่ 1–5 พื้นฐาน TypeScript คลาส การห่อหุ้ม และการทดสอบ",
    "clo": "CLO1–CLO4",
    "exam": true,
    "weight": 20
  },
  {
    "week": 9,
    "title": "ความสัมพันธ์ของวัตถุ",
    "subtitle": "บทที่ 6 Composition และ Inheritance",
    "clo": "CLO2, CLO3",
    "goal": "เลือก has-a หรือ is-a ให้ตรงความหมายได้",
    "body": [
      "Loan มี Equipment เป็นองค์ประกอบ จึงเป็น has-a ไม่ใช่ Loan สืบทอดจาก Equipment ใช้ composition ประกอบหน้าที่แทนลำดับชั้นที่ซับซ้อน",
      "ฝึก extends และ super ผ่านชนิดย่อยที่มีความหมายจริง เช่น Camera เป็น Equipment ชนิดหนึ่ง แล้วเปรียบเทียบกับการเก็บชนิดอุปกรณ์เป็นข้อมูล"
    ],
    "code": "class Equipment { constructor(public readonly id: string) {} }\nclass Camera extends Equipment {\n  constructor(id: string, public readonly lens: string) { super(id); }\n}\nclass Loan {\n  constructor(public readonly equipment: Equipment) {}\n}",
    "lab": "สร้าง Loan ที่อ้าง Equipment แล้วอภิปรายว่า Camera ควรเป็นคลาสย่อยหรือใช้ข้อมูลประเภทเมื่อพฤติกรรมไม่ต่าง",
    "ai": "เปรียบเทียบ composition กับ inheritance ของแบบจำลองนี้ พร้อมกรณีที่ไม่ควรสร้างคลาสย่อย",
    "evidence": "ใบงาน 6 แบบจำลอง โค้ด และผลทดสอบ",
    "question": "Loan มี Equipment สื่อถึงความสัมพันธ์ใด?",
    "options": [
      "is-a",
      "has-a",
      "ไม่มีความสัมพันธ์"
    ],
    "answer": 1,
    "explain": "รายการยืมประกอบด้วยหรืออ้างถึงอุปกรณ์ ไม่ใช่อุปกรณ์ชนิดย่อย",
    "exam": false
  },
  {
    "week": 10,
    "title": "พฤติกรรมหลายรูปแบบ",
    "subtitle": "บทที่ 7 Polymorphism และ Abstract Class",
    "clo": "CLO1, CLO2, CLO3",
    "goal": "สลับนโยบายระยะเวลายืมผ่านชนิดหลักได้",
    "body": [
      "กำหนดนโยบายระยะเวลายืมสำหรับนักศึกษาและบุคลากรเป็นกฎสมมติ ผู้เรียกใช้ maxDays โดยไม่ต้องรู้รายละเอียดของแต่ละนโยบาย",
      "abstract class กำหนดส่วนร่วมและเมธอดที่คลาสย่อยเติมได้ การ override เปลี่ยนพฤติกรรมให้ตรงชนิดย่อย ต้องยังรักษาข้อตกลงของชนิดหลัก"
    ],
    "code": "abstract class LoanPolicy { abstract maxDays(): number; }\nclass StudentPolicy extends LoanPolicy { maxDays() { return 7; } }\nclass StaffPolicy extends LoanPolicy { maxDays() { return 14; } }\nconst policy: LoanPolicy = new StaffPolicy();\nconsole.log(policy.maxDays()); // 14",
    "lab": "สร้างนโยบาย 7 และ 14 วัน แล้วทดสอบที่ขอบเขตของแต่ละแบบโดยใช้โค้ดผู้เรียกเดียวกัน",
    "ai": "อธิบายการเลือกเมธอดจากวัตถุจริงและเสนอกรณีทดสอบการแทนที่นโยบาย",
    "evidence": "ใบงาน 7 ส่วนที่ 1 พร้อมคำอธิบายผลลัพธ์",
    "question": "LoanPolicy ที่อ้าง new StaffPolicy() เรียก maxDays ได้เท่าไร?",
    "options": [
      "7",
      "14",
      "0"
    ],
    "answer": 1,
    "explain": "เรียก implementation ของ StaffPolicy ที่เป็นวัตถุจริง",
    "exam": false
  },
  {
    "week": 11,
    "title": "ข้อตกลงและการส่ง dependency",
    "subtitle": "บทที่ 7 Interface และ Dependency Injection",
    "clo": "CLO2, CLO3, CLO4",
    "goal": "แยกกฎการยืมออกจากผู้เรียกและส่งผ่าน constructor ได้",
    "body": [
      "interface กำหนดรูปแบบที่โค้ดพึ่งพา และถูกลบเมื่อแปลงเป็น JavaScript จึงใช้ interface เป็น runtime injection token โดยตรงไม่ได้",
      "เริ่มจากส่ง policy ผ่าน constructor ด้วยตนเองก่อนเรียน container ของ NestJS ทำให้ทดสอบกฎได้โดยไม่ต้องเปิดเว็บเซิร์ฟเวอร์"
    ],
    "code": "interface LoanPolicy { maxDays(): number; }\nclass StudentPolicy implements LoanPolicy { maxDays() { return 7; } }\nclass LoanService {\n  constructor(private readonly policy: LoanPolicy) {}\n  canBorrow(days: number) {\n    return Number.isInteger(days) && days > 0 && days <= this.policy.maxDays();\n  }\n}\nconsole.log(new LoanService(new StudentPolicy()).canBorrow(8)); // false",
    "lab": "สลับนโยบายผ่าน constructor และใช้ fake policy ทดสอบโดยไม่แก้ LoanService",
    "ai": "ตรวจว่าผู้เรียกผูกกับ implementation เกินจำเป็นหรือไม่ พร้อมเหตุผลและ test",
    "evidence": "ใบงาน 7 ส่วนที่ 2 และหลักฐานผลทดสอบ",
    "question": "TypeScript interface ใช้เป็น NestJS runtime token โดยตรงได้หรือไม่?",
    "options": [
      "ได้เสมอ",
      "ไม่ได้ เพราะถูกลบตอนแปลงโค้ด",
      "ไม่ต้องลงทะเบียน provider"
    ],
    "answer": 1,
    "explain": "ใช้ class หรือ explicit token เช่น Symbol/string และลงทะเบียน provider",
    "exam": false
  },
  {
    "week": 12,
    "title": "คอลเลกชันและ Repository",
    "subtitle": "บทที่ 8 Array Map และการแยกแหล่งข้อมูล",
    "clo": "CLO3, CLO4",
    "goal": "จัดเก็บและค้นอุปกรณ์ผ่าน repository ในหน่วยความจำได้",
    "body": [
      "Array เหมาะกับรายการ ส่วน Map เก็บคู่ key-value ที่ key ไม่ซ้ำ Map.set ด้วย key เดิมแทนค่า จึงต้องตรวจ has เมื่อข้อกำหนดห้ามรหัสซ้ำ",
      "Repository แยกการเข้าถึงข้อมูลออกจากกฎการยืม ใช้ข้อมูลในหน่วยความจำในรายวิชา ฐานข้อมูลเป็นภาพสถาปัตยกรรมและหัวข้อต่อยอด ข้อมูลในหน่วยความจำหายเมื่อเริ่มโปรแกรมใหม่"
    ],
    "code": "const items = new Map<string, { name: string }>();\nfunction add(id: string, name: string) {\n  if (items.has(id)) throw new Error(\"รหัสซ้ำ\");\n  items.set(id, { name });\n}\nadd(\"EQ01\", \"Camera\");\nconsole.log(items.get(\"EQ01\")?.name);",
    "lab": "สร้าง InMemoryEquipmentRepository ทดสอบรหัสซ้ำ ไม่พบ และการอ่านกลับ พร้อมทดสอบย่อยครั้งที่ 3",
    "ai": "เสนอกรณีที่การแทนค่าของ Map ทำให้ข้อมูลผิด และเขียนข้อกำหนดป้องกันก่อนแก้",
    "evidence": "ใบงาน 8 ส่วนที่ 1 และทดสอบย่อยครั้งที่ 3 ไม่ใช้ AI",
    "question": "Map.set ด้วย key เดิมมีผลอย่างไร?",
    "options": [
      "เพิ่ม key ซ้ำ",
      "แทนค่าของ key เดิม",
      "เกิดข้อยกเว้นเสมอ"
    ],
    "answer": 1,
    "explain": "ต้องตรวจรหัสซ้ำเองเมื่อไม่ต้องการให้แทนค่า",
    "exam": false
  },
  {
    "week": 13,
    "title": "ตรวจข้อมูลและปรับปรุงโค้ด",
    "subtitle": "บทที่ 8 Runtime validation Error และ Refactoring",
    "clo": "CLO3, CLO4, CLO5",
    "goal": "ตรวจข้อมูลภายนอกและพิสูจน์ผลแก้ด้วย tests ได้",
    "body": [
      "ข้อมูล API เริ่มเป็นข้อมูลที่ยังเชื่อถือไม่ได้ การ cast เป็นชนิดที่ต้องการไม่ใช่ validation เช่น Number(\"abc\") ให้ NaN ไม่ได้ throw เอง",
      "ตรวจชนิดและขอบเขตก่อนเรียก domain method แยกข้อผิดพลาดจากระบบกับข้อมูลผิดเงื่อนไข รันทดสอบเดิมหลัง refactoring และเพิ่ม regression test สำหรับข้อผิดพลาดที่พบ"
    ],
    "code": "function parseDays(input: unknown): number {\n  if (typeof input !== \"number\" || !Number.isInteger(input) || input <= 0) {\n    throw new Error(\"จำนวนวันต้องเป็นจำนวนเต็มบวก\");\n  }\n  return input;\n}\nconsole.log(parseDays(7));",
    "lab": "ทดสอบ string, null, NaN, ทศนิยม และจำนวนวันเกินสิทธิ์ พร้อมสาธิตความก้าวหน้าโครงงาน",
    "ai": "หา test gap ของ validation นี้ ให้เสนอ input และ expected result ก่อนแก้โค้ด",
    "evidence": "ใบงาน 8 ส่วนที่ 2 จุดตรวจโครงงานครั้งที่ 2 และผลก่อน–หลังแก้ไข",
    "question": "Number(\"abc\") ให้ผลใด?",
    "options": [
      "0",
      "NaN",
      "throw เสมอ"
    ],
    "answer": 1,
    "explain": "ต้องตรวจ NaN หรือเงื่อนไขจำนวนก่อนนำไปใช้",
    "exam": false
  },
  {
    "week": 14,
    "title": "เชื่อม OOP กับ API และ React",
    "subtitle": "บทที่ 9 NestJS Controller Service และ Function Components",
    "clo": "CLO2, CLO3, CLO4",
    "goal": "อธิบายเส้นทาง request และเชื่อมหน้าจอกับกฎการยืมได้",
    "body": [
      "React Function Component แสดงผลและส่งคำขอ API ส่วน NestJS Controller รับข้อมูลและเรียก Service ที่บังคับกฎการยืม Controller ไม่ควรเก็บกฎทั้งหมด หน้าจอใช้ชุดตัวอย่างที่ผู้สอนเตรียมเพื่อลดภาระการเรียน framework",
      "ตัวอย่างนี้เป็นส่วนหนึ่งของ NestJS project ต้องลงทะเบียน controller/provider ใน module และตรวจข้อมูล request ขณะรัน ใช้ repository ในหน่วยความจำ ไม่เปิดฐานข้อมูลจริงบนเว็บบทเรียน"
    ],
    "code": "// ส่วนประกอบใน NestJS project ที่ตั้งค่าแล้ว\nimport { Controller, Get, Injectable } from \"@nestjs/common\";\n@Injectable()\nexport class EquipmentService {\n  list() { return [{ id: \"EQ01\", name: \"Camera\" }]; }\n}\n@Controller(\"equipment\")\nexport class EquipmentController {\n  constructor(private readonly service: EquipmentService) {}\n  @Get() list() { return this.service.list(); }\n}",
    "lab": "ใช้ template สร้าง GET /equipment และ POST /loans เชื่อม React Function Component ทดสอบสำเร็จ ข้อมูลผิด และยืมซ้ำ โดยไม่ใช้ Class Component",
    "ai": "ตรวจการแบ่งหน้าที่ React, Controller, Service และ Repository พร้อมชี้จุดที่ต้อง validate ขณะรัน",
    "evidence": "ใบงาน 9 โค้ดหน้าจอ ผลทดสอบตรรกะ และรายการตรวจหน้าจอ",
    "question": "กฎห้ามยืมซ้ำควรตรวจที่ใด?",
    "options": [
      "เฉพาะปุ่ม React",
      "Backend service/domain แม้เรียก API โดยตรง",
      "เฉพาะ CSS"
    ],
    "answer": 1,
    "explain": "Backend ต้องบังคับกฎโดยไม่พึ่งการตรวจจากหน้าจอ",
    "exam": false
  },
  {
    "week": 15,
    "title": "รวมระบบและตรวจคุณภาพ",
    "subtitle": "บทที่ 10 Integration Tests และ Code Review",
    "clo": "CLO2, CLO3, CLO4, CLO5, CLO6",
    "goal": "ทดสอบเส้นทางยืมคืนและส่งมอบคู่มือทำซ้ำได้",
    "body": [
      "ทดสอบระดับ domain แยกจาก framework แล้วเพิ่ม integration/API tests และตรวจหน้าจอทั้งสถานะ loading สำเร็จ และผิดพลาด ใช้ข้อมูลจำลองเท่านั้น",
      "README ระบุเครื่องมือ คำสั่งติดตั้ง รัน และทดสอบ รวมถึงข้อมูลในหน่วยความจำที่ไม่คงอยู่ การยืมพร้อมกันและ transaction เป็นข้อจำกัดที่ต้องพิจารณาก่อนใช้ระบบจริง"
    ],
    "code": "// Acceptance checklist\n// 1. ยืมอุปกรณ์ว่างได้\n// 2. ยืมซ้ำถูกปฏิเสธโดยสถานะไม่เสีย\n// 3. คืนครั้งแรกได้ คืนซ้ำไม่ได้\n// 4. React แสดงข้อความจาก API อย่างเหมาะสม",
    "lab": "ให้เพื่อนทำตาม README ทดสอบทั้งหน้าจอและ API โดยตรง บันทึกปัญหาแล้วแก้พร้อมหลักฐาน",
    "ai": "รีวิว diff โดยจัดลำดับปัญหาความถูกต้องก่อนรูปแบบโค้ด ห้ามแก้เกณฑ์ทดสอบเพื่อให้ผ่าน",
    "evidence": "ใบงาน 10 ส่วนที่ 1 โปรแกรมก่อนส่งมอบ README และ AI log",
    "question": "เหตุใดต้องทดสอบเรียก API โดยตรงด้วย?",
    "options": [
      "เพื่อข้ามกฎทั้งหมด",
      "เพื่อยืนยัน Backend บังคับกฎโดยไม่พึ่งหน้าจอ",
      "เพื่อไม่ต้องทดสอบ React"
    ],
    "answer": 1,
    "explain": "ผู้ใช้ไม่ได้จำเป็นต้องส่งคำขอผ่านหน้าจอของเราเสมอ",
    "exam": false
  },
  {
    "week": 16,
    "title": "นำเสนอและส่งมอบ",
    "subtitle": "บทที่ 10 อธิบายการออกแบบและแก้โจทย์รายบุคคล",
    "clo": "CLO2, CLO3, CLO4, CLO5, CLO6",
    "goal": "อธิบายโค้ดและเปลี่ยนนโยบายยืมพร้อมทดสอบได้",
    "body": [
      "สาธิต React → API → Service → Repository โดยชี้ว่า OOP อยู่ส่วนใด และเหตุใดบางส่วนใช้ฟังก์ชัน อธิบายว่าจะเปลี่ยนจากข้อมูลในหน่วยความจำเป็นฐานข้อมูลผ่าน repository อย่างไร",
      "ส่งซอร์สโค้ด ชุดทดสอบ README และ AI log สมาชิกแต่ละคนอธิบายและแก้เงื่อนไขสั้นโดยไม่ใช้ AI คะแนนพิจารณาความถูกต้องและเหตุผล ไม่ใช่จำนวนคลาส"
    ],
    "code": "// โครงเรื่องนำเสนอ\n// ข้อกำหนด → แบบจำลอง → สาธิต\n// → ผลทดสอบ → ข้อจำกัด → สิ่งที่ตรวจแก้จาก AI",
    "lab": "สาธิตยืมคืนและเปลี่ยนระยะเวลาสูงสุดจาก 7 เป็น 5 วัน พร้อมแก้ tests และอธิบายรายบุคคล",
    "ai": "ถามคำถามซ้อมอธิบายระบบทีละข้อ โดยยังไม่เฉลยและให้ฉันชี้หลักฐานจากโค้ด",
    "evidence": "ใบงาน 10 ส่วนที่ 2 และโครงงานฉบับสมบูรณ์",
    "question": "ช่วงใดต้องทำโดยไม่ใช้ AI?",
    "options": [
      "ซ้อมนำเสนอ",
      "อธิบายและแก้โจทย์สดรายบุคคล",
      "ตรวจคำสะกดก่อนส่ง"
    ],
    "answer": 1,
    "explain": "ใช้ประเมินความเข้าใจของผู้เรียนโดยตรง",
    "exam": false
  },
  {
    "week": 17,
    "title": "สอบปลายภาค",
    "subtitle": "บทที่ 6–10 ความสัมพันธ์ Interface Collections การทดสอบ และเส้นทาง React/API โดยบูรณาการพื้นฐาน",
    "clo": "CLO2–CLO5",
    "exam": true,
    "weight": 30
  }
];
