//Status Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class StatusPage {

    get machineText() { return ('//div[contains(text(), "Machine")]') }
    get backendText() { return ('//div[contains(text(), "Backend")]') }
    get mantisWalletText() { return ('//div[contains(text(), "Mantis Wallet") and @class="title"]') }

    async checkIfYouAreOnStatusPage(app) {
        expect(await app.client
            .waitForVisible(this.machineText, 10000)
            .getText(this.machineText)
        )
            .to.equal('My settings')
        expect(await app.client
            .waitForVisible(this.backendText, 10000)
            .getText(this.backendText)
        )
            .to.equal('My settings')
        expect(await app.client
            .waitForVisible(this.mantisWalletText, 10000)
            .getText(this.mantisWalletText)
        )
            .to.equal('My settings')
    }

}

module.exports = new StatusPage()