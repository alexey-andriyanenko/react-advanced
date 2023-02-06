import React from "react";
import { RouteProps } from "react-router-dom";

import { AboutPageLazy, MainPageLazy } from "pages";

export const ABOUT_PAGE: RouteProps = {
  path: "/about",
  element: <AboutPageLazy />,
};

export const MAIN_PAGE: RouteProps = {
  path: "/main",
  element: <MainPageLazy />,
};

export const routesList: RouteProps[] = [ABOUT_PAGE, MAIN_PAGE];
