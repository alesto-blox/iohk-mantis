//Status Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class StatusPage {

    get machineText() { return ('//div[contains(text(), "Machine")]') }
    get backendText() { return ('//div[contains(text(), "Backend")]') }
    get mantisWalletText() { return ('//div[contains(text(), "Mantis Wallet") and @class="title"]') }

}

module.exports = new StatusPage()