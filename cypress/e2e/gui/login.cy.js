describe('Tela de Login', () => {
    
  it('verificar login valido', () => {
    cy.login()  
    cy.get('h2.blank-state-welcome-title')
      .should('be.visible', 'Welcome to GitLab')
  });
  

});