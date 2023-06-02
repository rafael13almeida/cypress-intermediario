const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('api_criarProjeto', projeto => {
    cy.request({
        method: 'POST',
        url: `/api/v4/projects/`,
        body: {
            name: projeto.nome,
            description: projeto.descricao,
            initialize_with_readme: true
        },
        headers: { Authorization: accessToken },
    });
});
