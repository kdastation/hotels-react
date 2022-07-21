import { FC, ReactNode } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  const { onClose, isOpen, children } = props;
  return (
    <>
      {isOpen && (
        <div className={styles.modal} onClick={onClose}>
          <div
            className={styles.modal__content}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
