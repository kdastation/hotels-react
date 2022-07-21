import { FC } from "react";
import { useSelector } from "react-redux";
import { FavoritesHotelsSelector } from "../../redux/selectors/favorites-hotels-selector";
import styles from "./count-favorites-hotels.module.scss";

const CountFavoritesHotels: FC = () => {
  const countFavoritesHotels = useSelector(
    FavoritesHotelsSelector.getCountAddedHotels
  );

  return (
    <div className={styles.count_favorites_hotels}>
      <p className={styles.count_favorites_hotels_text}>
        Добавлено в избранное: <span>{countFavoritesHotels}</span> отеля
      </p>
    </div>
  );
};

export { CountFavoritesHotels };
