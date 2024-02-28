// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee, EmployeesState, RootState } from './type';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [] as EmployeesState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});
