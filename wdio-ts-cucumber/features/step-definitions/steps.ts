import { Given, When, Then } from '@wdio/cucumber-framework';
// import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pages/login.page';
import { TestData } from '../../Data/data';
import { ExcelUtil } from '../../utils/ExcelUtil';

let generatedRefId: string;

// Given(/^I am on the zaggle login page$/, async () => {
//     generatedRefId = ExcelUtil.createOrUpdateExcel();
//     console.log('Using RefId in test:', generatedRefId);
// });
// store creation

Given(/^I am on the zaggle login page$/, async () => {
    await browser.url('https://qa-app.zaggleems.com/');
    await browser.pause(5000);
    await browser.maximizeWindow();
});

When(/^I will click on Admin and Stores tab$/, async () => {
    await LoginPage.adminButton.scrollIntoView()
    await LoginPage.adminButton.click()
    await browser.pause(3000)
    await LoginPage.storesTab.scrollIntoView()
    await LoginPage.storesTab.click()
});

When(/^I will click on Add store button$/, async () => {
    await LoginPage.addStore.click()
});

When(/^I will Enter only store fields and submit the store$/, async () => {
    await LoginPage.enterStoreDetails();
    await LoginPage.submitButton.click()
});

Then(/^Store should be successfully created$/, async () => {
    //success message validation
    await LoginPage.successMessage.waitForDisplayed();
    let successMessage = await LoginPage.successMessage.getText()
    expect(successMessage).toEqual("Unit created successfully")
    //delete created store
    await LoginPage.threeDotsIcon.scrollIntoView()
    const xpath = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
    const lastIcon = await $(xpath);
    await lastIcon.click();
    await LoginPage.deleteIcon.click()
    await LoginPage.confirmYes.click()
    await LoginPage.successMessage.waitForDisplayed();
    let deleteSuccessMessage = await LoginPage.successMessage.getText()
    expect(deleteSuccessMessage).toEqual("Request processed successfully")
    await browser.pause(2000)
});

//three scenarios

When(/^I Will enter Username "([^"]*)" and password "([^"]*)" and click on login$/, async (username: string, password: string) => {
    await LoginPage.userName.waitForDisplayed();
    await LoginPage.userName.setValue(username);

    await LoginPage.passWord.waitForDisplayed();
    await LoginPage.passWord.setValue(password);

    await LoginPage.LoginButton.waitForClickable();
    await LoginPage.LoginButton.click();
}
);


When(/^I will Enter required fields and submit the store with "([^"]*)"$/, async (configType: string) => {

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
    await LoginPage.submitButton.click()

}
);

//bulk upload

When(/^I will click on Add Bulk store button$/, async () => {
    await LoginPage.addBulkStoresButton.click()
});

// When(/^I will click on upload template$/, async () => {
//     // await LoginPage.uploadInput.click()
// });

