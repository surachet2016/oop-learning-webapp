# คู่มือการสอนการเขียนโปรแกรมเชิงวัตถุด้วย JavaScript ES6

รายวิชา 07-034-206 · ภาคปลาย ปีการศึกษา 2569

## แนวคิดรายวิชา

ใช้ JavaScript ES6 เป็นภาษาหลัก เพราะเชื่อมกับประสบการณ์ React และ React Native ของผู้เรียนได้โดยตรง เรียน OOP ผ่านกฎธุรกิจของระบบยืม–คืนอุปกรณ์ โดยให้ React Function Components ทำหน้าที่แสดงผล และให้ JavaScript classes, services และ repository ดูแลแบบจำลองกับกฎของระบบ

```text
React Function Components
        ↓ HTTP
Node.js / Express Routes
        ↓
Services และ Domain Objects
        ↓
Repository ในหน่วยความจำ
```

เว็บที่เผยแพร่เป็น static ไม่มี Express service หรือฐานข้อมูลรันค้าง ตัวอย่าง Backend ใช้สำหรับปฏิบัติบนเครื่องเรียนเท่านั้น

## วิธีใช้สไลด์

สไลด์แบ่งเป็น 10 บท บทละ 6 หน้า:

1. เป้าหมายและชิ้นส่วน Jigsaw
2. แนวคิดสำคัญ
3. อ่านโค้ดทีละส่วน
4. ฝึกตามแบบมีขั้น
5. ตรวจความเข้าใจ
6. Jigsaw checkpoint

เริ่มด้วย Mini Equipment Catalog ที่ผู้เรียนรันสำเร็จได้ก่อน แล้วค่อยเพิ่มกฎ สถานะ คลาส การทดสอบ และ API ชิ้นส่วนทุกบทนำไปประกอบเป็น Mini Project ในบทที่ 10

## บทที่ 1 เริ่มจากความสำเร็จเล็ก ๆ

- รัน JavaScript ด้วย Node.js
- อ่าน array, object, function และผลลัพธ์
- เปลี่ยนข้อมูลเพียงหนึ่งจุดแล้วทำนายผลก่อนรัน
- หลักฐาน: ภาพผลรัน ข้อมูลที่เพิ่ม และคำอธิบาย

## บทที่ 2 ข้อมูลและกฎเงื่อนไข

- ใช้ string, number และ boolean ตามความหมายของข้อมูล
- ตรวจจำนวนเต็ม ช่วงที่อนุญาต และสถานะที่ถูกต้อง
- สร้างตารางกรณีปกติ ขอบเขต และผิดเงื่อนไข
- หลักฐาน: ตาราง input กับ expected result

## บทที่ 3 ฟังก์ชันบริสุทธิ์และการทดสอบ

- แยกกฎคำนวณออกจาก UI และฐานข้อมูล
- เขียน automated tests ด้วย `node:test`
- ใช้ผลทดสอบตรวจข้อเสนอจาก AI
- หลักฐาน: ชุดทดสอบที่ผ่านอย่างน้อย 3 กรณี

## บทที่ 4 คลาสและวัตถุ

- อธิบาย class, constructor, instance และ `this`
- วางข้อมูลกับพฤติกรรมที่เกี่ยวข้องไว้ด้วยกัน
- สร้างวัตถุหลายตัวที่มีสถานะแยกกัน
- หลักฐาน: class diagram และโค้ดสร้างวัตถุ

## บทที่ 5 Encapsulation และ Invariant

- ใช้ private field เช่น `#borrowed`
- ตรวจเงื่อนไขก่อนเปลี่ยนสถานะ
- ป้องกันยืมซ้ำและคืนซ้ำ
- หลักฐาน: โค้ดและ tests กรณีปกติ/ผิดเงื่อนไข

## บทที่ 6 Composition ก่อน Inheritance

- แยกความสัมพันธ์ has-a และ is-a
- ให้ Loan อ้างถึง Equipment ด้วย composition
- ใช้ inheritance เฉพาะเมื่อชนิดย่อยมีความหมายจริง
- หลักฐาน: class diagram สองคลาสและ test จำนวนวันผิด

## บทที่ 7 Polymorphism, Strategy และ Dependency Injection

- กำหนดข้อตกลงจากเมธอดที่ผู้เรียกต้องใช้
- ใช้ duck typing ของ JavaScript
- ส่ง policy เข้า constructor เพื่อสลับ implementation
- หลักฐาน: policy จริง fake policy และผลทดสอบเปรียบเทียบ

## บทที่ 8 Repository และ Runtime Validation

- แยกแหล่งข้อมูลออกจากกฎธุรกิจ
- ใช้ Map และป้องกันรหัสซ้ำ
- ตรวจ request ก่อนส่งเข้าสู่ domain
- หลักฐาน: repository, validator และ tests

## บทที่ 9 Express API กับ React Function Components

- อธิบายเส้นทาง React → Express Route → Service → Repository
- ไม่เก็บกฎธุรกิจไว้เฉพาะปุ่มหรือ component
- จัดการ loading, success และ error
- หลักฐาน: request-flow diagram หน้าจอสามสถานะ และผลทดสอบ service

## บทที่ 10 ประกอบ Jigsaw เป็น Mini Project

- รวมชิ้นส่วนเท่าที่ตอบโจทย์ ไม่เพิ่มคลาสเพื่อให้ดูซับซ้อน
- ตรวจ acceptance criteria ทีละข้อ
- เสนอ Mini Project ของตนเองจากผู้ใช้ ปัญหา กฎ และหลักฐานที่พิสูจน์ได้
- หลักฐาน: Project Canvas, demo, tests, README และ AI log

## การใช้ AI อย่างมีวิจารณญาณ

1. ผู้เรียนทำนายผลหรือเขียนร่างด้วยตนเองก่อน
2. ใช้ AI ขอคำใบ้ คำอธิบาย หรือกรณีทดสอบ
3. ตรวจคำตอบด้วยเอกสารและผลรันจริง
4. บันทึกเครื่องมือ คำถาม ข้อเสนอที่รับหรือปฏิเสธ เหตุผล และผลทดสอบ
5. ไม่ใช้ AI ในการทดสอบย่อย การสอบ และการตอบคำถามสดรายบุคคล

## TypeScript ในฐานะบทต่อยอด

TypeScript ไม่ใช่ภาษาหลักและไม่ใช้เป็นเกณฑ์ประเมินหลัก ผู้สอนอาจใช้ช่วงท้ายเปรียบเทียบสั้น ๆ หลังผู้เรียนเข้าใจ JavaScript แล้ว เช่น:

```javascript
function borrow(days) {}
```

```typescript
function borrow(days: number): void {}
```

จุดประสงค์คือให้รู้จัก type annotation และมองเห็นเส้นทางเรียนต่อ ไม่ใช่ให้เปลี่ยนโครงงานทั้งหมดเป็น TypeScript

## คำสั่งชุดเริ่มต้น

```sh
cd starter
npm test
npm run demo
```

ชุดเริ่มต้นไม่มี dependency ภายนอกและใช้ Node.js test runner

## แหล่งอ้างอิง

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://nodejs.org/api/test.html
- https://expressjs.com/
- https://react.dev/learn
