import { rootState } from "../store";

export class AuthSelector {
  static getAuthStatus(state: rootState) {
    return state.auth.isAuth;
  }
}
