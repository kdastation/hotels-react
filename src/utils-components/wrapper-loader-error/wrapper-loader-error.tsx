import { ElementType, FC, ReactNode } from "react";

interface WrapperLoaderErrorProps {
  isLoading: boolean;
  isError: boolean;
  Loader?: ElementType;
  children: ReactNode;
}

const WrapperLoaderError: FC<WrapperLoaderErrorProps> = (props) => {
  const { isError, isLoading, children, Loader } = props;

  if (isLoading) {
    return <>{Loader ? <Loader /> : <div>Loading..</div>}</>;
  }

  if (isError) {
    return <div>Произошла ошибка</div>;
  }

  return <>{children}</>;
};

export { WrapperLoaderError };
