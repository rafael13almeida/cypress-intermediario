import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true }}

describe('Definir um Milestone para issue', options, () => {
    const issue = {
        titulo: `issue-${faker.datatype.uuid()}`,
        descricao: faker.random.words(3),
        projeto: {
            nome: `projeto${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }
    }
    
    const milestone = {
        titulo: `milestone-${faker.random.word()}`
    }

    beforeEach(() => {
        cy.api_deletaTodosProjetos()
        cy.login()
        cy.api_criarIssue(issue)
            .then(res => {
                cy. api_criarMilestone(res.body.project_id, milestone)
                cy.visit(`${Cypress.env('user_name')}/${issue.projeto.nome}/issues/${res.body.iid}`)
            })
    })


    it('sucesso', () => {
        cy.gui_criarMilestone(milestone)

        cy.get('.block.milestone').should('contain', milestone.titulo)
    })
})