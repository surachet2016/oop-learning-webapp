// บทที่ 8: Repository และ Runtime Validation
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

type EquipmentRecord = { id: string; name: string };

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
}
