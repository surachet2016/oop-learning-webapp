// บทที่ 9: เชื่อม NestJS API กับ React
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

// NestJS Controller (อยู่ในโปรเจกต์ NestJS)
@Controller("equipment")
export class EquipmentController {
  constructor(private readonly service: EquipmentService) {}
  @Get() list() { return this.service.list(); }
}

// React Function Component (อยู่ในโปรเจกต์ React)
export function EquipmentList() {
  const [items, setItems] = useState<EquipmentDto[]>([]);
  useEffect(() => {
    fetch("/api/equipment").then(r => r.json()).then(setItems);
  }, []);
  return <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>;
}
