import { test as base } from "@playwright/test";

type Fixtures = {
  credentials: Credentials;
};

type Credentials = {
  username: string;
  password: string;
};

export const test = base.extend<Fixtures>({
  credentials: async ({ request }, use) => {
    const c = {
      username: crypto.randomUUID() + "@test.com",
      password: "hellohell0",
    };
    console.log("USER :");
    console.log(c.username);
    await request.post("/api/register/", {
      data: {
        email: c.username,
        password1: c.password,
        password2: c.password,
      },
    });
    // it seems only one user is created !?
    await use(c);
  },
});
export { expect } from "@playwright/test";
