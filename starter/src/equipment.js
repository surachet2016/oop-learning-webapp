export class Equipment {
  #borrowed = false;

  constructor(id, name) {
    if (typeof id !== "string" || typeof name !== "string" || !id.trim() || !name.trim()) {
      throw new Error("รหัสและชื่ออุปกรณ์ต้องไม่ว่าง");
    }
    this.id = id;
    this.name = name;
  }

  get isBorrowed() {
    return this.#borrowed;
  }

  borrow() {
    if (this.#borrowed) throw new Error("อุปกรณ์ถูกยืมแล้ว");
    this.#borrowed = true;
  }

  giveBack() {
    if (!this.#borrowed) throw new Error("ไม่มีรายการยืมที่ต้องคืน");
    this.#borrowed = false;
  }
}
