/// <reference types="cypress" />

context('Testes da funcionalidade de login', () => {

  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it('Deve realizar o login corretamente', () => {
    cy.get('#username').type("aluno_ebac@teste.com");
    cy.get('#password').type("teste@teste.com");
    cy.get('.woocommerce-form > .button').click();
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1)').should('contain', 'Welcome');
  })

  it('Deve exibir mensagem de erro ao clicar em realizar login sem inserir usuário e senha', () => {
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório')
  })

  it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {
    cy.get('#username').type("aluno_ebac@teste.com");
    cy.get('#password').type("teste@teste"); //Senha Inválida
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail')
  })

  it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {
    cy.get('#username').type("aluno_ebac@teste"); //Usuário Inválido
    cy.get('#password').type("teste@teste.com");
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário')
  })

})