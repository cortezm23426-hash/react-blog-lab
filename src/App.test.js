import { render, screen } from "@testing-library/react"
import React from "react"
import App from "./App"

test("renders blog title", () => {
  render(React.createElement(App))
  const heading = screen.getByText(/blog/i)
  expect(heading).toBeInTheDocument()
})