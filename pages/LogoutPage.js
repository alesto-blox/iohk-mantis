//Logout Page
const WAIT = require('../config/appConfig.js').WAIT;
const helpers = require('../support/helpers.js');
const expect = require('chai').expect;
class LogoutPage {

    get logoutButton() { return ('//span[contains(text(),"Log out")]') }
    get removeWalletText() { return ('//div[contains(text(),"Remove Wallet")]') }
    get enterYourPasswordText() { return ('//div[@class="description"]') }
    get passwordField() { return ('//input[@type="password"]') }
    get restoreWarningBox() { return ('//input[@id="restore-warning"]') }
    get restoreWarningText() { return ('//input[@id="restore-warning"]/../../span[not(@class="ant-checkbox")]')}
    get deleteDataWarningBox() { return ('//input[@id="delete-data-warning"]') }
    get deleteDataWarningText() { return ('//input[@id="delete-data-warning"]/../../span[not(@class="ant-checkbox")]') }
    get cancelButton() { return ('//span[contains(text(),"Cancel")]/..') }
    get removeWalletButton() { return ('//span[contains(text(),"Remove Wallet")]/..') }

    async logout(app){
        await helpers.timeout(5000);
        await app.client
            .waitForVisible(this.logoutButton,WAIT)
            .click(this.logoutButton);
    }
    async enterPasswordAndCheckCheckbox(app,pass){
        await app.client
            .waitForVisible(this.passwordField,WAIT)
            .setValue(this.passwordField, pass);

        await app.client
            .waitForVisible(this.restoreWarningText,WAIT)
            .click(this.restoreWarningText);

        await app.client
            .waitForVisible(this.deleteDataWarningText,WAIT)
            .click(this.deleteDataWarningText);
    }
    async removeWallet(app){
        await app.client
            .waitForVisible(this.removeWalletButton,WAIT)
            .click(this.removeWalletButton);
    }
    async checkIfLogoutButtonIsDisabled(app){
        expect(await app.client.getHTML(this.logoutButton))
            .to.include('disabled')
    }
}

module.exports = new LogoutPage()