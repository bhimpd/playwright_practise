import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { AddToCartPage } from '../pages/AddToCartPage';


import productData from '../data/productDetails.json';


test.beforeEach("Login", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    await login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);

    await login.loginSuccess();

    await login.assertDashboardPage("https://www.saucedemo.com/inventory.html");

});



test.only("Should sort the product in Ascending Order.",async({page}) =>{
    const productPage = new ProductPage(page);
   
    await productPage.selectFilter();
    await page.waitForTimeout(5000);
});

