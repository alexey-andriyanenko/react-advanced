import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { PageContent } from "shared/layout";

import styles from "./index-page.module.css";

export const IndexPage: React.FC = memo(() => {
  const { t } = useTranslation();
  return <PageContent className={styles.container}>{t("index-page.title")}</PageContent>;
});
