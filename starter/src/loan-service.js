export class LoanService {
  constructor(repository, policy) {
    if (typeof repository?.findById !== "function") {
      throw new Error("repository ต้องมีเมธอด findById");
    }
    if (typeof policy?.maxDays !== "function") {
      throw new Error("policy ต้องมีเมธอด maxDays");
    }
    this.repository = repository;
    this.policy = policy;
  }

  borrow(equipmentId, days) {
    if (!Number.isInteger(days) || days <= 0 || days > this.policy.maxDays()) {
      throw new Error(`จำนวนวันต้องเป็นจำนวนเต็ม 1–${this.policy.maxDays()} วัน`);
    }
    const item = this.repository.findById(equipmentId);
    if (!item) throw new Error("ไม่พบอุปกรณ์");
    item.borrow();
  }

  giveBack(equipmentId) {
    const item = this.repository.findById(equipmentId);
    if (!item) throw new Error("ไม่พบอุปกรณ์");
    item.giveBack();
  }
}
