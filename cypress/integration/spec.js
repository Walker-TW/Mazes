// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
// describe("My first test", () => {
//   it("dont do much", function () {
//     cy.visit("http://localhost:3000");
//     cy.get(".h1").should("be.visible").and("have.text", "00");
//   });
// });
describe("My first test", () => {
  it("dont do much", function () {
    expect(true).to.equal(true);
  });
});

describe("Checking that you can visit the site", () => {
  it("goes to the website", function () {
    cy.visit("http://localhost:3000");
  });
});
// more examples
//
// https://github.com/cypress-io/cypress-example-todomvc
// https://github.com/cypress-io/cypress-example-kitchensink
// https://on.cypress.io/writing-your-first-test
