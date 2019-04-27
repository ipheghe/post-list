describe('Home Test', () => {
  it('Visits the app root url', () => {
    cy.visit(Cypress.env('HOST_URL'));
    cy.get('p').should('contain', 'Sortable Post List');
  });

  it('should show 5 post cards', () => {
    cy.contains('Sortable Post List');
    cy.get('.post-list__card').should('have.length', 5);
    cy.get('.post-list__card')
      .eq(0)
      .should('contain', 'Post 1');
    cy.get('.post-list__card')
      .eq(1)
      .should('contain', 'Post 2');
  });

  it('should show no time travel card', () => {
    cy.contains('List of actions committed');
    cy.get('time-travel__card').should('have.length', 0);
  });

  it('should switch Post 1 with Post when down arrow is clicked on Post 1', () => {
    cy.get('.arrow-btn-down')
      .eq(0)
      .click();
    cy.get('.post-list__card')
      .eq(0)
      .should('contain', 'Post 2');
    cy.get('.post-list__card')
      .eq(1)
      .should('contain', 'Post 1');
  });

  it('should switch Post 3 with Post 1 when up arrow is clicked on Post 3', () => {
    cy.get('.arrow-btn-up')
      .eq(1)
      .click();
    cy.get('.post-list__card')
      .eq(1)
      .should('contain', 'Post 3');
    cy.get('.post-list__card')
      .eq(2)
      .should('contain', 'Post 1');
  });

  it('should show 2 time travel cards', () => {
    cy.contains('List of actions committed');
    cy.get('.time-travel__card').should('have.length', 2);
  });

  it('should switch Post 1 with Post 3 when time travel button is clicked on second card', () => {
    cy.get('.time-travel__btn')
      .eq(1)
      .click();
    cy.get('.post-list__card')
      .eq(1)
      .should('contain', 'Post 1');
    cy.get('.post-list__card')
      .eq(2)
      .should('contain', 'Post 3');
  });
});
