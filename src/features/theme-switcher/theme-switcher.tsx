import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "app/providers/theme";

import styles from "./theme-switcher.module.css";

export const ThemeSwitcher: React.FC = memo(() => {
  const { t } = useTranslation();
  const { toggleTheme } = useTheme();

  return (
    <button type="button" className={styles.container} onClick={toggleTheme}>
      {t("theme-switcher")}
    </button>
  );
});
