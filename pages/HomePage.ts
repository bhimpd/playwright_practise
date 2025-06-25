import { Page, Locator,expect, Selectors } from '@playwright/test';


export class HomePage{
    readonly page:Page;
    readonly sidemenuItemsSelector: Locator;
    readonly hamburgerSelector: Locator;
    readonly footerSectionSelector: Locator;
    readonly footerTextSelector: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.sidemenuItemsSelector = page.locator(".bm-item.menu-item");
        this.hamburgerSelector = page.locator("#react-burger-menu-btn");
        this.footerTextSelector = page.locator(".footer_copy");
        this.footerSectionSelector = page.locator(".footer");
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
        await this.footerSectionSelector.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
        await expect(this.footerTextSelector).toHaveText("© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
    }


async assertSocialLinks() {
    await this.footerSectionSelector.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    
    const socialLinks = [
      {
        testId: 'social-twitter',
        text: 'Twitter',
        href: 'https://twitter.com/saucelabs'
      },
      {
        testId: 'social-facebook',
        text: 'Facebook',
        href: 'https://www.facebook.com/saucelabs'
      },
      {
        testId: 'social-linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/company/sauce-labs/'
      }
    ];
  
    for (const { testId, text, href } of socialLinks) {
      const link = this.page.locator(`[data-test="${testId}"]`);
  
      await expect(link).toHaveText(text);
      await expect(link).toHaveAttribute('href', href);
    }
  }
  

}