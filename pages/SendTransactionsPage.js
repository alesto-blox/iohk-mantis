//Send Transaction Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class SendTransactionPage {

     //Send transaction selectors
    get sendTransactionText() { return ('//div[@class="title"]')}
    get recipientText() { return ('//label[contains(text(),"Recipient")]')}
    get recipientField() { return ('//*[@id="recipient-address"]')}
    get selectAContactText() { return ('//label[contains(text(),"Select a Contact")]')}
    get amountText() { return ('//label[contains(text(),"Amount")]')}
    get amountField() { return ('//*[@id="tx-amount"]')}
    get cancelButton() { return ('//span[contains(text(),"Cancel")]')}
    get sendButton() { return ('//span[contains(text(),"Send")]')}
    get feeText() { return ('//div[@class="DialogFee"]/label')}
    get customFee() { return ('//button[contains(text(),"Custom")]')}
    get slowFee() { return ('//span[contains(text(),"Slow")]')}
    get averageFee() { return ('//span[contains(text(),"Average")]')}
    get fastFee() { return ('//span[contains(text(),"Fast")]')}
    get totalTransactionAmountText() { return (' //div[contains(text(),"Total Transaction")]')}
    get remainingBalanceText() { return ('//div[contains(text(),"Remaining")]')}
    get totalTransactionAmountValue() { return ('//div[contains(text(),"Total Transaction")]/..//div[@class="amount"]')}
    get remainingBalanceValue() { return ('//div[contains(text(),"Remaining")]/..//div[@class="amount"]')}
    get transferButton() { return ('//span[contains(text(),"Transfer")]')}
    get advancedButton() { return ('//span[contains(text(),"Advanced")]')}
     
     //Send transaction next page selectors    
    get recipientAddressValue() { return('//label[contains(text(),"Recipient")]/..//input')}
    get amountTextOnNextPage() { return('//div[contains(text(),"Amount")]')}     
    get amountValue() { return('//div[contains(text(),"Amount")]/../div[@class="container"]/div[@class="amount"]')}
    get feeTextOnNextPage() { return('//div[contains(text(), "Fee") and @class="label"]')}
    get feeAmount() { return('//div[contains(text(), "Fee")]/../div[@class="container"]/div[@class="amount"]')}
    get backButton() { return('//span[contains(text(),"Back")]')}
    get confirmButton() { return('//span[contains(text(),"Confirm")]')}
    get passwordText() { return ('//label[@for="tx-password"]')}
    get passwordField() { return ('//*[@id="tx-password"]')}
 
     //Send transaction advanced tab selectors
    get amountTextOnAdvanced() { return ('//*[@for="tx-amount"]')}
    get gasLimitText() { return ('//label[contains(text(),"Gas limit")]')}
    get gasLimitField() { return ('//label[contains(text(),"Gas limit")]/..//input')}
    get gasPriceText() { return ('//label[contains(text(),"Gas price")]')}
    get gasPriceField() { return ('//label[contains(text(),"Gas price")]/..//input')}
    get dataText() { return ('//label[contains(text(),"Data")]')}
    get dataField() { return ('//textarea[@id="tx-data"]')}
    get nonceText() { return ('//label[contains(text(),"Data")]')}
    get nonceField() { return ('//label[contains(text(),"Data")]/..//input')}
    async clickSendButton(app){
        await app.client
            .waitForVisible(this.sendButton,WAIT)
            .click(this.sendButton);
    }

}

module.exports = new SendTransactionPage()