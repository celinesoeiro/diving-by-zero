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
  let categories = [] as string[];

  // before(() => {
  //   cy.intercept('/jokes/random', { fixture: 'fact.json' });

  //   // cy.intercept('/categories').as('categories');

  //   // cy.wait('@categories').then((categories) => {
  //   //   categories = categories.response?.body;
  //   // });
  // });

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
      cy.get('[id="content-card"]').within(() => {
        cy.get('p')
          .invoke('text')
          .then((elementText) => {
            expect(elementText).to.contain(randomFact.value);
          });
      });
    });
  });

  it('Renders a new fact when button is clicked', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('[id=fetch-fact-button]').click();

      cy.get('[id="content-card"]').within(() => {
        cy.get('p')
          .invoke('text')
          .then((elementText) => {
            expect(elementText).to.not.contain(randomFact.value);
          });
      });
    });
  });

  it('Filters by category and returns a new fact', () => {
    cy.get('[id="content"]').within(() => {
      cy.get('[id=category]').select('dev');

      cy.get('[id="content-card"]').within(() => {
        cy.get('p')
          .invoke('text')
          .then((elementText) => {
            expect(elementText).to.not.contain(randomFact.value);
          });
      });
    });
  });

  it('Clears the category filter and returns a new fact', () => {});

  it('Filters by keyword and returns one or more facts', () => {});

  it('Clears the keyword filter and returns a new fact', () => {});
});
