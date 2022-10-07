/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(4).click();
        cy.get('.single_add_to_cart_button').should('contain','Comprar');
    });

    it('Deve adicionar um produto ao carrinho de compras', () => {
        //Define a quantidade de itens que será usado para executar o teste
        var quantidade = 5
        //Seleciona o produto, escolhe o tamanho, a cor, quantidade e adiciona ao carrinho
        cy.get('[class="product-block grid"]').contains('Arcadio Gym Short').click();
        cy.get('.button-variable-item-34').click();
        cy.get('.button-variable-item-Black').click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();
        //Valida se foi inserido corretamente dentro do carrinho
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade);
        cy.get('.woocommerce-message').should('contain',quantidade+' × “Arcadio Gym Short” foram adicionados no seu carrinho.');
    });

});