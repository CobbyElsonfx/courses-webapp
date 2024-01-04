// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define a slice for courses using createSlice
const courseSlice = createSlice({
  // unique name for identifying the slice
  name: 'courses',
  // defines the initial state
  initialState: [],
  reducers: {
    // this updates the state whewnever a payload is recieved/ a new action is dispatched
    setCourses: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
