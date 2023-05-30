Cypress.Commands.add('login', (
    usuario = Cypress.env('user_name'),
    senha   = Cypress.env('user_password')
    ) => {
    const login = () => {
        cy.visit('/users/sign_in')

        cy.get('#user_login').type(usuario)
        cy.get('#user_password').type(senha)
        cy.get('input[type="submit"][value="Sign in"]').click()

    }
    login()
})