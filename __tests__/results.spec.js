import Results from "../pages/register-user/results";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Results page", () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    stepTwo: {
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
    },
    stepThree: {
      seat: "Window",
      food: "Vegetarian",
      allergies: "None",
    },
  };

  it("renders the expected values for firstName, lastName, age, email, phoneNumber", () => {
    render(<Results user={user} />);

    expect(screen.getByTestId("firstName")).toHaveTextContent("John");
    expect(screen.getByTestId("lastName")).toHaveTextContent("Doe");
    expect(screen.getByTestId("age")).toHaveTextContent("30");
    expect(screen.getByTestId("email")).toHaveTextContent(
      "johndoe@example.com"
    );
    expect(screen.getByTestId("phone")).toHaveTextContent("123-456-7890");
    expect(screen.getByTestId("seat")).toHaveTextContent("Window");
    expect(screen.getByTestId("food")).toHaveTextContent("Vegetarian");
    expect(screen.getByTestId("allergies")).toHaveTextContent("None");
  });
});
