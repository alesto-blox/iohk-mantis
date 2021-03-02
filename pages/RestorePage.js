//Restore Page
const WAIT = require('../config/appConfig.js').WAIT;
const testData = require('../test_data/restoreWalletData.json');
class RestorePage {

    get restoreWalletText() { return ('//div[text()="Restore Wallet" and @class="title"]') }
    get restoreWalletInfoText() { return ('//div[text()="Restore Wallet"]/../div[@class="note"]') }
    get walletNameText() { return ('//label[text()="Wallet Name"]') }
    get walletNameField() { return ('//input[@id="wallet-name"]') }
    get privateKeyButton() { return ('//div[contains(text(),"Private Key") and @role="button"]') }
    get privateKeyField() { return ('//input[@id="private-key"]') }
    get recoveryPhraseButton() { return ('//div[contains(text(),"Recovery Phrase") and @role="button"]') }
    get recoveryPhraseField() { return ('//input[@id="rc_select_12"]') }
    get enterPasswordText() { return ('//div[text()="Enter Password"]') }
    get enterPasswordField() { return ('//input[@id="password"]') }
    get repeatPasswordField() { return ('//input[@id="re-password"]') }
    get noteForPasswordText() { return ('//div[@class="criteria"]') }
    get cancelButton() { return ('//span[text()="Cancel"]/..') }
    get nextButton() { return ('//span[text()="Next"]/..') }

    async enterRestoreDetails(app){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, testData.WalletName);

        await app.client
            .waitForVisible(this.privateKeyField,WAIT)
            .setValue(this.privateKeyField, testData.PVTKey);

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, testData.Password);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, testData.Password);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }

}

module.exports = new RestorePage()