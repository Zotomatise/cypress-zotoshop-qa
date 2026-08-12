import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import NavigationPage from "../pages/NavigationPage";

describe("Panier", () => {
  let produits;

  before(() => {
    cy.fixture("produits").then((data) => {
      produits = data;
    });
  });

  const ajouterProduitAuPanier = () => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.choisirOption(produits.smartphonePro.couleur);
    ProductPage.choisirOption(produits.smartphonePro.capacite);
    ProductPage.ajouterAuPanier();
    // Le panier est mis à jour de façon asynchrone (appel API) : on attend que le
    // compteur de la nav reflète l'ajout avant de continuer, plutôt qu'un cy.wait fixe.
    NavigationPage.compteurPanier().should("not.eq", "Panier (0)");
  };

  it("affiche un message quand le panier est vide", () => {
    CartPage.visiter();
    CartPage.messagePanierVide.should("be.visible");
  });

  it("incrémente le compteur du panier après un ajout", () => {
    ajouterProduitAuPanier();
    NavigationPage.compteurPanier().should("match", /Panier \(\d+\)/);
    NavigationPage.compteurPanier().should("not.eq", "Panier (0)");
  });

  it("affiche le produit ajouté avec son prix dans la page panier", () => {
    ajouterProduitAuPanier();
    CartPage.visiter();
    CartPage.lignesProduits.should("have.length.at.least", 1);
    CartPage.lignesProduits.first().should("contain.text", produits.smartphonePro.nom);
  });

  it("affiche un sous-total et un total cohérents", () => {
    ajouterProduitAuPanier();
    CartPage.visiter();
    CartPage.sousTotal.should("be.visible");
    CartPage.total.should("be.visible");
  });

  it("permet d'accéder au checkout depuis le panier", () => {
    ajouterProduitAuPanier();
    CartPage.visiter();
    CartPage.passerCommande();
    cy.url().should("include", "/checkout");
  });
});
