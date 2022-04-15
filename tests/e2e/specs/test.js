// https://docs.cypress.io/api/table-of-contents

describe('HomePage', () => {
  it('should redirect to /users when clicked on users button', () => {
    cy.visit('/')
    expect(cy.get('.home').first()).to.exist

    cy.get('a[href="/users"]').click()

    cy.window().then(win => {
      expect(win.location.pathname).to.eq('/users')
    })
  })
})

describe('UsersPage', () => {
  it('should delete user when clicked on delete', async () => {
    cy.intercept('GET', `https://api.github.com/users`).as('getUsers')

    cy.visit('/users')

    cy.wait('@getUsers')

    cy
      .get('[data-cy="user-card"]')
      .first()
      .find('[data-cy="username"]')
      .first()
      .invoke('text')
      .as('firstUserName')

    cy
      .get('[data-cy="user-card"]')
      .first()
      .find('[data-cy="delete-user"]')
      .click()

    cy
      .get('[data-cy="user-card"]')
      .first()
      .find('[data-cy="username"]')
      .first()
      .invoke('text')
      .then(name => {
        cy.get('@firstUserName').should('not.eq', name)
      })
  })
})
