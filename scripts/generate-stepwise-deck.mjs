import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const examplesDir = join(dist, 'examples');
const worksheetsDir = join(dist, 'worksheets');
mkdirSync(examplesDir, { recursive: true });
mkdirSync(worksheetsDir, { recursive: true });

const chapters = [
  {
    id: 1, weeks: '1', clo: 'CLO1, CLO6', title: 'เริ่มจากความสำเร็จเล็ก ๆ', subtitle: 'Mini Equipment Catalog: ดูผลลัพธ์ก่อน แล้วค่อยแกะโครงสร้าง',
    outcomes: ['รันตัวอย่างสำเร็จและเห็นผลลัพธ์ทันที', 'แยกข้อมูล ฟังก์ชัน และผลลัพธ์ออกจากกัน', 'อธิบายเส้นทาง Python พื้นฐาน → TypeScript ได้'],
    concepts: ['โปรแกรมเล็กที่สมบูรณ์ช่วยให้เห็นภาพปลายทาง', 'TypeScript ตรวจชนิดก่อนรันเป็น JavaScript', 'เริ่มจากทำตามให้สำเร็จ แล้วเปลี่ยนข้อมูลหนึ่งจุดด้วยตนเอง'],
    codeFile: 'ch01-mini-equipment-catalog.ts',
    code: `type EquipmentItem = { id: string; name: string; available: boolean };

const items: EquipmentItem[] = [
  { id: "EQ01", name: "Camera", available: true },
  { id: "EQ02", name: "Tripod", available: false }
];

function listAvailable(data: EquipmentItem[]): EquipmentItem[] {
  return data.filter(item => item.available);
}

console.log(listAvailable(items));`,
    walkthrough: ['type กำหนดรูปแบบข้อมูลอุปกรณ์', 'items คือข้อมูลตัวอย่างที่ควบคุมได้', 'listAvailable รับข้อมูล คืนผลใหม่ และทดสอบแยกได้'],
    practice: ['รันตัวอย่างและบันทึกผลลัพธ์', 'เพิ่ม Microphone ที่พร้อมยืม แล้วทำนายผลก่อนรัน', 'เปลี่ยนสถานะ Camera และอธิบายว่าผลเปลี่ยนเพราะอะไร'],
    quiz: ['ส่วนใดทำหน้าที่คัดเฉพาะอุปกรณ์พร้อมยืม?', ['type EquipmentItem', 'listAvailable', 'console.log เพียงอย่างเดียว'], 1, 'ฟังก์ชัน listAvailable รับรายการและคืนเฉพาะรายการที่ available เป็น true', 'มองหาส่วนที่ใช้ filter'],
    piece: 'ชิ้นที่ 1 · ข้อมูลอุปกรณ์และผลลัพธ์ที่ต้องการ', deliverable: 'ภาพผลการรัน + ข้อมูลที่เพิ่มเอง 1 รายการ + คำอธิบาย 3 บรรทัด'
  },
  {
    id: 2, weeks: '2–3', clo: 'CLO1, CLO3, CLO4', title: 'ข้อมูลและกฎเงื่อนไข', subtitle: 'สร้างรหัส สถานะ จำนวนวัน และเงื่อนไขที่ตรวจสอบได้',
    outcomes: ['เลือกชนิดข้อมูลได้เหมาะกับโจทย์', 'เขียนกฎอนุญาตยืมโดยไม่เปลี่ยนสถานะก่อนตรวจ', 'สร้างตารางกรณีปกติและกรณีขอบเขต'],
    concepts: ['number ต้องตรวจจำนวนเต็มและขอบเขต', 'union type ลดค่าข้อความที่สะกดผิด', 'กฎสำคัญต้องตรวจที่ Backend ไม่ใช่เฉพาะหน้าจอ'],
    codeFile: 'ch02-loan-rules.ts',
    code: `type EquipmentStatus = "available" | "borrowed";

function canBorrow(status: EquipmentStatus, days: number): boolean {
  const validDays = Number.isInteger(days) && days >= 1 && days <= 7;
  return status === "available" && validDays;
}

console.log(canBorrow("available", 7)); // true
console.log(canBorrow("borrowed", 7));  // false
console.log(canBorrow("available", 8)); // false`,
    walkthrough: ['union type จำกัดสถานะให้เหลือค่าที่กำหนด', 'validDays รวมเงื่อนไขจำนวนเต็มและช่วง 1–7', 'return รวมกฎสถานะและจำนวนวันโดยยังไม่แก้ข้อมูล'],
    practice: ['ทำตาราง status 2 ค่า × days 0, 1, 7, 8', 'ทำนาย true/false ก่อนรัน', 'เพิ่มกรณี NaN และ 1.5 พร้อมเหตุผล'],
    quiz: ['เหตุใดจึงตรวจ Number.isInteger(days)?', ['เพื่อเปลี่ยน string เป็น number', 'เพื่อปฏิเสธทศนิยมเมื่อโจทย์ต้องการจำนวนวันเต็ม', 'เพื่อทำให้ทุกค่ากลายเป็น 7'], 1, 'ชนิด number รวมค่าทศนิยม จึงต้องตรวจจำนวนเต็มตามกฎธุรกิจ', 'TypeScript number ไม่ได้หมายถึงจำนวนเต็มเท่านั้น'],
    piece: 'ชิ้นที่ 2 · กฎสิทธิ์และจำนวนวันยืม', deliverable: 'ตารางทดสอบอย่างน้อย 6 กรณี พร้อม expected result'
  },
  {
    id: 3, weeks: '4–5', clo: 'CLO1, CLO3, CLO4', title: 'ฟังก์ชันบริสุทธิ์และการทดสอบ', subtitle: 'เปลี่ยนข้อกำหนดให้เป็นตัวอย่างที่พิสูจน์ได้',
    outcomes: ['แยกฟังก์ชันที่ไม่มีผลข้างเคียง', 'เขียน automated test ด้วย node:test', 'ใช้ผลทดสอบตรวจคำตอบจาก AI'],
    concepts: ['เริ่มจาก input และ expected result', 'pure function ให้ผลเหมือนเดิมเมื่อ input เหมือนเดิม', 'แก้โค้ดแล้วต้องรัน regression tests ซ้ำ'],
    codeFile: 'ch03-pure-function.test.ts',
    code: `import test from "node:test";
import assert from "node:assert/strict";

export function maxLoanDays(role: "student" | "staff"): number {
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
    codeFile: 'ch04-equipment-class.ts',
    code: `export class Equipment {
  constructor(
    public readonly id: string,
    public readonly name: string,
    private borrowed = false
  ) {}

  isAvailable(): boolean {
    return !this.borrowed;
  }
}

const camera = new Equipment("EQ01", "Camera");
const tripod = new Equipment("EQ02", "Tripod");
console.log(camera.isAvailable(), tripod.isAvailable());`,
    walkthrough: ['constructor บังคับ id และ name ตอนสร้างวัตถุ', 'readonly ป้องกันการเปลี่ยนรหัสหลังสร้าง', 'private borrowed ซ่อนสถานะภายในและเปิดอ่านผ่านเมธอด'],
    practice: ['วาดกล่อง class ก่อนเขียนโค้ด', 'สร้างอุปกรณ์ 2 ชิ้นและพิมพ์สถานะ', 'อธิบายความต่างระหว่าง class กับ camera instance'],
    quiz: ['camera ในตัวอย่างคืออะไร?', ['คลาส', 'อินสแตนซ์ของ Equipment', 'ชนิดข้อมูล boolean'], 1, 'camera เป็นวัตถุที่สร้างจากคลาส Equipment และมีสถานะของตนเอง', 'ดูคำสั่ง new Equipment'],
    piece: 'ชิ้นที่ 4 · Equipment class', deliverable: 'Class diagram 1 คลาส + โค้ดสร้างอุปกรณ์ 2 ชิ้น'
  },
  {
    id: 5, weeks: '7', clo: 'CLO2, CLO3, CLO4, CLO6', title: 'Encapsulation และ Invariant', subtitle: 'ป้องกันสถานะผิดด้วยเมธอดที่ตรวจเงื่อนไข',
    outcomes: ['อธิบาย invariant ของอุปกรณ์', 'ป้องกันยืมซ้ำและคืนซ้ำ', 'ทดสอบว่ากรณีผิดไม่เปลี่ยนสถานะ'],
    concepts: ['ข้อมูล private ไม่ควรถูกแก้จากภายนอกโดยตรง', 'เมธอดตรวจเงื่อนไขก่อนเปลี่ยนสถานะ', 'ข้อผิดพลาดต้องชัดเจนและทดสอบได้'],
    codeFile: 'ch05-equipment-invariant.ts',
    code: `export class Equipment {
  #borrowed = false;

  borrow(): void {
    if (this.#borrowed) throw new Error("ยืมซ้ำไม่ได้");
    this.#borrowed = true;
  }

  giveBack(): void {
    if (!this.#borrowed) throw new Error("คืนซ้ำไม่ได้");
    this.#borrowed = false;
  }

  isAvailable(): boolean { return !this.#borrowed; }
}`,
    walkthrough: ['#borrowed ถูกบังคับความเป็นส่วนตัวขณะรัน', 'borrow ตรวจ invariant ก่อนแก้ค่า', 'giveBack ใช้กฎตรงข้ามและคงสถานะเมื่อเกิด error'],
    practice: ['ทดสอบยืมครั้งแรกและยืมซ้ำ', 'ทดสอบคืนครั้งแรกและคืนซ้ำ', 'บันทึกสถานะก่อน–หลังกรณีผิดเงื่อนไข'],
    quiz: ['เหตุใด borrowed จึงไม่ควรเป็น public?', ['เพื่อให้โค้ดยาวขึ้น', 'เพื่อบังคับให้เปลี่ยนสถานะผ่านกฎในเมธอด', 'เพราะ public ใช้กับ TypeScript ไม่ได้'], 1, 'การซ่อนสถานะช่วยป้องกันภายนอกข้ามกฎยืมและคืน', 'ใครควรรับผิดชอบ invariant ของ Equipment'],
    piece: 'ชิ้นที่ 5 · สถานะและกฎที่ละเมิดไม่ได้', deliverable: 'โค้ด borrow/giveBack + tests กรณีปกติและผิดเงื่อนไข'
  },
  {
    id: 6, weeks: '9', clo: 'CLO2, CLO3', title: 'Composition ก่อน Inheritance', subtitle: 'ประกอบ Loan จาก Equipment และข้อมูลผู้ยืม',
    outcomes: ['แยกความสัมพันธ์ has-a กับ is-a', 'สร้าง Loan ที่อ้างถึง Equipment', 'เลือก composition เมื่อวัตถุร่วมงานกัน'],
    concepts: ['Loan has an Equipment จึงเป็น composition', 'inheritance ใช้เมื่อชนิดย่อยเป็นชนิดหลักจริง', 'อย่าสร้างคลาสย่อยเพียงเพื่อเก็บข้อมูลต่างกัน'],
    codeFile: 'ch06-loan-composition.ts',
    code: `import { Equipment } from "./equipment.js";

export class Loan {
  constructor(
    public readonly equipment: Equipment,
    public readonly borrowerId: string,
    public readonly days: number
  ) {
    if (!Number.isInteger(days) || days < 1) {
      throw new Error("จำนวนวันไม่ถูกต้อง");
    }
  }
}

// Loan มี Equipment เป็นส่วนประกอบ ไม่ได้สืบทอดจาก Equipment`,
    walkthrough: ['equipment field แสดงความสัมพันธ์ has-a', 'borrowerId และ days เป็นข้อมูลของรายการยืม', 'constructor ตรวจข้อมูลที่ Loan ต้องรับผิดชอบ'],
    practice: ['วาดความสัมพันธ์ Equipment 1 — 0..* Loan', 'สร้าง Loan ปกติ 1 รายการ', 'ลอง days = 0 และยืนยันว่า object ไม่ถูกสร้าง'],
    quiz: ['ความสัมพันธ์ระหว่าง Loan กับ Equipment เหมาะกับข้อใด?', ['Loan extends Equipment', 'Loan has an Equipment', 'Loan และ Equipment ต้องเป็นคลาสเดียวกัน'], 1, 'Loan อ้างถึง Equipment เพื่อบอกว่ายืมชิ้นใด จึงเป็น has-a', 'ถามว่า Loan เป็นอุปกรณ์หรือมีอุปกรณ์'],
    piece: 'ชิ้นที่ 6 · Loan และความสัมพันธ์ของวัตถุ', deliverable: 'Class diagram 2 คลาส + โค้ด Loan + test จำนวนวันผิด'
  },
  {
    id: 7, weeks: '10–11', clo: 'CLO1, CLO2, CLO3, CLO4', title: 'Polymorphism, Interface และ DI', subtitle: 'เปลี่ยนนโยบายได้โดยไม่แก้ LoanService',
    outcomes: ['กำหนดข้อตกลงด้วย interface', 'สลับนโยบายผ่าน constructor injection', 'ทดสอบ service ด้วย fake policy'],
    concepts: ['interface อธิบายสิ่งที่ผู้เรียกต้องการ', 'polymorphism ให้ implementation หลายแบบใช้ผ่านข้อตกลงเดียว', 'dependency injection ลดการผูกกับรายละเอียด'],
    codeFile: 'ch07-loan-policy.ts',
    code: `export interface LoanPolicy {
  maxDays(role: "student" | "staff"): number;
}

export class StandardLoanPolicy implements LoanPolicy {
  maxDays(role: "student" | "staff"): number {
    return role === "student" ? 7 : 14;
  }
}

export class LoanService {
  constructor(private readonly policy: LoanPolicy) {}
  canBorrow(role: "student" | "staff", days: number): boolean {
    return days >= 1 && days <= this.policy.maxDays(role);
  }
}`,
    walkthrough: ['LoanPolicy กำหนดเมธอดที่ service ต้องใช้', 'StandardLoanPolicy เป็นรายละเอียดหนึ่งแบบ', 'LoanService รับ dependency จากภายนอก จึงสลับ fake ใน test ได้'],
    practice: ['สร้าง FakeLoanPolicy ที่คืน 2 วันเสมอ', 'ส่ง fake เข้า LoanService และเขียน test', 'เปรียบเทียบผลกับ StandardLoanPolicy'],
    quiz: ['ประโยชน์หลักของ constructor injection ในตัวอย่างคืออะไร?', ['ไม่ต้องเขียน test', 'สลับ policy ได้โดยไม่แก้ LoanService', 'ทำให้ interface อยู่ขณะรันโดยอัตโนมัติ'], 1, 'Service พึ่งข้อตกลง จึงเปลี่ยน implementation และทดสอบแยกได้', 'มองหาสิ่งที่ส่งเข้าทาง constructor'],
    piece: 'ชิ้นที่ 7 · นโยบายที่เปลี่ยนได้', deliverable: 'Interface + policy จริง + fake policy + test เปรียบเทียบ'
  },
  {
    id: 8, weeks: '12–13', clo: 'CLO3, CLO4, CLO5', title: 'Repository และ Runtime Validation', subtitle: 'แยกแหล่งข้อมูลและไม่เชื่อข้อมูลจากภายนอกทันที',
    outcomes: ['แยกการเก็บข้อมูลผ่าน repository', 'ใช้ Map ป้องกันรหัสซ้ำ', 'ตรวจ unknown input ก่อนเรียก domain'],
    concepts: ['repository ซ่อนรายละเอียดแหล่งข้อมูล', 'in-memory repository เหมาะกับการเรียนและการทดสอบ', 'TypeScript type ไม่ตรวจ JSON ขณะรัน'],
    codeFile: 'ch08-repository-validation.ts',
    code: `type EquipmentRecord = { id: string; name: string };

export class EquipmentRepository {
  #items = new Map<string, EquipmentRecord>();

  add(item: EquipmentRecord): void {
    if (this.#items.has(item.id)) throw new Error("รหัสซ้ำ");
    this.#items.set(item.id, item);
  }

  find(id: string): EquipmentRecord | undefined {
    return this.#items.get(id);
  }
}

export function isLoanRequest(value: unknown): value is { id: string; days: number } {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.id === "string" && Number.isInteger(v.days);
}`,
    walkthrough: ['Map เก็บคู่ id → item และตรวจซ้ำได้', 'find แสดงความเป็นไปได้ว่าไม่พบด้วย undefined', 'type guard ตรวจ unknown ก่อนยืนยันรูปแบบข้อมูล'],
    practice: ['เพิ่ม EQ01 แล้วลองเพิ่มรหัสเดิม', 'ค้นหารหัสที่มีและไม่มี', 'ทดสอบ validator ด้วย null, string, days ทศนิยม และข้อมูลถูกต้อง'],
    quiz: ['เหตุใด request จาก API จึงควรเริ่มเป็น unknown?', ['เพราะเครือข่ายรับรองชนิด TypeScript ให้แล้ว', 'เพื่อบังคับให้ตรวจรูปแบบจริงก่อนใช้งาน', 'เพื่อให้ไม่ต้องตรวจค่า null'], 1, 'ข้อมูลภายนอกอาจไม่ตรง type annotation จึงต้องตรวจขณะรัน', 'ชนิด TypeScript ถูกลบเมื่อแปลงเป็น JavaScript'],
    piece: 'ชิ้นที่ 8 · แหล่งข้อมูลและด่านตรวจ input', deliverable: 'Repository + validator + tests รหัสซ้ำ/ไม่พบ/ข้อมูลผิดรูปแบบ'
  },
  {
    id: 9, weeks: '14', clo: 'CLO2, CLO3, CLO4', title: 'เชื่อม NestJS API กับ React', subtitle: 'React แสดงผล · Controller รับคำขอ · Service บังคับกฎ',
    outcomes: ['อธิบาย request flow ตั้งแต่หน้าจอถึง repository', 'วางกฎธุรกิจไว้ใน service/domain', 'ใช้ React Function Component เรียก API'],
    concepts: ['React ไม่ควรเป็นแหล่งกฎธุรกิจเพียงแห่งเดียว', 'Controller แปลง HTTP เป็นการเรียกใช้ service', 'Service และ domain ต้องทดสอบได้โดยไม่เปิดเซิร์ฟเวอร์'],
    codeFile: 'ch09-nest-react-flow.tsx',
    code: `// NestJS Controller (อยู่ในโปรเจกต์ NestJS)
@Controller("equipment")
export class EquipmentController {
  constructor(private readonly service: EquipmentService) {}
  @Get() list() { return this.service.list(); }
}

// React Function Component (อยู่ในโปรเจกต์ React)
export function EquipmentList() {
  const [items, setItems] = useState<EquipmentDto[]>([]);
  useEffect(() => {
    fetch("/api/equipment").then(r => r.json()).then(setItems);
  }, []);
  return <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>;
}`,
    walkthrough: ['Controller รับ GET /equipment และเรียก service', 'Function Component เก็บ state ด้วย hook', 'fetch รับข้อมูลภายนอก จึงต้องจัดการ loading/error และ validate ที่ Backend'],
    practice: ['วาด React → Controller → Service → Repository', 'ใช้ template ผู้สอนเปิด GET /equipment', 'ทดสอบ success, loading และ error โดยไม่ใช้ Class Component'],
    quiz: ['กฎห้ามยืมซ้ำควรอยู่ที่ใด?', ['เฉพาะปุ่มใน React', 'Service/domain ที่ API เรียกใช้', 'เฉพาะ CSS'], 1, 'Backend service/domain ต้องรักษากฎแม้มีผู้เรียก API โดยตรง', 'หน้าจอไม่ใช่ทางเข้าเดียวของระบบ'],
    piece: 'ชิ้นที่ 9 · เส้นทาง UI ถึงกฎธุรกิจ', deliverable: 'แผนภาพ request flow + ภาพหน้าจอ 3 สถานะ + ผลทดสอบ service'
  },
  {
    id: 10, weeks: '15–16', clo: 'CLO2–CLO6', title: 'ประกอบ Jigsaw เป็น Mini Project', subtitle: 'รวมชิ้นส่วน ตรวจคุณภาพ แล้วออกแบบโครงงานของตนเอง',
    outcomes: ['ประกอบ 9 ชิ้นส่วนเป็นระบบที่อธิบายได้', 'สาธิตตัวอย่างระบบยืม–คืนฉบับสมบูรณ์', 'เสนอ mini project ของตนเองด้วยกฎและหลักฐานทดสอบ'],
    concepts: ['รวมเฉพาะสิ่งที่ตอบโจทย์ ไม่เพิ่มคลาสเพื่อให้ดูซับซ้อน', 'ตรวจ acceptance criteria ทีละข้อ', 'โครงงานใหม่เปลี่ยนบริบทได้ แต่ต้องมีกฎ สถานะ และการทดสอบ'],
    codeFile: 'ch10-mini-project-blueprint.ts',
    code: `// โครงสร้างตัวอย่าง Mini Equipment Loan
// React Function Component
//   ↓ HTTP request
// NestJS Controller
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

const slides = [];
for (const c of chapters) {
  const common = { chapter: c.id, week: c.weeks, clo: c.clo, codeLink: `resource.html?type=code&chapter=${c.id}`, worksheet: `resource.html?type=worksheet&chapter=${c.id}` };
  slides.push({ ...common, kind: 'chapter', title: `บทที่ ${c.id}\n${c.title}`, subtitle: c.subtitle, points: c.outcomes, piece: c.piece, note: `เปิดบทด้วยภาพปลายทางและชิ้นส่วน Jigsaw ที่จะได้ หลีกเลี่ยงการอธิบายศัพท์ทั้งหมดก่อนผู้เรียนเห็นโจทย์` });
  slides.push({ ...common, kind: 'reveal', title: `${c.title}: แนวคิดสำคัญ`, subtitle: 'เปิดทีละข้อ แล้วให้นักศึกษายกตัวอย่างด้วยภาษาของตนเอง', points: c.concepts, details: c.concepts.map((x, i) => `แนวคิด ${i + 1}: ${x}`), note: 'ให้ผู้เรียนเปิดคำอธิบายทีละข้อและเชื่อมกับผลลัพธ์ที่เห็นจากตัวอย่าง' });
  slides.push({ ...common, kind: 'codewalk', title: `อ่านโค้ดทีละส่วน`, subtitle: c.codeFile, points: c.walkthrough, details: c.walkthrough, code: c.code, note: 'อย่าเริ่มด้วยการพิมพ์ตามทั้งหมด ให้ชี้ input, rule, state และ output ก่อน แล้วค่อยรัน' });
  slides.push({ ...common, kind: 'practice', title: `ฝึกตามแบบมีขั้น`, subtitle: 'ทำให้สำเร็จหนึ่งขั้นก่อนเพิ่มความยาก', points: c.practice, hint: `หากติด ให้ย้อนดูโค้ดตัวอย่างบท ${c.id} แล้วเปลี่ยนเพียงหนึ่งจุด`, note: 'เดินตรวจผลลัพธ์จริง ไม่ให้ข้ามไปคัดลอกคำตอบทั้งหมด ผู้เรียนที่เสร็จเร็วให้อธิบายเหตุผลกับเพื่อน' });
  slides.push({ ...common, kind: 'quiz', title: `ตรวจความเข้าใจบทที่ ${c.id}`, subtitle: 'ตอบก่อนเปิดเฉลย · ไม่คิดคะแนนรายวิชา', points: [c.quiz[0]], options: c.quiz[1], answer: c.quiz[2], explain: c.quiz[3], hint: c.quiz[4], note: 'ให้ทุกคนเลือกคำตอบและอธิบายเหตุผลหนึ่งประโยคก่อนเปิดเฉลย' });
  slides.push({ ...common, kind: 'jigsaw', title: `Jigsaw Checkpoint ${c.id}/10`, subtitle: c.piece, points: [c.deliverable, 'นำชิ้นส่วนนี้ไปรวมกับของบทก่อนหน้า', 'ตรวจด้วยผลรันหรือผลทดสอบ ไม่ใช้ความรู้สึกตัดสิน'], piece: c.piece, deliverable: c.deliverable, note: 'ปิดบทด้วยหลักฐานชิ้นเล็กที่ทำสำเร็จได้ แล้วชี้ว่าจะนำไปต่อกับบทถัดไปอย่างไร' });

  writeFileSync(join(examplesDir, c.codeFile), `// บทที่ ${c.id}: ${c.title}\n// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206\n\n${c.code}\n`);
  writeFileSync(join(worksheetsDir, `ch${String(c.id).padStart(2, '0')}.md`), `# ใบงานบทที่ ${c.id}: ${c.title}\n\n## เป้าหมาย\n${c.outcomes.map(x => `- ${x}`).join('\n')}\n\n## เตรียมก่อนทำ\n1. เปิดโค้ดตัวอย่าง [${c.codeFile}](../examples/${c.codeFile})\n2. อ่าน README ของชุด starter และรัน \`npm test\`\n3. ทำนายผลก่อนแก้หรือรันโค้ดทุกครั้ง\n\n## ขั้นฝึก\n${c.practice.map((x, i) => `${i + 1}. ${x}`).join('\n')}\n\n## Jigsaw ที่ต้องส่ง\n**${c.piece}**\n\n${c.deliverable}\n\n## การใช้ AI อย่างมีวิจารณญาณ\n- ทำร่างหรือทำนายผลด้วยตนเองก่อน\n- ขอคำใบ้ เหตุผล หรือกรณีทดสอบ ไม่ขอให้ทำทั้งงาน\n- ตรวจคำตอบด้วยเอกสารทางการและผลรันจริง\n- ส่ง AI log: เครื่องมือ คำถาม ข้อเสนอที่รับ/ปฏิเสธ เหตุผล และผลทดสอบ\n\n## คำถามสะท้อนคิด\n1. ส่วนใดที่เข้าใจมากขึ้นหลังรันหรือทดสอบจริง?\n2. ข้อผิดพลาดใดช่วยให้เห็นกฎของระบบชัดขึ้น?\n3. ชิ้นส่วนนี้จะต่อกับบทก่อนหน้าอย่างไร?\n`);
}

writeFileSync(join(dist, 'slides-data.js'), `const CHAPTERS = ${JSON.stringify(chapters.map(({ id, weeks, clo, title, subtitle, codeFile, piece }) => ({ id, weeks, clo, title, subtitle, codeFile, piece })), null, 2)};\n\nconst SLIDES = ${JSON.stringify(slides, null, 2)};\n`);
console.log(`Generated ${slides.length} slides, ${chapters.length} examples, and ${chapters.length} worksheets.`);
