// บทที่ 10: ประกอบ Jigsaw เป็น Mini Project
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

// โครงสร้างตัวอย่าง Mini Equipment Loan
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
];
