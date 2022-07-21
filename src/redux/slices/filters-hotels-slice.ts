import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceDate } from "../../service/service-date/service-date";
import { FiltersHotelsFields } from "../../components/filters-hotels/filters-hotels";

interface initialStateFiltersHotels {
  filters: FiltersHotelsFields;
}

const initialState: initialStateFiltersHotels = {
  filters: {
    city: "Moscow",
    countDays: 1,
    date: ServiceDate.parseDateInString(new Date()),
  },
};

export const filterHotelsSlice = createSlice({
  initialState: initialState,
  name: "filtersHotels",
  reducers: {
    setFilters(state, action: PayloadAction<FiltersHotelsFields>) {
      state.filters.city = action.payload.city;
      state.filters.countDays = action.payload.countDays;
      state.filters.date = action.payload.date;
    },
  },
});

export const { setFilters } = filterHotelsSlice.actions;
