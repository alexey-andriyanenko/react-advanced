import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { routesList } from "app/routes/routes.config";

export const AppRoutes: FC = () => {
  return (
    <React.Suspense fallback="loading...">
      <Routes>
        {routesList.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </React.Suspense>
  );
};
