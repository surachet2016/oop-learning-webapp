// บทที่ 4: คลาสและวัตถุ
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export class Equipment {
  #borrowed = false;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  isAvailable() {
    return !this.#borrowed;
  }
}

const camera = new Equipment("EQ01", "Camera");
const tripod = new Equipment("EQ02", "Tripod");
console.log(camera.isAvailable(), tripod.isAvailable());
