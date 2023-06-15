import { faker } from '@faker-js/faker'

describe('Git Clone', () => {

    const projeto = {
        nome: `projeto-${faker.datatype.uuid()}`,
        descricao: faker.random.words(5)
    }

    beforeEach(() => {
        cy.api_deletaTodosProjetos()
        cy.api_criarProjeto(projeto)
    })

    it('sucesso', () => {
        cy.cloneViaSSH(projeto)

        cy.readFile(`cypress/downloads/${projeto.nome}/README.md`)
      .should('contain', `# ${projeto.nome}`)
      .and('contain', projeto.descricao)
    })

})

