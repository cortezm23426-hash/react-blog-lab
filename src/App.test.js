import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import App from "./App.jsx"

test("renders blog title", () => {
  render(<App />)
  const heading = screen.getByRole("heading", {
    level: 1,
    name: /mike's coding blog/i,
  })
  expect(heading).toBeTruthy()
})