import assert from "node:assert/strict";
import { test } from "node:test";
import { Equipment } from "./equipment.js";
import { InMemoryEquipmentRepository } from "./equipment-repository.js";
import { StudentLoanPolicy } from "./loan-policy.js";
import { LoanService } from "./loan-service.js";

function setup() {
  const repository = new InMemoryEquipmentRepository();
  const item = new Equipment("EQ01", "Camera");
  repository.save(item);
  return { item, service: new LoanService(repository, new StudentLoanPolicy()) };
}

test("นักศึกษายืมไม่เกิน 7 วันได้", () => {
  const { item, service } = setup();
  service.borrow("EQ01", 7);
  assert.equal(item.isBorrowed, true);
});

test("ปฏิเสธจำนวนวันที่เกินนโยบายโดยไม่เปลี่ยนสถานะ", () => {
  const { item, service } = setup();
  assert.throws(() => service.borrow("EQ01", 8), /1–7/);
  assert.equal(item.isBorrowed, false);
});
