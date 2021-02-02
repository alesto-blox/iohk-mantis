class SupportPage {

    get supportText() { return ('.title') };
    get exportLogsButton() { return ('button=Export Logs') };
    get openTicketButton() { return ('//*[@id="Mantis"]/div[2]/div/div[2]/div/div[2]/div/div/form/div[2]/button[2]') }; // TODO refactor this if possible

}

module.exports = new SupportPage();