describe('Login', () => {
    
  it('verificar login valido', () => {
    const usuario = Cypress.env('user_name')
    const senha = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(usuario, senha, options)
    cy.get('.header-user-avatar').should('be.visible')
  });
  

});