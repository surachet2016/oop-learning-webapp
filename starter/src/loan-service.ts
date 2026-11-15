import type { EquipmentRepository } from "./equipment-repository.js";
import type { LoanPolicy } from "./loan-policy.js";

export class LoanService {
  constructor(
    private readonly repository: EquipmentRepository,
    private readonly policy: LoanPolicy,
  ) {}

  borrow(equipmentId: string, days: number): void {
    if (!Number.isInteger(days) || days <= 0 || days > this.policy.maxDays()) {
      throw new Error(`จำนวนวันต้องเป็นจำนวนเต็ม 1–${this.policy.maxDays()} วัน`);
    }
    const item = this.repository.findById(equipmentId);
    if (!item) throw new Error("ไม่พบอุปกรณ์");
    item.borrow();
  }

  giveBack(equipmentId: string): void {
    const item = this.repository.findById(equipmentId);
    if (!item) throw new Error("ไม่พบอุปกรณ์");
    item.giveBack();
  }
}
