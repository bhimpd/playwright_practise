import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';


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


test("Should sort the product in Ascending Order.", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.selectFilter("Name (A to Z)","az");

    const ascendingOrder = [...productData].sort((a, b) => a.name.localeCompare(b.name));
    console.log("Ascending: Sorted Products::", ascendingOrder);

    for (let i = 0; i < ascendingOrder.length; i++) {
      const product = ascendingOrder[i];
      await productPage.assertTitle(i, product.name);
      await productPage.assertDescription(i, product.details);
      await productPage.assertPrice(i, `$${product.price}`);
      await productPage.assertImage(i, product.image);
    }
  
    await page.waitForTimeout(5000);
  });


test("Should sort the product in Descending Order.", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.selectFilter("Name (Z to A)","za");

    const sortedProducts = [...productData].sort((a, b) => a.name.localeCompare(b.name));
    const descendingOrder = [...sortedProducts].reverse();
    console.log("Descending: Sorted Products::", descendingOrder);

    for (let i = 0; i < sortedProducts.length; i++) {
      const product = descendingOrder[i];
      await productPage.assertTitle(i, product.name);
      await productPage.assertDescription(i, product.details);
      await productPage.assertPrice(i, `$${product.price}`);
      await productPage.assertImage(i, product.image);
    }
  
    await page.waitForTimeout(5000); 
  });


  test("Should sort the product in Ascending Price Order.", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.selectFilter("Price (low to high)","lohi");

    const sortedProducts = [...productData].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log("Ascending Price: Sorted Products::", sortedProducts);

    for (let i = 0; i < sortedProducts.length; i++) {
      const product = sortedProducts[i];
      await productPage.assertTitle(i, product.name);
      await productPage.assertDescription(i, product.details);
      await productPage.assertPrice(i, `$${product.price}`);
      await productPage.assertImage(i, product.image);
    }
  
    await page.waitForTimeout(5000); 
  });
  
  test("Should sort the product in Descending Price Order.", async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.selectFilter("Price (high to low)","hilo");

    const sortedProducts = [...productData].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log("Descending Price: Sorted Products::", sortedProducts);

    for (let i = 0; i < sortedProducts.length; i++) {
      const product = sortedProducts[i];
      await productPage.assertTitle(i, product.name);
      await productPage.assertDescription(i, product.details);
      await productPage.assertPrice(i, `$${product.price}`);
      await productPage.assertImage(i, product.image);
    }
  
    await page.waitForTimeout(5000); 
  });

