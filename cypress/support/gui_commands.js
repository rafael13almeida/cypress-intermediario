Cypress.Commands.add('login', (
    usuario = Cypress.env('user_name'),
    senha   = Cypress.env('user_password')
    ) => {
    const login = () => {
        cy.visit('/users/sign_in')
        cy.get('#user_login').type(usuario)
        cy.get('#user_password').type(senha, { log: false })
        cy.get('input[type="submit"][value="Sign in"]').click()
    }
    login()
});

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
});

Cypress.Commands.add('gui_criarProjeto', projeto => {
    cy.visit('/projects/new')

    cy.get('#project_name').type(projeto.nome)
    cy.get('#project_description').type(projeto.descricao)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
});

