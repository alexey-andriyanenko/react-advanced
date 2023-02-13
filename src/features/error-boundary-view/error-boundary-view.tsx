import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./error-boundary-view.module.css";

export const ErrorBoundaryView: React.FC = () => {
  const { t } = useTranslation();

  const reload = () => window.location.reload();

  return (
    <div className={styles.container}>
      <div className={styles.title}> {t("error-boundary.title")}</div>
      <button className={styles.button} onClick={reload}>
        {" "}
        {t("error-boundary.button")}{" "}
      </button>
    </div>
  );
};
