class AccountPage {
  visiter() {
    cy.visit("/fr/account");
    return this;
  }

  get pageConnexion() {
    return cy.get('[data-testid="login-page"]');
  }

  get champEmail() {
    return cy.get('[data-testid="email-input"]');
  }

  get champMotDePasse() {
    return cy.get('[data-testid="password-input"]');
  }

  get boutonSeConnecter() {
    return cy.get('[data-testid="sign-in-button"]');
  }

  get boutonCreerCompte() {
    return cy.get('[data-testid="register-button"]');
  }

  ouvrirFormulaireInscription() {
    this.boutonCreerCompte.click();
    return this;
  }

  get champPrenom() {
    return cy.get('[data-testid="register-first-name"]');
  }

  get champNom() {
    return cy.get('[data-testid="register-last-name"]');
  }

  get champEmailInscription() {
    return cy.get('[data-testid="register-email"]');
  }

  get champMotDePasseInscription() {
    return cy.get('[data-testid="register-password"]');
  }

  get champConfirmationMotDePasse() {
    return cy.get('[data-testid="register-confirm-password"]');
  }

  get caseConditions() {
    return cy.get('[data-testid="register-terms"]');
  }

  get boutonValiderInscription() {
    return cy.get('[data-testid="register-submit"]');
  }
}

export default new AccountPage();
