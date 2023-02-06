import React from "react";

import { AppRoutes } from "app/routes";
import { classnames } from "shared/utils";
import { Sidebar } from "widgets";

import { useTheme } from "./providers/theme";

import "./styles/index.css";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", theme)}>
      <Sidebar />

      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  );
};
