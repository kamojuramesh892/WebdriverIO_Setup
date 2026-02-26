import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pages/login.page';
import loginPage from '../../pages/login.page';
//import loginPage from '../../pages/login.page';
//import loginPage from '../../y/login.page';

Given(/^I am able to pass the Zaggle URL$/, async () => {
    await browser.url("https://www.zaggle.in/")
    // await browser.maximizeWindow();
    // await browser.pause(5000);
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



// store creation

Given(/^I am on the zaggle login page$/, async () => {
    await browser.url('https://qa-app.zaggleems.com/');
    await browser.pause(5000);
    await browser.maximizeWindow();
});

When(/^I Will enter Username and password and click on login$/, async () => {
    await LoginPage.userName.setValue("newpettycashonly@pcash.com");
    await browser.pause(2000);
    await LoginPage.passWord.setValue("Testing@111");
    await browser.pause(2000);
    await LoginPage.LoginButton.click()
    await browser.pause(2000);
});

When(/^I will click on Admin and Stores tab$/, async () => {
    await LoginPage.adminButton.scrollIntoView()
    await  LoginPage.adminButton.click()
    await browser.pause(3000)
    await LoginPage.storesTab.scrollIntoView()
    await  LoginPage.storesTab.click()
});

When(/^I will click on Add store button$/, async () => {
    await  LoginPage.addStore.click()
    // logout
});

When(/^I will Enter required fields and submit the store$/, async () => {
    await LoginPage.enterStoreDetails();

     await LoginPage.enterPettyCashDetails();

    await LoginPage.submitButton.scrollIntoView()
    await  LoginPage.submitButton.click()
});

When(/^I will Enter only store fields and submit the store$/, async () => {
    await LoginPage.enterStoreDetails();
    await LoginPage.submitButton.scrollIntoView()
    await  LoginPage.submitButton.click()
});

Then(/^Store should be successfully created$/, async () => {
    await browser.pause(3000)
    await loginPage.cancelButton.click()
    await browser.pause(2000)
    await LoginPage.threeDotsIcon.scrollIntoView()
    await LoginPage.threeDotsIcon.click()
    await LoginPage.deleteIcon.click()
    await LoginPage.confirmYes.click()
    await browser.pause(2000)
});





//three scenarios

When(/^I Will enter Username "([^"]*)" and password "([^"]*)" and click on login$/,async (username: string, password: string) => {
    await LoginPage.userName.waitForDisplayed();
    await LoginPage.userName.setValue(username);

    await LoginPage.passWord.waitForDisplayed();
    await LoginPage.passWord.setValue(password);

    await LoginPage.LoginButton.waitForClickable();
    await LoginPage.LoginButton.click();
  }
);


When(/^I will Enter required fields and submit the store with "([^"]*)"$/,async (configType: string) => {

    // Fill common store fields
    await LoginPage.enterStoreDetails();
    switch (configType) {
      case 'PettyCashOnly':
        await LoginPage.enterPettyCashDetails();
        break;
      case 'UtilitiesOnly':
        await LoginPage.enterUtilitiesDetails();
        break;
      case 'PettyCashAndUtility':
        await LoginPage.enterPettyCashDetails();
        await LoginPage.enterUtilitiesDetails();
        break;
      
    }
    await LoginPage.submitButton.scrollIntoView()
    await  LoginPage.submitButton.click()
   
  }
);








