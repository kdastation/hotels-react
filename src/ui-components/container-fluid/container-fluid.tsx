import { FC, ReactNode } from "react";

interface ContainerFluidProps {
  paddingLeftRight: string;
  children: ReactNode;
}

const ContainerFluid: FC<ContainerFluidProps> = (props) => {
  const { children, paddingLeftRight } = props;
  return (
    <div
      style={{ paddingLeft: paddingLeftRight, paddingRight: paddingLeftRight }}
    >
      {children}
    </div>
  );
};

export { ContainerFluid };
