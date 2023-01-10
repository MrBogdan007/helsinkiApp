
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Place } from "../../types/places";


const initialState:Place[] =  [];
export const fetchPlaces = createAsyncThunk("comment", async () => {
  const result = await axios.get('https://open-api.myhelsinki.fi/v1/places/?limit=10');
  const data = result.data;
  console.log(data);
  
  return data;
});

const places = createSlice({
  name: "places",
  initialState,
  reducers: {
  },
  extraReducers: (build) => {
    build.addCase(fetchPlaces.fulfilled, (state,action) => {
      console.log(action.payload);
      
      return action.payload.data;
    });
  },
});

const mapReducer = places.reducer


export default mapReducer;