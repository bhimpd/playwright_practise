import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getProductCards() {
    return this.page.locator('.inventory_item');
  }

  async assertTitle(index: number, expected: string) {
    const title = this.getProductCards().nth(index).locator('.inventory_item_name');
    await expect(title).toHaveText(expected);
  }

  async assertDescription(index: number, expected: string) {
    const desc = this.getProductCards().nth(index).locator('.inventory_item_desc');
    await expect(desc).toHaveText(expected);
  }

  async assertPrice(index: number, expected: string) {
    const price = this.getProductCards().nth(index).locator('.inventory_item_price');
    await expect(price).toHaveText(expected);
  }

  async assertImage(index: number, expectedSrc: string) {
    const img = this.getProductCards().nth(index).locator('img');
    await expect(img).toHaveAttribute('src', expectedSrc);
  }

  async clickProduct(index: number) {
    await this.getProductCards().nth(index).locator('.inventory_item_name').click();
  }

  async assertDetailTitle(expected: string) {
    const title = this.page.locator('.inventory_details_name');
    await expect(title).toHaveText(expected);
  }

  async assertDetailDescription(expected: string) {
    const desc = this.page.locator('.inventory_details_desc');
    await expect(desc).toHaveText(expected);
  }

  async assertDetailPrice(expected: string) {
    const price = this.page.locator('.inventory_details_price');
    await expect(price).toHaveText(expected);
  }

  async assertDetailImage(expectedSrc: string) {
    const img = this.page.locator('.inventory_details_img');
    await expect(img).toHaveAttribute('src', expectedSrc);
  }

  async goBack() {
    await this.page.locator('[data-test="back-to-products"]').click();
  }

  // async selectFilter() {
  //   const dropdown = this.page.locator('select');
  //   await dropdown.selectOption({ label: "Name (A to Z)"});
  //   await expect(dropdown).toHaveValue("az");
  // }


  async selectFilter() {
    const dropdown = this.page.locator('select');
    await dropdown.selectOption({ label: "Name (Z to A)"});
    await expect(dropdown).toHaveValue("za");
  }
}
