import React from "react"
import { render, screen } from "@testing-library/react-native"
import "@testing-library/jest-native/extend-expect"

import Hello from "~/components/Hello"

describe("Hello", () => {
  it("renders hello", () => {
    render(<Hello />)
    let text = screen.getByText("Hello")
    expect(text).toHaveTextContent("Hello")
  })
})
