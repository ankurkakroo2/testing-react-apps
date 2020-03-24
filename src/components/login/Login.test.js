import React from "react";
import Login from "./index";
import { render, cleanup } from "@testing-library/react";

let result;
beforeEach(() => {
  result = render(<Login />);
});

afterEach(cleanup);

describe("Login", () => {
  test("render without crash", () => {
    expect(result.getByTestId("login-heading")).toBeInTheDocument();
  });

  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });
});

describe("UI tests", () => {
  test("render username field", () => {
    expect(result.getByLabelText("Username")).toBeInTheDocument();
  });
  test("render password field", () => {
    expect(result.getByLabelText("Password")).toBeInTheDocument();
  });
  test("render submit button", () => {
    expect(result.getByRole("button")).toBeInTheDocument();
  });
});
