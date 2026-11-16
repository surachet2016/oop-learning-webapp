// บทที่ 1: เริ่มจากความสำเร็จเล็ก ๆ
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

type EquipmentItem = { id: string; name: string; available: boolean };

const items: EquipmentItem[] = [
  { id: "EQ01", name: "Camera", available: true },
  { id: "EQ02", name: "Tripod", available: false }
];

function listAvailable(data: EquipmentItem[]): EquipmentItem[] {
  return data.filter(item => item.available);
}

console.log(listAvailable(items));
