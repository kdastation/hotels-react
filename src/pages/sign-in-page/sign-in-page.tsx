import { FC } from "react";
import { FormLogin } from "../../components/forms/form-login/form-login";
import { Modal } from "../../ui-components/modal/modal";
import styles from "./sign-in-page.module.scss";

const SignInPage: FC = () => {
  return (
    <div className={styles.sign_in}>
      <Modal isOpen={true}>
        <FormLogin />
      </Modal>
    </div>
  );
};

export { SignInPage };
