// บทที่ 3: ฟังก์ชันบริสุทธิ์และการทดสอบ
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

import test from "node:test";
import assert from "node:assert/strict";

export function maxLoanDays(role) {
  return role === "student" ? 7 : 14;
}

test("นักศึกษายืมได้ไม่เกิน 7 วัน", () => {
  assert.equal(maxLoanDays("student"), 7);
});

test("บุคลากรยืมได้ไม่เกิน 14 วัน", () => {
  assert.equal(maxLoanDays("staff"), 14);
});
