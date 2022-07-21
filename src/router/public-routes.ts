import { IRoute } from "../types/route";
import { RoutesPathNames } from "./routes-path-names";
import { SignInPage } from "../pages/sign-in-page/sign-in-page";

export const publicRoutes: IRoute[] = [
  {
    path: RoutesPathNames.SIGN_IN_PAGE,
    Component: SignInPage,
  },
];
