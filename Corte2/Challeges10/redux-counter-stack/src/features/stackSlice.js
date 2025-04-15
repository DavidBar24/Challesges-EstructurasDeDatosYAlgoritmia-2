import { createSlice } from '@reduxjs/toolkit';

export const stackSlice = createSlice({
  name: 'stack',
  initialState: {
    items: [],
  },
  reducers: {
    push: (state, action) => {
      state.items.push(action.payload);
    },
    shift: (state) => {
      state.items.shift();
    },
    clear: (state) => {
      state.items = [];
    }
  },
});

export const { push, shift, clear } = stackSlice.actions;
export default stackSlice.reducer;