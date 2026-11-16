// บทที่ 4: คลาสและวัตถุ
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export class Equipment {
  constructor(
    public readonly id: string,
    public readonly name: string,
    private borrowed = false
  ) {}

  isAvailable(): boolean {
    return !this.borrowed;
  }
}

const camera = new Equipment("EQ01", "Camera");
const tripod = new Equipment("EQ02", "Tripod");
console.log(camera.isAvailable(), tripod.isAvailable());
