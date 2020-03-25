import React from 'react'
import  { render, cleanup } from '@testing-library/react'

import Login from "../components/login";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);


test("container component should have no violations", async () => {
  const {container} = render(    
      <Login />    
  );

/**Note: If you're using react testing library you should be using the cleanup method.
 * This method removes the rendered application from the DOM and ensures a clean HTML Document for further testing.
**/
const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
}); 