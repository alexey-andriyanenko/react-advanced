import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { ABOUT_PAGE, MAIN_PAGE } from "app/routes";
import { Link } from "shared/ui";
import { LangSwitcher, ThemeSwitcher } from "features";

import styles from "./sidebar.module.css";

export const Sidebar: React.FC = memo(() => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  React.useEffect(() => {
    if (!error) return;
    throw new Error("APP CRASH");
  }, [error]);

  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <ThemeSwitcher />
        <LangSwitcher />

        <button onClick={() => setError(true)}> THROW ERROR </button>

        <Link to={ABOUT_PAGE.path}> {t("about-page.title")} </Link>
        <Link to={MAIN_PAGE.path}> {t("main-page.title")} </Link>
      </div>
    </aside>
  );
});
