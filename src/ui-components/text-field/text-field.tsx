import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./text-field.module.scss";

interface TextFieldProps {
  defaultProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  settings: {
    title: string;
    strongTitle?: boolean;
    isError?: boolean;
    helperText?: string | null;
  };
}

const TextField: FC<TextFieldProps> = (props) => {
  const {
    defaultProps,
    settings: { helperText, title, isError, strongTitle },
  } = props;
  return (
    <div className={styles.text_field_control}>
      {title && (
        <p
          className={classNames(styles.text_field_control__title, {
            [styles.error]: isError,
            [styles.text_field_control__title__strong]: strongTitle,
          })}
        >
          {title}
        </p>
      )}
      <input
        className={classNames(styles.text_field, {
          [styles.error]: isError,
        })}
        {...defaultProps}
      />
      {helperText && (
        <p
          className={classNames(styles.text_field_control_helper_text, {
            [styles.error]: isError,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export { TextField };
