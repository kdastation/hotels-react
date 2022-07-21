import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "../../../ui-components/text-field/text-field";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsLoginForm } from "../../../validators/validators-login-form";
import { Button } from "../../../ui-components/button/button";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/auth-slice";
import styles from "./form-login.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesPathNames } from "../../../router/routes-path-names";

export interface FormLoginFields {
  login: string;
  password: string;
}

const FormLogin: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { handleSubmit, control } = useForm<FormLoginFields>({
    mode: "onBlur",
    resolver: yupResolver(validatorsLoginForm),
  });

  const { submitData: submitLogin, messageError } = useSubmitData(
    async (data: FormLoginFields) => {
      await dispatch(login(data));
      navigation(RoutesPathNames.HOTELS_PAGE);
    }
  );

  return (
    <form onSubmit={handleSubmit(submitLogin)}>
      <h2 className={styles.title}>Simple Hotel Check</h2>
      <Controller
        control={control}
        name="login"
        render={({ field, fieldState }) => {
          return (
            <div className={styles.text_field}>
              <TextField
                defaultProps={{
                  ...field,
                  value: field.value || "",
                }}
                settings={{
                  title: "Логин",
                  isError:
                    Boolean(fieldState.error?.message) || Boolean(messageError),
                  helperText: fieldState.error?.message || messageError,
                }}
              />
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => {
          return (
            <div className={styles.text_field}>
              <TextField
                defaultProps={{
                  ...field,
                  value: field.value || "",
                  type: "password",
                }}
                settings={{
                  title: "Пароль",
                  isError:
                    Boolean(fieldState.error?.message) || Boolean(messageError),
                  helperText: fieldState.error?.message || messageError,
                }}
              />
            </div>
          );
        }}
      />
      <div className={styles.button_wrapper}>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};

export { FormLogin };
