import React from "react";

import { Link } from "shared/ui";
import { PageContent } from "shared/layout";

import styles from "./about-page.module.css";

const AboutPage: React.FC = () => {
  return (
    <PageContent className={styles.container}>
      <Link to="/"> BACK </Link>
      ABOUT_PAGE
    </PageContent>
  );
};

export default AboutPage;
