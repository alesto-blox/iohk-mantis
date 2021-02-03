//Receive Transaction Page

class ReceiveTransactionPage {

    get receiveButton() { return ('//button[contains(text(), "Receive")]')}
    get yourAddressText() { return ('//div[contains(text(), "Your Address")]')}
    get qrCode() { return ('//div[@class="qr-code"]')}
    get myAddressValue() { return ('.qr-content') }
    get copyAddressButton() { return ('//button[contains(text(), "Copy Address")]')}

}

module.exports = new ReceiveTransactionPage();