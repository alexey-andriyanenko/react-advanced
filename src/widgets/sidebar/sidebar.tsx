import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "shared/ui";
import { LangSwitcher, ThemeSwitcher } from "features";

import styles from "./sidebar.module.css";
import { ABOUT_PAGE, MAIN_PAGE } from "app/routes";

export const Sidebar: React.FC = memo(() => {
  const { t } = useTranslation();

  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <ThemeSwitcher />
        <LangSwitcher />

        <Link to={ABOUT_PAGE.path}> {t("about-page.title")} </Link>
        <Link to={MAIN_PAGE.path}> {t("main-page.title")} </Link>
      </div>
    </aside>
  );
});
