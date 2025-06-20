import { expect, type Locator, type Page } from "@playwright/test";

export class PageConnexion {
  readonly page: Page;
  readonly champLogin: Locator;
  readonly champPassword: Locator;
  readonly boutonConnexion: Locator;

  constructor(page: Page) {
    this.page = page;
    this.champLogin = page
      .locator("#login_form")
      .getByLabel("Adresse électronique");
    this.champPassword = page
      .locator("#login_form")
      .getByLabel("Mot de passe");
    this.boutonConnexion = page
      .locator("#login_form")
      .getByRole("button", { name: "Connexion" });
  }
}
