import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const examplesDir = join(dist, 'examples');
const worksheetsDir = join(dist, 'worksheets');
rmSync(examplesDir, { recursive: true, force: true });
rmSync(worksheetsDir, { recursive: true, force: true });
mkdirSync(examplesDir, { recursive: true });
mkdirSync(worksheetsDir, { recursive: true });

const chapters = [
  {
    id: 1, weeks: '1', clo: 'CLO1, CLO6', title: 'เริ่มจากความสำเร็จเล็ก ๆ', subtitle: 'Mini Equipment Catalog: ดูผลลัพธ์ก่อน แล้วค่อยแกะโครงสร้าง',
    outcomes: ['รันตัวอย่าง JavaScript ES6 และเห็นผลลัพธ์ทันที', 'แยกข้อมูล ฟังก์ชัน และผลลัพธ์ออกจากกัน', 'เชื่อมพื้นฐาน Python กับ JavaScript ที่คุ้นเคยได้'],
    concepts: ['โปรแกรมเล็กที่สมบูรณ์ช่วยให้เห็นภาพปลายทาง', 'JavaScript ES6 รันด้วย Node.js โดยไม่ต้องแปลงภาษา', 'เริ่มจากทำตามให้สำเร็จ แล้วเปลี่ยนข้อมูลหนึ่งจุดด้วยตนเอง'],
    codeFile: 'ch01-mini-equipment-catalog.js',
    code: `const items = [
  { id: "EQ01", name: "Camera", available: true },
  { id: "EQ02", name: "Tripod", available: false }
];

function listAvailable(data) {
  return data.filter(item => item.available);
}

console.log(listAvailable(items));`,
    walkthrough: ['items คือข้อมูลตัวอย่างแบบ array ของ object', 'available เก็บสถานะด้วย boolean', 'listAvailable รับข้อมูล คืนผลใหม่ และทดสอบแยกได้'],
    practice: ['รันตัวอย่างและบันทึกผลลัพธ์', 'เพิ่ม Microphone ที่พร้อมยืม แล้วทำนายผลก่อนรัน', 'เปลี่ยนสถานะ Camera และอธิบายว่าผลเปลี่ยนเพราะอะไร'],
    quiz: ['ส่วนใดทำหน้าที่คัดเฉพาะอุปกรณ์พร้อมยืม?', ['items', 'listAvailable', 'console.log เพียงอย่างเดียว'], 1, 'ฟังก์ชัน listAvailable รับรายการและคืนเฉพาะรายการที่ available เป็น true', 'มองหาส่วนที่ใช้ filter'],
    piece: 'ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ', deliverable: 'ภาพผลการรัน + ข้อมูลที่เพิ่มเอง 1 รายการ + คำอธิบาย 3 บรรทัด'
  },
  {
    id: 2, weeks: '2–3', clo: 'CLO1, CLO3, CLO4', title: 'ข้อมูลและกฎเงื่อนไข', subtitle: 'สร้างรหัส สถานะ จำนวนวัน และเงื่อนไขที่ตรวจสอบได้',
    outcomes: ['เลือกชนิดข้อมูลได้เหมาะกับโจทย์', 'เขียนกฎอนุญาตยืมโดยไม่เปลี่ยนสถานะก่อนตรวจ', 'สร้างตารางกรณีปกติและกรณีขอบเขต'],
    concepts: ['number ต้องตรวจจำนวนเต็มและขอบเขต', 'ค่าข้อความต้องตรวจเทียบกับรายการสถานะที่อนุญาต', 'กฎสำคัญต้องตรวจที่ Backend ไม่ใช่เฉพาะหน้าจอ'],
    codeFile: 'ch02-loan-rules.js',
    code: `const VALID_STATUSES = ["available", "borrowed"];

function canBorrow(status, days) {
  if (!VALID_STATUSES.includes(status)) return false;
  const validDays = Number.isInteger(days) && days >= 1 && days <= 7;
  return status === "available" && validDays;
}

console.log(canBorrow("available", 7)); // true
console.log(canBorrow("borrowed", 7));  // false
console.log(canBorrow("available", 8)); // false`,
    walkthrough: ['VALID_STATUSES ระบุสถานะที่ระบบยอมรับ', 'validDays รวมเงื่อนไขจำนวนเต็มและช่วง 1–7', 'return รวมกฎสถานะและจำนวนวันโดยยังไม่แก้ข้อมูล'],
    practice: ['ทำตาราง status 2 ค่า × days 0, 1, 7, 8', 'ทำนาย true/false ก่อนรัน', 'เพิ่มกรณี NaN และ 1.5 พร้อมเหตุผล'],
    quiz: ['เหตุใดจึงตรวจ Number.isInteger(days)?', ['เพื่อเปลี่ยน string เป็น number', 'เพื่อปฏิเสธทศนิยมเมื่อโจทย์ต้องการจำนวนวันเต็ม', 'เพื่อทำให้ทุกค่ากลายเป็น 7'], 1, 'JavaScript ใช้ number ทั้งจำนวนเต็มและทศนิยม จึงต้องตรวจตามกฎธุรกิจ', 'ชนิด number ไม่ได้หมายถึงจำนวนเต็มเท่านั้น'],
    piece: 'ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม', deliverable: 'ตารางทดสอบอย่างน้อย 6 กรณี พร้อม expected result'
  },
  {
    id: 3, weeks: '4–5', clo: 'CLO1, CLO3, CLO4', title: 'ฟังก์ชันบริสุทธิ์และการทดสอบ', subtitle: 'เปลี่ยนข้อกำหนดให้เป็นตัวอย่างที่พิสูจน์ได้',
    outcomes: ['แยกฟังก์ชันที่ไม่มีผลข้างเคียง', 'เขียน automated test ด้วย node:test', 'ใช้ผลทดสอบตรวจคำตอบจาก AI'],
    concepts: ['เริ่มจาก input และ expected result', 'pure function ให้ผลเหมือนเดิมเมื่อ input เหมือนเดิม', 'แก้โค้ดแล้วต้องรัน regression tests ซ้ำ'],
    codeFile: 'ch03-pure-function.test.js',
    code: `import test from "node:test";
import assert from "node:assert/strict";

export function maxLoanDays(role) {
  return role === "student" ? 7 : 14;
}

test("นักศึกษายืมได้ไม่เกิน 7 วัน", () => {
  assert.equal(maxLoanDays("student"), 7);
});

test("บุคลากรยืมได้ไม่เกิน 14 วัน", () => {
  assert.equal(maxLoanDays("staff"), 14);
});`,
    walkthrough: ['ฟังก์ชันแยกกฎออกจาก UI และฐานข้อมูล', 'test ตั้งชื่อเป็นพฤติกรรมที่อ่านเข้าใจได้', 'assert เปรียบเทียบผลจริงกับผลที่คาดหวัง'],
    practice: ['รัน tests ให้ผ่านก่อนแก้', 'เพิ่ม role guest ที่ยืมได้ 3 วันโดยเขียน test ก่อน', 'ให้ AI เสนอกรณีที่ขาด แล้วเลือกเพิ่มเฉพาะกรณีที่มีเหตุผล'],
    quiz: ['ลำดับใดเหมาะกับการพัฒนาแบบ test-first?', ['เขียน implementation → ลบ test', 'กำหนด expected result → เขียน test → เขียนโค้ดให้ผ่าน', 'ถาม AI แล้วไม่ต้องรัน'], 1, 'เริ่มจากผลที่คาดหวัง ทำให้เกณฑ์ความสำเร็จชัดก่อนแก้โค้ด', 'เริ่มจากสิ่งที่โปรแกรมควรทำ'],
    piece: 'ชิ้นที่ 3 · ชุดทดสอบกฎธุรกิจ', deliverable: 'ไฟล์ test ที่ผ่านอย่างน้อย 3 กรณี + ภาพผล npm test'
  },
  {
    id: 4, weeks: '6', clo: 'CLO1, CLO2, CLO3', title: 'คลาสและวัตถุ', subtitle: 'ให้ Equipment ดูแลข้อมูลและพฤติกรรมของตนเอง',
    outcomes: ['อธิบาย class, instance และ constructor', 'วางข้อมูลกับพฤติกรรมที่เกี่ยวข้องไว้ด้วยกัน', 'สร้างวัตถุสองตัวที่มีสถานะแยกกัน'],
    concepts: ['class เป็นแบบกำหนดโครงสร้างและพฤติกรรม', 'instance แต่ละตัวมีสถานะของตนเอง', 'constructor รับข้อมูลเริ่มต้นที่จำเป็น'],
    codeFile: 'ch04-equipment-class.js',
    code: `export class Equipment {
  #borrowed = false;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  isAvailable() {
    return !this.#borrowed;
  }
}

const camera = new Equipment("EQ01", "Camera");
const tripod = new Equipment("EQ02", "Tripod");
console.log(camera.isAvailable(), tripod.isAvailable());`,
    walkthrough: ['constructor รับ id และ name ตอนสร้างวัตถุ', 'this เก็บข้อมูลของ instance แต่ละตัว', '#borrowed ซ่อนสถานะภายในและเปิดอ่านผ่านเมธอด'],
    practice: ['วาดกล่อง class ก่อนเขียนโค้ด', 'สร้างอุปกรณ์ 2 ชิ้นและพิมพ์สถานะ', 'อธิบายความต่างระหว่าง class กับ camera instance'],
    quiz: ['camera ในตัวอย่างคืออะไร?', ['คลาส', 'อินสแตนซ์ของ Equipment', 'ชนิดข้อมูล boolean'], 1, 'camera เป็นวัตถุที่สร้างจากคลาส Equipment และมีสถานะของตนเอง', 'ดูคำสั่ง new Equipment'],
    piece: 'ชิ้นที่ 4 · Equipment class', deliverable: 'Class diagram 1 คลาส + โค้ดสร้างอุปกรณ์ 2 ชิ้น'
  },
  {
    id: 5, weeks: '7', clo: 'CLO2, CLO3, CLO4, CLO6', title: 'Encapsulation และ Invariant', subtitle: 'ป้องกันสถานะผิดด้วยเมธอดที่ตรวจเงื่อนไข',
    outcomes: ['อธิบาย invariant ของอุปกรณ์', 'ป้องกันยืมซ้ำและคืนซ้ำ', 'ทดสอบว่ากรณีผิดไม่เปลี่ยนสถานะ'],
    concepts: ['ข้อมูล private ไม่ควรถูกแก้จากภายนอกโดยตรง', 'เมธอดตรวจเงื่อนไขก่อนเปลี่ยนสถานะ', 'ข้อผิดพลาดต้องชัดเจนและทดสอบได้'],
    codeFile: 'ch05-equipment-invariant.js',
    code: `export class Equipment {
  #borrowed = false;

  borrow() {
    if (this.#borrowed) throw new Error("ยืมซ้ำไม่ได้");
    this.#borrowed = true;
  }

  giveBack() {
    if (!this.#borrowed) throw new Error("คืนซ้ำไม่ได้");
    this.#borrowed = false;
  }

  isAvailable() { return !this.#borrowed; }
}`,
    walkthrough: ['#borrowed ถูกบังคับความเป็นส่วนตัวขณะรัน', 'borrow ตรวจ invariant ก่อนแก้ค่า', 'giveBack ใช้กฎตรงข้ามและคงสถานะเมื่อเกิด error'],
    practice: ['ทดสอบยืมครั้งแรกและยืมซ้ำ', 'ทดสอบคืนครั้งแรกและคืนซ้ำ', 'บันทึกสถานะก่อน–หลังกรณีผิดเงื่อนไข'],
    quiz: ['เหตุใด borrowed จึงควรเป็น private field?', ['เพื่อให้โค้ดยาวขึ้น', 'เพื่อบังคับให้เปลี่ยนสถานะผ่านกฎในเมธอด', 'เพราะ JavaScript ใช้ boolean ไม่ได้'], 1, 'การซ่อนสถานะช่วยป้องกันภายนอกข้ามกฎยืมและคืน', 'ใครควรรับผิดชอบ invariant ของ Equipment'],
    piece: 'ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้', deliverable: 'โค้ด borrow/giveBack + tests กรณีปกติและผิดเงื่อนไข'
  },
  {
    id: 6, weeks: '9', clo: 'CLO2, CLO3', title: 'Composition ก่อน Inheritance', subtitle: 'ประกอบ Loan จาก Equipment และข้อมูลผู้ยืม',
    outcomes: ['แยกความสัมพันธ์ has-a กับ is-a', 'สร้าง Loan ที่อ้างถึง Equipment', 'เลือก composition เมื่อวัตถุร่วมงานกัน'],
    concepts: ['Loan has an Equipment จึงเป็น composition', 'inheritance ใช้เมื่อชนิดย่อยเป็นชนิดหลักจริง', 'อย่าสร้างคลาสย่อยเพียงเพื่อเก็บข้อมูลต่างกัน'],
    codeFile: 'ch06-loan-composition.js',
    code: `// รับ object ของ Equipment ที่สร้างจากบทก่อนหน้า
export class Loan {
  constructor(equipment, borrowerId, days) {
    if (!Number.isInteger(days) || days < 1) {
      throw new Error("จำนวนวันไม่ถูกต้อง");
    }
    this.equipment = equipment;
    this.borrowerId = borrowerId;
    this.days = days;
  }
}

// Loan มี Equipment เป็นส่วนประกอบ ไม่ได้สืบทอดจาก Equipment`,
    walkthrough: ['equipment field แสดงความสัมพันธ์ has-a', 'borrowerId และ days เป็นข้อมูลของรายการยืม', 'constructor ตรวจข้อมูลที่ Loan ต้องรับผิดชอบ'],
    practice: ['วาดความสัมพันธ์ Equipment 1 — 0..* Loan', 'สร้าง Loan ปกติ 1 รายการ', 'ลอง days = 0 และยืนยันว่า object ไม่ถูกสร้าง'],
    quiz: ['ความสัมพันธ์ระหว่าง Loan กับ Equipment เหมาะกับข้อใด?', ['Loan extends Equipment', 'Loan has an Equipment', 'Loan และ Equipment ต้องเป็นคลาสเดียวกัน'], 1, 'Loan อ้างถึง Equipment เพื่อบอกว่ายืมชิ้นใด จึงเป็น has-a', 'ถามว่า Loan เป็นอุปกรณ์หรือมีอุปกรณ์'],
    piece: 'ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ', deliverable: 'Class diagram 2 คลาส + โค้ด Loan + test จำนวนวันผิด'
  },
  {
    id: 7, weeks: '10–11', clo: 'CLO1, CLO2, CLO3, CLO4', title: 'Polymorphism, Strategy และ DI', subtitle: 'เปลี่ยนนโยบายได้โดยไม่แก้ LoanService',
    outcomes: ['กำหนดข้อตกลงจากเมธอดที่ผู้เรียกต้องใช้', 'สลับ strategy ผ่าน constructor injection', 'ทดสอบ service ด้วย fake policy'],
    concepts: ['JavaScript ใช้ duck typing: วัตถุที่มีเมธอดตามข้อตกลงทำงานร่วมกันได้', 'polymorphism ให้ object หลายแบบใช้ผ่านเมธอดเดียวกัน', 'dependency injection ลดการผูกกับรายละเอียด'],
    codeFile: 'ch07-loan-policy.js',
    code: `export class StandardLoanPolicy {
  maxDays(role) {
    return role === "student" ? 7 : 14;
  }
}

export class LoanService {
  constructor(policy) {
    if (typeof policy?.maxDays !== "function") {
      throw new Error("policy ต้องมีเมธอด maxDays");
    }
    this.policy = policy;
  }

  canBorrow(role, days) {
    return days >= 1 && days <= this.policy.maxDays(role);
  }
}`,
    walkthrough: ['เมธอด maxDays คือข้อตกลงที่ service ต้องใช้', 'StandardLoanPolicy เป็น strategy หนึ่งแบบ', 'LoanService รับ dependency จากภายนอก จึงสลับ fake ใน test ได้'],
    practice: ['สร้าง FakeLoanPolicy ที่คืน 2 วันเสมอ', 'ส่ง fake เข้า LoanService และเขียน test', 'เปรียบเทียบผลกับ StandardLoanPolicy'],
    quiz: ['ประโยชน์หลักของ constructor injection ในตัวอย่างคืออะไร?', ['ไม่ต้องเขียน test', 'สลับ policy ได้โดยไม่แก้ LoanService', 'ทำให้ทุก policy ให้ผลเหมือนกัน'], 1, 'Service พึ่งเมธอดตามข้อตกลง จึงเปลี่ยน object และทดสอบแยกได้', 'มองหาสิ่งที่ส่งเข้าทาง constructor'],
    piece: 'ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้', deliverable: 'Policy จริง + fake policy + test เปรียบเทียบ'
  },
  {
    id: 8, weeks: '12–13', clo: 'CLO3, CLO4, CLO5', title: 'Repository และ Runtime Validation', subtitle: 'แยกแหล่งข้อมูลและไม่เชื่อข้อมูลจากภายนอกทันที',
    outcomes: ['แยกการเก็บข้อมูลผ่าน repository', 'ใช้ Map ป้องกันรหัสซ้ำ', 'ตรวจข้อมูล request ก่อนเรียก domain'],
    concepts: ['repository ซ่อนรายละเอียดแหล่งข้อมูล', 'in-memory repository เหมาะกับการเรียนและการทดสอบ', 'ข้อมูล JSON จากภายนอกต้องตรวจที่ runtime'],
    codeFile: 'ch08-repository-validation.js',
    code: `export class EquipmentRepository {
  #items = new Map();

  add(item) {
    if (this.#items.has(item.id)) throw new Error("รหัสซ้ำ");
    this.#items.set(item.id, item);
  }

  find(id) {
    return this.#items.get(id);
  }
}

export function isLoanRequest(value) {
  if (typeof value !== "object" || value === null) return false;
  return typeof value.id === "string" && Number.isInteger(value.days);
}`,
    walkthrough: ['Map เก็บคู่ id → item และตรวจซ้ำได้', 'find คืน undefined เมื่อไม่พบ', 'isLoanRequest ตรวจข้อมูลจริงก่อนส่งเข้าสู่ domain'],
    practice: ['เพิ่ม EQ01 แล้วลองเพิ่มรหัสเดิม', 'ค้นหารหัสที่มีและไม่มี', 'ทดสอบ validator ด้วย null, string, days ทศนิยม และข้อมูลถูกต้อง'],
    quiz: ['เหตุใด request จาก API จึงต้องตรวจที่ runtime?', ['เพราะข้อมูลจากภายนอกอาจผิดรูปแบบ', 'เพื่อให้ไม่ต้องตรวจค่า null', 'เพราะ React รับประกันข้อมูลให้แล้ว'], 0, 'ข้อมูลภายนอกอาจหาย ผิดชนิด หรืออยู่นอกขอบเขต จึงต้องตรวจค่าจริงก่อนใช้', 'อย่าเชื่อข้อมูลเพียงเพราะส่งมาจากหน้าจอของเรา'],
    piece: 'ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input', deliverable: 'Repository + validator + tests รหัสซ้ำ/ไม่พบ/ข้อมูลผิดรูปแบบ'
  },
  {
    id: 9, weeks: '14', clo: 'CLO2, CLO3, CLO4', title: 'เชื่อม Express API กับ React', subtitle: 'React แสดงผล · Route รับคำขอ · Service บังคับกฎ',
    outcomes: ['อธิบาย request flow ตั้งแต่หน้าจอถึง repository', 'วางกฎธุรกิจไว้ใน service/domain', 'ใช้ React Function Component เรียก API'],
    concepts: ['React ไม่ควรเป็นแหล่งกฎธุรกิจเพียงแห่งเดียว', 'Express route แปลง HTTP เป็นการเรียกใช้ service', 'Service และ domain ต้องทดสอบได้โดยไม่เปิดเซิร์ฟเวอร์'],
    codeFile: 'ch09-express-react-flow.jsx',
    code: `// Express route (ฝั่ง Backend)
app.get("/api/equipment", (req, res) => {
  res.json(equipmentService.list());
});

// React Function Component (อยู่ในโปรเจกต์ React)
export function EquipmentList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/equipment").then(r => r.json()).then(setItems);
  }, []);
  return <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>;
}`,
    walkthrough: ['Express route รับ GET /api/equipment และเรียก service', 'Function Component เก็บ state ด้วย hook', 'fetch รับข้อมูลภายนอก จึงต้องจัดการ loading/error และตรวจข้อมูลที่ Backend'],
    practice: ['วาด React → Express Route → Service → Repository', 'ใช้ template ผู้สอนเปิด GET /api/equipment', 'ทดสอบ success, loading และ error โดยไม่ใช้ Class Component'],
    quiz: ['กฎห้ามยืมซ้ำควรอยู่ที่ใด?', ['เฉพาะปุ่มใน React', 'Service/domain ที่ API เรียกใช้', 'เฉพาะ CSS'], 1, 'Backend service/domain ต้องรักษากฎแม้มีผู้เรียก API โดยตรง', 'หน้าจอไม่ใช่ทางเข้าเดียวของระบบ'],
    piece: 'ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ', deliverable: 'แผนภาพ request flow + ภาพหน้าจอ 3 สถานะ + ผลทดสอบ service'
  },
  {
    id: 10, weeks: '15–16', clo: 'CLO2–CLO6', title: 'ประกอบ Jigsaw เป็น Mini Project', subtitle: 'รวมชิ้นส่วน ตรวจคุณภาพ แล้วออกแบบโครงงานของตนเอง',
    outcomes: ['ประกอบ 9 ชิ้นส่วนเป็นระบบที่อธิบายได้', 'สาธิตตัวอย่างระบบยืม–คืนฉบับสมบูรณ์', 'เสนอ mini project ของตนเองด้วยกฎและหลักฐานทดสอบ'],
    concepts: ['รวมเฉพาะสิ่งที่ตอบโจทย์ ไม่เพิ่มคลาสเพื่อให้ดูซับซ้อน', 'ตรวจ acceptance criteria ทีละข้อ', 'โครงงานใหม่เปลี่ยนบริบทได้ แต่ต้องมีกฎ สถานะ และการทดสอบ'],
    codeFile: 'ch10-mini-project-blueprint.js',
    code: `// โครงสร้างตัวอย่าง Mini Equipment Loan
// React Function Component
//   ↓ HTTP request
// Express Route
//   ↓ validated command
// LoanService → LoanPolicy
//   ↓
// Equipment + Loan (domain objects)
//   ↓
// EquipmentRepository (in-memory ในรายวิชา)

export const acceptanceCriteria = [
  "แสดงรายการอุปกรณ์",
  "ยืมได้เมื่อพร้อมและจำนวนวันถูกต้อง",
  "ปฏิเสธยืมซ้ำโดยไม่เปลี่ยนสถานะ",
  "คืนได้หนึ่งครั้ง",
  "ชุดทดสอบผ่านและอธิบายเหตุผลได้"
];`,
    walkthrough: ['UI ส่งคำขอแต่ไม่ถือกฎทั้งหมด', 'Service ประสาน policy, domain และ repository', 'acceptance criteria เชื่อมโจทย์กับการสาธิตและ tests'],
    practice: ['เปิด starter แล้วจับคู่ไฟล์กับ Jigsaw 9 ชิ้น', 'รัน npm test และสาธิตเส้นทางยืมสำเร็จ/ยืมซ้ำ', 'ใช้ Project Canvas เลือกบริบทใหม่ เช่น จองห้อง คลังสินค้า หรือคิวบริการ'],
    quiz: ['Mini project ของตนเองควรเริ่มจากสิ่งใด?', ['เลือก framework ให้มากที่สุด', 'ระบุผู้ใช้ ปัญหา กฎสำคัญ และผลที่พิสูจน์ได้', 'สร้างคลาสจำนวนมากก่อนรู้โจทย์'], 1, 'โจทย์และกฎที่ตรวจสอบได้เป็นฐานของการออกแบบ ไม่ใช่จำนวนเทคโนโลยี', 'เริ่มจากปัญหาและหลักฐานความสำเร็จ'],
    piece: 'ชิ้นที่ 10 · ระบบสมบูรณ์และแนวคิดของตนเอง', deliverable: 'Project Canvas 1 หน้า + demo 3 นาที + tests + README + AI log'
  }
];

