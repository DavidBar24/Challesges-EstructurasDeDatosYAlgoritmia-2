import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from '../features/firebase/firebaseSlice';

export default configureStore({
  reducer: {
    firebase: firebaseReducer
  }
});