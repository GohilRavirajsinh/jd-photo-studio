import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    booking: bookingReducer,
  },
});
