import { faker } from '@faker-js/faker'

describe('Criar Projeto', () => {

    beforeEach(() => cy.api_deletaTodosProjetos())
    it('sucesso', () => {

        const projeto = {
            nome: `projeto-${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }

        cy.api_criarProjeto(projeto)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(projeto.nome)
                expect(response.body.description).to.equal(projeto.descricao)
            })
    });
});



