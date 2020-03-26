import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";
import { setUserSession, removeUserSession } from "../../util/Common";
import { Username } from "../../constants";

let result;
const historyMock = { push: jest.fn() };
beforeEach(() => {
  setUserSession("token", Username);
  result = render(<Dashboard history={historyMock} />);
});

/* afterEach(() => {
  removeUserSession();
}); */

describe("Dashboard", () => {
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should render menu item with logged in Username", () => {
    const { getByTestId } = result;
    const signedInMenuItem = getByTestId("menu-item-username");
    expect(signedInMenuItem.textContent).toBe(`Signed in as: ${Username}`);
    removeUserSession();
  });

  test("should fire logout event", () => {
    const { getByText } = result;
    const logoutMenuItem = getByText("Logout");
    fireEvent.click(logoutMenuItem);
    expect(historyMock.push).toHaveBeenCalledWith("/login");
  });
});
