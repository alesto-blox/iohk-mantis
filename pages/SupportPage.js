//Support Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const TD = require('../test_data/testData.json')
class SupportPage {

    get supportText() { return ('//div[contains(text(), "Support")]') }
    get exportLogsButton() { return ('//span[contains(text(), "Export Logs")]') }
    get openTicketButton() { return ('//span[contains(text(), "Open Ticket")]') }
    get supportDescriptionText() { return ('//div[@class="description"]')}
    get closeModalButton() { return ('//span[@aria-label="close"]')}

    async checkIfYouAreOnSupportPage(app) {
        await this.checkForSupportTitleText(app)
        await this.checkForExportLogs(app)
        await this.checkForOpenTicket(app)
        await this.checkForSupportText(app)

    }

    async checkForSupportText(app){
        expect(await app.client
            .waitForVisible(this.supportText, WAIT)
            .getText(this.supportText)
        )
            .to.equal('Support')
    }

    async checkForExportLogs(app){
        expect(await app.client
            .waitForVisible(this.exportLogsButton, WAIT)
            .getText(this.exportLogsButton)
        )
            .to.equal('Export Logs')
    }

    async checkForOpenTicket(app){
        expect(await app.client
            .waitForVisible(this.openTicketButton, WAIT)
            .getText(this.openTicketButton)
        )
            .to.equal('Open Ticket')
    }

    async checkForSupportTitleText(app){
        expect(await app.client
            .waitForVisible(this.supportDescriptionText,WAIT)
            .getText(this.supportDescriptionText)
        )
            .to.equal(TD.SupportDescription)
    }

    async closeSupportPage(app){
        await app.client
            .waitForVisible(this.closeModalButton,WAIT)
            .click(this.closeModalButton)
    }

}

module.exports = new SupportPage()