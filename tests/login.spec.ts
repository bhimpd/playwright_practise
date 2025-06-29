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

test("Assert the footer", async ({page})=>{
    const homePage = new HomePage(page);

    await homePage.footerText();
    await page.waitForTimeout(5000);
});


test("Assert the social media text and links", async({page}) =>{

    const homePage = new HomePage(page);
    await homePage.assertSocialLinks();
    await page.waitForTimeout(5000);
});

test("Assert each product on listing and detail page", async ({ page }) => {
    const productPage = new ProductPage(page);
  
    const sortedProducts = [...productData].sort((a, b) => a.name.localeCompare(b.name));
  
    const cards = productPage.getProductCards();
    await expect(cards).toHaveCount(sortedProducts.length);
  
    for (let i = 0; i < sortedProducts.length; i++) {
      const { name, details, price, image } = sortedProducts[i];
      const formattedPrice = `$${price}`;
  
      // Assert on listing card
      await productPage.assertTitle(i, name);
      await productPage.assertDescription(i, details);
      await productPage.assertPrice(i, formattedPrice);
      await productPage.assertImage(i, image);
  
      // Go to details
      await productPage.clickProduct(i);
  
      // Assert on detail page
      await productPage.assertDetailTitle(name);
      await productPage.assertDetailDescription(details);
      await productPage.assertDetailPrice(formattedPrice);
      await productPage.assertDetailImage(image);
  
      // Back to listing
      await productPage.goBack();

    }
    await page.waitForTimeout(5000);
});

test.only("Add the product to the cart", async({ page })=> {
    const addtocart = new AddToCartPage(page);
    const login = new LoginPage(page);

    addtocart.assertAddToCartLabel("Add to cart");
    addtocart.clickAddToCart();
    addtocart.assertRemoveCartLabel("Remove");
    addtocart.assertCartNumber("1");
    addtocart.clickAddToCartIcon();
    await login.assertDashboardPage("https://www.saucedemo.com/cart.html");
    addtocart.assertCartTitleLabel("Your Cart");
    addtocart.assertCartQtyLabel("QTY");
    addtocart.assertCartDescLabel("Description");
    addtocart.assertContinueShoppingLabel("Continue Shopping");
    addtocart.assertCartQuantityLabel("1");
    addtocart.assertRemoveCartLabel("Remove");

    addtocart.assertProductTitleLabel("Sauce Labs Backpack");
    addtocart.assertProductDescLabel("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
    addtocart.assertProductAmtLabel("$29.99");

    addtocart.assertCheckoutLabel("Checkout");
    addtocart.clickCheckoutButton();

    await login.assertDashboardPage("https://www.saucedemo.com/checkout-step-one.html");

    addtocart.assertInformationTitle("Checkout: Your Information");




    await page.waitForTimeout(8000);

});