import { Page, Locator, expect} from '@playwright/test';

export class AddToCartPage {
    readonly page:Page;
    readonly addToCartSelector : Locator;
    readonly removeCartSelector : Locator;
    readonly cartNumberSelector: Locator;
    readonly cartTitleSelector :Locator;
    readonly cartQtySelector :Locator;
    readonly cartDescSelector :Locator;
    readonly continueShoppingSelector: Locator;
    readonly cartQty: Locator;
    readonly checkoutSelector: Locator;


    constructor(page:Page) {
        this.page = page;
        this.addToCartSelector = page.locator("#add-to-cart-sauce-labs-backpack");
        this.removeCartSelector = page.locator("#remove-sauce-labs-backpack");
        this.cartNumberSelector = page.locator(".shopping_cart_badge");
        this.cartTitleSelector = page.locator("[data-test='title']")

        this.cartQtySelector = page.locator(".cart_quantity_label")
        this.cartDescSelector = page.locator(".cart_desc_label")
        this.continueShoppingSelector = page.locator("#continue-shopping")
        this.cartQty = page.locator(".cart_quantity");
        this.checkoutSelector = page.locator("#checkout")

    }

    async assertAddToCartLabel(expected){
        const cartLabel = await this.addToCartSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async assertRemoveCartLabel(expected){
        const cartLabel = await this.removeCartSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async clickAddToCart(){
        await this.addToCartSelector.click();
    }

    async assertCartNumber(expected){
        const cartLabel = await this.cartNumberSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async clickAddToCartIcon(){
        await this.cartNumberSelector.click();
    }


    async assertCartTitleLabel(expected){
        const cartLabel = await this.cartTitleSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }


    async assertCartQtyLabel(expected){
        const cartLabel = await this.cartQtySelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }


    async assertCartDescLabel(expected){
        const cartLabel = await this.cartDescSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async assertContinueShoppingLabel(expected){
        const cartLabel = await this.continueShoppingSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async assertCartQuantityLabel(expected){
        const cartLabel = await this.cartQty.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async assertCheckoutLabel(expected){
        const cartLabel = await this.checkoutSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }



}