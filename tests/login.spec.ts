import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test ("Test Login funtionality Successfully", async ({page}) =>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    login.logoAssert();

    const title = await page.title();
    console.log("title :: ",title);
    await expect(page).toHaveTitle(title);

    login.loginSuccess();

    login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

    await page.waitForTimeout(5000);
});

test("Test login functionality failure", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);

    login.loginFailure();

    login.assertloginError();

    await page.waitForTimeout(5000);
});