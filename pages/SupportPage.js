class SupportPage {

    get supportText() { return ('//div[contains(text(), "Support")]') }
    get exportLogsButton() { return ('//span[contains(text(), "Export Logs")]') }
    get openTicketButton() { return ('//span[contains(text(), "Open Ticket")]') } 

}

module.exports = new SupportPage()