// HomePage.test.js
import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import Home from "../app/page.jsx";
import ErrorBoundary from "./ErrorBoundary";

describe("HomePage component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
