import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("Test login functionality failure", async({page})=>{
    const login = new LoginPage(page);

    await login.goto('https://www.saucedemo.com/');
    login.logoAssert();

    const title = await page.title();
    await expect(page).toHaveTitle(title);

    await login.loginFailure();

    await login.assertloginError();

    await page.waitForTimeout(5000);
});