const worksheetPlans = [
  {
    scenario: 'ฝ่ายโสตทัศนูปกรณ์ต้องการหน้ารายการอุปกรณ์ที่แสดงเฉพาะรายการพร้อมยืม นักศึกษาจะเริ่มจากโปรแกรมเล็กที่รันสำเร็จ แล้วอธิบายข้อมูล–กระบวนการ–ผลลัพธ์ด้วยภาษาของตนเอง',
    theoryPrompt: 'ถ้าเปลี่ยน available ของ Camera จาก true เป็น false ผลลัพธ์ควรเปลี่ยนอย่างไร และเพราะคำสั่งใด?',
    guided: [
      'รัน `node examples/ch01-mini-equipment-catalog.js` หรือคัดลอกตัวอย่างไปยังไฟล์ `catalog.js` แล้วบันทึกผลลัพธ์จริง',
      'วาดตาราง 3 คอลัมน์: input (`items`) → process (`filter`) → output แล้วใส่ค่าจากโปรแกรมจริง',
      'เพิ่ม `{ id: "EQ03", name: "Microphone", available: true }` ทำนายผลก่อนรัน แล้วเปรียบเทียบผลจริง',
      'สร้างฟังก์ชัน `listBorrowed(data)` โดยไม่แก้ `listAvailable` และแสดงผลทั้งสองรายการ',
      'อธิบายทีละบรรทัดว่า parameter, return value และ callback ของ `filter` ทำหน้าที่อะไร'
    ],
    challenge: 'สร้าง `summarize(data)` ให้คืน `{ total, available, borrowed }` ห้ามพิมพ์ค่าคงที่ และต้องทำงานเมื่อเพิ่มอุปกรณ์รายการใหม่',
    tests: ['รายการเริ่มต้น: พร้อมยืม 1 จาก 2', 'เพิ่ม Microphone: พร้อมยืม 2 จาก 3', 'array ว่าง: ทุกค่าเป็น 0', 'ห้ามแก้ข้อมูลต้นฉบับหลังเรียกฟังก์ชัน'],
    knowledge: ['เหตุใดการคืน array ใหม่จึงทดสอบง่ายกว่าการแก้ array เดิม?', 'object หนึ่งรายการแทนสิ่งใดในโลกจริง และ property ใดคือสถานะ?', 'ความรู้จาก Python เรื่อง list/function ช่วยอ่าน JavaScript ส่วนใดได้บ้าง?']
  },
  {
    scenario: 'ระบบอนุญาตให้ยืมได้เมื่ออุปกรณ์มีสถานะ available และจำนวนวันเป็นจำนวนเต็ม 1–7 วัน งานนี้เปลี่ยนข้อกำหนดภาษาไทยให้เป็นกฎที่ตรวจสอบได้',
    theoryPrompt: 'เหตุใด `days <= 7` เพียงเงื่อนไขเดียวจึงยังยอมรับ 0, -1 หรือ 1.5 ได้?',
    guided: [
      'สร้างตารางตัดสินใจ status × days โดยใช้ status `available`, `borrowed`, `lost` และ days `0, 1, 7, 8, 1.5`',
      'เขียน expected result ทุกแถวก่อนรัน `canBorrow` แล้วทำเครื่องหมายแถวที่ผลจริงไม่ตรง',
      'แยก `isValidStatus(status)` และ `isValidLoanDays(days)` ออกจาก `canBorrow` เพื่อให้แต่ละกฎมีชื่อชัดเจน',
      'เพิ่มกฎสมาชิก `active` โดยแก้ signature เป็น `canBorrow({ status, days, active })`',
      'เขียนข้อความเหตุผลเมื่อยืมไม่ได้ เช่น `INVALID_STATUS`, `INVALID_DAYS`, `INACTIVE_MEMBER` แทนการคืน false อย่างเดียว'
    ],
    challenge: 'สร้าง `validateBorrowRequest(request)` ที่คืน `{ ok, errors }` และรายงานข้อผิดพลาดได้มากกว่าหนึ่งข้อในครั้งเดียว',
    tests: ['available, 1, active → ผ่าน', 'available, 7, active → ผ่าน', 'borrowed, 7, active → ไม่ผ่าน', 'available, 8, active → ไม่ผ่าน', 'lost, 1.5, inactive → มีข้อผิดพลาดครบทุกกฎ'],
    knowledge: ['ตารางตัดสินใจช่วยลดกรณีทดสอบตกหล่นอย่างไร?', 'validation ต่างจาก business rule อย่างไรในตัวอย่างนี้?', 'กฎใดควรตรวจที่ React และกฎใดต้องตรวจซ้ำที่ Backend?']
  },
  {
    scenario: 'กฎจำนวนวันยืมจะเปลี่ยนตามบทบาท ผู้พัฒนาต้องพิสูจน์ว่าการแก้กฎใหม่ไม่ทำให้พฤติกรรมเดิมเสีย โดยใช้ฟังก์ชันบริสุทธิ์และ automated tests',
    theoryPrompt: 'ผลลัพธ์ที่คาดหวังคืออะไรเมื่อ role เป็น guest และเรายังไม่ได้กำหนดนโยบาย?',
    guided: [
      'รันไฟล์ test เดิมและแยกส่วน Arrange–Act–Assert ของแต่ละกรณีด้วยสีหรือคำกำกับ',
      'เขียน test ที่ล้มเหลวก่อนสำหรับ `guest → 3 วัน` แล้วจึงแก้ `maxLoanDays` ให้ผ่าน',
      'เพิ่มกรณี role ที่ไม่รู้จัก และตัดสินใจว่าจะ throw error หรือคืนค่าเริ่มต้น พร้อมเขียนเหตุผล',
      'สร้าง `canBorrowDays(role, days)` โดยเรียก `maxLoanDays` แทนการเขียนเลข 7/14 ซ้ำ',
      'ทำให้ tests ครอบคลุมค่าต่ำสุด ค่าสูงสุด เกินขอบเขต และข้อมูลผิดรูปแบบ'
    ],
    challenge: 'เปลี่ยนนโยบาย staff จาก 14 เป็น 10 วัน แล้วแสดงว่าชุดทดสอบบอกตำแหน่งที่ต้องปรับได้ โดยไม่ลบ test เพื่อให้ผ่าน',
    tests: ['student: 1 และ 7 ผ่าน, 8 ไม่ผ่าน', 'staff: 14 ผ่านตามนโยบายเดิม', 'guest: 3 ผ่าน, 4 ไม่ผ่าน', 'unknown role: พฤติกรรมตรงข้อกำหนดที่กลุ่มเลือก', 'เรียก pure function ซ้ำด้วย input เดิมแล้วได้ผลเดิม'],
    knowledge: ['test name ที่ดีทำหน้าที่เป็นข้อกำหนดได้อย่างไร?', 'pure function ช่วยแยกข้อผิดพลาดออกจาก UI/ฐานข้อมูลอย่างไร?', 'ข้อเสนอ test จาก AI ข้อใดรับหรือปฏิเสธ และใช้หลักฐานใดตัดสิน?']
  },
  {
    scenario: 'ต้องสร้างวัตถุอุปกรณ์หลายชิ้น แต่ละชิ้นมีรหัส ชื่อ และสถานะของตนเอง นักศึกษาจะออกแบบ class จากความรับผิดชอบ ไม่ใช่จากจำนวนข้อมูล',
    theoryPrompt: 'ถ้ามี camera และ tripod ที่สร้างจาก Equipment เดียวกัน เหตุใดสถานะของทั้งสองจึงไม่ควรเปลี่ยนพร้อมกัน?',
    guided: [
      'เขียน class diagram ของ Equipment ระบุ attributes, constructor และ methods ก่อนเปิดโค้ด',
      'สร้าง instance อย่างน้อย 3 ตัว แล้วทำตารางเปรียบเทียบ class, object reference และ instance data',
      'เพิ่ม validation ใน constructor: id/name ต้องเป็น string ที่ไม่ว่าง และเขียนตัวอย่างที่ทำให้เกิด error',
      'เพิ่ม getter `label` ที่คืน `"EQ01 — Camera"` โดยไม่เก็บข้อมูลซ้ำ',
      'เพิ่ม method `rename(newName)` พร้อมกฎชื่อใหม่ไม่ว่าง และอธิบายเหตุผลที่ไม่แก้ name โดยตรง'
    ],
    challenge: 'สร้าง `Equipment.create(data)` เป็น static factory ที่ตรวจข้อมูลก่อนสร้าง object และทดสอบข้อมูลครบ/ไม่ครบ',
    tests: ['สร้างอุปกรณ์ปกติได้', 'id ว่างถูกปฏิเสธ', 'name เป็นช่องว่างถูกปฏิเสธ', 'สอง instances มีข้อมูลแยกกัน', 'rename ที่ถูกต้องเปลี่ยนเฉพาะ object เป้าหมาย'],
    knowledge: ['class ต่างจาก instance อย่างไรโดยยกตัวอย่างจากโค้ด?', 'ข้อมูลใดควรรับทาง constructor และข้อมูลใดคำนวณด้วย getter?', 'เมื่อใดฟังก์ชันธรรมดาเหมาะกว่าการสร้าง class?']
  },
  {
    scenario: 'อุปกรณ์ต้องอยู่ในสถานะที่ถูกต้องเสมอ: ห้ามยืมซ้ำและห้ามคืนซ้ำ นักศึกษาจะออกแบบ invariant และพิสูจน์ว่ากรณีผิดไม่ทำลายสถานะเดิม',
    theoryPrompt: 'ถ้า `#borrowed` เป็น public ผู้เรียกสามารถสร้างสถานะที่ข้ามกฎใดได้บ้าง?',
    guided: [
      'เขียน state transition: available --borrow()→ borrowed --giveBack()→ available และทำเครื่องหมาย transition ที่ห้าม',
      'รันเส้นทางยืมครั้งแรก ยืมซ้ำ คืนครั้งแรก คืนซ้ำ พร้อมบันทึกสถานะก่อนและหลังทุกคำสั่ง',
      'เขียน tests ยืนยันว่าเมื่อ method throw error ค่า `isAvailable()` ไม่เปลี่ยน',
      'เพิ่ม `borrowedBy` และบังคับให้ borrow รับ memberId ที่ไม่ว่าง ส่วน giveBack ต้องล้างข้อมูลนี้',
      'เพิ่ม method `status()` ที่คืน object สำหรับแสดงผล โดยไม่เปิดให้ภายนอกแก้ private field'
    ],
    challenge: 'เพิ่มสถานะ maintenance: อุปกรณ์ที่ซ่อมอยู่ยืมไม่ได้ และออกจาก maintenance ได้เฉพาะเมื่อไม่ได้ถูกยืม พร้อม state diagram ใหม่',
    tests: ['ยืมครั้งแรกสำเร็จ', 'ยืมซ้ำ throw และสถานะเดิม', 'คืนครั้งแรกสำเร็จ', 'คืนซ้ำ throw และสถานะเดิม', 'maintenance ป้องกันการยืม'],
    knowledge: ['invariant ของ Equipment เขียนเป็นประโยคว่าอย่างไร?', 'private field ช่วยอะไรและยังไม่ช่วยอะไร?', 'เหตุใดต้องตรวจสถานะหลัง error ไม่ใช่ตรวจเพียงว่าเกิด error?']
  },
  {
    scenario: 'รายการยืมมีอุปกรณ์ ผู้ยืม วันที่ยืม และจำนวนวัน จึงเป็นวัตถุที่ประกอบจากวัตถุอื่น ไม่ใช่อุปกรณ์ชนิดหนึ่ง',
    theoryPrompt: 'ประโยค “Loan is an Equipment” และ “Loan has an Equipment” ข้อใดตรงโลกจริง และส่งผลต่อโค้ดอย่างไร?',
    guided: [
      'วาด class diagram Equipment 1 — 0..* Loan พร้อมชื่อความสัมพันธ์และ multiplicity',
      'สร้าง Loan จาก Equipment object แล้วพิมพ์ equipment.id ผ่าน Loan',
      'เพิ่ม validation: borrowerId ไม่ว่าง, days เป็นจำนวนเต็มบวก และตรวจว่ากรณีผิดไม่สร้าง object',
      'เพิ่ม method `dueDate(startDate)` ที่คืนวันครบกำหนดโดยไม่แก้ startDate เดิม',
      'เปรียบเทียบแบบจำลอง `Camera extends Equipment` กับ property `type: "camera"` แล้วเลือกโดยใช้พฤติกรรมเป็นเกณฑ์'
    ],
    challenge: 'สร้าง LoanCollection ที่เพิ่มรายการยืมและค้นตาม borrowerId โดยใช้ composition ห้ามให้ LoanCollection extends Array',
    tests: ['สร้าง Loan ปกติได้', 'days 0 และ 1.5 ถูกปฏิเสธ', 'borrowerId ว่างถูกปฏิเสธ', 'dueDate ถูกต้องและไม่แก้ input', 'ค้นรายการของผู้ยืมได้ครบ'],
    knowledge: ['composition ลดการผูกกันของคลาสอย่างไร?', 'inheritance เหมาะเมื่อพฤติกรรมใดแตกต่างจริง?', 'ถ้าเปลี่ยน Equipment เป็น mock object จะทดสอบ Loan ได้หรือไม่ เพราะอะไร?']
  },
  {
    scenario: 'นักศึกษาและบุคลากรมีนโยบายวันยืมต่างกัน แต่ LoanService ไม่ควรถูกแก้ทุกครั้งที่เพิ่มนโยบายใหม่ นักศึกษาจะใช้ Strategy, polymorphism และ dependency injection',
    theoryPrompt: 'LoanService ต้องรู้อะไรเกี่ยวกับ policy เท่าที่จำเป็นที่สุด และไม่ควรรู้อะไร?',
    guided: [
      'ระบุข้อตกลงของ policy เป็นประโยคและตัวอย่าง object ที่มี method `maxDays(role)`',
      'รัน StandardLoanPolicy แล้วสร้าง FakeLoanPolicy ที่คืน 2 วันเสมอ',
      'ส่ง policy ทั้งสองแบบเข้า LoanService โดยไม่แก้โค้ดภายใน service และบันทึกผลต่าง',
      'เพิ่ม PremiumLoanPolicy ที่ให้สมาชิก premium 21 วัน พร้อม test โดยใช้ผู้เรียกเดิม',
      'ทดลองส่ง `{}` เข้า constructor และเพิ่ม guard ที่ให้ error อธิบายได้'
    ],
    challenge: 'สร้าง WeekendPolicyDecorator ที่ลดจำนวนวันสูงสุดลง 1 วันในวันเสาร์–อาทิตย์ โดยประกอบ policy เดิมแทนการคัดลอกกฎ',
    tests: ['Standard student: 7 วัน', 'Standard staff: 14 วัน', 'Fake: 2 วัน', 'Premium: 21 วัน', 'object ที่ไม่มี maxDays ถูกปฏิเสธ'],
    knowledge: ['duck typing ของ JavaScript ปรากฏตรงไหน?', 'polymorphism ต่างจาก if/else ขนาดใหญ่อย่างไร?', 'dependency injection ทำให้ test เร็วและแยกส่วนขึ้นอย่างไร?']
  },
  {
    scenario: 'ระบบต้องค้นอุปกรณ์จากแหล่งข้อมูลและรับ request จากภายนอก การเข้าถึงข้อมูลกับการตรวจ input ต้องแยกจากกฎธุรกิจเพื่อเปลี่ยนแหล่งข้อมูลได้ในอนาคต',
    theoryPrompt: 'เหตุใดการ cast หรือเชื่อว่า request มาจาก React จึงไม่ถือเป็น validation?',
    guided: [
      'สร้าง InMemoryEquipmentRepository ด้วย Map และทดสอบ save/find รหัสที่มีและไม่มี',
      'เพิ่มกฎห้ามรหัสซ้ำ พร้อมตรวจว่ารายการเดิมไม่ถูกเขียนทับเมื่อเกิด error',
      'เขียน `isLoanRequest(value)` ตรวจ object, id และ days แล้วสร้างตาราง input ที่ผ่าน/ไม่ผ่าน',
      'แยก `validateLoanRequest` ให้คืน errors หลายรายการ เพื่อใช้สร้างข้อความตอบ API',
      'ให้ LoanService รับ repository ผ่าน constructor แล้วใช้ fake repository ทดสอบกรณีไม่พบข้อมูล'
    ],
    challenge: 'สร้าง LocalStorageEquipmentRepository ที่มี methods เดียวกับ in-memory version แล้วอธิบายว่ากฎธุรกิจส่วนใดไม่ต้องเปลี่ยน (ไม่ต้องใช้ฐานข้อมูลจริง)',
    tests: ['save/find สำเร็จ', 'รหัสซ้ำไม่เขียนทับ', 'find ไม่พบคืนค่าตามข้อตกลง', 'validator ปฏิเสธ null/string/ทศนิยม', 'request ถูกต้องผ่านและเรียก service ได้'],
    knowledge: ['Repository ซ่อนรายละเอียดอะไรจาก Service?', 'runtime validation ควรเกิดที่ขอบเขตใดของระบบ?', 'ถ้าเปลี่ยน Map เป็นฐานข้อมูล ชุดทดสอบ domain ใดควรยังผ่านเหมือนเดิม?']
  },
  {
    scenario: 'หน้าจอ React ต้องแสดงรายการอุปกรณ์จาก Express API แต่กฎยืมซ้ำต้องยังทำงานแม้ผู้ใช้เรียก API โดยไม่ผ่านหน้าจอ',
    theoryPrompt: 'แบ่งหน้าที่ React, Express Route, Service และ Repository อย่างละหนึ่งประโยค และระบุว่ากฎห้ามยืมซ้ำอยู่ที่ใด',
    guided: [
      'วาด sequence diagram: Component → GET /api/equipment → Route → Service → Repository → JSON → Component',
      'อ่าน Express route ตัวอย่างแล้วระบุ request, response, status code และจุดเรียก service',
      'เติม React Function Component ให้มี state `loading`, `items`, `error` และแสดงผลครบสามสถานะ',
      'ออกแบบ POST `/api/loans` พร้อมตัวอย่าง request/response สำหรับสำเร็จ ข้อมูลผิด และยืมซ้ำ',
      'ทดสอบ Service แยกจาก Express และเขียนรายการตรวจ manual สำหรับ UI โดยไม่ใช้ React Class Component'
    ],
    challenge: 'เพิ่มปุ่ม “ลองใหม่” เมื่อ fetch ล้มเหลว และป้องกันการกดซ้ำขณะ loading โดยไม่ย้ายกฎธุรกิจมาไว้ใน component',
    tests: ['GET สำเร็จคืน array', 'loading แสดงก่อนข้อมูลมา', 'network error แสดงข้อความและลองใหม่ได้', 'POST ข้อมูลผิดได้ 400', 'ยืมซ้ำถูกปฏิเสธจาก service แม้เรียก API โดยตรง'],
    knowledge: ['เหตุใด React จึงไม่ควรเป็นผู้รักษา invariant?', 'Route ควรแปลง error ของ domain เป็น HTTP response อย่างไร?', 'ส่วนใดเป็น functional style และส่วนใดใช้ OOP ในสถาปัตยกรรมนี้?']
  },
  {
    scenario: 'ผู้เรียนจะประกอบ Jigsaw ทั้ง 9 ชิ้นเป็นระบบยืม–คืนตัวอย่างที่สาธิตได้ก่อน แล้วใช้กระบวนการเดียวกันออกแบบ Mini Project ของตนเอง',
    theoryPrompt: 'Mini Project ที่ดีต้องพิสูจน์คุณค่าและความถูกต้องด้วยหลักฐานใดบ้าง นอกเหนือจากจำนวนหน้าจอหรือจำนวนคลาส?',
    guided: [
      'จับคู่ไฟล์/ส่วนโค้ดกับ Jigsaw 9 ชิ้น และทำเครื่องหมายชิ้นที่ยังไม่มีหลักฐาน',
      'รัน tests ทั้งหมดแล้วสาธิต happy path: ดูรายการ → ยืม → แสดงสถานะ → คืน',
      'สาธิต error path: ข้อมูลผิด ยืมซ้ำ คืนซ้ำ และยืนยันสถานะไม่เสีย',
      'เขียน README ให้เพื่อนติดตั้ง รัน ทดสอบ และเข้าใจข้อจำกัดได้โดยไม่ถามผู้สร้าง',
      'สร้าง Project Canvas ของตนเอง: ผู้ใช้ ปัญหา entity สถานะ กฎสำคัญ API/UI และ acceptance criteria'
    ],
    challenge: 'เลือกบริบทใหม่ เช่น จองห้อง คลังสินค้า หรือคิวบริการ แล้วสร้าง vertical slice หนึ่งเส้นทางที่มี UI/API/domain/test ครบ แทนการสร้างหลายหน้าที่ยังใช้ไม่ได้',
    tests: ['happy path ผ่านตั้งแต่ UI ถึง domain', 'ข้อมูลผิดถูกปฏิเสธ', 'การทำรายการซ้ำไม่ทำลายสถานะ', 'README ทำซ้ำได้โดยเพื่อน', 'acceptance criteria ทุกข้อมีหลักฐาน'],
    knowledge: ['ชิ้นส่วนใดของระบบเป็นความรู้ที่ถ่ายโอนไปโจทย์ใหม่ได้?', 'ตัด feature ใดออกเพื่อให้ Mini Project เล็กแต่สมบูรณ์?', 'AI ช่วยส่วนใด และหลักฐานใดยืนยันว่าผู้เรียนเข้าใจงานของตนเอง?']
  }
];

