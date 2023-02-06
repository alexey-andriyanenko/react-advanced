import React, { memo } from "react";

import { Link } from "shared/ui";

import styles from "./sidebar.module.css";
import { ABOUT_PAGE, MAIN_PAGE } from "app/routes";

export const Sidebar: React.FC = memo(() => {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <Link to={ABOUT_PAGE.path}> About Page </Link>
        <Link to={MAIN_PAGE.path}> Main Page</Link>
      </div>
    </aside>
  );
});
