// บทที่ 6: Composition ก่อน Inheritance
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

import { Equipment } from "./equipment.js";

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

// Loan มี Equipment เป็นส่วนประกอบ ไม่ได้สืบทอดจาก Equipment
