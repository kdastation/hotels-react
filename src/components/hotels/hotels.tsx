import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IParamsApiHotels } from "../../types/params-api-hotels";
import { fetchHotels } from "../../redux/slices/hotels-slice";
import { FiltersHotelsFields } from "../filters-hotels/filters-hotels";
import { HotelsSelector } from "../../redux/selectors/hotels-selector";
import { Hotel } from "../hotel/hotel";
import classNames from "classnames";
import { CountFavoritesHotels } from "../count-favorites-hotelts/count-favorites-hotels";
import { SliderHotelsImages } from "../slider-hotels-images/slider-hotels-images";
import { ServiceDate } from "../../service/service-date/service-date";
import { WrapperLoaderError } from "../../utils-components/wrapper-loader-error/wrapper-loader-error";
import { Loader } from "../../ui-components/loader/loader";
import styles from "./hotels.module.scss";

interface HotelsProps {
  filtersHotels: FiltersHotelsFields;
}

const Hotels: FC<HotelsProps> = (props) => {
  const { filtersHotels } = props;
  const dispatch = useDispatch();

  const { hotels, isError, isLoading } = useSelector(
    HotelsSelector.getFullState
  );

  useEffect(() => {
    const params: IParamsApiHotels = {
      startDate: filtersHotels.date,
      location: filtersHotels.city,
      countDays: filtersHotels.countDays,
    };
    dispatch(fetchHotels(params));
  }, [filtersHotels]);

  return (
    <div className={styles.hotels}>
      <div className={styles.hotels__top}>
        <h3 className={classNames(styles.hotels__text, styles.hotels__title)}>
          Отели
        </h3>
        <h3 className={classNames(styles.hotels__text, styles.hotels__city)}>
          {filtersHotels.city}
        </h3>
        <h4 className={styles.hotels__date}>
          {ServiceDate.convertDateRu(filtersHotels.date)}
        </h4>
      </div>
      <div>
        <SliderHotelsImages />
      </div>
      <div>
        <CountFavoritesHotels />
      </div>
      <WrapperLoaderError
        isLoading={isLoading}
        isError={isError}
        Loader={Loader}
      >
        <div className={styles.hotels_list}>
          {hotels.map((hotel) => {
            return (
              <Hotel
                key={hotel.hotelId}
                hotel={hotel}
                date={filtersHotels.date}
                countDays={filtersHotels.countDays}
                withImage
              />
            );
          })}
        </div>
      </WrapperLoaderError>
    </div>
  );
};

export { Hotels };
