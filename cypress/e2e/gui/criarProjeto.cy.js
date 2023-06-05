import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Criar um projeto', options, () => {

    beforeEach(() => {
        cy.api_deletaTodosProjetos()
        cy.login()
    });

    it('Criando um projeto com sucesso', () => {
        
        const projeto = {
            nome: `project-${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }

        cy.gui_criarProjeto(projeto)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projeto.nome}`)
        cy.contains(projeto.nome).should('be.visible')
        cy.contains(projeto.descricao).should('be.visible')
    });

});