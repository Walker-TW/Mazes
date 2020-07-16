// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
describe("CRA", () => {
  it("shows learn link", function () {
    cy.visit("http://localhost:3000");
    cy.get(".text").should("be.visible").and("have.text", "Maze in The Dark");
  });
});
// more examples
//
// https://github.com/cypress-io/cypress-example-todomvc
// https://github.com/cypress-io/cypress-example-kitchensink
// https://on.cypress.io/writing-your-first-test
