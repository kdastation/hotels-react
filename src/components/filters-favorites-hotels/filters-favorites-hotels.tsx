import { FilterButton } from "../../ui-components/filter-button/filter-button";
import { useDispatch, useSelector } from "react-redux";
import { FavoritesHotelsSelector } from "../../redux/selectors/favorites-hotels-selector";
import { dataFiltersFavoritesHotels } from "../../data-components/data-filters-favorites-hotels";
import { FC } from "react";
import { changeSortMethod } from "../../redux/slices/favorites-hotels-slice";
import styles from "./filters-favorites-hotels.module.scss";

const FiltersFavoritesHotels: FC = () => {
  const dispatch = useDispatch();
  const sortMethod = useSelector(FavoritesHotelsSelector.getSortMethod);
  const informationFilters = useSelector(
    FavoritesHotelsSelector.getInformationFilters
  );

  return (
    <div className={styles.filters_favorite_hotels}>
      {dataFiltersFavoritesHotels.map((filter) => {
        return (
          <FilterButton
            key={filter.id}
            defaultProps={{
              value: filter.value,
              onClick: () => dispatch(changeSortMethod(filter.value)),
            }}
            settings={{
              isDisabled: filter.value !== sortMethod,
              isDown: informationFilters[filter.value].isDown,
            }}
          >
            {filter.name}
          </FilterButton>
        );
      })}
    </div>
  );
};

export { FiltersFavoritesHotels };
