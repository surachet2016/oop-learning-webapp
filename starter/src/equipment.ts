export class Equipment {
  #borrowed = false;

  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {
    if (!id.trim() || !name.trim()) {
      throw new Error("รหัสและชื่ออุปกรณ์ต้องไม่ว่าง");
    }
  }

  get isBorrowed(): boolean {
    return this.#borrowed;
  }

  borrow(): void {
    if (this.#borrowed) throw new Error("อุปกรณ์ถูกยืมแล้ว");
    this.#borrowed = true;
  }

  giveBack(): void {
    if (!this.#borrowed) throw new Error("ไม่มีรายการยืมที่ต้องคืน");
    this.#borrowed = false;
  }
}
