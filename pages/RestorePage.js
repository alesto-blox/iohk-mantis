//Restore Page
const WAIT = require('../config/appConfig.js').WAIT;
const TD = require('../test_data/testData.json');
const expect = require('chai').expect;
class RestorePage {

    get restoreWalletText() { return ('//div[text()="Restore Wallet" and @class="title"]') }
    get restoreWalletInfoText() { return ('//div[text()="Restore Wallet"]/../div[@class="note"]') }
    get walletNameText() { return ('//label[text()="Wallet Name"]') }
    get walletNameField() { return ('//input[@id="wallet-name"]') }
    get privateKeyButton() { return ('//div[contains(text(),"Private Key") and @role="button"]') }
    get privateKeyField() { return ('//input[@id="private-key"]') }
    get recoveryPhraseButton() { return ('//div[contains(text(),"Recovery Phrase") and @role="button"]') }
    get recoveryPhraseField() { return ('//input[@id="rc_select_1"]') }
    get enterPasswordText() { return ('//div[text()="Enter Password"]') }
    get enterPasswordField() { return ('//input[@id="password"]') }
    get repeatPasswordField() { return ('//input[@id="re-password"]') }
    get noteForPasswordText() { return ('//div[@class="criteria"]') }
    get cancelButton() { return ('//span[text()="Cancel"]/..') }
    get nextButton() { return ('//span[text()="Next"]/..') }
    get walletNameError() { return ('//div[@class="ant-form-item-explain"]/div') }
    get errorMessageBox() { return ('//div[@class="DialogError"]') }
    get pvkError() { return ('//div[@class="ant-form-item-explain"]/div') }

    async enterRestoreDetails(app){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, TD.RestoreWallet.WalletName);

        await app.client
            .waitForVisible(this.privateKeyField,WAIT)
            .setValue(this.privateKeyField, TD.RestoreWallet.PVTKey);

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async enterRestorePhrasesDetails(app){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, TD.RestoreWallet.WalletName);

        await app.client
            .waitForVisible(this.recoveryPhraseButton,WAIT)
            .click(this.recoveryPhraseButton);

        for(let i =0; i<TD.RestoreWallet.Phrases.length;i++) {
            if(i !== TD.RestoreWallet.Phrases.length-1){
                await app.client
                    .waitForVisible(this.recoveryPhraseField, WAIT)
                    .setValue(this.recoveryPhraseField, TD.RestoreWallet.Phrases[i]+" ");
            } else {
                await app.client
                    .waitForVisible(this.recoveryPhraseField, WAIT)
                    .setValue(this.recoveryPhraseField, TD.RestoreWallet.Phrases[i]);
            }
        }

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async enterRestorePhrasesDetailsWithoutWalletName(app){
        await app.client
            .waitForVisible(this.recoveryPhraseButton,WAIT)
            .click(this.recoveryPhraseButton);

        for(let i =0; i<TD.RestoreWallet.Phrases.length;i++) {
            if(i !== TD.RestoreWallet.Phrases.length-1){
                await app.client
                    .waitForVisible(this.recoveryPhraseField, WAIT)
                    .setValue(this.recoveryPhraseField, TD.RestoreWallet.Phrases[i]+" ");
            } else {
                await app.client
                    .waitForVisible(this.recoveryPhraseField, WAIT)
                    .setValue(this.recoveryPhraseField, TD.RestoreWallet.Phrases[i]);
            }
        }

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);

        const errMsg = await app.client
            .waitForVisible(this.walletNameError,WAIT)
            .getText(this.walletNameError)
        expect(errMsg)
            .to.equal(TD.WalletNameErrorMessage);

        expect(await app.client
            .waitForVisible(this.errorMessageBox,WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal(TD.AdditionalActionError);
    }
    async enterRestoreDetailsWithoutPVK(app){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, TD.RestoreWallet.WalletName);

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, TD.RestoreWallet.Password);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);

        const errMsg = await app.client
            .waitForVisible(this.pvkError,WAIT)
            .getText(this.pvkError)
        expect(errMsg)
            .to.equal(TD.PVKErrorMessage);

        expect(await app.client
            .waitForVisible(this.errorMessageBox,WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal(TD.AdditionalActionError);
    }
}

module.exports = new RestorePage()