/// <reference types="cypress" />
var faker = require('faker');

context('Realizar o pré-cadastro do usuário e então, completar seu cadastro', () => {
    
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    });

    it('Realizar o pré cadastro e então completar seu cadastro dentro do site', () => {
        //Preencher e-mail e senha no pré-cadastro
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('!Minha.senha123');
        cy.get(':nth-child(4) > .button').click();
        //Completar o cadastro do usuário
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.name.firstName());
        cy.get('#account_last_name').type(faker.name.lastName());
        cy.get('.woocommerce-Button').click();
        //Validar se o cadastro foi completado com sucesso
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.');
    });

});