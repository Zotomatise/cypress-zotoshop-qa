class ProductPage {
  visiter(slug) {
    cy.visit(`/fr/products/${slug}`);
    return this;
  }

  get titre() {
    return cy.get('[data-testid="product-title"]').first();
  }

  get prix() {
    return cy.get('[data-testid="product-price"]');
  }

  get description() {
    return cy.get('[data-testid="product-description"]');
  }

  get optionsProduit() {
    return cy.get('[data-testid="option-button"]');
  }

  choisirOption(libelle) {
    this.optionsProduit.contains(libelle).click();
    return this;
  }

  get boutonAjouter() {
    return cy.get('[data-testid="add-product-button"]');
  }

  ajouterAuPanier() {
    this.boutonAjouter.click();
    return this;
  }

  get produitsLies() {
    return cy.get('[data-testid="related-products-container"]');
  }
}

export default new ProductPage();
