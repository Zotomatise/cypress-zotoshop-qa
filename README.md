# Cypress · ZotoShop QA

Suite de tests end-to-end en Cypress sur [ZotoShop](https://zotoshop.zotomatise.com), une boutique e-commerce (Medusa.js + Next.js) déployée en production et dédiée à la pratique de l'automatisation de test.

![CI](https://github.com/Zotomatise/cypress-zotoshop-qa/actions/workflows/ci.yml/badge.svg)

## Stack

- [Cypress](https://www.cypress.io/) 13
- JavaScript
- Page Object Model
- GitHub Actions (CI headless sur chaque push/PR)

## Structure

```
cypress/
├── e2e/            # Specs : navigation, produits, panier, checkout
├── pages/          # Page Object Model (un objet par écran)
├── fixtures/        # Données de test (produits, catégories)
└── support/         # Commandes custom et setup global
```

## Lancer les tests

```bash
npm install
npm test          # headless, contre https://zotoshop.zotomatise.com
npm run cy:open    # mode interactif
```

## Ce que ce repo démontre

- **Page Object Model** : chaque écran (navigation, catégorie, fiche produit, panier, checkout, compte) est encapsulé dans une classe dédiée, réutilisée par tous les tests.
- **Sélecteurs stables** : tous les tests s'appuient sur des attributs `data-testid`, jamais sur des classes CSS ou du texte fragile.
- **Tests indépendants** : chaque test recrée son propre état (ajout produit au panier) plutôt que de dépendre de l'ordre d'exécution ou de données partagées.
- **CI/CD** : la suite tourne automatiquement sur GitHub Actions à chaque push, avec captures d'écran et vidéos archivées en cas d'échec.
- **Data-driven** : les données produit (slug, nom, variantes) sont centralisées dans une fixture JSON plutôt que dupliquées dans chaque test.

## Parcours couverts

- Navigation principale (accueil, catégories, guide, compte)
- Fiche produit : affichage, sélection de variantes, activation conditionnelle du bouton d'ajout
- Panier : ajout, affichage, totaux, accès au checkout
- Checkout : récapitulatif de commande, totaux, retour au panier

---

Application testée développée par [Zotomatise](https://zotomatise.com), formation en automatisation de test logiciel.
