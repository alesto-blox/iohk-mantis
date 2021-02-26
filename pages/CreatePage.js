//Create Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
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
    get recoveryPhraseInfoText() { return ('//div[@class="description"]') }
    get privateKeyText() { return ('//div[text()="Private Key"]') }
    get privateKeySecurityText() { return ('//div[text()="Private Key"]/../div[@class="switch"]/div') }
    get showPrivateKeyButton() { return ('//button[@title="Private Key"]') }
    get privateKeyValue() { return ('//div[@class="qr-content"]') }
    get downloadTxtButton() { return ('//button[text()="Download txt"]') }
    get writtenDownText() { return ('//input[@id="written-down"]/../../span[not(@class="ant-checkbox")]') }
    get writtenDownBox() { return ('//input[@id="written-down"]') }
    get reinputRecoveryText() { return ('//div[@class="instructions"]') }
    get clearRecoveryPhraseButton() { return ('//span[@class="clear"]') }
    get recoveryWordsText() { return ('//div[@class="word"]')}
    get conditionsLocalyText() { return ('//input[@id="checkbox-local-only"]/../../span[not(@class="ant-checkbox")]') }
    get conditionsLocalyBox() { return ('//input[@id="checkbox-local-only"]') }
    get conditionRecoveryText() { return ('//input[@id="checkbox-recovery"]/../../span[not(@class="ant-checkbox")]') }
    get conditionRecoveryBox() { return ('//input[@id="checkbox-recovery"]') }
    get finishButton() { return ('//span[text()="Finish"]/..') }
   
}

module.exports = new CreatePage()