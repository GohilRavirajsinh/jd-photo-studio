import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Event Coverage',
    'Portrait / Portfolio',
    'Passport Photos',
    'AI Photo Editing',
    'Instagram Reels Editing'
  ],
  formData: {
    name: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  },
  status: 'idle'
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    }
  },
});

export const { updateField, resetForm } = bookingSlice.actions;
export default bookingSlice.reducer;
