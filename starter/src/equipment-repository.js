export class InMemoryEquipmentRepository {
  #items = new Map();

  findById(id) {
    return this.#items.get(id);
  }

  save(item) {
    if (this.#items.has(item.id)) throw new Error("รหัสอุปกรณ์ซ้ำ");
    this.#items.set(item.id, item);
  }
}
