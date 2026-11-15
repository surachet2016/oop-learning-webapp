export interface LoanPolicy {
  maxDays(): number;
}

export class StudentLoanPolicy implements LoanPolicy {
  maxDays(): number {
    return 7;
  }
}

export class StaffLoanPolicy implements LoanPolicy {
  maxDays(): number {
    return 14;
  }
}
