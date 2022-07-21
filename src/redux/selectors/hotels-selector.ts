import { rootState } from "../store";

export class HotelsSelector {
  static getFullState(state: rootState) {
    return state.hotels;
  }
}
