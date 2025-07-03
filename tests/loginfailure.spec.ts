import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("Test login functionality failure", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);

    await login.loginFailure();

    await login.assertloginError();

    await page.waitForTimeout(5000);
});


test("Cross Origin Test", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    await login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);

    await login.loginSuccess();

    await login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

    await login.clickHamburger();
    await login.clickAboutUs();
    await page.waitForTimeout(2000);
    await login.assertDashboardPage("https://saucelabs.com/");
    await login.buildAppText();
    await page.waitForTimeout(5000);
})