// บทที่ 1: อ่านโครงสร้าง JavaScript และมองแบบ OOP
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

// 1) ข้อมูลของวัตถุหนึ่งชิ้น
const equipment = {
  id: "EQ01",
  name: "Camera",
  available: true
};

// 2) พฤติกรรมที่อ่านข้อมูลแล้วสร้างข้อความ
function describeEquipment(item) {
  let status = "ถูกยืม";
  if (item.available === true) {
    status = "พร้อมยืม";
  }
  return item.id + " - " + item.name + " - " + status;
}

// 3) เรียกใช้พฤติกรรมและแสดงผล
const message = describeEquipment(equipment);
console.log(message);
