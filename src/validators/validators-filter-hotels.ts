import * as yup from "yup";

export const validatorsFilterHotels = yup.object().shape({
  city: yup.string().required("Поле обязательно к заполнению"),
  date: yup.string().required("Поле обязательно к заполнению"),
  countDays: yup.number().required("Поле обязательно к заполнению"),
});
