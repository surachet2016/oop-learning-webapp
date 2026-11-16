// บทที่ 8: Repository และ Runtime Validation
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export class EquipmentRepository {
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
}
