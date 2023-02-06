import React, { memo, PropsWithChildren } from "react";
import { Link as RouterLink, NavLinkProps } from "react-router-dom";
import { classnames } from "shared/utils";

import styles from "./link.module.css";

export interface ILinkProps extends PropsWithChildren, Pick<NavLinkProps, "to"> {
  className?: string;
}

export const Link: React.FC<ILinkProps> = memo(({ children, to, className }) => {
  return (
    <RouterLink className={classnames(styles.link, className)} to={to}>
      {children}
    </RouterLink>
  );
});
