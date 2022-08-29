import { cypress, testsConstants } from '~/constants/common.constants'

describe('Test for Logout, SideNav', () => {
  it('Sample Login', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()
  })

  it('Test to Direct to Dashboard after Login', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()

    cy.location('pathname', { timeout: 60000 }).should('include', '/dashboard')
  })

  it('Test for Routing and Active Tab for Results', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()
    cy.get('a')
      .find('#Group_By_Tests')
      .should('have.text', 'Results')
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/results')
  })

  it('Test for Routing and Active Tab for Tests', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()

    cy.get('a').find('#Tests').should('have.text', testsConstants.Tests).click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/tests')
  })

  it('Test for Routing and Active Tab for Members', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()

    cy.get('a').find('#Members').should('have.text', cypress.members).click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/members')
  })

  it('Test for Active Tab Color', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', cypress.email)
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', cypress.password)
    cy.findByRole('button').click()

    cy.get('a').find('#Members').should('have.text', cypress.members).click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/members')
    cy.get('a').should('have.class', 'bg-blue-50')
  })

  it('Test to redirect to the login page on log out', () => {
    cy.get('form')
      .get('#logout-button', { timeout: 6000 })
      .click()
      .url()
      .should('includes', '/sign-in')
  })
})
