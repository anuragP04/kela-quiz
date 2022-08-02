describe('Test for testPreview', () => {
  it('test for login an redirect to tests route', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
  })

  let time = new Date().getTime()
  it('Verify if user able create the test and navigate to test list page', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()

    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/tests')
    cy.get('#addTest').click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/tests/add-test'
    )

    cy.get('#name').clear().type(`${time}`)
    cy.get('#quillEditor').within(() => {
      cy.get('.ql-editor').type(`Test Description`)
    })

    cy.get('button#nextButton').should('have.text', 'Next').click()
    cy.get('#0').find('hr').should('have.class', 'bg-primary')
    cy.get('#1').find('hr').should('have.class', 'bg-primary')
    // user reached to step 2

    cy.get('div#section')
      .first()
      .within(() => {
        cy.get('input#noOfQu').should('have.disabled', true)
        cy.get('input#time').should('have.disabled', true)
        cy.get('button').should('have.text', 'Add').click()
        cy.get('button').should('have.text', 'Remove')

        cy.get('input#noOfQu').clear().type('2')
        cy.get('input#time').clear().type('2')
      })
    cy.get('button#nextButton').should('have.text', 'Next').click()
    cy.get('#0').find('hr').should('have.class', 'bg-primary')
    cy.get('#1').find('hr').should('have.class', 'bg-primary')
    cy.get('#2').find('hr').should('have.class', 'bg-primary')

    cy.get('button#submitButton').should('have.text', 'Submit').click()

    cy.location('pathname', { timeout: 60000 }).should('include', '/tests')
  })
  it('test for check preview data match selected test', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#testList').each((item) => {
      cy.contains(`${time}`)
        .parent()
        .parent()
        .within(() => {
          cy.get('#test-name-navigation').click()
        })
    })

    cy.get('#title').should('have.text', `${time}`)
  })

  it('test for tests back-button', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#test-name-navigation').click()
    cy.get('#backButton').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/tests')
  })
  it('test for tests name', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#test-name-navigation').click()
    cy.get('#name').should('have.text', 'Name').click()
  })
  it('test for description', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#test-name-navigation').click()
    cy.get('#description').should('have.text', 'Description').click()
  })
  it('test for total time', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#test-name-navigation').click()
    cy.get('#totalTime').should('have.text', 'Total Time').click()
  })
  it('test for Total Sections', () => {
    cy.visit('/sign-in')
    cy.get('#email')
      .clear()
      .type('careers@copods.co')
      .should('have.value', 'careers@copods.co')
    cy.get('#password')
      .clear()
      .type('kQuiz@copods')
      .should('have.value', 'kQuiz@copods')
    cy.findByRole('button').click()
    cy.get('a').find('#Tests').should('have.text', 'Tests').click()
    cy.get('#test-name-navigation').click()
    cy.get('#totalSection').should('have.text', 'Total Sections')
  })
})