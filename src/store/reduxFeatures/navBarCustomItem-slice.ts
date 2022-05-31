import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavBarCustomItem {
  [key: string]: any;
}

const initialState: NavBarCustomItem = {};

const navBarCustomItem = createSlice({
  name: 'loggedInEmployee',
  initialState,
  reducers: {
    addNavBarCustomItem(state, action) {
      state[action.payload.key] = action.payload.data;
    },

    removeNavBarCustomItem(state, action) {
      const customItemKey = action.payload.key;
      const { [customItemKey]: removedKey, ...rest } = state;
      state = rest;
    },

    clearAllNavBarCustomItem(state) {
      state = initialState;
    },
  },
});

export const { addNavBarCustomItem, removeNavBarCustomItem, clearAllNavBarCustomItem } = navBarCustomItem.actions;
export default navBarCustomItem.reducer;
