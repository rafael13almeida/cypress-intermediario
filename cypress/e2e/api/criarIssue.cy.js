import { faker } from '@faker-js/faker'

describe('Criar issue', () => {
    beforeEach(() => cy.api_deletaTodosProjetos())

    it('sucesso', () => {
        const issue = {
            titulo: `issue-${faker.datatype.uuid()}`,
            descricao: faker.random.words(3),
            projeto: {
                nome: `projeto-${faker.datatype.uuid()}`,
                descricao: faker.random.words(5)
            }
        }
    
        cy.api_criarIssue(issue)
            .then(res => {
                expect(res.status).to.equal(201)
                expect(res.body.title).to.equal(issue.titulo)
                expect(res.body.description).to.equal(issue.descricao)
            })
    })

});