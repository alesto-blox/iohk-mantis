class SendTransactionPage {

     //Send transaction selectors
    get sendTransactionText() { return ('//div[@class="title"]')}
    get recepientText() { return ('//label[contains(text(),"Recipient")]')}
    get recepientField() { return ('//*[@id="recipient-address"]')}
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
    get recepientAddressValue() { return('//input[@type="text"]')}
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
    get gasLimitText() { return ('//*[@for="tx-gas-limit"]')}
    get gasLimitField() { return ('//*[@id="tx-gas-limit"]')}
    get gasPriceText() { return ('//*[@for="tx-gas-price"]')}
    get gasPriceField() { return ('//*[@id="tx-gas-price"]')}
    get dataText() { return ('//*[@for="tx-data"]')}
    get datafield() { return ('//*[@id="tx-data"]')}
    get nonceText() { return ('//*[@for="tx-nonce"]')}
    get nonceField() { return ('//*[@id="tx-nonce"]')}
 
     //Send transaction advanced tab next page selectors
    get recepientAddressValueOnNextPage() { return ('//div[@class="DialogInput"][1]//input')}
    get gasLimitTextOnNexPage() { return ('//div[@class="DialogInput"][2]/label')}
    get gasLimitValueOnNextPage() { return ('//div[@class="DialogInput"][2]//input')}
    get gasPriceTextOnNexPage() { return ('//div[@class="DialogInput"][3]/label')}
    get gasPriceValueOnNextPage() { return ('//div[@class="DialogInput"][3]//input')}
    get nonceTextOnNexPage() { return ('//div[@class="DialogInput"][4]/label')}
    get nonceValue() { return ('//div[@class="DialogInput"][4]//input')}
    get dataTextOnNexPage() { return ('//div[@class="DialogInput"][5]/label')}
    get dataValue() { return ('//div[@class="DialogInput"][5]//input')}

}

module.exports = new SendTransactionPage()