import * as yup from "yup";
export const validatorsLoginForm = yup.object().shape({
  login: yup
    .string()
    .required("Поле обязательно к заполнению")
    .email("Введите, пожалуйста, валидный email"),
  password: yup
    .string()
    .required("Поле обязательно к заполнению")
    .min(8, "Минимум 8 символов")
    .test("without Cyrillic", "Пароль должен быть без кириллицы", (value) => {
      if (!value) {
        return true;
      }
      const isHaveCyrillic = value.match(/[а-яА-ЯёЁ]/);
      if (!isHaveCyrillic) {
        return true;
      }
      return false;
    }),
});
