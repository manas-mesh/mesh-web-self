import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {};

const orgDataSlice = createSlice({
  name: 'orgData',
  initialState,
  reducers: {
    addOrgData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addOrgData } = orgDataSlice.actions;
export default orgDataSlice.reducer;
