import { test, expect } from "../support/fixtures";
import { PageCatalogue } from "../support/page-objects/catalogue.page";

test("avec adresse et mot de passe valide, je peux me connecter", async ({
  page,
  pageConnexion,
  pageCatalogue,
}) => {
  await page.goto("/accounts/login/");
  await pageConnexion.champLogin.fill("seb@test.com");
  await pageConnexion.champPassword.fill("seb@test.com");
  await pageConnexion.boutonConnexion.click();

  await expect(pageCatalogue.messages).toContainText("Bienvenue");
  await expect(page.locator("#top_page")).toContainText("seb@test.com");
});

test("avec adresse invalide, erreur affichée", async ({
  page,
  pageCatalogue,
}) => {
  // - > "Saisissez un nom d’utilisateur et un mot de passe valides."
});
