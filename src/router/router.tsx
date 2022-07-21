import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../redux/selectors/auth-selector";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesPathNames } from "./routes-path-names";
import { privateRoutes } from "./private-routes";
import { publicRoutes } from "./public-routes";

const Router: FC = () => {
  const isAuth = useSelector(AuthSelector.getAuthStatus);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, Component }) => {
            return <Route path={path} element={<Component />} key={path} />;
          })}
          <Route
            path="*"
            element={<Navigate to={RoutesPathNames.HOTELS_PAGE} replace />}
            key={"*/private"}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, Component }) => {
            return <Route path={path} element={<Component />} key={path} />;
          })}
          <Route
            path="*"
            element={<Navigate to={RoutesPathNames.SIGN_IN_PAGE} replace />}
            key={"*/public"}
          />
        </Routes>
      )}
    </>
  );
};

export { Router };
