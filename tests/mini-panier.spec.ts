import { test, expect } from "../support/fixtures";
import { PageCatalogue } from "../support/page-objects/catalogue.page";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("À l'arrivée sur la page, le libellé du mini panier ne contient pas de chiffres", async ({
  pageCatalogue
}) => {
  await expect(pageCatalogue.boutonPanier).toHaveText("Panier");
  await expect(pageCatalogue.boutonPanier).not.toHaveText(/\d/); // no digits
});

test('À l\'arrivée sur la page, le détail est "Votre panier est vide"', async ({
  page, pageCatalogue
}) => {
  await pageCatalogue.afficheMiniPanier();
  await expect(page.getByText("Votre panier est vide.")).toBeVisible();
});

test('J\'ajoute un produit, le libellé du mini panier contient "(1)"', async ({
  page, pageCatalogue
}) => {
  await pageCatalogue.ajouterProduit(209);
  await expect(pageCatalogue.boutonPanier).toContainText("(1)");
});
