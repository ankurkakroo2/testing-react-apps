import React from "react";
import Dashboard from "./index";
import { render } from "@testing-library/react";

let result;
beforeEach(() => {
  result = render(<Dashboard />);
});

describe("Dashboard", () => {
  test("render without crash", () => {
    expect(result.getByText("Dashboard")).toBeInTheDocument();
  });

  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });
});
