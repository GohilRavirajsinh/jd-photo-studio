import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['All', 'Weddings', 'Pre-Wedding', 'Portraits', 'Events', 'Creative AI'],
  activeCategory: 'All',
  items: [
    { id: 1, category: 'Weddings', title: 'Eternal Bond', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Portraits', title: 'Urban Soul', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'Pre-Wedding', title: 'Golden Hour Love', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'Creative AI', title: 'Cyberpunk Vision', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Events', title: 'Campus Vibe', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Weddings', title: 'Royal Celebration', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  ]
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = portfolioSlice.actions;
export default portfolioSlice.reducer;
