import { test as base } from '@playwright/test';
import MainPage from "./pages/_main-page/main-page";
import LoginPage from './pages/login-page/login-page';

type Pages = {
    mainPage: MainPage;
    loginPage: LoginPage;
}

export const test = base.extend<Pages>({
    mainPage: async ({page}, use) => {
        await use(new MainPage(page));
    }, 
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
});

export { expect } from '@playwright/test';
