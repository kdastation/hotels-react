import { ILocation } from "./location-model";

export interface IHotel {
  hotelId: number;
  hotelName: string;
  stars: number;
  priceAvg: number;
  priceFrom: number;
  location: ILocation;
}
