//Logout Page

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
    
}

module.exports = new LogoutPage()