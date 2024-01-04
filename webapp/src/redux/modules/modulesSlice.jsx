// src/features/modules/moduleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moduleSlice = createSlice({
  name: 'modules',
  initialState: [],
  reducers: {
    setModules: (state, action) => {
      return action.payload;
    },
  },
});

export const { setModules } = moduleSlice.actions;
export default moduleSlice.reducer;

