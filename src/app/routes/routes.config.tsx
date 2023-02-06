import React from "react";

import { AboutPageLazy, IndexPage, MainPageLazy } from "pages";

interface IRouteType {
  path: string;
  element: JSX.Element;
}

export const INDEX_PAGE: IRouteType = {
  path: "/",
  element: <IndexPage />,
};

export const ABOUT_PAGE: IRouteType = {
  path: "/about",
  element: <AboutPageLazy />,
};

export const MAIN_PAGE: IRouteType = {
  path: "/main",
  element: <MainPageLazy />,
};

export const routesList: IRouteType[] = [INDEX_PAGE, ABOUT_PAGE, MAIN_PAGE];
