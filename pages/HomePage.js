class HomePage {

    get termsOfServiceTitle() { return ('//div[@class="title"]') }//IOHK Terms of Service Agreement
    get termsOfServiceText() { return ('//div[@class="scrollable"]') }
    get acceptTermsAndConditionsButton() { return ('//input[@id="termsAndConditionsApproval"]') }
    get acceptTermsAndConditionsSpan() { return ('//span[@class="ant-checkbox-inner"]') } //red
    get nextButton() { return ('//button[@type="submit"]') }
    get errorDialog() { return ('//div[@class="DialogError"]') }//  #900
    get createWalletButton() { return ('//div[text()="Create"]') }
    get restoreWalletButton() { return ('//div[text()="Restore"]') }

    async acceptTermsAndConditions(app){
        await app.client.click(this.acceptTermsAndConditionsButton)
        await app.client.click(this.nextButton)
    }

    async doNotAcceptTermsAndConditions(app){
        await app.client.click(this.nextButton)
    }

    async verifyTermsAndConditions(app,expect){
        expect(await app.client.isVisible(this.termsOfServiceTitle)).to.equal(true)
        expect(await app.client.isVisible(this.termsOfServiceText)).to.equal(true)
    }

    async verifyWalletOptionsAreDisplayed(app){
        return app.client.isVisible(this.createWalletButton) && app.client.isVisible(this.restoreWalletButton)
    }

    async verifyErrorMessageWhenTermsAreNotAccepted(app){
        return app.client.getText(this.errorDialog) === "Some fields require additional action before you can continue."
    }

}

module.exports = new HomePage()