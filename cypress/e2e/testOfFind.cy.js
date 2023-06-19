const searchProductOn = 'computador gamer'
const searchProductTwo = 'mouse'

function searchProduct(product) {
    cy.viewport(1280, 960)
    cy.get('#twotabsearchtextbox').type(product)
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-index="8"]').click()
    cy.get('#quantity').select('3')
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc').click()
    cy.get('.a-dropdown-prompt').click()
}


beforeEach(() => {
    cy.visit('/')
});

describe('Search for a product and apply the <Free Shipping> selection filter', () => {
    it('', () => {
        cy.viewport(1280, 960)
        cy.get('#twotabsearchtextbox').type(searchProductOn)
        cy.get('#nav-search-submit-button').click()
        cy.contains("Frete Grátis em envios pela Amazon").click()
    });    
});

describe('Search for a product in the search field, check if the suggested suggestion quantity is equal to 10', () => {
    it('', () => {
        cy.viewport(1280, 960)
        cy.get('#twotabsearchtextbox').type(searchProductOn)
        cy.get('.s-suggestion-container').should('have.length', 10)       
    });
});

describe('Search for a product added to the pre-configured quantity in the shopping cart and confirm that the result agrees', () => {
        it('', () => {
            cy.viewport(1280, 960)
            cy.get('#twotabsearchtextbox').type('caixa de som{enter}')
            cy.contains("Caixa de Som Bluetooth WAAW by Alok BOOM 100SB Grande e Portátil com Alça e à Prova d'Água IPX7 40W 20 horas de reprodução").click()
            //cy.get('[data-index="8"]').click() ###Search by index date###
            cy.get('#quantity').select('5')
            cy.get('#add-to-cart-button').click()
            cy.get('#attachSiNoCoverage').click()
            cy.get('#nav-cart-count')
            .should('have.text', '5')
            cy.scrollTo('top')
        });
    });

describe('Search for a product, add it to the cart, change the quantity and check if it is correct', () => {
        it('', () => {
            searchProduct(searchProductTwo)
            cy.get('#quantity_2').click()
            .should('have.text', '2')
            cy.scrollTo('top')
        });
    });

describe('Adds a product to the shopping cart, deletes it from the cart and confirms that it has really been removed', () => {
        it('', () => {
            searchProduct(searchProductTwo)
            cy.get('#quantity_0').click()
            cy.get('#nav-cart-count')
            .should('have.text', '0')  
            cy.scrollTo('top')        
        });
    });