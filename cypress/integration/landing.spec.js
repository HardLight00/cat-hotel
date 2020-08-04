//@ts-check
describe('Landing page testing', function () {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1400, 800)
    })

    it('just works', function () {
    })

    it('has header', () => {
        cy.get('[data-cy="header"]').should('have.length', 1)
    })

    it('has navbar', () => {
        cy.get('[data-cy="navbar"]').should('have.length', 1)
    })

    it('has call how-we-work', () => {
        cy.get('[data-cy="how-we-work"]').should('have.length', 1)
    })

    it('has footer', () => {
        cy.get('[data-cy="footer"]').should('have.length', 1)
    })

    it('button should change the state', () => {
        cy.get('[data-cy="order-button"]')
          .should('have.length', 1)
          .click();
    })
});
