class NavigationPage {
  visiterAccueil() {
    cy.visit("/fr");
    return this;
  }

  get lienBoutique() {
    return cy.get('[data-testid="nav-store-link"]');
  }

  get lienGuideQA() {
    return cy.get('[data-testid="nav-guide-link"]');
  }

  get lienCompte() {
    return cy.get('[data-testid="nav-account-link"]');
  }

  get lienPanier() {
    return cy.get('[data-testid="nav-cart-link"]');
  }

  get liensCategories() {
    return cy.get('[data-testid="category-link"]');
  }

  ouvrirCategorie(nom) {
    this.liensCategories.contains(nom).click();
    return this;
  }

  compteurPanier() {
    return cy.get('[data-testid="nav-cart-link"]').invoke("text");
  }
}

export default new NavigationPage();
