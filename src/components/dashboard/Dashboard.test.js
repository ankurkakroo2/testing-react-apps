import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

let result;
beforeEach(() => {
  result = render(<Dashboard />);
});

describe("Dashboard", () => {
  test("render without crash", () => {
    expect(result.getByText("Welcome", { exact: false })).toBeInTheDocument();
  });

  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });
});
