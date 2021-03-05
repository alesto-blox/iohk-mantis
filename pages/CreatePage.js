//Create Page
const WAIT = require('../config/appConfig.js').WAIT;
const helpers = require('../support/helpers.js');
const TD = require('../test_data/testData.json');
class CreatePage {

    get createWalletText() { return ('//div[text()="Create New Wallet" and @class="title"]') }
    get createWalletInfoText() { return ('//div[text()="Create New Wallet"]/../div[@class="note"]') }
    get walletNameText() { return ('//label[text()="Wallet Name"]') }
    get walletNameField() { return ('//input[@id="wallet-name"]') }
    get enterPasswordText() { return ('//div[text()="Enter Password"]') }
    get enterPasswordField() { return ('//input[@id="password"]') }
    get repeatPasswordField() { return ('//input[@id="re-password"]') }
    get noteForPasswordText() { return ('//div[@class="criteria"]') }
    get cancelButton() { return ('//span[text()="Cancel"]/..') }
    get nextButton() { return ('//span[text()="Next"]/..') }    
    get securityText() { return ('//div[text()="Security"]') }
    get recoveryPhraseText() { return ('//div[text()="Recovery Phrase"]') }
    get recoverPhraseInfoText() { return ('//div[@class="description"]') }
    get privateKeyText() { return ('//div[text()="Private Key"]') }
    get privateKeySecurityText() { return ('//div[text()="Private Key"]/../div[@class="switch"]/div') }
    get showPrivateKeyButton() { return ('//button[@title="Private Key"]') }
    get privateKeyValue() { return ('//div[@class="qr-content"]') }
    get downloadTxtButton() { return ('//button[text()="Download txt"]') }
    get writtenDownText() { return ('//input[@id="written-down"]/../../span[not(@class="ant-checkbox")]') }
    get writtenDownBox() { return ('//input[@id="written-down"]') }
    get reInputRecoveryText() { return ('//div[@class="instructions"]') }
    get clearRecoveryPhraseButton() { return ('//span[@class="clear"]') }
    get recoveryWordsText() { return ('//div[@class="word"]')}
    get conditionsLocallyText() { return ('//input[@id="checkbox-local-only"]/../../span[not(@class="ant-checkbox")]') }
    get conditionsLocallyBox() { return ('//input[@id="checkbox-local-only"]/..') }
    get conditionRecoveryText() { return ('//input[@id="checkbox-recovery"]/../../span[not(@class="ant-checkbox")]') }
    get conditionRecoveryBox() { return ('//input[@id="checkbox-recovery"]/..') }
    get finishButton() { return ('//span[text()="Finish"]/..') }
    get errorMessageText() { return ('//div[@class="ant-form-item-explain"]/div') }
    get errorMessageBox() { return ('//div[@class="DialogError"]') }

    async enterWalletNameAndPassword(app){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, TD.CreateWallet.WalletName);

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async enterWalletNameAndPassword(app,pass,confirmPass){
        await app.client
            .waitForVisible(this.walletNameField,WAIT)
            .setValue(this.walletNameField, TD.CreateWallet.WalletName);

        await app.client
            .waitForVisible(this.enterPasswordField,WAIT)
            .setValue(this.enterPasswordField, pass);

        await app.client
            .waitForVisible(this.repeatPasswordField,WAIT)
            .setValue(this.repeatPasswordField, confirmPass
            );

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async getPrivateKey(app){
        await app.client
            .waitForVisible(this.showPrivateKeyButton,WAIT)
            .click(this.showPrivateKeyButton);

        const privateKey = await app.client
            .waitForVisible(this.privateKeyValue,WAIT)
            .getText(this.privateKeyValue);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);

        return privateKey;
    }
    async getRecoveryPhrase(app){
        const recoveryPhrase = await app.client
            .waitForVisible(this.recoveryWordsText, WAIT)
            .getText(this.recoveryWordsText);

        await app.client
            .waitForVisible(this.writtenDownText,WAIT)
            .click(this.writtenDownText);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);

        return recoveryPhrase.toString().replace(/[^A-Za-z]+/g, '\n');
    }
    async reInputRecoveryPhrase(app,phrase){
        for (let i = 0; i < phrase.length; i++){
             await helpers.timeout(300)
             await app.client
                 .waitForVisible("//div[@class='word' and text()='"+phrase[i]+"']",WAIT)
                 .click("//div[@class='word' and text()='"+phrase[i]+"']");
        }

        await app.client
            .waitForVisible(this.conditionsLocallyBox,WAIT)
            .click(this.conditionsLocallyBox);

        await app.client
            .waitForVisible(this.conditionRecoveryBox,WAIT)
            .click(this.conditionRecoveryBox);

        await app.client
            .waitForVisible(this.finishButton,WAIT)
            .click(this.finishButton);
    }
    async validateErrorMessages(app,message){
        expect(await app.client
            .waitForVisible(this.errorMessageText,WAIT)
            .getText(this.errorMessageText)
        )
            .to.equal(message);

        expect(await app.client
            .waitForVisible(this.errorMessageBox,WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal("Some fields require additional action before you can continue.");
    }
}

module.exports = new CreatePage()