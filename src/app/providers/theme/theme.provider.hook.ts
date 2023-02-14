import { useContext } from "react";
import { ThemeContext } from "./theme.provider";
import { THEME_LOCAL_STORAGE_KEY, Themes } from "./theme.provider.constants";

interface IUseThemReturnType {
  theme: Themes;
  toggleTheme: VoidFunction;
}

export const useTheme = (): IUseThemReturnType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Cannot find ThemeContext");

  const toggleTheme = () => {
    const newTheme = context.theme === Themes.Dark ? Themes.Light : Themes.Dark;
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);

    context.setTheme(newTheme);
  };

  return {
    theme: context.theme,
    toggleTheme,
  };
};
