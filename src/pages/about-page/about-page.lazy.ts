import React from "react";

export const AboutPageLazy = React.lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./about-page")), 1500);
    }),
);
