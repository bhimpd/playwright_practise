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
    readonly productTitleSelector: Locator;
    readonly productDescSelector: Locator;
    readonly productAmtSelector: Locator;
    readonly informationTitleSelectcor: Locator;
    readonly cancelSelector: Locator;
    readonly continueSelector: Locator;
    readonly firstNameSelector: Locator;
    readonly lastNameSelector: Locator;
    readonly postalCodeSelector: Locator;






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

        this.productTitleSelector = page.locator("#item_4_title_link")
        this.productDescSelector = page.locator(".inventory_item_desc");
        this.productAmtSelector = page.locator(".inventory_item_price")
        this.informationTitleSelectcor = page.locator(".title")

        this.cancelSelector = page.locator("#cancel")
        this.continueSelector = page.locator("#continue")

        this.firstNameSelector = page.locator("#first-name")
        this.lastNameSelector = page.locator("#last-name")
        this.postalCodeSelector = page.locator("#postal-code")


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

    async assertProductTitleLabel(expected){
        const cartLabel = await this.productTitleSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }
    async assertProductDescLabel(expected){
        const cartLabel = await this.productDescSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }
    async assertProductAmtLabel(expected){
        const cartLabel = await this.productAmtSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }

    async clickCheckoutButton(){
        await this.checkoutSelector.click();
    }

    async assertInformationTitle(expected){
        const cartLabel = await this.informationTitleSelectcor.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }


    async assertCancelLabel(expected){
        const cartLabel = await this.cancelSelector.textContent();
        expect(cartLabel?.trim()).toEqual(expected)
    }
    
    async assertContinueLabel(expected){
        const value = await this.continueSelector.getAttribute('value');
        expect(value?.trim()).toEqual(expected);
    }

    async enterFirstName(firstname: string){
        await this.firstNameSelector.fill(firstname);
    }

    async enterLastName(lastname: string){
        await this.lastNameSelector.fill(lastname);
    }

    async enterPostalCode(postalcode:string){
        await this.postalCodeSelector.fill(postalcode);
    }

    async enterUserDetails(){
        await this.enterFirstName("victor");
        await this.enterLastName("memo");
        await this.enterPostalCode("2244");
    }

    async clickContinue(){
        await this.continueSelector.click();
    }

}