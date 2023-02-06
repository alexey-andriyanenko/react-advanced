import React from "react";

export const MainPageLazy = React.lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./main-page")), 2000);
    }),
);
