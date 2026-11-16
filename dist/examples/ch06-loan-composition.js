// บทที่ 6: Composition ก่อน Inheritance
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

// รับ object ของ Equipment ที่สร้างจากบทก่อนหน้า
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

// Loan มี Equipment เป็นส่วนประกอบ ไม่ได้สืบทอดจาก Equipment
