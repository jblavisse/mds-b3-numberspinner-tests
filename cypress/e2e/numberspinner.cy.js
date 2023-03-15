describe("Number Spinner", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("can Increment and Decrement", () => {
    cy.get(".dec").click();
    cy.get(".dec").click();
    cy.get(".inc").click();

    cy.get(".input").should("have.value", "4.5");
  });

  it("must not exceed the minimum", () => {
    for (let i = 1; i <= 12; i++) {
      cy.get(".dec").click();
    }

    cy.get(".input").should("have.value", "0");
  });

  it("must not exceed the maximum", () => {
    for (let i = 1; i <= 17; i++) {
      cy.get(".inc").click();
    }

    cy.get(".input").should("have.value", "10");
  });
});
