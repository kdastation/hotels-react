import { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { FavoritesHotelsSelector } from "../../redux/selectors/favorites-hotels-selector";
import { Hotel } from "../hotel/hotel";
import { FavoritesHotelsService } from "../../service/favorites-hotels-service/favorites-hotels-service";
import { MemoFiltersFavoritesHotels } from "../filters-favorites-hotels/filters-favorites-hotels";
import styles from "./favorites-hotels.module.scss";

const FavoritesHotels: FC = () => {
  const favoritesHotels = useSelector(
    FavoritesHotelsSelector.getFavoritesHotels
  );
  const methodSort = useSelector(FavoritesHotelsSelector.getSortMethod);
  const informationFilters = useSelector(
    FavoritesHotelsSelector.getInformationFilters
  );

  const sortedHotels = useMemo(() => {
    return FavoritesHotelsService.sortHotels(
      favoritesHotels,
      methodSort,
      informationFilters
    );
  }, [favoritesHotels, methodSort, informationFilters]);

  return (
    <div className={styles.favorites_hotels}>
      <h3 className={styles.favorites_hotels__title}>Избранное</h3>
      <div className={styles.favorites_hotels__filters}>
        <MemoFiltersFavoritesHotels
          informationFilters={informationFilters}
          sortMethod={methodSort}
        />
      </div>
      <div>
        {sortedHotels.map((favoriteHotel) => {
          return (
            <Hotel
              key={`${favoriteHotel.hotel.hotelId}_${favoriteHotel.startDate}_${favoriteHotel.countDays}`}
              hotel={favoriteHotel.hotel}
              date={favoriteHotel.startDate}
              countDays={favoriteHotel.countDays}
              isFavorite
            />
          );
        })}
      </div>
    </div>
  );
};

const MemoFavoritesHotels = memo(FavoritesHotels);

export { FavoritesHotels, MemoFavoritesHotels };
