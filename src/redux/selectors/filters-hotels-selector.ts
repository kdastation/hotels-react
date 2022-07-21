import { rootState } from "../store";

export class FiltersHotelsSelector {
  static getFilters(state: rootState) {
    return state.filtersHotels.filters;
  }
}
