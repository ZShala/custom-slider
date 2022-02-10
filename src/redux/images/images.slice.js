import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import imagesAPI from "../../api/images";

export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const { data } = await imagesAPI.fetchImages();
  return data;
});

const imagesSlice = createSlice({
  name: "images",
  initialState: { images: [], value: 5, loading: "idle" },
  reducers: {
    decrement: (state) => {
      console.log('state', state)
      state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.loading = "success";
      state.images = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export const { decrement } = imagesSlice.actions
export default imagesSlice.reducer;
