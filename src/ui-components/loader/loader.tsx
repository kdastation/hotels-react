import { FC } from "react";
import styles from "./loader.module.scss";

const Loader: FC = () => {
  return <div className={styles.lds_dual_ring}></div>;
};

export { Loader };
