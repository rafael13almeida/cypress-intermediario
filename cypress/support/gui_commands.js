Cypress.Commands.add('login', (
    usuario = Cypress.env('user_name'),
    senha   = Cypress.env('user_password')
    ) => {
    const login = () => {
        
        cy.get('#user_login').type(usuario)
        cy.get('#user_password').type(senha, { log: false })
        cy.get('input[type="submit"][value="Sign in"]').click()
    }
    login()
})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
});