Then(/^I will sucessfully upload template for "([^"]*)"$/, async (configType: string) => {
    switch (configType) {
        case 'StoreOnly':
            generatedRefId = await ExcelUtil.createOrUpdateExcel();
            console.log('Using RefId in test:', generatedRefId);
            TestData.messages.storeID = generatedRefId;
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let suceesmessageforStoreCreation = await LoginPage.bulkUploadSuce.getText();
            console.log(suceesmessageforStoreCreation)
            expect(suceesmessageforStoreCreation).toEqual("File uploaded successfully. \nDownload report here")
            //verify created store in list
            await LoginPage.bulkUploadModalClose.click()
            const xpath1 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon1 = await $(xpath1);
            await lastIcon1.isDisplayed();
            // delete created storre
            await LoginPage.threeDotsIcon.scrollIntoView()
            const xpath = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon = await $(xpath);
            await lastIcon.click();
            await LoginPage.deleteIcon.click()
            await LoginPage.confirmYes.click()
            await browser.pause(2000)


        break;
        case 'StoreAndPettyCashOnly':
            //store upload
            generatedRefId = await ExcelUtil.createOrUpdateExcel();
            console.log('Using RefId in test:', generatedRefId);
            TestData.messages.storeID = generatedRefId;
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let suceesmessageforStore = await LoginPage.bulkUploadSuce.getText();
            console.log(suceesmessageforStore)
            expect(suceesmessageforStore).toEqual("File uploaded successfully. \nDownload report here")
            //pettycash upload
            await LoginPage.bulkUploadDropDown.click()
            await LoginPage.pettycashInDropDown.click()
            await browser.pause(2000)
            generatedRefId = await ExcelUtil.createPettyCashExcel(generatedRefId);
            console.log('Using RefId in test:', generatedRefId);
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let suceesmessageforPettycash = await LoginPage.bulkUploadSuce.getText();
            console.log(suceesmessageforPettycash)
            expect(suceesmessageforPettycash).toEqual("File uploaded successfully. \nDownload report here")
            //verify created store in list
            await LoginPage.bulkUploadModalClose.click()
            const xpath2 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon2 = await $(xpath2);
            await lastIcon2.isDisplayed();
            // delete created storre
            await LoginPage.threeDotsIcon.scrollIntoView()
            const xpath3 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon3 = await $(xpath3);
            await lastIcon3.click();
            await LoginPage.deleteIcon.click()
            await LoginPage.confirmYes.click()
            await browser.pause(2000)
            break;
        case 'StoreAndUtilitiesOnly':
            //store upload
            generatedRefId = await ExcelUtil.createOrUpdateExcel();
            console.log('Using RefId in test:', generatedRefId);
            TestData.messages.storeID = generatedRefId;
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let suceesmessageofStore = await LoginPage.bulkUploadSuce.getText();
            console.log(suceesmessageofStore)
            expect(suceesmessageofStore).toEqual("File uploaded successfully. \nDownload report here")
            //utilities upload
            await LoginPage.bulkUploadDropDown.click()
            await LoginPage.UtilitiesInDropDown.click()
            await browser.pause(2000)
            generatedRefId = await ExcelUtil.createUtilitiesExcel(generatedRefId);
            console.log('Using RefId in test:', generatedRefId);
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let suceesmessageforUtilities = await LoginPage.bulkUploadSuce.getText();
            console.log(suceesmessageforUtilities)
            expect(suceesmessageforUtilities).toEqual("File uploaded successfully. \nDownload report here")
            //verify created store in list
            await LoginPage.bulkUploadModalClose.click()
            const xpath4 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon4 = await $(xpath4);
            await lastIcon4.isDisplayed();
            // delete created storre
            await LoginPage.threeDotsIcon.scrollIntoView()
            const xpath5 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon5 = await $(xpath5);
            await lastIcon5.click();
            await LoginPage.deleteIcon.click()
            await LoginPage.confirmYes.click()
            await browser.pause(2000)
            
            break;
        case 'StorePettyCashAndUtility':
            //store upload
            generatedRefId = await ExcelUtil.createOrUpdateExcel();
            console.log('Using RefId in test:', generatedRefId);
            TestData.messages.storeID = generatedRefId;
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let successMSGOfStore = await LoginPage.bulkUploadSuce.getText();
            console.log(successMSGOfStore)
            expect(successMSGOfStore).toEqual("File uploaded successfully. \nDownload report here")
            //pettycash upload
            await LoginPage.bulkUploadDropDown.click()
            await LoginPage.pettycashInDropDown.click()
            await browser.pause(2000)
            generatedRefId = await ExcelUtil.createPCExcelWhenBothEnabled(generatedRefId);
            console.log('Using RefId in test:', generatedRefId);
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let successMSGforPettycash = await LoginPage.bulkUploadSuce.getText();
            console.log(successMSGforPettycash)
            expect(successMSGforPettycash).toEqual("File uploaded successfully. \nDownload report here")
            //utilities upload
            await LoginPage.bulkUploadDropDown.click()
            await LoginPage.UtilitiesInDropDown.click()
            await browser.pause(2000)
            generatedRefId = await ExcelUtil.createUtilitityExcelWhenBothEnabled(generatedRefId);
            console.log('Using RefId in test:', generatedRefId);
            await LoginPage.uploadExcelFile()
            await LoginPage.bulkUploadSuce.waitForDisplayed();
            await browser.pause(5000)
            let successMSGOfUtilities = await LoginPage.bulkUploadSuce.getText();
            console.log(successMSGOfUtilities)
            expect(successMSGOfUtilities).toEqual("File uploaded successfully. \nDownload report here")
            //verify created store in list
            await LoginPage.bulkUploadModalClose.click()
            const xpath6 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon6 = await $(xpath6);
            await lastIcon6.isDisplayed();
            // delete created storre
            await LoginPage.threeDotsIcon.scrollIntoView()
            const xpath7 = `(//td[text()="${TestData.messages.storeID}"]//parent::tr//td)[last()]//i`;
            const lastIcon7 = await $(xpath7);
            await lastIcon7.click();
            await LoginPage.deleteIcon.click()
            await LoginPage.confirmYes.click()
            await browser.pause(2000)
            
            break;

    }

});

