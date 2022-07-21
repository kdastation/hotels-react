import { IUser } from "../../types/models/user-model";

class AuthService {
  private key = "auth";
  public setAuthDataInLocalStorage(data: IUser) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  public removeAuthDataInLocalStorage() {
    localStorage.removeItem(this.key);
  }
  public getAuthDataInLocalStorage() {
    const itemFromLocalStorage = localStorage.getItem(this.key);
    if (itemFromLocalStorage) {
      return {
        dataUser: JSON.parse(itemFromLocalStorage),
        isAuth: true,
      };
    }
    return {
      dataUser: {},
      isAuth: false,
    };
  }
}

export default new AuthService();
