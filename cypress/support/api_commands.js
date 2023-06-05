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

Cypress.Commands.add('api_buscaTodosProjetos', () => {
    cy.request({
        method: 'GET',
        url: `/api/v4/projects/`,
        headers: { Authorization: accessToken},
    })
});

Cypress.Commands.add('api_deletaTodosProjetos', () => {
    cy.api_buscaTodosProjetos().then(res =>
        res.body.forEach(projeto => cy.request({
            method: 'DELETE',
            url: `/api/v4/projects/${projeto.id}`,
            headers: { Authorization: accessToken},
        }))
    )
})
