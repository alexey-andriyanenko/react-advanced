import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/theme";
import { ErrorBoundary } from "app/providers/error-boundary";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};
