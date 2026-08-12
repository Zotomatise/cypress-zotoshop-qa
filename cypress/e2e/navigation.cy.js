import NavigationPage from "../pages/NavigationPage";
import CategoryPage from "../pages/CategoryPage";
import AccountPage from "../pages/AccountPage";

describe("Navigation", () => {
  beforeEach(() => {
    NavigationPage.visiterAccueil();
  });

  it("affiche la page d'accueil avec le contenu clé", () => {
    cy.contains("Bienvenue sur ZotoShop").should("be.visible");
    NavigationPage.lienPanier.should("contain.text", "Panier");
  });

  it("liste les catégories principales dans la navigation", () => {
    NavigationPage.liensCategories.should("have.length.at.least", 5);
    NavigationPage.liensCategories.should("contain.text", "Smartphones");
  });

  it("ouvre une catégorie depuis le lien de navigation", () => {
    NavigationPage.ouvrirCategorie("Smartphones");
    cy.url().should("include", "/categories/smartphones");
    CategoryPage.titre.should("be.visible");
  });

  it("ouvre la page Guide QA", () => {
    NavigationPage.lienGuideQA.click();
    cy.url().should("include", "/guide");
  });

  it("ouvre la page compte depuis la navigation", () => {
    NavigationPage.lienCompte.click();
    cy.url().should("include", "/account");
    AccountPage.pageConnexion.should("be.visible");
  });
});
