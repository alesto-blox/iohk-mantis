//My Transaction Page

class MyTransactionPage {

    get myTransactionsText() { return ('//div[text()="My transactions"]') }
    get typeText() { return ('//div[text()="Type"]') }
    get assetText() { return ('//div[text()="Asset"]') }
    get amountText() { return ('//span[text()="Amount"]') }
    get timeText() { return ('//span[text()="Time"]') }
    get statusText() { return ('//div[@class="header"]//span[text()="Status"]') }
    
}

module.exports = new MyTransactionPage()