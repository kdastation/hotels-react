import axios from "axios";
import { IHotel } from "../../types/models/hotel-model";
import { ServiceDate } from "../service-date/service-date";
import { IParamsApiHotels } from "../../types/params-api-hotels";

export class HotelsApiService {
  static async getHotels(params: IParamsApiHotels) {
    const { dateCheckOutConvert, dateCheckInConvert } =
      HotelsApiService.createParamsDate(params.startDate, params.countDays);
    console.log(params);
    const response = await axios.get<IHotel[]>(
      "http://engine.hotellook.com/api/v2/cache.json",
      {
        params: {
          location: params.location,
          currency: "rub",
          checkIn: dateCheckInConvert,
          checkOut: dateCheckOutConvert,
          limit: 10,
          token: "c590c73af0678a9f155d7d28ccf09182",
        },
      }
    );
    return response.data;
  }
  static createParamsDate(dateCheckIn: string, countDays: number) {
    const dateCheckInConvert = ServiceDate.parseDateInString(
      new Date(dateCheckIn)
    );
    const endDate = new Date(dateCheckIn);
    endDate.setDate(endDate.getDate() + countDays);
    const dateCheckOutConvert = ServiceDate.parseDateInString(endDate);
    return {
      dateCheckInConvert,
      dateCheckOutConvert,
    };
  }
}
