import { Page, Locator,expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logo:Locator;
  readonly loginError:Locator;
  readonly hamburgerMenu:Locator;
  readonly aboutUs:Locator;
  readonly builAppText:Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.logo = page.locator(".login_logo");
    this.loginError = page.locator(".error-message-container.error");
    this.hamburgerMenu = page.locator("#react-burger-menu-btn");
    this.aboutUs = page.locator("#about_sidebar_link")
    this.builAppText = page.locator(".MuiBox-root.css-i3pbo")

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

  async loginSuccess() {
    await this.fillUsername("standard_user");
    await this.fillPassword("secret_sauce");
    await this.clickLogin();
  }

  async assertDashboardPage(url:string){
    await expect(this.page).toHaveURL(url);
}


async loginFailure() {
    await this.fillUsername("standard_user");
    await this.fillPassword("secret_sauces");
    await this.clickLogin();
  }

async assertloginError(){
    await expect(this.loginError).toHaveText("Epic sadface: Username and password do not match any user in this service");
}

async clickHamburger(){
  await this.hamburgerMenu.click();
}


async clickAboutUs(){
  await this.aboutUs.click();
}

async buildAppText() {
  await expect(this.builAppText).toHaveText("Build apps users love with AI-driven insights")
}


}
