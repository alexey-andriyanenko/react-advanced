import { Themes } from "./theme.provider.constants";
import React from "react";

export interface IThemeContext {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}
