import React from "react";
import { render } from "@testing-library/react";
import PointerReport from "./PointerReport";

test("renders componenet", () => {
  const { getByText } = render(<PointerReport />);
  const linkElement = getByText(/look here mama/i);
  expect(linkElement).toBeInTheDocument();
});
