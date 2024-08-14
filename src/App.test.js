/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";
import App from "./App";

test("dark_mode button toggles `light` className to `dark` and back", () => {
  render(<App />);

  const appDiv = screen.getByLabelText("app");
  expect(appDiv.classList.contains("light")).toBeTruthy();

  const darkModeButton = screen.getByText("dark_mode");
  fireEvent.click(darkModeButton);
  expect(appDiv.classList.contains("dark")).toBeTruthy();

  fireEvent.click(darkModeButton);
  expect(appDiv.classList.contains("light")).toBeTruthy();
});

test("text_fields button toggles #app fontSize from 16px to 24px and back", () => {
  render(<App />);

  const appDiv = screen.getByLabelText("app");

  const largeFontButton = screen.getByText("text_fields");
  fireEvent.click(largeFontButton);
  expect(appDiv).toHaveStyle(`font-size: 24px;`);
});
