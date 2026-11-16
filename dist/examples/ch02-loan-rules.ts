// บทที่ 2: ข้อมูลและกฎเงื่อนไข
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

type EquipmentStatus = "available" | "borrowed";

function canBorrow(status: EquipmentStatus, days: number): boolean {
  const validDays = Number.isInteger(days) && days >= 1 && days <= 7;
  return status === "available" && validDays;
}

console.log(canBorrow("available", 7)); // true
console.log(canBorrow("borrowed", 7));  // false
console.log(canBorrow("available", 8)); // false
