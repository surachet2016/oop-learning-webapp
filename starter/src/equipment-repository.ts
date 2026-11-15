import { Equipment } from "./equipment.js";

export interface EquipmentRepository {
  findById(id: string): Equipment | undefined;
  save(item: Equipment): void;
}

export class InMemoryEquipmentRepository implements EquipmentRepository {
  readonly #items = new Map<string, Equipment>();

  findById(id: string): Equipment | undefined {
    return this.#items.get(id);
  }

  save(item: Equipment): void {
    if (this.#items.has(item.id)) throw new Error("รหัสอุปกรณ์ซ้ำ");
    this.#items.set(item.id, item);
  }
}
