//Receive Transaction Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class ReceiveTransactionPage {

    get yourAddressText() { return ('//div[contains(text(), "Your Address")]')}
    get qrCode() { return ('//div[@class="qr-code"]')}
    get myAddressValue() { return ('.qr-content') }
    get copyAddressButton() { return ('//button[contains(text(), "Copy Address")]')}

    async checkIfYouAreOnReceiveAddressPage(app) {
        expect(await app.client
            .waitForVisible(this.yourAddressText, WAIT)
            .getText(this.yourAddressText)
        )
            .to.equal('Your Address')
    }

}

module.exports = new ReceiveTransactionPage();