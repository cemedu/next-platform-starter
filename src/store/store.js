import { configureStore } from '@reduxjs/toolkit';
import PopupReducer from './store.slice';
import userSlice from './user.slice';
import loadingSlice from './loading.slice';
import paymentSlice from './payment.slice';

const store = configureStore({
  reducer: {
    popup: PopupReducer,
    user: userSlice,
    loading: loadingSlice,
    payment: paymentSlice
  },
});

export default store;
