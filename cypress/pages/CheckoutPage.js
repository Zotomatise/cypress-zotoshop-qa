class CheckoutPage {
  visiter() {
    cy.visit("/fr/checkout");
    return this;
  }

  get conteneur() {
    return cy.get('[data-testid="checkout-container"]');
  }

  get tableauArticles() {
    return cy.get('[data-testid="items-table"]');
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

  get optionsLivraisonPaiement() {
    return cy.get('[data-testid="radio-button"]');
  }

  get boutonRetourPanier() {
    return cy.get('[data-testid="back-to-cart-link"]');
  }

  get boutonPayer() {
    return cy.get('[data-testid="submit-payment-button"]');
  }
}

export default new CheckoutPage();
