class SendTransactionPage {

    get sendTransactionText() { return ('title') };
    get recipientAddressField() { return ('#recipient-address') };
    get amountField() { return ('#tx-amount') };
    get sendButton() { return ('.ant-btn.right.ant-btn-primary.ant-btn-lg') };
    get advancedButton() { return ('button=Advanced') };
    get passwordField() { return ('#tx-password') };
    get confirmButton() { return ('button=Confirm') };

}

module.exports = new SendTransactionPage();