/// <reference types="Cypress" />

it('should navigate A/B Test Variation', () => {
    cy.visit('https://the-internet.herokuapp.com')
    
    cy.get('.heading').should('have.text', 'Welcome to the-internet')
    
    cy.get('h2').should('have.text', 'Available Examples')
  
    cy.get(':nth-child(1) > a').click()

    cy.get('h3').should('have.text', 'A/B Test Variation 1')
})

it('should Add/Remove Elements', () => {
    cy.visit('https://the-internet.herokuapp.com')
    
    cy.get('.heading').should('have.text', 'Welcome to the-internet')
    
    cy.get('h2').should('have.text', 'Available Examples')
  
    cy.get(':nth-child(2) > a').click()

    cy.get('h3').should('have.text', 'Add/Remove Elements')
})