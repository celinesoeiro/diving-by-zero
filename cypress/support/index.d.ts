/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command example for reference
     * @example cy.example_cmd()
     */
    displayedTextShouldNotMatch(text: string): Chainable<Window>;
    displayedTextShouldMatch(text: string): Chainable<Window>;
  }
}
