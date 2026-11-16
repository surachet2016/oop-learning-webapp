// บทที่ 9: เชื่อม Express API กับ React
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

// Express route (ฝั่ง Backend)
app.get("/api/equipment", (req, res) => {
  res.json(equipmentService.list());
});

// React Function Component (อยู่ในโปรเจกต์ React)
export function EquipmentList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/equipment").then(r => r.json()).then(setItems);
  }, []);
  return <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>;
}
