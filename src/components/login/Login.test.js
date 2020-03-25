import React from "react";
import Login from "./Login";
import { render, cleanup } from "@testing-library/react";

let result;
beforeEach(() => {
  result = render(<Login />);
});

afterEach(cleanup);

describe("Login", () => {
  test("render without crash", () => {
    expect(result.getByTestId("submit-btn")).toBeInTheDocument();
  });

  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("render username field", () => {
    expect(result.getByLabelText("Username")).toBeInTheDocument();
  });

  test("render password field", () => {
    expect(result.getByTestId("password")).toBeInTheDocument();
  });

  test("render submit button", () => {
    expect(result.getByTestId("submit-btn")).toBeInTheDocument();
  });
});
