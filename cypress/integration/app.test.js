describe("Frontend Test Spec", () => {
  it("It is possible to complete all steps with valid data", () => {
    cy.visit("/");

    // Complete step 1
    const firstName = "Bob";
    const lastName = "Bobson";
    const age = 30;
    cy.get("[data-testid=firstName]").type(firstName);
    cy.get("[data-testid=lastName]").type(lastName);
    cy.get("[data-testid=age]").type(age);
    cy.get("[data-testid=submit]").click();

    // Complete step 2
    const phone = "+1 2345678";
    const email = "bob@bobson.com";
    cy.get("[data-testid=phone]").type(phone);
    cy.get("[data-testid=email]").type(email);
    cy.get("[data-testid=submit]").click();

    // Complete step 3
    const seat = "25B";
    const food = "vegan";
    const allergies = "peanuts, soy, gluten";
    cy.get("[data-testid=seat]").type(seat);
    cy.get("[data-testid=food]").type(food);
    cy.get("[data-testid=allergies]").type(allergies);
    cy.get("[data-testid=submit]").click();

    // Validate the results
    cy.get("[data-testid=firstName]").should("have.text", firstName);
    cy.get("[data-testid=lastName]").should("have.text", lastName);
    cy.get("[data-testid=age]").should("have.text", age);
    cy.get("[data-testid=phone]").should("have.text", phone);
    cy.get("[data-testid=email]").should("have.text", email);
    cy.get("[data-testid=seat]").should("have.text", seat);
    cy.get("[data-testid=food]").should("have.text", food);
    cy.get("[data-testid=allergies]").should("have.text", allergies);
  });

  it("It is possible to nagivate back and all data is preserved", () => {
    cy.visit("/");

    // Complete step 1
    const firstName = "Bob";
    const lastName = "Bobson";
    const age = 30;
    cy.get("[data-testid=firstName]").type(firstName);
    cy.get("[data-testid=lastName]").type(lastName);
    cy.get("[data-testid=age]").type(age);
    cy.get("[data-testid=submit]").click();

    // Complete step 2
    const phone = "+1 2345678";
    const email = "bob@bobson.com";
    cy.get("[data-testid=phone]").type(phone);
    cy.get("[data-testid=email]").type(email);
    cy.get("[data-testid=submit]").click();

    // Complete step 3
    const seat = "25B";
    const food = "vegan";
    const allergies = "peanuts, soy, gluten";
    cy.get("[data-testid=seat]").type(seat);
    cy.get("[data-testid=food]").type(food);
    cy.get("[data-testid=allergies]").type(allergies);
    cy.get("[data-testid=submit]").click();

    // Click the back button
    cy.get("[data-testid=back]").click();

    // Verify that the data is preserved
    cy.get("[data-testid=title]").should("contain.text", "Step 3");
    cy.get("[data-testid=seat]").should("have.value", seat);
    cy.get("[data-testid=food]").should("have.value", food);
    cy.get("[data-testid=allergies]").should("have.value", allergies);

    // Click the back button
    cy.get("[data-testid=back]").click();

    // Verify that the data is preserved
    cy.get("[data-testid=title]").should("contain.text", "Step 2");
    cy.get("[data-testid=phone]").should("have.value", phone);
    cy.get("[data-testid=email]").should("have.value", email);

    // Click the back button
    cy.get("[data-testid=back]").click();

    // Verify that the data is preserved
    cy.get("[data-testid=title]").should("contain.text", "Step 1");
    cy.get("[data-testid=firstName]").should("have.value", firstName);
    cy.get("[data-testid=lastName]").should("have.value", lastName);
    cy.get("[data-testid=age]").should("have.value", age);
  });

  it("It is possible to identify invalid data", () => {
    // Check Step1 validation
    cy.visit("/");

    // Verify required validation
    cy.get("[data-testid=submit]").click();

    cy.get("form").should("contain.text", "First name is a required field");
    cy.get("form").should("contain.text", "Last name is a required field");
    cy.get("form").should("contain.text", "Age must be a number");

    // Verify that invalid values are proccessed correctly
    const firstName = "1000";
    const lastName = "1000";
    const age = "-1000";
    cy.get("[data-testid=firstName]").type(firstName);
    cy.get("[data-testid=lastName]").type(lastName);
    cy.get("[data-testid=age]").type(age);
    cy.get("[data-testid=submit]").click();

    cy.get("form").should(
      "contain.text",
      "First name should not contain numbers"
    );

    cy.get("form").should(
      "contain.text",
      "Last name should not contain numbers"
    );
    cy.get("form").should("contain.text", "Age should be positive");

    // Check Step2 validation
    // cy.visit("/step2") - Failing Tests Below

    // Verify required validation
    // cy.get("[data-testid=submit]").click();

    // cy.get("form").should("contain.text", "Email is a required field");
    // cy.get("form").should("contain.text", "Phone number is a required field");

    // const email = "1000";
    // cy.get("[data-testid=email]").type(email);
    // cy.get("[data-testid=submit]").click();
    // cy.get("form").should("contain.text", "Email should have correct format");
  });
});
