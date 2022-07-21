import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IHotel } from "../../types/models/hotel-model";
import { IParamsApiHotels } from "../../types/params-api-hotels";

interface initialStateHotels {
  isLoading: boolean;
  hotels: IHotel[];
  isError: boolean;
}

const initialState: initialStateHotels = {
  isLoading: false,
  hotels: [],
  isError: false,
};

export const hotelsSlice = createSlice({
  initialState: initialState,
  name: "hotels",
  reducers: {
    fetchHotels(state, action: PayloadAction<IParamsApiHotels>) {
      state.isLoading = true;
    },
    fetchHotelsSuccess(state, action: PayloadAction<IHotel[]>) {
      state.hotels = action.payload;
      state.isLoading = false;
    },
    fetchHotelsError(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { fetchHotels, fetchHotelsSuccess, fetchHotelsError } =
  hotelsSlice.actions;
