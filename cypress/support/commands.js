Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#user_login')
        .type(usuario)
    cy.get('#user_password')
        .type(senha, { log: false})
    cy.get('input[type="submit"][value="Sign in"]')
        .click()
})