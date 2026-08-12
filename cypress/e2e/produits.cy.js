import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";

describe("Fiche produit", () => {
  let produits;

  before(() => {
    cy.fixture("produits").then((data) => {
      produits = data;
    });
  });

  it("affiche le titre, le prix et la description du produit", () => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.titre.should("contain.text", produits.smartphonePro.nom);
    ProductPage.prix.should("be.visible");
    ProductPage.description.should("be.visible");
  });

  it("désactive le bouton d'ajout tant qu'aucune variante n'est sélectionnée", () => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.boutonAjouter.should("be.disabled");
  });

  it("active le bouton d'ajout une fois couleur et capacité choisies", () => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.choisirOption(produits.smartphonePro.couleur);
    ProductPage.choisirOption(produits.smartphonePro.capacite);
    ProductPage.boutonAjouter.should("not.be.disabled").and("contain.text", "Ajouter au panier");
  });

  it("affiche des produits liés en bas de fiche", () => {
    ProductPage.visiter(produits.smartphonePro.slug);
    ProductPage.produitsLies.should("be.visible");
  });

  it("permet d'accéder à une fiche produit depuis la page catégorie", () => {
    CategoryPage.visiter(produits.categorieSmartphones.slug);
    CategoryPage.ouvrirProduit(produits.smartphoneLite.nom);
    cy.url().should("include", `/products/${produits.smartphoneLite.slug}`);
  });
});
