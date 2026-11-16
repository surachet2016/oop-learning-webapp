// บทที่ 5: Encapsulation และ Invariant
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export class Equipment {
  #borrowed = false;

  borrow(): void {
    if (this.#borrowed) throw new Error("ยืมซ้ำไม่ได้");
    this.#borrowed = true;
  }

  giveBack(): void {
    if (!this.#borrowed) throw new Error("คืนซ้ำไม่ได้");
    this.#borrowed = false;
  }

  isAvailable(): boolean { return !this.#borrowed; }
}
