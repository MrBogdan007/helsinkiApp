
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState:any = []
export const fetchPlaces = createAsyncThunk("comment", async () => {
  const result = await axios.get(`https://open-api.myhelsinki.fi/v2/places/?limit=20`);
  const data = result.data;
  
  return data;
});

const places = createSlice({
  name: "places",
  initialState,
  reducers: {
  },
  extraReducers: (build) => {
    build.addCase(fetchPlaces.fulfilled, (state,action) => {
      return action.payload;
    });
  },
});

const mapReducer = places.reducer


export default mapReducer;