import assert from "node:assert/strict";
import { test } from "node:test";
import { Equipment } from "./equipment.js";

test("ยืมและคืนอุปกรณ์ได้", () => {
  const item = new Equipment("EQ01", "Camera");
  item.borrow();
  assert.equal(item.isBorrowed, true);
  item.giveBack();
  assert.equal(item.isBorrowed, false);
});

test("ปฏิเสธการยืมซ้ำ", () => {
  const item = new Equipment("EQ01", "Camera");
  item.borrow();
  assert.throws(() => item.borrow(), /ถูกยืมแล้ว/);
});
