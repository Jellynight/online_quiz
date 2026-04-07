import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "../../App";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("QuestionCard component", () => {

  test("answer false button change state on click", async () => {
    const user = userEvent.setup();
    // Render the app
    render(
  <Provider store={store}>
   <App />
  </Provider>,
 );

 const falseButton = screen.getByRole("button", { name: /False/i });
  const trueButton = screen.getAllByRole("button", { name: /True/i});
 await user.click(falseButton);

 expect(trueButton).toHaveClass("isActive")
 expect(falseButton).toHaveClass("active");
  })

});