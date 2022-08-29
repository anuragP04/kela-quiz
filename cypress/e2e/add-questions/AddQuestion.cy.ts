import {
  cypress,
  routeFiles,
  commonConstants,
} from '~/constants/common.constants'
const duplicateTitle = `Aptitude - ${new Date().getTime()}`

describe('Test for section-details', () => {
  it('Visiting section-details  Page', () => {
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
      .find('#Sections', { timeout: 6000 })
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 6000 }).should('include', '/sections')
    cy.get('#add-section', { timeout: 6000 }).should('be.visible')
    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude - Description`
    )
    cy.get('button#submitButton')
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards', { timeout: 10000 })
      .children()
      .first()
      .should('be.visible')
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
  })

  it('Test for adding new section', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('#Section').should('have.text', 'Section').click()
    cy.location('pathname', { timeout: 6000 }).should('include', '/sections')
  })

  it('Test for valid error message while adding new section without Title', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')

    cy.get('#submitButton').click()
    cy.get('.Toastify__toast').should('have.text', cypress.nameIsReq)
  })

  it('Test for valid error message while adding new section without Description', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('#submitButton').click()
    cy.get('.Toastify__toast').should('have.text', cypress.descIsReq)
  })

  it('Test for valid error message while adding new section with duplicate Title', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(duplicateTitle)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('#submitButton').click()
    cy.get('.Toastify__toast').should('have.text', cypress.sectionAdded)
    cy.get('.Toastify__close-button').click()

    cy.get('#add-section').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(duplicateTitle)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('#submitButton').click()
    cy.get('.Toastify__toast').should('have.text', cypress.duplicateTitle)
    cy.get('.Toastify__close-button').click()
  })

  it('Visiting the Same section which created', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('.Toastify__close-button').click()
    cy.get('#Question', { timeout: 6000 })
      .should('have.text', cypress.question)
      .click()
    cy.get('a > div').should('have.class', 'border-l-8')
  })

  it('Verifying MCQ to have Check Box in options', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)
    cy.get('#dropdown > button').click()

    let flag = ''
    cy.get('ul[role="listbox"]').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].map((el) => {
            if (el.innerText === 'Multiple Choice') {
              flag = 'CheckBox'
              el.click()
            } else if (el.innerText === 'Single Choice') {
              flag = 'RadioButton'
            } else if (el.innerText === 'Text') {
              flag = 'TextArea'
            }
            return null
          })
        })
      })
    })
    if (flag === 'CheckBox') {
      cy.get('input[type="checkbox"]')
    } else if (flag === 'RadioButton') {
      cy.get('input[type="radioButton"]')
    } else if (flag === 'TextArea') {
      cy.get('input[type="textarea"]')
    }
  })

  it('Verifying Single Choice to have Radio Button in options', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)
    cy.get('#dropdown > button').click()

    let flag = ''
    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].map((el) => {
            if (el.innerText === 'Multiple Choice') {
              flag = 'CheckBox'
            } else if (el.innerText === 'Single Choice') {
              flag = 'RadioButton'
              el.click()
            } else if (el.innerText === 'Text') {
              flag = 'TextArea'
            }
            return null
          })
        })
      })
    })
    if (flag === 'CheckBox') {
      cy.get('input[type="checkbox"]')
    } else if (flag === 'RadioButton') {
      cy.get('input[type="radioButton"]')
    } else if (flag === 'TextArea') {
      cy.get('input[type="textarea"]')
    }
  })

  it('Verifying Text to have Textarea in options', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)
    cy.get('#dropdown > button').click()

    let flag = ''
    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].map((el) => {
            if (el.innerText === 'Multiple Choice') {
              flag = 'CheckBox'
            } else if (el.innerText === 'Single Choice') {
              flag = 'RadioButton'
            } else if (el.innerText === 'Text') {
              flag = 'TextArea'
              el.click()
            }
            return null
          })
        })
      })
    })
    if (flag === 'CheckBox') {
      cy.get('input[type="checkbox"]')
    } else if (flag === 'RadioButton') {
      cy.get('input[type="radioButton"]')
    } else if (flag === 'TextArea') {
      cy.get('input[type="textarea"]')
    }
  })

  let lengthBefore: number

  it('Verifying if Add Option functionality Working on Options', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)

    cy.get('#dropdown > button').click()

    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].forEach((el) => {
            if (el.innerText === 'Multiple Choice') {
              el.click()
            }
          })
        })
      })
    })

    cy.get('.h-40 > .gap-6').within(() => {
      cy.get('#quillEditor')
        .its('length')
        .then((len) => {
          lengthBefore = len
        })
      cy.get('button.flex').should('have.text', '+ Add Options').click()
      cy.get('#quillEditor')
        .its('length')
        .then((len) => {
          expect(lengthBefore + 1).to.equal(len)
        })
    })
  })

  it('Verifying if Delete functionality Working on Options', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)

    cy.get('#dropdown > button').click()

    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].forEach((el) => {
            if (el.innerText === 'Multiple Choice') {
              el.click()
            }
          })
        })
      })
    })

    cy.get('.h-40 > .gap-6').within(() => {
      cy.get('#quillEditor')
        .its('length')
        .then((len) => {
          lengthBefore = len
        })
      cy.get('svg.h-6').first().click()
      cy.get('#quillEditor')
        .its('length')
        .then((len) => {
          expect(lengthBefore - 1).to.equal(len)
        })
    })
  })

  it('On Save and Add More visit the Add Question Page', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1', { timeout: 2000 }).should('be.visible')
    cy.get('#dropdown > button').click()

    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].map((el) => {
            if (el.innerText === 'Text') {
              el.click()
            }
            return null
          })
        })
      })
    })

    cy.get('#questionEditor #quillEditor').within(() => {
      cy.get('.ql-editor').type(`What is your Test Question ?`)
    })

    cy.get('#optionEditor input').clear().type('Option of question')

    cy.get('#saveAndAddMore').click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
  })

  it('On Save and Continue visit the Sections Page', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )

    cy.get('h1', { timeout: 2000 }).should('be.visible')
    cy.get('#dropdown > button').click()

    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].map((el) => {
            if (el.innerText === 'Text') {
              el.click()
            }
            return null
          })
        })
      })
    })

    cy.get('#questionEditor #quillEditor').within(() => {
      cy.get('.ql-editor').type(`What is your Test Question ?`)
    })

    cy.get('#optionEditor input').clear().type('Option of question')

    cy.get('#saveAndExit').click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
  })

  it('Verifying if Question is Empty or not', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('#questionEditor > .rounded-lg > .ql-container > .ql-editor')
      .type('{backspace}')
      .should('have.value', '')
    cy.get('.Toastify__close-button', { timeout: 6000 }).click({
      multiple: true,
    })
    cy.get('#saveAndAddMore', { timeout: 6000 })
      .should('have.text', cypress.saveAndAddMore)
      .click()
    cy.get('.Toastify__toast').should('have.text', 'Enter the Question')
  })

  it('Verifying if any Option is empty or not', () => {
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
      .find('#Sections')
      .should('have.text', routeFiles.sections)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', '/sections')
    cy.get('.px-5').click()
    cy.get('.addSectionDilog', { timeout: 10000 }).should('be.visible')
    cy.get('input#sectionName').type(`Aptitude - ${new Date().getTime()}`)
    cy.get('textarea#sectionDescription').type(
      `Aptitude -  Description`
    )
    cy.get('button#submitButton', { timeout: 6000 })
      .should('have.text', commonConstants.addButton)
      .click()
    cy.get('#section-cards').children().first().click()
    cy.get('#addQuestion').should('have.text', cypress.addQuest).click()
    cy.location('pathname', { timeout: 60000 }).should(
      'include',
      '/add-question'
    )
    cy.get('h1').wait(2000)
    let flag = 0

    cy.get('#dropdown > button').click()

    cy.get('ul').within(() => {
      cy.get('li').within(() => {
        cy.get('div').then((el) => {
          ;[...el].forEach((el) => {
            if (el.innerText === 'Multiple Choice') {
              el.click()
            }
          })
        })
      })
    })

    cy.get('.h-40 > .gap-6 > .flex-col').within(() => {
      cy.get(' #quillEditor ').then((el) => {
        ;[...el].forEach((element) => {
          if (element.innerText === '') {
            flag = 1
          }
        })
      })
    })
    if (flag == 1) {
      cy.get('#saveAndAddMore')
        .should('have.text', cypress.saveAndAddMore)
        .click()
      cy.get('.Toastify__toast').should('have.text', cypress.enterAllOptions)
    }
  })
})
