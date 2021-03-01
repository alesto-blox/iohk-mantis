//Status Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class StatusPage {

    get machineText() { return ('//div[contains(text(), "Machine")]') }
    get backendText() { return ('//div[contains(text(), "Backend")]') }
    get mantisWalletText() { return ('//div[contains(text(), "Mantis Wallet") and @class="title"]') }

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
    }

}

module.exports = new StatusPage()