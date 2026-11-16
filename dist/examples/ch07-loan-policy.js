// บทที่ 7: Polymorphism, Strategy และ DI
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export class StandardLoanPolicy {
  maxDays(role) {
    return role === "student" ? 7 : 14;
  }
}

export class LoanService {
  constructor(policy) {
    if (typeof policy?.maxDays !== "function") {
      throw new Error("policy ต้องมีเมธอด maxDays");
    }
    this.policy = policy;
  }

  canBorrow(role, days) {
    return days >= 1 && days <= this.policy.maxDays(role);
  }
}
