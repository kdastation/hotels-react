import { rootState } from "../store";

export class FavoritesHotelsSelector {
  static getFavoritesHotels(state: rootState) {
    return state.favoritesHotels.hotels;
  }
  static getSortMethod(state: rootState) {
    return state.favoritesHotels.sortMethod;
  }
  static getInformationFilters(state: rootState) {
    return state.favoritesHotels.filters;
  }
  static getCountAddedHotels(state: rootState) {
    return state.favoritesHotels.countAddedHotels;
  }
}
