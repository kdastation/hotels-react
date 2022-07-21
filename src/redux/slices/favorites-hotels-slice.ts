import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FavoritesHotelsService } from "../../service/favorites-hotels-service/favorites-hotels-service";
import { TSortMethodFavoritesHotels } from "../../types/sort-method-favorites-hotels";
import { IFiltersFavoritesHotels } from "../../types/filters-favorites-hotels";
import { IFavoriteHotel } from "../../types/models/favorite-hotel-model";

interface initialStateFavoritesHotels {
  hotels: IFavoriteHotel[];
  sortMethod: TSortMethodFavoritesHotels;
  filters: IFiltersFavoritesHotels;
  countAddedHotels: number;
}

const initialState: initialStateFavoritesHotels = {
  hotels: [],
  sortMethod: "stars",
  filters: { priceAvg: { isDown: true }, stars: { isDown: false } },
  countAddedHotels: 0,
};

export const favoritesHotelsSlice = createSlice({
  initialState: initialState,
  name: "favoritesHotels",
  reducers: {
    addOrRemoveHotel(state, action: PayloadAction<IFavoriteHotel>) {
      const hotel = action.payload;
      const { foundHotel, indexFoundHotel } = FavoritesHotelsService.findHotel(
        state.hotels,
        hotel
      );
      if (!foundHotel) {
        state.hotels.push(hotel);
        state.countAddedHotels += 1;
      } else {
        state.hotels = FavoritesHotelsService.removeHotel(
          state.hotels,
          indexFoundHotel
        );
        state.countAddedHotels -= 1;
      }
    },
    changeSortMethod(state, action: PayloadAction<TSortMethodFavoritesHotels>) {
      const receivedSortMethod = action.payload;
      if (state.sortMethod === receivedSortMethod) {
        state.filters[receivedSortMethod].isDown =
          !state.filters[receivedSortMethod].isDown;
      } else {
        state.sortMethod = receivedSortMethod;
      }
    },
  },
});

export const { addOrRemoveHotel, changeSortMethod } =
  favoritesHotelsSlice.actions;
