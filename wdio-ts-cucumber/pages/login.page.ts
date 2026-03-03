import { $ } from '@wdio/globals'
import BasePage from './Base.page';
import { TestData } from '../Data/data';
import * as path from 'path';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() { return $('#username'); }

    public get inputPassword() { return $('#password'); }

    public get btnSubmit() { return $('button[type="submit"]'); }

    public get searchBox() { return $('//textarea[@id="APjFqb"]'); }

    public get ZaggleHomePageLogo() { return $('//div[@class="ant-col hidden md:block ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-6 css-1w4v3hc"]'); }

    public get firstLink() { return $('(//h3[@class="LC20lb MBeuO DKV0Md"])[1]'); }

    public get userName() { return $('//input[@id="username"]'); }

    public get passWord() { return $('//input[@id="password"]'); }

    public get LoginButton() { return $('//span[text()="Login"]//parent::button'); }
    public get adminButton() { return $('//span[text()="Admin"]'); }
    public get storesTab() { return $('//li[text()="Stores"]'); }
    public get addStore() { return $('//button[@class="ant-btn margin-r-1 ant-btn-primary"]'); }
    public get storeName() { return $('//input[@id="petty-cash-add-stores_storeName"]'); }
    public get storeID() { return $('//input[@id="petty-cash-add-stores_storeId"]'); }
    public get primaryEmailID() { return $('//input[@id="petty-cash-add-stores_primaryEmailId"]'); }
    public get submitButton() { return $('//button[@class="ant-btn pc-ut-footer-button pc-ut-footer-button-submit"]'); }
    public get cancelButton() { return $('//span[text()="Cancel"]//parent::button'); }
    public get pettyCashToggle() { return $('//button[@id="petty-cash-add-stores_isPettycashEnabled"]'); }
    public get pettyCashManagerDropDown() { return $('//label[text()="Pettycash Manager"]//parent::div//following-sibling::div//div[@class="ant-select-selector"]'); }
    public get pettyCashManagerTextBox() { return $('//input[@id="petty-cash-add-stores_pettycashManager"]'); }
    public get pettyCashCustodianDropDown() { return $('//label[text()="Pettycash Custodians"]//parent::div//following-sibling::div//div[@class="ant-select-selector"]'); }
    public get pettyCashCustodianTextBox() { return $('//input[@id="petty-cash-add-stores_pettycashCustodians"]'); }
    public get pettyCashManager() { return $('(//label[text()="Pettycash Manager"]//parent::div//following-sibling::div//div[@class="ant-select-item ant-select-item-option"])[1]'); }
    public get pettyCashCustodian() { return $('(//label[text()="Pettycash Custodians"]//parent::div//following-sibling::div//div[@class="ant-select-item ant-select-item-option"])[1]'); }

    public get utilitiesToggle() { return $('//button[@id="petty-cash-add-stores_isUtilitiesEnabled"]'); }
    public get utilitiesManagerDropDown() { return $('//label[text()="Utilities Manager"]//parent::div//following-sibling::div//div[@class="ant-select-selector"]'); }
    public get utilitiesManagerTextBox() { return $('//input[@id="petty-cash-add-stores_utilitiesManager"]'); }
    public get utilitiesCustodianDropDown() { return $('//label[text()="Utilities Custodians"]//parent::div//following-sibling::div//div[@class="ant-select-selector"]'); }
    public get utilitiesCustodianTextBox() { return $('//input[@id="petty-cash-add-stores_utilitiesCustodians"]'); }
    public get utilitiesManager() { return $('(//label[text()="Utilities Manager"]//parent::div//following-sibling::div//div[@class="ant-select-item ant-select-item-option"])[1]'); }
    public get utilitiesCustodian() { return $('(//label[text()="Utilities Custodians"]//parent::div//following-sibling::div//div[@class="ant-select-item ant-select-item-option"])[1]'); }


    public get threeDotsIcon() { return $('(//i[@class="anticon anticon-ellipsis cursor ant-dropdown-trigger"])[1]'); }
    public get deleteIcon() { return $('(//li[@class="ant-dropdown-menu-item"])[2]'); }

    public get confirmYes() { return $('//button[@class="ant-btn pc-ut-confirmation ant-btn-primary"]'); }
    public get adminProfile() { return $('//span[@class="dropdown"]'); }
    public get logOutButton() { return $('//li[text()="Logout"]'); }
    public get confirmLogOutButton() { return $('//button[.//span[text()="Continue to Logout"]]'); }

    public get subscriptions() { return $('//li[text()="Subscriptions"]'); }

    // public get uploadInput() { return $('input[type="file"]'); }
    get uploadTemplateBtn() { return $('//span[text()="Upload Template"]/ancestor::button'); }

    get uploadInput() { return $('//input[@type="file"]'); }
    get bulkUploadSuce() { return $('//span[text()="Download Template"]//parent::button//following-sibling::div'); }
    get addBulkStoresButton() { return $('//span[text()="Add Bulk Stores"]//parent::button'); }
    get bulkUploadDropDown() { return $('//div[@class="ant-select-selector"]'); }
    get pettycashInDropDown() { return $('(//div[@class="ant-select-item-option-content"])[2]'); }
    get UtilitiesInDropDown() { return $('(//div[contains(text(),"Utilities")])[2]'); }
    get bulkUploadModalClose() { return $('//i[@class="anticon anticon-close-circle"]'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

    }
    public async generateRandomAlphaNumeric(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    public async scrollToHalfPage(): Promise<void> {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight * 0.5);
        });
    }

    public async scrollToBottom(): Promise<void> {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async scrollToTop() {
        await browser.execute(() => {
            window.scrollTo(0, 0);
        });
    }

    public async generateRandomEmailID(): Promise<string> {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 7); // letters + numbers
        return `auto_${timestamp}_${random}@mailinator.com`;
    }

    public async enterStoreDetails() {
        let storeName = await this.generateRandomAlphaNumeric(5);
        await this.storeName.setValue(storeName);
        await browser.pause(3000)
        TestData.messages.storeID = await this.generateRandomAlphaNumeric(5);
        await this.storeID.setValue(TestData.messages.storeID);
        await browser.pause(3000)
        let storeMailID = await this.generateRandomEmailID();
        await this.primaryEmailID.setValue(storeMailID);
        await browser.pause(3000)
        await this.subscriptions.scrollIntoView()
    }

    public async enterPettyCashDetails() {
        await this.subscriptions.scrollIntoView()
        await this.pettyCashToggle.click()

        await this.pettyCashCustodianDropDown.click()
        await this.pettyCashCustodianTextBox.setValue("New");
        await this.pettyCashCustodian.click()

        await this.pettyCashManagerDropDown.click()
        await this.pettyCashManagerTextBox.setValue("new");
        await this.pettyCashManager.click()
        await browser.pause(3000)
    }

    public async enterUtilitiesDetails() {
        //await this.subscriptions.scrollIntoView()
        await this.utilitiesToggle.click()
        await this.utilitiesCustodianDropDown.click()
        await this.utilitiesCustodianTextBox.setValue("New");
        await this.utilitiesCustodian.click()
        await this.utilitiesManagerDropDown.click()
        await this.utilitiesManagerTextBox.setValue("new");
        await this.utilitiesManager.click()
        await browser.pause(3000)
    }

    public async logout() {
        await this.adminProfile.click()
        await this.logOutButton.click()
        await this.confirmLogOutButton.click()
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }

    async uploadExcelFile() {
        const filePath = path.join(process.cwd(), 'Data', 'TestData.xlsx');
        const remoteFilePath = await browser.uploadFile(filePath);

        await this.uploadTemplateBtn.waitForClickable({ timeout: 10000 });
        //await this.uploadTemplateBtn.click();

        const fileInput = await $('//input[@type="file"]');
        await fileInput.waitForExist({ timeout: 10000 });

        // ✅ No unused params, correct typing
        await browser.execute((el: HTMLElement) => {
            const input = el as HTMLInputElement;
            input.style.display = 'block';
            input.style.visibility = 'visible';
        }, fileInput);

        await fileInput.setValue(remoteFilePath);
    }
}

export default new LoginPage();
