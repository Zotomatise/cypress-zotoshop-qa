import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Checkout", () => {
  let produits;

  before(() => {
    cy.fixture("produits").then((data) => {
      produits = data;
    });
  });

  beforeEach(() => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.ajouterVarianteAuPanier(produits.smartphonePro.couleur, produits.smartphonePro.capacite);
    CheckoutPage.visiter();
  });

  it("affiche le récapitulatif de commande avec l'article ajouté", () => {
    CheckoutPage.conteneur.should("be.visible");
    CheckoutPage.lignesProduits.should("contain.text", produits.smartphonePro.nom);
  });

  it("affiche le détail des totaux (sous-total et total)", () => {
    CheckoutPage.sousTotal.should("be.visible");
    CheckoutPage.total.should("be.visible");
  });

  it("propose au moins une option de livraison ou de paiement", () => {
    CheckoutPage.optionsLivraisonPaiement.should("have.length.at.least", 1);
  });

  it("permet de revenir au panier depuis le checkout", () => {
    CheckoutPage.boutonRetourPanier.click();
    cy.url().should("include", "/cart");
    CartPage.lignesProduits.should("have.length.at.least", 1);
  });
});
