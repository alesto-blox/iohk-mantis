//Home Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const TD = require('../test_data/testData.json')
const chaiFiles = require('chai-files')
const chai = require('chai')
chai.use(chaiFiles);
const {file} = require("chai-files");
class HomePage {

    get termsOfServiceTitle() { return ('//div[@class="title" and contains(text(),"IOHK")]') };
    get termsOfServiceText() { return ('//div[@class="scrollable"]') };
    get acceptTermsAndConditionsButton() { return ('div#termsAndConditionsApproval') };
    get acceptTermsAndConditionsSpan() { return ('//span[@class="ant-checkbox-inner"]') };
    get nextButton() { return ('//button[@type="submit"]') };
    get errorDialog() { return ('//div[@class="DialogError"]') };
    get createWalletButton() { return ('//div[text()="Create"]') };
    get restoreWalletButton() { return ('//div[text()="Restore"]') };
    get connectedNetwork() {return ('//div[@class="network"]')}
    get addressBookNeedAddressInfo() { return ('//div[text()="You need a wallet to continue"]')}

    async acceptTermsAndConditions(app){
        await app.client
            .waitForVisible(this.acceptTermsAndConditionsButton,WAIT)
            .click(this.acceptTermsAndConditionsButton);

        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async doNotAcceptTermsAndConditions(app){
        await app.client
            .waitForVisible(this.nextButton,WAIT)
            .click(this.nextButton);
    }
    async verifyTermsAndConditions(app){

        expect(await app.client
            .waitForVisible(this.termsOfServiceTitle,WAIT)
            .isVisible(this.termsOfServiceTitle)
        ).to.equal(true);

        expect(await app.client
            .waitForVisible(this.termsOfServiceTitle,WAIT)
            .getText(this.termsOfServiceTitle)
        ).to.equal(TD.TOS.TOSTitle);

        expect(await app.client
            .waitForVisible(this.termsOfServiceText,WAIT)
            .isVisible(this.termsOfServiceText)
        ).to.equal(true);

        expect(await app.client
            .waitForVisible(this.termsOfServiceText,WAIT)
            .getText(this.termsOfServiceText)
        ).to.equal(file('./test_data/TermsOfServiceAgreement.txt'));

    }
    async verifyWalletOptionsAreDisplayed(app){
        expect(await app.client
            .waitForVisible(this.createWalletButton,WAIT)
            .isVisible(this.createWalletButton)
        ).to.equal(true);

        expect(await app.client
            .waitForVisible(this.restoreWalletButton,WAIT)
            .isVisible(this.restoreWalletButton)
        ).to.equal(true);
    }
    async verifyErrorMessageWhenTermsAreNotAccepted(app){
        expect(await app.client
            .waitForVisible(this.errorDialog,WAIT)
            .getText(this.errorDialog)
        ).to.equal("Some fields require additional action before you can continue.")
    }
    async isMantisStartedForTheSelectedNetwork(app,network){
        expect(await app.client
            .waitForVisible(this.connectedNetwork,WAIT)
            .getText(this.connectedNetwork)
        )
            .to.equal(network);
    }
    async clickRestoreWalletButton(app){
        await app.client
            .waitForVisible(this.restoreWalletButton,WAIT)
            .click(this.restoreWalletButton);
    }
    async createWallet(app){
        await app.client
            .waitForVisible(this.createWalletButton,WAIT)
            .click(this.createWalletButton);
    }
    async verifyLogout(app) {
        expect(await app.client
            .waitForVisible(this.createWalletButton,WAIT)
            .getText(this.createWalletButton)
        )
            .to.equal("CREATE");

        expect(await app.client
            .waitForVisible(this.restoreWalletButton,WAIT)
            .getText(this.restoreWalletButton)
        )
            .to.equal("RESTORE");
    }
    async addressBookIsUnavailable(app){
        expect(await app.client
            .waitForVisible(this.addressBookNeedAddressInfo,WAIT)
            .getText(this.addressBookNeedAddressInfo)
        )
            .to.equal(TD.Addresses.NeedWalletToSeeAddressBookText);
    }
    async checkIfCreateButtonIsDisplayed(app){
        expect(await app.client
            .waitForVisible(this.createWalletButton,WAIT)
            .getText(this.createWalletButton)
        )
            .to.equal('CREATE');
    }
    async checkIfRestoreButtonIsDisplayed(app){
        expect(await app.client
            .waitForVisible(this.restoreWalletButton,WAIT)
            .getText(this.restoreWalletButton)
        )
            .to.equal('RESTORE');
    }


}

module.exports = new HomePage()