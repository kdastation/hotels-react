import { IHotel } from "./hotel-model";

export interface IFavoriteHotel {
  hotel: IHotel;
  countDays: number;
  startDate: string;
}
