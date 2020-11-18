import React from "react";
import { render } from "@testing-library/react";
import PointerReport from "./PointerReport";

test("renders componenet", () => {
  const { getByText } = render(<PointerReport />);
  const linkElement = getByText(/0,0/i);
  expect(linkElement).toBeInTheDocument();
});
