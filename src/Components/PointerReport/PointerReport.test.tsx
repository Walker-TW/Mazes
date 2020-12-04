import React from "react";
import { render } from "@testing-library/react";
import PointerReport from "./PointerReport";

test("renders componenet", () => {
  const { getByText } = render(<PointerReport />);
  const linkElement = getByText(/0,0/i);
  expect(linkElement).toBeInTheDocument();
});

xdescribe('#createRandomNumbers()',() => {
  it('will return a randomised number between the boundries of the 100-630', () => {
    expect(createRandomNumbers()).toReturn()
  })
})
