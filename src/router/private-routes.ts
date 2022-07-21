import { IRoute } from "../types/route";
import { RoutesPathNames } from "./routes-path-names";
import { HotelsPage } from "../pages/hotels-page/hotels-page";

export const privateRoutes: IRoute[] = [
  {
    path: RoutesPathNames.HOTELS_PAGE,
    Component: HotelsPage,
  },
];
