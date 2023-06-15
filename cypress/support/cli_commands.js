Cypress.Commands.add('cloneViaSSH', projeto => {
    const domain = Cypress.config('baseUrl').replace('http://', '')

    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${projeto.nome}.git`)
})

