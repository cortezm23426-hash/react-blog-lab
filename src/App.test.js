// @vitest-environment jsdom

import React from "react"
import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import App from "./App.jsx"

test("renders blog title", () => {
  render(React.createElement(App))
  const heading = screen.getByText(/blog/i)
  expect(heading).toBeTruthy()
})