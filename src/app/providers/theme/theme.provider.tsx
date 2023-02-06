import React, { FC, PropsWithChildren, useMemo, useState, createContext } from "react";
import { IThemeContext } from "./theme.provider.types";

import { THEME_LOCAL_STORAGE_KEY, Themes } from "./theme.provider.constants";

const currentTheme = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Themes) || Themes.Light;

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(currentTheme);

  const providerValue: IThemeContext = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
