Cypress.Commands.add('login', (
    usuario = Cypress.env('user_name'),
    senha   = Cypress.env('user_password'),
    { cacheSession = true } = {},
    ) => {

    const login = () => {
        cy.visit('/users/sign_in')
        cy.get('#user_login').type(usuario)
        cy.get('#user_password').type(senha, { log: false })
        cy.get('input[type="submit"][value="Sign in"]').click()
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
          .should('not.eq', '/users/sign_in')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(usuario, login, options)
    
    } else {
        login()
    
    }
    
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

Cypress.Commands.add('gui_criarIssue', issue => {
    cy.visit(`/${Cypress.env('user_name')}/${issue.projeto.nome}/issues/new`)

    cy.get('.qa-issuable-form-title').type(issue.titulo)
    cy.get('.qa-issuable-form-description').type(issue.descricao)
    cy.contains('Submit issue').click()
})


Cypress.Commands.add('gui_criarLabelIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.nome).click()
    cy.get('body').click()
})

Cypress.Commands.add('gui_criarMilestone', milestone => {
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.titulo).click()
})



