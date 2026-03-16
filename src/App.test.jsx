import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders blog title", () => {
  render(<App />)
  const heading = screen.getByText(/blog/i)
  expect(heading).toBeInTheDocument()
})