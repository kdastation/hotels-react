import { FC, useMemo } from "react";
import { Utils } from "../../utils/utils";
import { StarIcon } from "../../assets/icons-components/star-icon";
import styles from "./stars.module.scss";

interface StarsProps {
  countStars: number;
  countActiveStars: number;
}

const Stars: FC<StarsProps> = (props) => {
  const { countStars, countActiveStars } = props;

  const arrayNumbers = useMemo(() => {
    return Utils.createArrayFromNumber(0, countStars);
  }, [countStars]);

  return (
    <div className={styles.stars}>
      {arrayNumbers.map((number) => {
        return <StarIcon key={number} isActive={number >= countActiveStars} />;
      })}
    </div>
  );
};

export { Stars };
