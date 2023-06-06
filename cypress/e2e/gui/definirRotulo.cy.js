import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Definir rotulo da issue', options, () => {
    const issue = {
        titulo: `issue-${faker.datatype.uuid()}`,
        descricao: faker.random.words(3),
        projeto: {
            nome: `projeto${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }
    }

    const label = {
        nome: `label-${faker.random.word()}`,
        cor: '#ffaabb'
    }

    beforeEach(() => {
        cy.api_deletaTodosProjetos()
        cy.login()
        cy.api_criarIssue(issue)
            .then(res => {
                cy.api_criarLabel(res.body.project_id, label)
                cy.visit(`${Cypress.env('user_name')}/${issue.projeto.nome}/issues/${res.body.iid}`)
            })
    })

    it('sucesso', () => {
        cy.gui_criarLabelIssue(label)

        cy.get('.qa-labels-block').should('contain', label.nome)
        cy.get('.qa-labels-block span')
            .should('have.attr', 'style', `background-color: ${label.cor}; color: #333333;`)
    })
})