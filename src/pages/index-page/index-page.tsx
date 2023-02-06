import React, { memo } from "react";
import { PageContent } from "shared/layout";

import styles from "./index-page.module.css";

export const IndexPage: React.FC = memo(() => {
  return <PageContent className={styles.container}>INDEX_PAGE</PageContent>;
});
