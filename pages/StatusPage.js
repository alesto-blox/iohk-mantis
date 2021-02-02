class StatusPage {

    get machineText() { return ('//*[@id="Mantis"]/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[1]') };
    get backendText() { return ('//*[@id="Mantis"]/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div[1]') };
    get mantisWalletText() { return ('//*[@id="Mantis"]/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div[6]') };

}

module.exports = new StatusPage();