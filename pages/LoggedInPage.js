//Logged in page

const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
class LoggedInPage {

    get addressBookLink() {return ('//div[text()="Address book"]')}
    get receiveButton() { return ('//button[contains(text(), "Receive")]')}
    get settingsLink() { return ('//div[@class="link settings"]')}
    get statusLink() { return ('//span[text()="Status"]')}
    get supportLink() { return ('//span[text()="Support"]')}

    async goToAddressBook(app) {
        await app.client
            .waitForVisible(this.addressBookLink,30000)
            .click(this.addressBookLink)
    }

    async goToReceiveAddress(app) {
        await app.client
            .waitForVisible(this.receiveButton,30000)
            .click(this.receiveButton)
    }

    async goToSettings(app) {
        await app.client
            .waitForVisible(this.settingsLink,30000)
            .click(this.settingsLink)
    }

    async goToSupport(app){
        await app.client
            .waitForVisible(this.supportLink,30000)
            .click(this.supportLink)
    }

    async goToStatus(app) {
        await app.client
            .waitForVisible(this.statusLink,30000)
            .click(this.statusLink)
    }

}

module.exports = new LoggedInPage()