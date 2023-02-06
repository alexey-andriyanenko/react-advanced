import React from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "app/routes";
import { classnames } from "shared/utils";

import { useTheme } from "./providers/theme";

import "./styles/index.css";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", theme)}>
      <Link to="/main"> MAIN </Link>
      <Link to="/about"> ABOUT </Link>

      <button onClick={toggleTheme}> TOGGLE_THEME </button>

      <AppRoutes />
    </div>
  );
};
