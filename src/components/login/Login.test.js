import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import Login from "./index";
import {
  BLANK_USERNAME,
  BLANK_PASSWORD,
  USERNAME,
  PASSWORD,
  WRONG_DETAILS
} from "../../constants";

let result;
const historyMock = { push: jest.fn() };
beforeEach(() => {
  result = render(<Login history={historyMock} />);
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

  test("show error for empty username", () => {
    fireEvent.click(result.getByTestId("submit-btn"));
    expect(result.getByText(BLANK_USERNAME)).toBeInTheDocument();
  });

  test("show error for empty password", () => {
    fireEvent.change(result.getByLabelText("Username"), {
      target: { value: USERNAME }
    });
    fireEvent.click(result.getByTestId("submit-btn"));
    expect(result.getByText(BLANK_PASSWORD)).toBeInTheDocument();
  });

  test("show error for wrong username", () => {
    fireEvent.change(result.getByLabelText("Username"), {
      target: { value: "test" }
    });
    fireEvent.change(result.getByLabelText("Password"), {
      target: { value: PASSWORD }
    });
    fireEvent.click(result.getByTestId("submit-btn"));
    expect(result.getByText(WRONG_DETAILS)).toBeInTheDocument();
  });

  test("show error for wrong password", () => {
    fireEvent.change(result.getByLabelText("Username"), {
      target: { value: USERNAME }
    });
    fireEvent.change(result.getByLabelText("Password"), {
      target: { value: "test" }
    });
    fireEvent.click(result.getByTestId("submit-btn"));
    expect(result.getByText(WRONG_DETAILS)).toBeInTheDocument();
  });

  test("route to next page for correct details", () => {
    fireEvent.change(result.getByLabelText("Username"), {
      target: { value: USERNAME }
    });
    fireEvent.change(result.getByLabelText("Password"), {
      target: { value: PASSWORD }
    });
    fireEvent.click(result.getByTestId("submit-btn"));
    expect(historyMock.push).toHaveBeenCalledWith("/dashboard");
  });
});
