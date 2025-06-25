import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.beforeEach("Login", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    await login.logoAssert();

    const title = await page.title();
    console.log("title :: ",title);
    await expect(page).toHaveTitle(title);

    await login.loginSuccess();

    await login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

});


test ("Test Login funtionality Successfully", async ({page}) =>{
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(5000);

});


test("Side menu assertion", async({page}) => {

    const homePage = new HomePage(page);

    await homePage.clickHamburgerButton();
    await homePage.assertSideMenusItems(); 
    await page.waitForTimeout(5000);

});