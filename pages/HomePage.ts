import { Page, Locator,expect, Selectors } from '@playwright/test';


export class HomePage{
    readonly page:Page;
    readonly sidemenuItemsSelector: Locator;
    readonly hamburgerSelector: Locator;
    readonly footerTextSelector: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.sidemenuItemsSelector = page.locator(".bm-item.menu-item");
        this.hamburgerSelector = page.locator("#react-burger-menu-btn");
        this.footerTextSelector = page.locator(".footer_copy");
    }

    async clickHamburgerButton(){
        await this.hamburgerSelector.click();
      }

    async assertSideMenusItems(){
        const expectedTexts = ['All Items', 'About', 'Logout', 'Reset App State'];
        const sideMenuCount = await this.sidemenuItemsSelector.count();
        expect(sideMenuCount).toBe(expectedTexts.length);

        const actualTexts = await this.sidemenuItemsSelector.allTextContents();

        expect(actualTexts.sort()).toEqual(expectedTexts.sort());

    }


    async footerText(){
        await expect(this.footerTextSelector).toHaveText("© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
    }

}