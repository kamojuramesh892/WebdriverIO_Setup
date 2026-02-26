import { $ } from '@wdio/globals'
import BasePage from './Base.page';

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
    public get pettyCashManagerDropDown() { return $('//div[@id="petty-cash-add-stores_pettycashManager"]'); }
    public get pettyCashManagerTextBox() { return $('//input[@id="petty-cash-add-stores_pettycashManager"]'); }
    public get pettyCashCustodianDropDown() { return $('//div[@id="petty-cash-add-stores_pettycashCustodians"]'); }
    public get pettyCashCustodianTextBox() { return $('//input[@id="petty-cash-add-stores_pettycashCustodians"]'); }
    public get pettyCashManager() { return $('((//div[@class="ant-card pc-ut-card-primary margin-1 ant-card-bordered"])[2]//ul//li)[1]'); }
    public get pettyCashCustodian() { return $('(//label[text()="Pettycash Custodians"]//parent::div//following-sibling::div//div[@id="petty-cash-add-stores_pettycashCustodians"]//following-sibling::div//li)[1]'); }

    public get utilitiesToggle() { return $('//button[@id="petty-cash-add-stores_isUtilitiesEnabled"]'); }
    public get utilitiesManagerDropDown() { return $('//div[@id="petty-cash-add-stores_utilitiesManager"]'); }
    public get utilitiesManagerTextBox() { return $('//input[@id="petty-cash-add-stores_utilitiesManager"]'); }
    public get utilitiesCustodianDropDown() { return $('//div[@id="petty-cash-add-stores_utilitiesCustodian"]'); }
    public get utilitiesCustodianTextBox() { return $('//input[@id="petty-cash-add-stores_utilitiesCustodian"]'); }
    public get utilitiesManager() { return $('((//div[@class="ant-card pc-ut-card-primary margin-1 ant-card-bordered"])[3]//ul//li)[1]'); }
    public get utilitiesCustodian() { return $('(//label[text()="Utilities Custodian"]//parent::div//following-sibling::div//div[@id="petty-cash-add-stores_utilitiesCustodian"]//following-sibling::div//li)[1]'); }


    public get threeDotsIcon() { return $('(//i[@class="anticon anticon-ellipsis cursor ant-dropdown-trigger"])[1]'); }
    public get deleteIcon() { return $('(//li[@class="ant-dropdown-menu-item"])[2]'); }

    public get confirmYes() { return $('//button[@class="ant-btn pc-ut-confirmation ant-btn-primary"]'); }
    public get adminProfile() { return $('//span[@class="dropdown"]'); }
    public get logOutButton() { return $('//li[text()="Logout"]'); }
    public get confirmLogOutButton() { return $('//button[.//span[text()="Continue to Logout"]]'); }
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

    public async enterStoreDetails() {
        let storeName = await this.generateRandomAlphaNumeric(5);
        await this.storeName.setValue(storeName);
        await browser.pause(3000)
        let storeID = await this.generateRandomAlphaNumeric(5);
        await this.storeID.setValue(storeID);
        await browser.pause(3000)
        let storeMailID = await this.generateRandomAlphaNumeric(10);
        await this.primaryEmailID.setValue(storeMailID);
        await browser.pause(3000)
    }

    public async enterPettyCashDetails() {
        await this.pettyCashToggle.click()
        await this.pettyCashManagerDropDown.click()
        await this.pettyCashManagerTextBox.setValue("new");
        await this.pettyCashManager.click()

        await this.pettyCashCustodianDropDown.click()
        await this.pettyCashCustodianTextBox.setValue("New");
        await this.pettyCashCustodian.click()
        await browser.pause(3000)
    }

    public async enterUtilitiesDetails() {
        await this.utilitiesToggle.click()
        await this.utilitiesManagerDropDown.click()
        await this.utilitiesManagerTextBox.setValue("new");
        await this.utilitiesManager.click()

        await this.utilitiesCustodianDropDown.click()
        await this.utilitiesCustodianTextBox.setValue("New");
        await this.utilitiesCustodian.click()
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
}

export default new LoginPage();
