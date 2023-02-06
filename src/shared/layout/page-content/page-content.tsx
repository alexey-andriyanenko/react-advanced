import React, { memo, PropsWithChildren } from "react";

import { classnames } from "shared/utils";

import styles from "./page-content.module.css";

interface IPageContentProps extends React.HTMLProps<HTMLDivElement>, PropsWithChildren {}

export const PageContent: React.FC<IPageContentProps> = memo<IPageContentProps>(
  ({ children, className, ...props }) => {
    return (
      <div {...props} className={classnames(styles.container, className)}>
        {children}
      </div>
    );
  },
);
