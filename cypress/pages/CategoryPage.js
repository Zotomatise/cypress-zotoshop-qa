class CategoryPage {
  visiter(slug) {
    cy.visit(`/fr/categories/${slug}`);
    return this;
  }

  get titre() {
    return cy.get('[data-testid="category-page-title"]');
  }

  get listeProduits() {
    return cy.get('[data-testid="products-list"]');
  }

  get cartesProduits() {
    return cy.get('[data-testid="product-wrapper"]');
  }

  ouvrirProduit(nom) {
    this.cartesProduits.contains('[data-testid="product-title"]', nom).click();
    return this;
  }
}

export default new CategoryPage();
