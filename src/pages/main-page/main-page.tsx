import React from "react";

import { Link } from "shared/ui";
import { PageContent } from "shared/layout";

import styles from "./main-page.module.css";

const MainPage: React.FC = () => {
  return (
    <PageContent className={styles.container}>
      <Link to="/"> BACK </Link>
      MAIN_PAGE
    </PageContent>
  );
};

export default MainPage;
