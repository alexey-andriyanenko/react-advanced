import React from "react";
import { render, screen } from "@testing-library/react";

import { Providers } from "app/providers";
import { Sidebar } from "widgets/sidebar";

describe("Sidebar", () => {
  it("is rendered in document.", () => {
    render(
      <Providers>
        <Sidebar />
      </Providers>,
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
