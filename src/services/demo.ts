import { createSlice } from '@reduxjs/toolkit';
import { IEmployeeModel } from 'models/EmployeeModel';

const slice = createSlice({
  name: 'demo',
  initialState: { employee: null } as EmployeeState,
  reducers: {
    setEmployee: (state, { payload: { entity } }: ThemePayload) => {
      if (!state.employee) {
        state.employee = entity;
      }
    },
  },
});

export const { setEmployee } = slice.actions;

export default slice.reducer;

export type EmployeeState = {
  employee: {} | null | undefined;
};

type ThemePayload = {
  payload: {
    entity: any;
  };
};
