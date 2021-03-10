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

    async enterWalletNameAndPasswords(app) {
        await app.client
            .waitForVisible(this.walletNameField, WAIT)
            .setValue(this.walletNameField, TD.CreateWallet.WalletName);

        await app.client
            .waitForVisible(this.enterPasswordField, WAIT)
            .setValue(this.enterPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.repeatPasswordField, WAIT)
            .setValue(this.repeatPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);
    }

    async enterWalletNameAndPasswordValidations(app, pass, confirmPass) {
        await app.client
            .waitForVisible(this.walletNameField, WAIT)
            .setValue(this.walletNameField, TD.CreateWallet.WalletName);

        if (pass === "empty") {
            await app.client
                .waitForVisible(this.enterPasswordField, WAIT)
                .setValue(this.enterPasswordField, "");

            await app.client
                .waitForVisible(this.repeatPasswordField, WAIT)
                .setValue(this.repeatPasswordField, ""
                );
        } else {
            await app.client
                .waitForVisible(this.enterPasswordField, WAIT)
                .setValue(this.enterPasswordField, pass);

            await app.client
                .waitForVisible(this.repeatPasswordField, WAIT)
                .setValue(this.repeatPasswordField, confirmPass
                );
        }

        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);
    }

    async enterWalletNameAndPasswordNameValidations(app, name) {
        if (name === "empty") {
            await app.client
                .waitForVisible(this.walletNameField, WAIT)
                .setValue(this.walletNameField, "");
        } else {
            await app.client
                .waitForVisible(this.walletNameField, WAIT)
                .setValue(this.walletNameField, name);
        }

        await app.client
            .waitForVisible(this.enterPasswordField, WAIT)
            .setValue(this.enterPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.repeatPasswordField, WAIT)
            .setValue(this.repeatPasswordField, TD.CreateWallet.WalletPass);

        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);
    }

    async getPrivateKey(app) {
        await app.client
            .waitForVisible(this.showPrivateKeyButton, WAIT)
            .click(this.showPrivateKeyButton);

        const privateKey = await app.client
            .waitForVisible(this.privateKeyValue, WAIT)
            .getText(this.privateKeyValue);

        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);

        return privateKey;
    }

    async getRecoveryPhrase(app) {
        const recoveryPhrase = await app.client
            .waitForVisible(this.recoveryWordsText, WAIT)
            .getText(this.recoveryWordsText);

        await app.client
            .waitForVisible(this.writtenDownText, WAIT)
            .click(this.writtenDownText);

        await app.client
            .waitForVisible(this.nextButton, WAIT)
            .click(this.nextButton);

        return recoveryPhrase.toString().replace(/[^A-Za-z]+/g, '\n');
    }

    async reInputRecoveryPhrase(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await app.client
            .waitForVisible(this.conditionsLocallyBox, WAIT)
            .click(this.conditionsLocallyBox);

        await app.client
            .waitForVisible(this.conditionRecoveryBox, WAIT)
            .click(this.conditionRecoveryBox);

        await app.client
            .waitForVisible(this.finishButton, WAIT)
            .click(this.finishButton);
    }

    async reInputRecoveryPhraseWithoutConfirmationConditionsLocally(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await app.client
            .waitForVisible(this.conditionRecoveryBox, WAIT)
            .click(this.conditionRecoveryBox);

        await app.client
            .waitForVisible(this.finishButton, WAIT)
            .click(this.finishButton);

        await helpers.timeout(2000);

        const color = await app.client
            .waitForVisible(this.conditionsLocallyBoxSpan, WAIT)
            .getCssProperty(this.conditionsLocallyBoxSpan, "background-color");

        expect(color.value).to.equal(TD.ErrorColor);

        expect(await app.client
            .waitForVisible(this.errorMessageBox, WAIT)
            .getText(this.errorMessageBox)
        )
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

        await app.client
            .waitForVisible(this.conditionsLocallyBox, WAIT)
            .click(this.conditionsLocallyBox);

        await app.client
            .waitForVisible(this.finishButton, WAIT)
            .click(this.finishButton);

        await helpers.timeout(2000);

        const color = await app.client
            .waitForVisible(this.conditionRecoveryBoxSpan, WAIT)
            .getCssProperty(this.conditionRecoveryBoxSpan, "background-color");

        expect(color.value).to.equal(TD.ErrorColor);

        expect(await app.client
            .waitForVisible(this.errorMessageBox, WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal(TD.AdditionalActionError);
    }

    async validateErrorMessages(app, message) {
        const errMsg = await app.client
            .waitForVisible(this.errorMessageText, WAIT)
            .getText(this.errorMessageText)
        try {
            expect('"' + errMsg + '"')
                .to.equal(message)
        } catch (err) {
            expect(errMsg)
                .to.equal(message)
        }

        expect(await app.client
            .waitForVisible(this.errorMessageBox, WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal(TD.AdditionalActionError);
    }

    async validateWalletNameErrorMessages(app, message) {
        expect(await app.client
            .waitForVisible(this.errorMessageWalletNameText, WAIT)
            .getText(this.errorMessageWalletNameText)
        )
            .to.equal(message);

        expect(await app.client
            .waitForVisible(this.errorMessageBox, WAIT)
            .getText(this.errorMessageBox)
        )
            .to.equal(TD.AdditionalActionError);
    }

    async isDownloadButtonDisplayedAndClickable(app) {
        expect(await app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .isVisible(this.downloadTxtButton)
        )
            .to.equal(true);

        expect(await app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .getText(this.downloadTxtButton)
        )
            .to.equal("DOWNLOAD TXT");

        expect(await app.client
            .waitForVisible(this.downloadTxtButton, WAIT)
            .isEnabled(this.downloadTxtButton)
        )
            .to.equal(true);
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

        await app.client
            .waitForVisible(this.conditionsLocallyBox, WAIT)
            .click(this.conditionsLocallyBox);

        await app.client
            .waitForVisible(this.conditionRecoveryBox, WAIT)
            .click(this.conditionRecoveryBox);

        await app.client
            .waitForVisible(this.finishButton, WAIT)
            .click(this.finishButton);

        expect(await app.client
            .waitForVisible(this.errorMessagePhrases, WAIT)
            .getText(this.errorMessagePhrases)
        )
            .to.equal(TD.ErrorPhrases);
    }

    async reinputWordPhrasesAndIClickBack(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await app.client
            .waitForVisible(this.conditionsLocallyBox, WAIT)
            .click(this.conditionsLocallyBox);

        await app.client
            .waitForVisible(this.conditionRecoveryBox, WAIT)
            .click(this.conditionRecoveryBox);

        await app.client
            .waitForVisible(this.backButton, WAIT)
            .click(this.backButton);
    }

    async reinputWordPhrasesAndIClickClear(app, phrase) {
        const words = phrase.split("\n");
        for (let i = 1; i < words.length; i++) {
            await helpers.timeout(300)
            await app.client
                .waitForVisible("//div[@class='word' and text()='" + words[i] + "']", WAIT)
                .click("//div[@class='word' and text()='" + words[i] + "']");
        }

        await app.client
            .waitForVisible(this.clearRecoveryPhraseButton, WAIT)
            .click(this.clearRecoveryPhraseButton);

        expect(await app.client
            .waitForVisible(this.reinputBox, WAIT)
            .getText(this.reinputBox)
        )
            .to.equal("");
    }

    async verifyFinishIsDisabled(app) {
        expect(await app.client
            .waitForVisible(this.finishButton, WAIT)
            .isEnabled(this.finishButton)
        )
            .to.equal(false);
    }
}

module.exports = new CreatePage();