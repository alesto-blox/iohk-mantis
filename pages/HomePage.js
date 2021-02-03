//Home Page

const expect = require('chai').expect;
class HomePage {

    get termsOfServiceTitle() { return ('//div[@class="title"]') };//IOHK Terms of Service Agreement
    get termsOfServiceText() { return ('//div[@class="scrollable"]') };
    get acceptTermsAndConditionsButton() { return ('//input[@id="termsAndConditionsApproval"]') };
    get acceptTermsAndConditionsSpan() { return ('//span[@class="ant-checkbox-inner"]') }; //red
    get nextButton() { return ('//button[@type="submit"]') };
    get errorDialog() { return ('//div[@class="DialogError"]') };//  #900
    get createWalletButton() { return ('//div[text()="Create"]') };
    get restoreWalletButton() { return ('//div[text()="Restore"]') };
    get connectedNetwork(){return ('//div[@class="network"]')}

    async acceptTermsAndConditions(app){
        await app.client
            .waitForVisible(this.acceptTermsAndConditionsButton,5000)
            .click(this.acceptTermsAndConditionsButton);

        await app.client
            .waitForVisible(this.nextButton,5000)
            .click(this.nextButton);
    }

    async doNotAcceptTermsAndConditions(app){
        await app.client
            .waitForVisible(this.nextButton,5000)
            .click(this.nextButton);
    }

    async verifyTermsAndConditions(app,expect){

        expect(await app.client
            .waitForVisible(this.termsOfServiceTitle,5000)
            .isVisible(this.termsOfServiceTitle)
        ).to.equal(true);

        expect(await app.client
            .waitForVisible(this.termsOfServiceText)
            .isVisible(this.termsOfServiceText)
        ).to.equal(true);

        //TODO add an actual text comparison
    }

    async verifyWalletOptionsAreDisplayed(app){
        expect(await app.client
            .waitForVisible(this.createWalletButton,5000)
            .isVisible(this.createWalletButton)
        ).to.equal(true);

        expect(await app.client
            .waitForVisible(this.restoreWalletButton,5000)
            .isVisible(this.restoreWalletButton)
        ).to.equal(true);
    }

    async verifyErrorMessageWhenTermsAreNotAccepted(app){
        expect(await app.client
            .waitForVisible(this.errorDialog,5000)
            .getText(this.errorDialog)
        ).to.equal("Some fields require additional action before you can continue.")
    }

    async isMantisStartedForTheSelectedNetwork(app,network){
        expect(await app.client
            .waitForVisible(this.connectedNetwork,10000)
            .getText(this.connectedNetwork)
        )
            .to.equal(network);
    }
}

module.exports = new HomePage()