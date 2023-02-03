import React from "react";
import {Link, Route, Routes} from "react-router-dom";

import { MainPageLazy, AboutPageLazy } from "./pages";
import {useTheme} from "./providers";

import "./styles/index.css";
import {classnames} from "./utils";


export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
        <div className={classnames("app", theme)}>
          <Link to="/main"> MAIN </Link>
          <Link to="/about"> ABOUT </Link>

          <button onClick={toggleTheme}> TOGGLE_THEME </button>

          <React.Suspense fallback={<div> Loading... </div>}>
            <Routes>
              <Route path="/main" element={<MainPageLazy />}  />
              <Route path="/about" element={<AboutPageLazy />} />
            </Routes>
          </React.Suspense>
        </div>
  )
};
