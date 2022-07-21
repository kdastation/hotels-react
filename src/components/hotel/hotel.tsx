import { FC } from "react";
import { IHotel } from "../../types/models/hotel-model";
import { LikeIcon } from "../../assets/icons-components/like-icon/like-icon";
import houseIcon from "../../assets/images/house.svg";
import { Stars } from "../stars/stars";
import { useDispatch } from "react-redux";
import { addOrRemoveHotel } from "../../redux/slices/favorites-hotels-slice";
import { IFavoriteHotel } from "../../types/models/favorite-hotel-model";
import { ServiceDate } from "../../service/service-date/service-date";
import styles from "./hotel.module.scss";

interface HotelProps {
  hotel: IHotel;
  date: string;
  countDays: number;
  withImage?: boolean;
  isFavorite?: boolean;
}

const Hotel: FC<HotelProps> = (props) => {
  const { hotel, date, countDays, withImage, isFavorite } = props;
  const dispatch = useDispatch();

  const onClickLike = () => {
    const favoriteHotel: IFavoriteHotel = {
      hotel: hotel,
      countDays: countDays,
      startDate: date,
    };
    dispatch(addOrRemoveHotel(favoriteHotel));
  };

  return (
    <div className={styles.hotel}>
      {withImage && (
        <div className={styles.hotel__left}>
          <img className={styles.hotel__image} src={houseIcon} alt="house" />
        </div>
      )}
      <div className={styles.hotel__right}>
        <h4 className={styles.hotel__name}>{hotel.hotelName}</h4>
        <div className={styles.hotel__date}>
          {ServiceDate.convertDateRu(date)} - {countDays} день
        </div>
        <button onClick={onClickLike} className={styles.hotel__like}>
          <LikeIcon isActive={isFavorite} />
        </button>
        <div className={styles.hotel__price}>
          Price: <span>{hotel.priceAvg} ₽</span>
        </div>
        <div>
          <Stars countStars={5} countActiveStars={hotel.stars} />
        </div>
      </div>
    </div>
  );
};

export { Hotel };
