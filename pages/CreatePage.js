//Create Page
const WAIT = require('../config/appConfig.js').WAIT;
const helpers = require('../support/helpers.js');
const TD = require('../test_data/testData.json');
const expect = require('chai').expect;

class CreatePage {

    get createWalletText() {
        return ('//div[text()="Create New Wallet" and @class="title"]')
    }

    get createWalletInfoText() {
        return ('//div[text()="Create New Wallet"]/../div[@class="note"]')
    }

    get walletNameText() {
        return ('//label[text()="Wallet Name"]')
    }

    get walletNameField() {
        return ('//input[@id="wallet-name"]')
    }

    get enterPasswordText() {
        return ('//div[text()="Enter Password"]')
    }

    get enterPasswordField() {
        return ('//input[@id="password"]')
    }

    get repeatPasswordField() {
        return ('//input[@id="re-password"]')
    }

    get noteForPasswordText() {
        return ('//div[@class="criteria"]')
    }

    get cancelButton() {
        return ('//span[text()="Cancel"]/..')
    }

    get nextButton() {
        return ('//span[text()="Next"]/..')
    }

    get backButton() {
        return ('//span[text()="Back"]/..')
    }

    get securityText() {
        return ('//div[text()="Security"]')
    }

    get recoveryPhraseText() {
        return ('//div[text()="Recovery Phrase"]')
    }

    get recoverPhraseInfoText() {
        return ('//div[@class="description"]')
    }

    get privateKeyText() {
        return ('//div[text()="Private Key"]')
    }

    get privateKeySecurityText() {
        return ('//div[text()="Private Key"]/../div[@class="switch"]/div')
    }

    get showPrivateKeyButton() {
        return ('//button[@title="Private Key"]')
    }

    get privateKeyValue() {
        return ('//div[@class="qr-content"]')
    }

    get downloadTxtButton() {
        return ('//button[text()="Download txt"]')
    }

    get writtenDownText() {
        return ('//input[@id="written-down"]/../../span[not(@class="ant-checkbox")]')
    }

    get writtenDownBox() {
        return ('//input[@id="written-down"]')
    }

    get reInputRecoveryText() {
        return ('//div[@class="instructions"]')
    }

    get clearRecoveryPhraseButton() {
        return ('//span[@class="clear"]')
    }

    get recoveryWordsText() {
        return ('//div[@class="word"]')
    }

    get conditionsLocallyText() {
        return ('//input[@id="checkbox-local-only"]/../../span[not(@class="ant-checkbox")]')
    }

    get conditionsLocallyBox() {
        return ('//input[@id="checkbox-local-only"]/..')
    }

    get conditionsLocallyBoxSpan() {
        return ('//input[@id="checkbox-local-only"]/../span')
    }

    get conditionRecoveryText() {
        return ('//input[@id="checkbox-recovery"]/../../span[not(@class="ant-checkbox")]')
    }

    get conditionRecoveryBox() {
        return ('//input[@id="checkbox-recovery"]/..')
    }

    get conditionRecoveryBoxSpan() {
        return ('//input[@id="checkbox-recovery"]/../span')
    }

    get finishButton() {
        return ('//span[text()="Finish"]/..')
    }

    get errorMessageText() {
        return ('//div[@class="ant-form-item-explain"]/div')
    }

    get errorMessageBox() {
        return ('//div[@class="DialogError"]')
    }

    get errorMessageWalletNameText() {
        return ('//div[@class="DialogInput"]//div[@class="ant-form-item-explain"]/div')
    }

    get errorMessagePhrases() {
        return ('//div[@class="error-message"]')
    }

    get reinputBox() {
        return ('//div[@class="InlineError input"]')
    }

    async enterWalletName(app,name){
        await app.client
            .waitForVisible(this.walletNameField, WAIT)
            .setValue(this.walletNameField, name);
    }

    async enterWalletPassword(app, pass){
        await app.client
            .waitForVisible(this.enterPasswordField, WAIT)
            .setValue(this.enterPasswordField, pass);
    }

