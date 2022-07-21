import { FilterButton } from "../../ui-components/filter-button/filter-button";
import { useDispatch, useSelector } from "react-redux";
import { dataFiltersFavoritesHotels } from "../../data-components/data-filters-favorites-hotels";
import { FC, memo } from "react";
import { changeSortMethod } from "../../redux/slices/favorites-hotels-slice";
import { TSortMethodFavoritesHotels } from "../../types/sort-method-favorites-hotels";
import { IFiltersFavoritesHotels } from "../../types/filters-favorites-hotels";
import styles from "./filters-favorites-hotels.module.scss";

interface FiltersFavoritesHotelsProps {
  sortMethod: TSortMethodFavoritesHotels;
  informationFilters: IFiltersFavoritesHotels;
}

const FiltersFavoritesHotels: FC<FiltersFavoritesHotelsProps> = (props) => {
  const { sortMethod, informationFilters } = props;
  const dispatch = useDispatch();

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

const MemoFiltersFavoritesHotels = memo(FiltersFavoritesHotels);

export { FiltersFavoritesHotels, MemoFiltersFavoritesHotels };
