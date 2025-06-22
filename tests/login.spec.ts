import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ("Test Login funtionality", async ({page}) =>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    login.logoAssert();

    const title = await page.title();
    console.log("title :: ",title);
    await expect(page).toHaveTitle(title);

    login.login();

    login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

    await page.waitForTimeout(2000);
})