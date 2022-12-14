import fact from '../fixtures/fact.json';

export type APIContract = {
  categories: [];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
};

describe('Landing page', () => {
  let randomFact = {} as APIContract;

  it('Visits the landing page', () => {
    cy.visit('/');
  });

  it('Checks if exists a random fact', () => {
    cy.intercept('/jokes/random').as('randomJoke');

    cy.wait('@randomJoke').its('response.statusCode').should('eq', 200);

    cy.wait('@randomJoke').then((fact) => {
      randomFact = fact.response?.body;
    });

    cy.fixture('fact').then((factFixture) => {
      expect(fact);
    });
  });

  it('Compares card content with request response', () => {
    cy.get('[id="content"]').within(() => {
      cy.displayedTextShouldMatch(randomFact.value);
    });
  });

  it('Renders a new fact when button is clicked', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('[id=fetch-fact-button]').click();

      cy.displayedTextShouldNotMatch(randomFact.value);
    });
  });

  it('Filters by category and returns a new fact', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('[id=category]').select('dev');

      cy.displayedTextShouldNotMatch(randomFact.value);
    });
  });

  it('Clears the category filter and returns a new fact', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('button').eq(1).should('contain', 'clear').click(); // First clear button

      cy.displayedTextShouldNotMatch(randomFact.value);
    });
  });

  it('Filters by keyword and returns one or more facts', () => {
    const keyword = 'cat';

    cy.get('[id="content"]').within(() => {
      cy.intercept('/jokes/search**').as('findByKeyword');
      cy.get('[name=ramdom]').type(keyword);

      cy.wait('@findByKeyword').then(() => {
        cy.get('[id="content-card"]').should('have.length.at.least', 1);

        cy.displayedTextShouldNotMatch(randomFact.value);
      });
    });
  });

  it('Clears the keyword filter and returns a new fact', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('button').last().click(); // Last clear button

      cy.displayedTextShouldNotMatch(randomFact.value);
    });
  });
});
