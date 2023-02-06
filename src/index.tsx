import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "app";
import { Providers } from "app/providers";

const rootElement = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Providers>
    <App />
  </Providers>,
);
