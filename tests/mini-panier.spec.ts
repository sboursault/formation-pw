import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://simplecommerce1nz5qlcr-container-kind-robinson.functions.fnc.fr-par.scw.cloud/"
  );
});

test("À l'arrivée sur la page, le libellé du mini panier ne contient pas de chiffres", async ({
  page,
}) => {
  await expect(
    page.locator("#top_page").getByRole("button", { name: /Panier/i }) // /i -> case insensitive
  ).toHaveText("Panier");

  await expect(
    page.locator("#top_page").getByRole("button", { name: /Panier/i }) // /i -> case insensitive
  ).not.toHaveText(/\d/); // no digits
});

test('À l\'arrivée sur la page, le détail est "Votre panier est vide"', async ({
  page,
}) => {
  await page
    .locator("#top_page")
    .getByRole("button", { name: /Panier/i }) // /i -> case insensitive
    .click();

  await expect(page.getByText("Votre panier est vide.")).toBeVisible();
});

test('J\'ajoute un produit, le libellé du mini panier contient "(1)"', async ({
  page,
}) => {
  await page.getByTestId("product-pod-add-button-209").click();

  await expect(
    page.locator("#top_page").getByRole("button", { name: /Panier/i }) // /i -> case insensitive
  ).toContainText("(1)");
});