const slides = [];
for (const c of chapters) {
  const p = worksheetPlans[c.id - 1];
  const common = { chapter: c.id, week: c.weeks, clo: c.clo, codeLink: `resource.html?version=js-es6-2&type=code&chapter=${c.id}`, worksheet: `resource.html?version=js-es6-2&type=worksheet&chapter=${c.id}` };
  slides.push({ ...common, kind: 'chapter', title: `บทที่ ${c.id}\n${c.title}`, subtitle: c.subtitle, points: c.outcomes, piece: c.piece, note: `เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์` });
  slides.push({ ...common, kind: 'reveal', title: `${c.title}: แนวคิดสำคัญ`, subtitle: 'เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง', points: c.concepts, details: c.concepts.map((x, i) => `แนวคิด ${i + 1}: ${x}`), note: 'ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง' });
  slides.push({ ...common, kind: 'codewalk', title: `อ่านโค้ดทีละส่วน`, subtitle: c.codeFile, points: c.walkthrough, details: c.walkthrough, code: c.code, note: 'อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน' });
  slides.push({ ...common, kind: 'practice', title: `ฝึกตามแบบมีขั้น`, subtitle: 'ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก', points: c.practice, hint: `หากติด ให้ย้อนดูโค้ดตัวอย่างบท ${c.id} แล้วเปลี่ยนเพียงหนึ่งจุด`, note: 'เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน' });
  slides.push({ ...common, kind: 'quiz', title: `ตรวจความเข้าใจบทที่ ${c.id}`, subtitle: 'ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา', points: [c.quiz[0]], options: c.quiz[1], answer: c.quiz[2], explain: c.quiz[3], hint: c.quiz[4], note: 'ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย' });
  slides.push({ ...common, kind: 'jigsaw', title: `Jigsaw Checkpoint ${c.id}/10`, subtitle: c.piece, points: [c.deliverable, 'นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า', 'ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน'], piece: c.piece, deliverable: c.deliverable, note: 'ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร' });

  writeFileSync(join(examplesDir, c.codeFile), `// บทที่ ${c.id}: ${c.title}\n// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206\n\n${c.code}\n`);
  writeFileSync(join(worksheetsDir, `ch${String(c.id).padStart(2, '0')}.md`), `# ใบงานบทที่ ${c.id}: ${c.title}

รายวิชา 07-034-206 · สัปดาห์ ${c.weeks} · ${c.clo}
เวลาเรียน: ทฤษฎี 2 ชั่วโมง + ปฏิบัติ 2 ชั่วโมง

ชื่อ–สกุล ______________________________ รหัสนักศึกษา ______________ กลุ่ม ______ วันที่ __________

## สถานการณ์

${p.scenario}

## ผลลัพธ์ที่ต้องทำให้เห็น

${c.outcomes.map(x => `- [ ] ${x}`).join('\n')}

เมื่อจบบท ผู้เรียนต้องมี **ผลงานที่รันหรือทดสอบได้** พร้อมคำอธิบายเหตุผล ไม่ใช่เพียงโค้ดที่คัดลอกมา

## ทรัพยากรประจำบท

- [สไลด์บทที่ ${c.id}](../slides.html?version=js-es6-2#slide-${(c.id - 1) * 6 + 1})
- [โค้ดตัวอย่าง ${c.codeFile}](../examples/${c.codeFile})
- ชุดเริ่มต้น: ดาวน์โหลดจากหน้าหลัก แล้วรัน \`npm test\` และ \`npm run demo\`

---

## ภาคทฤษฎี 2 ชั่วโมง: เข้าใจก่อนลงมือ

### 0–15 นาที · กระตุ้นความรู้เดิม

ตอบด้วยตนเองก่อนอภิปราย:

> ${p.theoryPrompt}

คำตอบก่อนเรียน:
........................................................................................................
........................................................................................................

### 15–40 นาที · สร้างความหมายของแนวคิด

อธิบายแต่ละแนวคิดด้วยภาษาของตนเอง และยกตัวอย่างจากสถานการณ์:

${c.concepts.map((x, i) => `${i + 1}. **${x}**\n   ความหมาย/ตัวอย่าง: ................................................................................`).join('\n')}

### 40–70 นาที · ผู้สอนสาธิตและอ่านโค้ด

เปิดโค้ดตัวอย่างแล้วติดตามทีละจุด:

${c.walkthrough.map((x, i) => `${i + 1}. ${x}`).join('\n')}

เติมตารางก่อนผู้สอนรันโปรแกรม:

| สิ่งที่สังเกต | คำตอบของผู้เรียน |
| --- | --- |
| Input หรือข้อมูลเริ่มต้น | |
| Rule/เงื่อนไขสำคัญ | |
| State ที่อาจเปลี่ยน | |
| Output หรือผลที่คาดหวัง | |
| บรรทัดที่ยังไม่เข้าใจ | |

### 70–100 นาที · Think–Pair–Share

1. ทำนายผลของโค้ดด้วยตนเองและเขียนเหตุผล
2. เปรียบเทียบคำตอบกับเพื่อนหนึ่งคน
3. ระบุจุดที่เห็นต่าง แล้วใช้โค้ดหรือข้อกำหนดเป็นหลักฐานตัดสิน
4. สรุปความเข้าใจของคู่เป็นแผนภาพหรือ pseudocode ไม่เกิน 8 บรรทัด

### 100–115 นาที · เชื่อมทฤษฎีกับงานปฏิบัติ

ตอบคำถามต่อไปนี้:

1. โค้ดส่วนใดแทน “ข้อมูล” และส่วนใดแทน “พฤติกรรม”?
   ....................................................................................................
2. ถ้าข้อกำหนดเปลี่ยน จุดใดควรแก้และ test ใดต้องยืนยัน?
   ....................................................................................................
3. ข้อผิดพลาดใดน่าจะเกิดขึ้นในการปฏิบัติ และจะสังเกตจากอะไร?
   ....................................................................................................

### 115–120 นาที · Readiness Check

**${c.quiz[0]}**

คำตอบและเหตุผล: ............................................................................................

---

## ภาคปฏิบัติ 2 ชั่วโมง: สร้าง–ทดสอบ–อธิบาย

### 0–10 นาที · เตรียมสภาพแวดล้อม

- [ ] เปิดโฟลเดอร์งานของตนเอง ไม่แก้ไฟล์ต้นฉบับโดยไม่มีสำเนา
- [ ] รันโค้ดตัวอย่างหรือ \`npm test\` ให้ผ่านก่อนเริ่มแก้
- [ ] บันทึก commit/สำเนาเริ่มต้นเพื่อย้อนกลับได้
- [ ] เขียนผลที่คาดหวังก่อนแก้โค้ด

### 10–30 นาที · ทำตามตัวอย่างให้สำเร็จ

${c.practice.map((x, i) => `${i + 1}. ${x}`).join('\n')}

บันทึกหลักฐานการรันครั้งแรก:

| คำสั่งที่ใช้ | ผลที่คาดหวัง | ผลจริง | อธิบายความต่าง |
| --- | --- | --- | --- |
| | | | |
| | | | |

### 30–75 นาที · ภารกิจหลักแบบมีขั้น

ทำตามลำดับ ห้ามข้ามขั้น และให้ผู้สอน/เพื่อนตรวจ checkpoint หลังขั้นที่ 3:

${p.guided.map((x, i) => `${i + 1}. [ ] ${x}`).join('\n')}

**Checkpoint หลังขั้นที่ 3**

- โค้ดรันได้หรือ test ผ่าน
- อธิบาย input → rule/state → output ได้
- ชี้บรรทัดที่ตนเองแก้และเหตุผลได้

### 75–100 นาที · งานท้าทายที่นำไปใช้ได้

> ${p.challenge}

วางแผนก่อนเขียน:

- ข้อกำหนด: ...........................................................................................
- Input: ........................................ Output: ........................................
- กรณีปกติ: ..........................................................................................
- กรณีขอบเขต/ผิดเงื่อนไข: ........................................................................
- ไฟล์หรือส่วนโค้ดที่จะเปลี่ยน: ....................................................................

### 100–115 นาที · ตรวจด้วยหลักฐาน

ทดสอบอย่างน้อยทุกกรณีต่อไปนี้:

${p.tests.map((x, i) => `${i + 1}. [ ] ${x}\n   ผลจริง/หลักฐาน: ................................................................................`).join('\n')}

หากผลไม่ผ่าน ให้บันทึก **สาเหตุ → สิ่งที่แก้ → ผลหลังแก้** ห้ามลบ test เพียงเพื่อให้ผ่าน

### 115–120 นาที · จัดชุดส่งงาน

- [ ] ซอร์สโค้ดที่ตั้งชื่อสื่อความหมายและรันได้
- [ ] ผล test หรือภาพผลรันที่อ่านได้
- [ ] README สั้น ๆ ระบุคำสั่งรันและข้อจำกัด
- [ ] คำตอบส่วน “สร้างองค์ความรู้” ด้านล่าง
- [ ] AI log ถ้ามีการใช้ AI

---

## สร้างองค์ความรู้จากสิ่งที่ลงมือทำ

ตอบโดยอ้างอิงโค้ดหรือผลทดสอบของตนเอง:

${p.knowledge.map((x, i) => `${i + 1}. **${x}**\n   ....................................................................................................\n   ....................................................................................................`).join('\n')}

## Jigsaw ที่นำไปต่อ Mini Project

**${c.piece}**

สิ่งที่ต้องส่ง: ${c.deliverable}

อธิบายการเชื่อมกับบทก่อนหน้า:
........................................................................................................
อธิบายว่าจะใช้ชิ้นนี้ใน Mini Project อย่างไร:
........................................................................................................

## การใช้ AI อย่างมีวิจารณญาณ

ใช้ AI ได้หลังจากเขียนคำทำนายหรือร่างแรกด้วยตนเองแล้ว และต้องตรวจด้วยผลรันจริง

| รายการ | บันทึก |
| --- | --- |
| เครื่องมือและวันที่ | |
| คำถามที่ส่ง | |
| ข้อเสนอที่นำมาใช้ | |
| ข้อเสนอที่ปฏิเสธและเหตุผล | |
| Test/เอกสารที่ใช้ตรวจ | |
| สิ่งที่ผู้เรียนแก้ด้วยตนเอง | |

## เกณฑ์ตรวจใบงาน 10 คะแนน

| ด้าน | คะแนน | เกณฑ์ผ่าน |
| --- | ---: | --- |
| ความถูกต้องของงานหลัก | 3 | รันได้และตรงข้อกำหนด ไม่ใช้ค่าคงที่หลอกผล |
| การทดสอบและกรณีขอบเขต | 2 | มีหลักฐานทุกกรณีสำคัญ รวมกรณีผิดเงื่อนไข |
| การอธิบายและสร้างองค์ความรู้ | 2 | อธิบายด้วยภาษาตนเองและอ้างอิงโค้ด/ผลรัน |
| Jigsaw และการเชื่อมบทเรียน | 2 | ส่งชิ้นงานครบและอธิบายการนำไปต่อได้ |
| ความรับผิดชอบและ AI log | 1 | ระบุแหล่งที่มา ไม่ส่งข้อมูลลับ และตรวจคำตอบ AI |

**ผลการตรวจ:** ______ / 10
**ข้อเสนอแนะเพื่อปรับปรุงครั้งถัดไป:**
........................................................................................................
........................................................................................................
`);
}

writeFileSync(join(dist, 'slides-data.js'), `const CHAPTERS = ${JSON.stringify(chapters.map(({ id, weeks, clo, title, subtitle, codeFile, piece }) => ({ id, weeks, clo, title, subtitle, codeFile, piece })), null, 2)};\n\nconst SLIDES = ${JSON.stringify(slides, null, 2)};\n`);
console.log(`Generated ${slides.length} slides, ${chapters.length} examples, and ${chapters.length} worksheets.`);
