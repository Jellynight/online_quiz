import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    selsectedCategory: null,
    loading: false,
    error: null
  },
  reducers: {
    // Define your reducers here
    setCategories: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
    

  }
});

export const { setCategories, setLoading, setError, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;