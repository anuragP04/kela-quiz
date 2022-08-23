/// <reference types="Cypress"/>

import { cypress } from '~/constants/common.constants'

describe('Test for members', () => {
  it('Test for recdirect to members page', () => {
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
  //
  it('Test for adding a new member', () => {
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
    cy.get('#addMember').should('have.text', cypress.addMember).click()
    cy.get('#AddPopUpModel').should('be.visible')
    cy.get('#firstName').clear().type('hinata').should('have.value', 'hinata')
    cy.get('#lastName').clear().type('hyuga').should('have.value', 'hyuga')
    cy.get('#email')
      .clear()
      .type('hinatahyuga@konoha.co')
      .should('have.value', 'hinatahyuga@konoha.co')
    cy.get('select').select('Recruiter')
    cy.get('#addbutton').click()
    cy.get('.Toastify__toast').find('.Toastify__close-button').click()

    cy.get('.memberRow').each((item) => {
      cy.contains('hinatahyuga@konoha.co')
    })
  })

  it('Test for add-members popUp cancel button', () => {
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
    cy.get('#addMember').should('have.text', cypress.addMember).click()
    cy.get('#cancelAddButton').should('have.text', 'Cancel').click()
  })
  it('Test for Delete member popup cancel button', () => {
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

    cy.get('.memberRow').each((item) => {
      cy.contains('hinata hyuga')
        .parent()
        .parent()
        .within(() => {
          cy.get('#deleteButton', { timeout: 60000 })
            .should('be.visible')
            .click()
        })

      cy.get('#deleteDialog').should('be.visible')
      cy.get('#cancelDeletePopUp').should('have.text', cypress.cancel).click()
    })
  })

  it('Test for Delete member ', () => {
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

    cy.get('.memberRow').each((item) => {
      cy.contains('hinata hyuga')
        .parent()
        .parent()
        .within(() => {
          cy.get('#deleteButton', { timeout: 60000 })
            .should('be.visible')
            .click()
        })
      cy.get('.confirm-delete').should('have.text', cypress.delete).click()
      cy.get('.Toastify__toast').find('.Toastify__close-button  ').click()
      cy.intercept('/members').as('membersPage')
      cy.get('.memberRow').each((item) => {
        cy.contains('hinata hyuga').should('not.exist')
      })

      return false
    })
  })
})
