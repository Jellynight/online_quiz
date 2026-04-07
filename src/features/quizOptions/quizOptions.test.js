/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "../../App";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

test("should change difficulty on user interaction", async () => {
 const user = userEvent.setup();
//render the app
 render(
  <Provider store={store}>
   <App />
  </Provider>,
 );

 //select button i want to change
 const button = screen.getByRole("combobox", { name: "Select Difficulty:" });

 //simulate user interaction
 await user.selectOptions(button, "hard");

 //get new button value and check if it has changed
 const amountAfterEvent = screen.getByRole("combobox", {
  name: "Select Difficulty:",
 }).value;
 expect(amountAfterEvent).toEqual("hard");
});
