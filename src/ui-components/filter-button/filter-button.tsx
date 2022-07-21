import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./filter-button.module.scss";
import { SelectUp } from "../../assets/icons-components/select-up";
import { SelectDown } from "../../assets/icons-components/select-down";

interface FilterButtonProps {
  defaultProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  settings: {
    isDisabled: boolean;
    isDown: boolean;
  };
  children: ReactNode;
}

const FilterButton: FC<FilterButtonProps> = (props) => {
  const {
    defaultProps,
    settings: { isDisabled, isDown },
    children,
  } = props;
  return (
    <button
      className={classNames(styles.filter_button, {
        [styles.filter_button__disabled]: isDisabled,
      })}
      {...defaultProps}
    >
      {children}
      <span className={styles.filter_button__select_up}>
        <SelectUp isActive={isDown && !isDisabled} />
      </span>
      <span className={styles.filter_button__select_down}>
        <SelectDown isActive={!isDown && !isDisabled} />
      </span>
    </button>
  );
};

export { FilterButton };
