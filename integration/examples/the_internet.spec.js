/// <reference types="Cypress" />

it('should navigate to the Internet app', () => {
    cy.visit('https://the-internet.herokuapp.com')
    
    cy.get('.heading', {timeout: 8000}).should('have.text', 'Welcome to the-internet')
  
    cy.get(':nth-child(4) > a').click()
})