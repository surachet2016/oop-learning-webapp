// บทที่ 7: Polymorphism, Interface และ DI
// ตัวอย่างเพื่อการเรียนรู้รายวิชา 07-034-206

export interface LoanPolicy {
  maxDays(role: "student" | "staff"): number;
}

export class StandardLoanPolicy implements LoanPolicy {
  maxDays(role: "student" | "staff"): number {
    return role === "student" ? 7 : 14;
  }
}

export class LoanService {
  constructor(private readonly policy: LoanPolicy) {}
  canBorrow(role: "student" | "staff", days: number): boolean {
    return days >= 1 && days <= this.policy.maxDays(role);
  }
}
