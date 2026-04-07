/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "@testing-library/jest-dom";
test("renders heading", () => {
 render(
  <Provider store={store}>
   <App />
  </Provider>,
 );
 const text = screen.getByText(/Welcome to Quiz/i);

 expect(text).toBeInTheDocument();
});
