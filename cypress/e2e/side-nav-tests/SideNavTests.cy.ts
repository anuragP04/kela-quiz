describe('Test for Logout, SideNav', () => {
  it('Sample Login', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
  })

  it('Test to Direct to Dashboard after Login', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.location('pathname', { timeout: 60000 }).should('include', '/dashboard')
  })

  it('Test for Routing and Active Tab for Results', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.get('a').find('#Results').should('have.text', 'Results').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/results')
  })

  it('Test for Routing and Active Tab for Tests', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/tests')
  })

  it('Test for Routing and Active Tab for Members', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.get('a').find('#Members').should('have.text', 'Members').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/members')
  })

  it('Test for Active Tab Color', () => {
    cy.visit('/sign-in')
    cy.get('#email').clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password').clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.get('a').find('#Members').should('have.text', 'Members').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/members')
    cy.get('a').should('have.class', 'bg-blue-50')
  })

  it('Test to redirect to the login page on log out', () => {
    cy.get('form')
      .findByRole('button')
      .click()
      .url()
      .should('includes', '/sign-in')
  })
})
