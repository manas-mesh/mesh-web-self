import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoggedInEmployeeStateI {
  data: any;
  isAuthenticated: boolean | null;
}

const initialState: LoggedInEmployeeStateI = {
  data: {},
  isAuthenticated: null,
};

const loggedInEmployeeSlice = createSlice({
  name: 'loggedInEmployee',
  initialState,
  reducers: {
    updateLoggedInEmployee(state, action) {
      state.data = action.payload;
    },

    authenticateLoggedInEmployee(state, action) {
      state.isAuthenticated = action.payload;
    },

    logout(state) {
      state = initialState;
      //TODO: remove localstorage saved  preferences if any
    },
  },
});

export const { updateLoggedInEmployee, authenticateLoggedInEmployee, logout } = loggedInEmployeeSlice.actions;
export default loggedInEmployeeSlice.reducer;
