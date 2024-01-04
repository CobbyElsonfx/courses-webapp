// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../redux/courses/coursesSlice';
import modulesReducer from '../redux/modules/modulesSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    modules: modulesReducer,
  },
});

export default store;
