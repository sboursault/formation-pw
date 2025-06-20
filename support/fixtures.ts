import { test as base } from "@playwright/test";

import { PageCatalogue } from "./page-objects/catalogue.page";

type MesFixtures = {
  pageCatalogue: PageCatalogue;
};

export const test = base.extend<MesFixtures>({
  pageCatalogue: async ({ page }, use) => {
    await use(new PageCatalogue(page));
  },
});

export { expect } from "@playwright/test";
