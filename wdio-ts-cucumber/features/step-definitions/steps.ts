import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pages/login.page';
import SecurePage from '../../pages/secure.page';
//import loginPage from '../../y/login.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Given(/^I am able to pass the Zaggle URL$/, async () => {
    await browser.url("https://www.zaggle.in/")
    await browser.maximizeWindow();
    await browser.pause(5000);
}); 

When(/^I Will click on Enter button$/, async () => {
    await browser.keys("Enter");
    await browser.refresh();
    await browser.pause(3000);
});

When(/^verify the URL of zaggle$/, async () => {
    let abc = await browser.getUrl();
    expect(abc).toEqual("https://www.zaggle.in/");
    console.log("Verified url")
    await browser.pause(5000);
});

Then(/^I should see the Zagglehome page Logo$/, async () => {
    await LoginPage.ZaggleHomePageLogo.isElementDisplayed;
    await browser.saveScreenshot;
    await browser.pause(5000);
});






