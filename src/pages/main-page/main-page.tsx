import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "shared/ui";
import { PageContent } from "shared/layout";

import styles from "./main-page.module.css";

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.container}>
      <Link to="/"> {t("back-link")} </Link>
      {t("main-page.title")}
    </PageContent>
  );
};

export default MainPage;
