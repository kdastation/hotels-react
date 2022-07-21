import { FC, ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  maxWidth: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = (props) => {
  const { children, maxWidth } = props;
  return (
    <div style={{ maxWidth }} className={styles.container}>
      {children}
    </div>
  );
};

export { Container };
