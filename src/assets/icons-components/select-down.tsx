import { FC } from "react";

interface SelectDownProps {
  isActive?: boolean;
}

const SelectDown: FC<SelectDownProps> = (props) => {
  const { isActive } = props;
  const opacity = isActive ? 1 : 0.3;
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
        fill="#41522E"
        fillOpacity={opacity}
      />
    </svg>
  );
};

export { SelectDown };
