import { FC } from "react";
import { LogoutIcon } from "../../assets/icons-components/logout-icon";
import { ContainerFluid } from "../../ui-components/container-fluid/container-fluid";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth-slice";
import styles from "./header.module.scss";

const Header: FC = () => {
  const dispatch = useDispatch();

  const logoutOnClick = () => {
    dispatch(logout());
  };

  return (
    <ContainerFluid paddingLeftRight="3.2rem">
      <header className={styles.header}>
        <h3 className={styles.header__title}>Simple Hotel Check</h3>
        <button onClick={logoutOnClick} className={styles.header_button}>
          Выйти
          <span className={styles.header_button__icon}>
            <LogoutIcon />
          </span>
        </button>
      </header>
    </ContainerFluid>
  );
};

export { Header };
