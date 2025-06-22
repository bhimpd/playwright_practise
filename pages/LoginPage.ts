import { Page, Locator,expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logo:Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.logo = page.locator(".login_logo");
  }

  async goto(url:string) {
    await this.page.goto(url);
  }
  

  async logoAssert() {
    await expect(this.logo).toHaveText("Swag Labs")
  }
  
  async fillUsername(username:string){
    await this.usernameInput.fill(username);
  }

  async fillPassword(password:string){
    await this.passwordInput.fill(password);
  }

  async clickLogin(){
    await this.loginButton.click();
  }

  async login() {
    await this.fillUsername("standard_user");
    await this.fillPassword("secret_sauce");
    await this.clickLogin();
  }

  async assertDashboardPage(url:string){
    await expect(this.page).toHaveURL(url);
}

}
