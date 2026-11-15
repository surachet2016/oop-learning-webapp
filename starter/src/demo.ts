import { Equipment } from "./equipment.js";
import { InMemoryEquipmentRepository } from "./equipment-repository.js";
import { StudentLoanPolicy } from "./loan-policy.js";
import { LoanService } from "./loan-service.js";

const repository = new InMemoryEquipmentRepository();
const camera = new Equipment("EQ01", "Camera");
repository.save(camera);

const service = new LoanService(repository, new StudentLoanPolicy());
service.borrow("EQ01", 7);
console.log({ id: camera.id, name: camera.name, borrowed: camera.isBorrowed });
