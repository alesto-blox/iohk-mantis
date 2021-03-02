//Logged in page
const WAIT = require('../config/appConfig.js').WAIT;
class LoggedInPage {

    get addressBookLink() {return ('//div[text()="Address book"]')}
    get receiveButton() { return ('//button[contains(text(), "Receive")]')}
    get settingsLink() { return ('//div[@class="link settings"]')}
    get statusLink() { return ('//span[text()="Status"]')}
    get supportLink() { return ('//span[text()="Support"]')}

    async goToAddressBook(app) {
        await app.client
            .waitForVisible(this.addressBookLink,WAIT)
            .click(this.addressBookLink)
    }

    async goToReceiveAddress(app) {
        await app.client
            .waitForVisible(this.receiveButton,WAIT)
            .click(this.receiveButton)
    }

    async goToSettings(app) {
        await app.client
            .waitForVisible(this.settingsLink,WAIT)
            .click(this.settingsLink)
    }

    async goToSupport(app){
        await app.client
            .waitForVisible(this.supportLink,WAIT)
            .click(this.supportLink)
    }

    async goToStatus(app) {
        await app.client
            .waitForVisible(this.statusLink,WAIT)
            .click(this.statusLink)
    }

}

module.exports = new LoggedInPage()