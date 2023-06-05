import { faker } from "@faker-js/faker";

describe('Criando uma issue', () => {
    
    const issue = {
        titulo:`issue-${faker.datatype.uuid()}`,
        descricao: faker.random.words(6),
        projeto: {
            nome:`projeto-${faker.datatype.uuid()}`,
            descricao: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.api_deletaTodosProjetos()
        cy.login()
        cy.gui_criarProjeto(issue.projeto)
    });

    it('Criar Issue com sucesso', () => {
        cy.gui_criarIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.titulo)
            .and('contain', issue.descricao)
    });
});