    async repeatWalletPassword(app, pass){
        await app.client
            .waitForVisible(this.repeatPasswordField, WAIT)
            .setValue(this.repeatPasswordField, pass);
    }

    async clickNextButton(app){
        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);
    }

    async enterWalletNameAndPasswords(app) {
        await this.enterWalletName(app, TD.CreateWallet.WalletName)
        await this.enterWalletPassword(app, TD.CreateWallet.WalletPass)
        await this.repeatWalletPassword(app, TD.CreateWallet.WalletPass)
        await this.clickNextButton(app)
    }

    async enterWalletNameAndPasswordValidations(app, pass, confirmPass) {
        await this.enterWalletName(app, TD.CreateWallet.WalletName)

        if (pass === "empty") {
            await this.enterWalletPassword(app, "")
            await this.repeatWalletPassword(app, "")
        } else {
            await this.enterWalletPassword(app, pass)
            await this.repeatWalletPassword(app, confirmPass)
        }
        await this.clickNextButton(app)
    }

    async enterWalletNameAndPasswordNameValidations(app, name) {
        if (name === "empty") {
            await this.enterWalletName(app, "")
        } else {
            await this.enterWalletName(app, name)
        }
        await this.enterWalletPassword(app, TD.CreateWallet.WalletPass);
        await this.repeatWalletPassword(app, TD.CreateWallet.WalletPass);
        await this.clickNextButton(app)
    }

    async clickOnShowPrivateKey(app){
        await app.client
            .waitForVisible(this.showPrivateKeyButton, WAIT)
            .click(this.showPrivateKeyButton);
    }

    async getPrivateKeyText(app){
        await app.client
            .waitForVisible(this.privateKeyValue, WAIT)
            .getText(this.privateKeyValue);
    }

    async getPrivateKey(app) {
        await this.clickOnShowPrivateKey(app)
        const privateKey = await this.getPrivateKeyText(app)
        await this.clickNextButton(app)
        return privateKey;
    }

    async getRecoveryWordText(app){
        return  app.client
            .waitForVisible(this.recoveryWordsText, WAIT)
            .getText(this.recoveryWordsText);
    }

    async clickOnWrittenDownText(app){
        await app.client
            .waitForVisible(this.writtenDownText, WAIT)
            .click(this.writtenDownText);
    }

    async getRecoveryPhrase(app) {
        const recoveryPhrase = await this.getRecoveryWordText(app)
        await this.clickOnWrittenDownText(app)
        await this.clickNextButton(app)
        return recoveryPhrase.toString().replace(/[^A-Za-z]+/g, '\n');
    }

    async clickOnFinishButton(app){
        app.client
            .waitForVisible(this.finishButton, WAIT)
            .click(this.finishButton);
    }

    async clickOnConditionLocallyBox(app){
        await app.client
            .waitForVisible(this.conditionsLocallyBox, WAIT)
            .click(this.conditionsLocallyBox);
    }

    async clickOnConditionRecoveryBox(app){
        await app.client
            .waitForVisible(this.conditionRecoveryBox, WAIT)
            .click(this.conditionRecoveryBox);
    }

    async reInputRecoveryPhrase(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }
        await this.clickOnConditionLocallyBox(app)
        await this.clickOnConditionRecoveryBox(app)
        await this.clickOnFinishButton(app)
    }

    async getBackgroundColor(app, element){
        return  app.client
            .waitForVisible(element, WAIT)
            .getCssProperty(element, "background-color");
    }

    async getErrorMessageBoxText(app){
        return app.client
            .waitForVisible(this.errorMessageBox, WAIT)
            .getText(this.errorMessageBox)
    }

    async reInputRecoveryPhraseWithoutConfirmationConditionsLocally(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }
        await this.clickOnConditionRecoveryBox(app)
        await this.clickOnFinishButton(app)
        await helpers.timeout(2000);
        const color = await this.getBackgroundColor(app, this.conditionsLocallyBoxSpan)
        expect(color.value).to.equal(TD.ErrorColor);
        expect(await this.getErrorMessageBoxText(app))
            .to.equal(TD.AdditionalActionError);
    }

    async reInputRecoveryPhraseWithoutConditionsRecovery(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }
        await this.clickOnConditionLocallyBox(app)
        await this.clickOnFinishButton(app)
        await helpers.timeout(2000);
        const color = await this.getBackgroundColor(app, this.conditionRecoveryBoxSpan)
        expect(color.value).to.equal(TD.ErrorColor);
        expect(await this.getErrorMessageBoxText(app))
            .to.equal(TD.AdditionalActionError);
    }

    async getErrorMessageText(app){
        return app.client
            .waitForVisible(this.errorMessageText, WAIT)
            .getText(this.errorMessageText)
    }

    async getErrorMessageWalletNameText(app){
        return app.client
            .waitForVisible(this.errorMessageWalletNameText, WAIT)
            .getText(this.errorMessageWalletNameText)
    }

    async validateErrorMessages(app, message) {
        const errMsg = await this.getErrorMessageText(app)
        try {
            expect('"' + errMsg + '"')
                .to.equal(message)
        } catch (err) {
            expect(errMsg)
                .to.equal(message)
        }

        expect(await this.getErrorMessageBoxText(app))
            .to.equal(TD.AdditionalActionError);
    }

    async validateWalletNameErrorMessages(app, message) {
        expect(await this.getErrorMessageWalletNameText(app))
            .to.equal(message);
        expect(await this.getErrorMessageBoxText(app))
            .to.equal(TD.AdditionalActionError);
    }

    async isDownloadButtonDisplayedAndClickable(app) {
        expect(await this.isDownloadButtonVisible(app))
            .to.equal(true);

        expect(await this.getDownloadButtonText(app))
            .to.equal("DOWNLOAD TXT");

        expect(await this.isDownloadButtonEnabled(app)
        )
            .to.equal(true);
    }

    async isDownloadButtonVisible(app){
        return app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .isVisible(this.downloadTxtButton)
    }

    async isDownloadButtonEnabled(app){
        return app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .isEnabled(this.downloadTxtButton)
    }

    async getDownloadButtonText(app){
        return app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .getText(this.downloadTxtButton)
    }

    async cancelWalletCreation(app) {
        await app.client
            .waitForVisible(this.cancelButton, WAIT)
            .click(this.cancelButton);
    }

    async clickBack(app) {
        await app.client
            .waitForVisible(this.backButton, WAIT)
            .click(this.backButton);
    }

    async reinputWordPhrasesIncorrectOrder(app, phrase) {
        const words = phrase.split("\n");
        for (let i = words.length - 1; i >= 1; i--) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await this.clickOnConditionLocallyBox(app)
        await this.clickOnConditionRecoveryBox(app)
        await this.clickOnFinishButton(app)
        expect(await this.getErrorMessagePhrases(app))
            .to.equal(TD.ErrorPhrases);
    }

    async getErrorMessagePhrases(app) {
        return app.client
            .waitForVisible(this.errorMessagePhrases, WAIT)
            .getText(this.errorMessagePhrases)
    }

    async reinputWordPhrasesAndIClickBack(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await this.clickOnConditionLocallyBox(app)
        await this.clickOnConditionRecoveryBox(app)
        await this.clickBack(app)
    }

    async clickClearRecoveryPhrase(app){
        await app.client
            .waitForVisible(this.clearRecoveryPhraseButton, WAIT)
            .click(this.clearRecoveryPhraseButton);
    }

    async reinputWordPhrasesAndIClickClear(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await this.clickClearRecoveryPhrase(app)
        expect(await this.getTextFromReinputBox(app))
            .to.equal("");
    }

    async getTextFromReinputBox(app){
        return app.client
            .waitForVisible(this.reinputBox, WAIT)
            .getText(this.reinputBox)
    }

    async verifyFinishIsDisabled(app) {
        expect(await app.client
            .waitForVisible(this.finishButton, WAIT)
            .isEnabled(this.finishButton)
        )
            .to.equal(false);
    }

    async clickOnButton(app, element){
        await app.client
            .waitForVisible(element, WAIT)
            .click(element);
    }
}

module.exports = new CreatePage();