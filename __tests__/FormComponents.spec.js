import React from "react";
import { render, screen } from "@testing-library/react";
import NextButton from "../components/Button/Next";
import Input from "../components/Input";

it("should render the next button", () => {
  render(<NextButton />);
});

it("should render input elements", () => {
  render(<Input />);
});
