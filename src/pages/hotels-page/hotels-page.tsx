import { FC } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../ui-components/container/container";
import { MemoFavoritesHotels } from "../../components/favorites-hotels/favorites-hotels";
import { FiltersHotels } from "../../components/filters-hotels/filters-hotels";
import { FiltersHotelsSelector } from "../../redux/selectors/filters-hotels-selector";
import { Header } from "../../components/header/header";
import { Hotels } from "../../components/hotels/hotels";
import styles from "./hotels-page.module.scss";

const HotelsPage: FC = () => {
  const filtersHotels = useSelector(FiltersHotelsSelector.getFilters);
  return (
    <>
      <Header />
      <Container maxWidth="1078px">
        <div className={styles.hotels_page}>
          <div className={styles.hotels_page__left}>
            <div className={styles.hotels_page__filters_hotels}>
              <FiltersHotels
                defaultDate={filtersHotels.date}
                defaultCity={filtersHotels.city}
                defaultCountDays={filtersHotels.countDays}
              />
            </div>
            <MemoFavoritesHotels />
          </div>
          <div className={styles.hotels_page__right}>
            <Hotels filtersHotels={filtersHotels} />
          </div>
        </div>
      </Container>
    </>
  );
};

export { HotelsPage };
