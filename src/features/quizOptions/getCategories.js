
import { createAsyncThunk } from '@reduxjs/toolkit';

const getCategories = createAsyncThunk('categories/getCategories', async () => {
      const response = await fetch('https://opentdb.com/api_category.php');
      const data = await response.json();
      // Handle the fetched data
          
          return data;
        });

export default getCategories;