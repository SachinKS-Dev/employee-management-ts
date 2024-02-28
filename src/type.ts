// types.ts
export interface Employee {
  id: string;
  dateOfJoining: string;
  firstName: string;
  middleName: string;
  lastName: string;
  sex: string;
  department: string;
}

export type EmployeesState = Employee[];

export interface RootState {
  employees: EmployeesState;
}
