import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/theme";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
