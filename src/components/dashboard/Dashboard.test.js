import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";
import { setUserSession, removeUserSession, getUser } from "../../util/Common";

let result;
const user = "admin";
beforeEach(() => {
  setUserSession("token", user);
  const historyMock = { push: jest.fn() };
  result = render(<Dashboard history={historyMock} />);
});

/* afterEach(() => {
  removeUserSession();
}); */

describe("Dashboard", () => {
  test("snapshot", () => {
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should render menu item with logged in user name", () => {
    const { getByTestId } = result;
    const signedInMenuItem = getByTestId("menu-item-username");
    expect(signedInMenuItem.textContent).toBe(`Signed in as: ${user}`);
    removeUserSession();
  });

  test("should fire logout event", () => {
    const { getByText } = result;
    const node = getByText("Logout");
    fireEvent.click(node);
    expect(getUser()).toBe(null);
  });
});
