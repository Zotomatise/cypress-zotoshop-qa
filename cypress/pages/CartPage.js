class CartPage {
  visiter() {
    cy.visit("/fr/cart");
    return this;
  }

  get conteneur() {
    return cy.get('[data-testid="cart-container"]');
  }

  get messagePanierVide() {
    return cy.get('[data-testid="empty-cart-message"]');
  }

  get lignesProduits() {
    return cy.get('[data-testid="product-row"]');
  }

  get sousTotal() {
    return cy.get('[data-testid="cart-subtotal"]');
  }

  get total() {
    return cy.get('[data-testid="cart-total"]');
  }

  get boutonCommander() {
    return cy.get('[data-testid="checkout-button"]');
  }

  passerCommande() {
    this.boutonCommander.click();
    return this;
  }
}

export default new CartPage();
