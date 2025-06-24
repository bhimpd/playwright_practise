import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


test ("Test Login funtionality Successfully", async ({page}) =>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    await login.logoAssert();

    const title = await page.title();
    console.log("title :: ",title);
    await expect(page).toHaveTitle(title);

    await login.loginSuccess();

    await login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

    await page.waitForTimeout(5000);
});

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

test("Side menu assertion", async({page})=>{
    const login = new LoginPage(page);
    const homePage = new HomePage(page);

    await login.goto('https://www.saucedemo.com/');
    await login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);
    await login.loginSuccess();

    await login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

    await homePage.clickHamburgerButton();
    await homePage.assertSideMenusItems(); 

});