import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "shared/ui";
import { PageContent } from "shared/layout";

import styles from "./about-page.module.css";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContent className={styles.container}>
      <Link to="/"> {t("back-link")} </Link>
      {t("about-page.title")}
    </PageContent>
  );
};

export default AboutPage;
