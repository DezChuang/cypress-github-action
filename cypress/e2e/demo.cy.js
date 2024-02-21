describe('example todo application', () => {
  beforeEach(() => {
      cy.visit('<https://example.cypress.io/todo>');
  });

  it('displays two default items in the todo list', () => {
      cy.get('.todo-list li').should('have.length', 2);
      cy.get('.todo-list li')
          .first()
          .should('have.text', 'Pay electric bill');
      cy.get('.todo-list li')
          .last()
          .should('have.text', 'Walk the dog');
      cy.get('h1').should('have.text', 'TEST FAILED'); // THIS LINE WILL INTENTIONALLY FAIL THE TEST
  });
});
