import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {return $('#username');}

    public get inputPassword () {return $('#password');}

    public get btnSubmit () {return $('button[type="submit"]');}

    public get searchBox () {return $('//textarea[@id="APjFqb"]');}

    public get ZaggleHomePageLogo () {return $('//div[@class="ant-col hidden md:block ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-6 css-1w4v3hc"]');}

    public get  firstLink() {return $('(//h3[@class="LC20lb MBeuO DKV0Md"])[1]');}
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
