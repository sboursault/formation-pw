import { test as base } from "@playwright/test";

import { PageCatalogue } from "./page-objects/catalogue.page";
import { PageConnexion } from "./page-objects/connexion.page";

type MesFixtures = {
  pageCatalogue: PageCatalogue;
  pageConnexion: PageConnexion;
};

export const test = base.extend<MesFixtures>({
  pageCatalogue: async ({ page }, use) => {
    await use(new PageCatalogue(page));
  },
  pageConnexion: async ({ page }, use) => {
    await use(new PageConnexion(page));
  },
});

export { expect } from "@playwright/test";
