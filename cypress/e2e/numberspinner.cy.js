describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/");

    cy.get(".dec").click();

    cy.get(".dec").click();

    cy.get(".inc").click();

    cy.get(".input").should("have.value", "4.5");
  });
});
