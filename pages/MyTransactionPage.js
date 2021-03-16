//My Transaction Page
const expect = require('chai').expect;
const BasePage = require('../pages/BasePage.js')

class MyTransactionPage extends BasePage.constructor {

    get myTransactionsText() {
        return ('//div[text()="My transactions"]')
    }

    get typeText() {
        return ('//div[text()="Type"]')
    }

    get assetText() {
        return ('//div[text()="Asset"]')
    }

    get amountText() {
        return ('//span[text()="Amount"]')
    }

    get timeText() {
        return ('//span[text()="Time"]')
    }

    get statusText() {
        return ('//div[@class="header"]//span[text()="Status"]')
    }

    //Selectors for all rows of My Transaction table
    get txnTypesRows() {
        return ('//div[@class="cell" and (text()="Received" or text()="Sent")]')
    }

    get txnAssetsRows() {
        return ('//div[@class="cell"]/span[text()="ETC"]')
    }

    get txnAmountsRows() {
        return ('//span[@class="amount outgoing" or @class="amount incoming"]')
    }

    get txnTimesRows() {
        return ('//div[@class="row-header"]/div[@class="cell"][4]')
    }

    get txnStatusRows() {
        return ('//span[@class="icon"]/../text()')
    }

    get sourceAddressText() {
        return ('//div[text()="Source Address"]')
    }

    get sourceAddressValue() {
        return ('//span[@class="Address"]/../../div[@class="monospace"][1]')
    }

    get sourceAddressEditButton() {
        return ('//div[@class="monospace"][1]//span[@aria-label="edit"]')
    }

    get sourceAddressCopyButton() {
        return ('//div[@class="monospace"][1]//span[@aria-label="copy"]')
    }

    get receivingAddressText() {
        return ('//div[text()="Receiving Address"]')
    }

    get receivingAddressValue() {
        return ('//div[@class="monospace"][1]//span[@class="Address"]')
    }

    get receivingAddressEditButton() {
        return ('//div[@class="monospace"][2]//span[@aria-label="edit"]')
    }

    get receivingAddressCopyButton() {
        return ('//div[@class="monospace"][2]//span[@aria-label="copy"]')
    }

    get gasLimitText() {
        return ('//div[text()="Gas Limit"]')
    }

    get gasLimitValue() {
        return ('//div[text()="Gas Limit"]/../div[6]')
    }

    get gasUsedText() {
        return ('//div[text()="Gas Used"]')
    }

    get gasUsedValue() {
        return ('//div[text()="Gas Used"]/../div[8]')
    }

    get gasPriceText() {
        return ('//div[text()="Gas Price"]')
    }

    get gasPriceValue() {
        return ('//div[text()="Gas Price"]/../div[10]')
    }

    get transactionIdText() {
        return ('//div[text()="Transaction ID"]')
    }

    get transactionIdValue() {
        return ('//div[text()="Transaction ID"]/span[@class="monospace"]')
    }

    get viewInExplorerLink() {
        return ('//div[text()="Transaction ID"]/span[@class="Link styled"]')
    }

    get myTransactionsText() {
        return ('//div[@class="main-title" and text()=\'My transactions\']')
    }

    async IsMyTransactionsDisplayed() {
        expect(await this.isVisible(this.myTransactionsText))
            .to.equal(true);
    }

}

module.exports = new MyTransactionPage()