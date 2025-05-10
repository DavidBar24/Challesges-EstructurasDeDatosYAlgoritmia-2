import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import stackReducer from '../features/stackSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    stack: stackReducer,
  },
});