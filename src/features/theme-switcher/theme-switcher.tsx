import React, { memo } from "react";

import { useTheme } from "app/providers/theme";

import styles from "./theme-switcher.module.css";

export const ThemeSwitcher: React.FC = memo(() => {
  const { toggleTheme } = useTheme();

  return (
    <button type="button" className={styles.container} onClick={toggleTheme}>
      TOGGLE_THEME
    </button>
  );
});
