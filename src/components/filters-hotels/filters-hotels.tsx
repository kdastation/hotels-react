import { FC } from "react";
import { TextField } from "../../ui-components/text-field/text-field";
import { Button } from "../../ui-components/button/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsFilterHotels } from "../../validators/validators-filter-hotels";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/slices/filters-hotels-slice";
import styles from "./filters-hotels.module.scss";

export interface FiltersHotelsFields {
  city: string;
  date: string;
  countDays: number;
}

interface FiltersHotelsProps {
  defaultCity: string;
  defaultDate: string;
  defaultCountDays: number;
}

const FiltersHotels: FC<FiltersHotelsProps> = (props) => {
  const { defaultCity, defaultDate, defaultCountDays } = props;
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<FiltersHotelsFields>({
    mode: "onBlur",
    resolver: yupResolver(validatorsFilterHotels),
    defaultValues: {
      city: defaultCity,
      countDays: defaultCountDays,
      date: defaultDate,
    },
  });
  const changeFiltersSubmit = (data: FiltersHotelsFields) => {
    dispatch(setFilters(data));
  };
  return (
    <form
      onSubmit={handleSubmit(changeFiltersSubmit)}
      className={styles.filters_hotels}
    >
      <Controller
        control={control}
        name="city"
        render={({ field, fieldState }) => {
          return (
            <div className={styles.filters_hotels__text_field}>
              <TextField
                defaultProps={{
                  type: "text",
                  ...field,
                  value: field.value || "",
                }}
                settings={{
                  title: "Локация",
                  isError: Boolean(fieldState.error?.message),
                  helperText: fieldState.error?.message,
                  strongTitle: true,
                }}
              />
            </div>
          );
        }}
      />

      <Controller
        control={control}
        name="date"
        render={({ field, fieldState }) => {
          return (
            <div className={styles.filters_hotels__text_field}>
              <TextField
                defaultProps={{
                  type: "date",
                  ...field,
                  value: field.value || "",
                }}
                settings={{
                  title: "Дата заселения",
                  isError: Boolean(fieldState.error?.message),
                  helperText: fieldState.error?.message,
                  strongTitle: true,
                }}
              />
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="countDays"
        render={({ field, fieldState }) => {
          return (
            <div className={styles.filters_hotels__text_field}>
              <TextField
                defaultProps={{
                  type: "number",
                  ...field,
                  value: field.value || "",
                }}
                settings={{
                  title: "Количество дней",
                  isError: Boolean(fieldState.error?.message),
                  helperText: fieldState.error?.message,
                  strongTitle: true,
                }}
              />
            </div>
          );
        }}
      />
      <div className={styles.filters_hotels__button}>
        <Button type="submit">Найти</Button>
      </div>
    </form>
  );
};

export { FiltersHotels };
