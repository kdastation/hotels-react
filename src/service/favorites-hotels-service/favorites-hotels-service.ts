import { TSortMethodFavoritesHotels } from "../../types/sort-method-favorites-hotels";
import { IFiltersFavoritesHotels } from "../../types/filters-favorites-hotels";
import { IFavoriteHotel } from "../../types/models/favorite-hotel-model";

export class FavoritesHotelsService {
  static findHotel(hotels: IFavoriteHotel[], favoriteHotel: IFavoriteHotel) {
    const indexFoundHotel = hotels.findIndex((hotelElement) => {
      return (
        hotelElement.hotel.hotelId === favoriteHotel.hotel.hotelId &&
        favoriteHotel.countDays === hotelElement.countDays &&
        favoriteHotel.startDate === hotelElement.startDate
      );
    });
    return {
      indexFoundHotel,
      foundHotel: hotels[indexFoundHotel],
      isHotelAdded: Boolean(hotels[indexFoundHotel]),
    };
  }

  static removeHotel(hotels: IFavoriteHotel[], indexFavoriteHotel: number) {
    const copyHotels = [...hotels];
    copyHotels.splice(indexFavoriteHotel, 1);
    return copyHotels;
  }

  static sortHotels(
    hotels: IFavoriteHotel[],
    sortMethod: TSortMethodFavoritesHotels,
    informationFilters: IFiltersFavoritesHotels
  ) {
    const copyHotels = [...hotels];
    const sortedHotels = copyHotels.sort((hotel1, hotel2) => {
      const valueHotel1 = hotel1.hotel[sortMethod];
      const valueHotel2 = hotel2.hotel[sortMethod];
      const isDesc = informationFilters[sortMethod].isDown;
      return this.descOrAsc(valueHotel1, valueHotel2, isDesc);
    });
    return sortedHotels;
  }

  private static descOrAsc(arg1: number, arg2: number, isDesc: boolean) {
    return isDesc ? arg1 - arg2 : arg2 - arg1;
  }
}
