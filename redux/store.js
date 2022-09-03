import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import courseSlice from './courseSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    course: courseSlice,
  },
});
