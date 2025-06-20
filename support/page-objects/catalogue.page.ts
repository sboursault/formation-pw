import { expect, type Locator, type Page } from "@playwright/test";

export class PageCatalogue {
  readonly page: Page;
  readonly boutonPanier: Locator;
  readonly messages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boutonPanier = page
      .locator("#top_page")
      .getByRole("button", { name: /Panier/i }); // /i -> case insensitive;
    this.messages = page.locator("#messages");
  }

  async afficheMiniPanier() {
    await this.boutonPanier.click();
  }

  async ajouterProduit(id: number) {
    await this.page.getByTestId("product-pod-add-button-" + id).click();
  }
}
