/// <reference types="cypress" />
var faker = require('faker');

context('Realizar o pré-cadastro do usuário e então, completar seu cadastro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    });

    it('Realizar o pré cadastro e então completar o cadastro do usuário dentro do site', () => {
        var nomeFaker = faker.name.firstName();
        var sobrenomeFaker = faker.name.lastName();
        var emailFaker = faker.internet.email(nomeFaker);
        var senha = '!Minha.senha123';

        //Preencher e-mail e senha no pré-cadastro
        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type(senha);
        cy.get(':nth-child(4) > .button').click();
        //Completar o cadastro do usuário
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobrenomeFaker);
        cy.get('.woocommerce-Button').click();
        //Validar se o cadastro foi completado com sucesso
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });
    
});