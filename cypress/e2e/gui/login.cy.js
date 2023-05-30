describe('Tela de Login', () => {
    
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user_login').as('usuario')
    cy.get('#user_password').as('senha')
    cy.get('input[type="submit"][value="Sign in"]').as('sign in')
  })

  it('login com usuário vazio', () => { 
    cy.get('@senha')
      .type('Codornar', {log: false}, {delay: 0});
    cy.get('@sign in')
      .click()
    cy.get('p.gl-field-error')
      .should('be.visible', 'This field is required.')
  });

  it('login com senha vazia', () => {
    cy.get('@usuario')
      .type('root', {delay: 0})
    cy.get('@sign in')
      .click()
    cy.get('p.gl-field-error')
      .should('be.visible', 'This field is required.')
  });

  it('usuário e senha inválidos', () => {
    cy.get('@usuario')
      .type('teste', {delay: 0})
    cy.get('@senha')
      .type('teste', {delay: 0})
    cy.get('@sign in')
      .click()
    cy.get('.flash-alert > span')
      .should('be.visible', 'Invalid Login or password.')
    cy.get('@senha')
      .should('not.have.value')
  });

  it('verificar checkbox', () => {
    cy.get('input[type="checkbox"][value="1"]')
      .should('have.length', 1) 
      .check()
      .should('be.checked', 'Remember me')
      .uncheck()
      .should('not.be.checked')
  });

  it('clicar no botão "esqueceu sua senha?"', () => {
    cy.get('a[href*="/users/password/new"]')
      .click()
    cy.get('h1.mb-3')
      .should('be.visible', 'GitLab Community Edition')
  });

  it('verificar login valido', () => {
    cy.login()  
    cy.get('h2.blank-state-welcome-title')
      .should('be.visible', 'Welcome to GitLab')
  });
  

});