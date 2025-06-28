import { Page, Locator, expect} from '@playwright/test';

export class AddToCartPage {
    readonly page:Page;
    readonly addToCartSelector : Locator;

    constructor(page:Page) {
        this.page = page;
        this.addToCartSelector = page.locator("#add-to-cart-sauce-labs-backpack");
    }

    async assertAddToCartLabel(expected){
        const cartLabel = await this.addToCartSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async clickAddToCart(){
        await this.addToCartSelector.click();
    }
}