// Edit Existing Store

When(/^I will search for existing store and clicks on edit button$/, async () => {
    await LoginPage.storeSearchBox.click()
    await LoginPage.storeSearchBox.setValue("PaymentStore")
    await LoginPage.searchButton.click()

    await LoginPage.threeDotsOfSpecificStore.click()
    await LoginPage.editButton.click()
});

When(/^I will update the store details$/, async () => {
    let randomText = await LoginPage.generateRandomAlphaNumeric()
    let randomEmail = await LoginPage.generateRandomEmailID()
    let randomNumber = await LoginPage.generateRandomNumeric(6)
    await LoginPage.lobTextBox.clearValue()
    await LoginPage.lobTextBox.setValue(randomText)

    await LoginPage.primaryEmailIDTextBox.clearValue()
    await LoginPage.primaryEmailIDTextBox.setValue(randomEmail)

    await LoginPage.secondaryEmailIDTextBox.clearValue()
    await LoginPage.secondaryEmailIDTextBox.setValue(randomEmail)

    await LoginPage.GSTTextBox.clearValue()
    await LoginPage.GSTTextBox.setValue(randomNumber)

    await LoginPage.stateTextBox.clearValue()
    await LoginPage.stateTextBox.setValue(randomText)

    await LoginPage.cityTextBox.clearValue()
    await LoginPage.cityTextBox.setValue(randomText)

    await LoginPage.pincodeTextBox.clearValue()
    await LoginPage.pincodeTextBox.setValue(randomNumber)

    await LoginPage.address1TextBox.clearValue()
    await LoginPage.address1TextBox.setValue(randomText)

    await LoginPage.address2TextBox.clearValue()
    await LoginPage.address2TextBox.setValue(randomText)

    
});

When(/^I should be able to save Updated details successfully$/, async () => {
    await LoginPage.subscriptions.scrollIntoView()
    await LoginPage.submitButton.click()
    await LoginPage.successMessage.waitForDisplayed();
    let successMessage = await LoginPage.successMessage.getText()
    expect(successMessage).toEqual("Unit updated successfully")
});

//create store with all fields

When(/^I will Enter all store fields and submit the store$/, async () => {
    let randomText = await LoginPage.generateRandomAlphaNumeric()
    let randomEmail = await LoginPage.generateRandomEmailID()
    let randomNumber = await LoginPage.generateRandomNumeric(6)
    TestData.messages.storeID = randomText;
    await LoginPage.storeID.setValue(randomText)
    
    await LoginPage.storeName.setValue(randomText)

    await LoginPage.lobTextBox.setValue(randomText)

    await LoginPage.primaryEmailIDTextBox.setValue(randomEmail)

    await LoginPage.secondaryEmailIDTextBox.setValue(randomEmail)

    await LoginPage.GSTTextBox.setValue(randomNumber)

    await LoginPage.stateTextBox.setValue(randomText)

    await LoginPage.cityTextBox.setValue(randomText)

    await LoginPage.pincodeTextBox.setValue(randomNumber)

    await LoginPage.address1TextBox.setValue(randomText)

    await LoginPage.address2TextBox.setValue(randomText)

    await LoginPage.subscriptions.scrollIntoView()
    await LoginPage.submitButton.click()
});
















//mobile test cases
When(/^app is launched and click on continue button$/, async () => {
    await LoginPage.continueButton.click()
    await browser.pause(3000)
});









