//Status Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const TD = require('../test_data/testData.json')
class StatusPage {

    get machineText() { return ('//div[contains(text(), "Machine")]') }
    get backendText() { return ('//div[contains(text(), "Backend")]') }
    get mantisWalletText() { return ('//div[contains(text(), "Mantis Wallet") and @class="title"]') }
    get closeModalButton() { return ('//span[@aria-label="close"]')}

    async checkIfYouAreOnStatusPage(app) {
        expect(await app.client
            .waitForVisible(this.machineText, WAIT)
            .getText(this.machineText)
        )
            .to.equal('MACHINE')
        expect(await app.client
            .waitForVisible(this.backendText, WAIT)
            .getText(this.backendText)
        )
            .to.equal('BACKEND')
        expect(await app.client
            .waitForVisible(this.mantisWalletText, WAIT)
            .getText(this.mantisWalletText)
        )
            .to.equal('MANTIS WALLET')
        await this.checkStatusOptions(app)
    }
    async checkStatusOptions(app){
        for(let i = 0; i<TD.StatusInfo.length; i++){

            const statusInfoText = await app.client
                .waitForVisible('//div[text()="'+TD.StatusInfo[i]+'"]',WAIT)
                .getText('//div[text()="'+TD.StatusInfo[i]+'"]')

            expect(statusInfoText)
                .to.equal(TD.StatusInfo[i])
        }
    }
    async closeStatusPage(app){
        await app.client
            .waitForVisible(this.closeModalButton,WAIT)
            .click(this.closeModalButton)
    }

}

module.exports = new StatusPage()