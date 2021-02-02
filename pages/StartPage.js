class StartPage {

    get showDetails() { return ('//div[contains(text(),"Show details")]') };
    get machineText() { return ('//div[@class="content"]/div[1]/div[1]') };
    get platformText() { return ('//div[@class="content"]/div[1]/div[2]/div[1]') };
    get platformTextValue() { return ('//div[@class="content"]/div[1]/div[2]/div[2]') };
    get platformVersionText() { return ('//div[@class="content"]/div[1]/div[3]/div[1]') };
    get platformVersionTextValue() { return ('//div[@class="content"]/div[1]/div[3]/div[2]') };
    get cpuText() { return ('//div[@class="content"]/div[1]/div[4]/div[1]') };
    get cpuTextValue() { return ('//div[@class="content"]/div[1]/div[4]/div[2]') };
    get memoryText() { return ('//div[@class="content"]/div[1]/div[5]/div[1]') };
    get memoryTextValue() { return ('//div[@class="content"]/div[1]/div[5]/div[2]') };
    get walletTitleText() { return ('//div[@class="content"]/div[1]/div[6]') };
    get walletVersionText() { return ('//div[@class="content"]/div[1]/div[7]/div[1]') };
    get walletVersionTextValue() { return ('//div[@class="content"]/div[1]/div[7]/div[2]') };
    get walletProcessIDText() { return ('//div[@class="content"]/div[1]/div[8]/div[1]') };
    get walletProcessIDTextValue() { return ('//div[@class="content"]/div[1]/div[7]/div[1]') };
    get walletRendererIDText() { return ('//div[@class="content"]/div[1]/div[9]/div[1]') };
    get walletRendererIDTextValue() { return ('//div[@class="content"]/div[1]/div[9]/div[2]') };
    get localDirectoryText() { return ('//div[@class="content"]/div[1]/div[10]/div[1]') };
    get localDirectoryTextValue() { return ('//div[@class="content"]/div[1]/div[10]/div[2]') };
    get backendText() { return ('//div[@class="content"]/div[2]/div[1]') };
    get closeDetails() { return ('//button[@aria-label="Close"]') };
    get networkDropDown() { return ('//div[@class="switcher"]') };
    get saganoNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Sagano")]') };
    get mainnetNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Mainnet")]') };
    get mordorNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Mordor")]') };
    get confirmButton() { return ('//button[@data-testid="right-button"]') };
    get confirmMainnetText() { return ('//input[@class="ant-input input"]') };

    /**
     * Given a Network Logs in to Mantis Wallet
     * @param network
     * @param app
     * @returns {Promise<void>}
     */
    async login(network,app) {
        const selectedNetwork = await app.client.waitUntilWindowLoaded().getText(this.networkDropDown);
        switch (network) {
            case "Sagano":
                if (selectedNetwork !== 'Sagano Testnet') {
                    await app.client.waitUntilWindowLoaded().click(this.networkDropDown);
                    await app.client.waitForEnabled(this.saganoNetwork, 5000).click(this.saganoNetwork);
                    await app.client.waitForEnabled(this.confirmButton).click(this.confirmButton);
                }
                break;
            case "Mainnet":
                if (selectedNetwork !== 'Mainnet') {
                    await app.client.waitUntilWindowLoaded().click(this.networkDropDown);
                    await app.client.waitForEnabled(this.mainnetNetwork, 5000).click(this.mainnetNetwork);
                    await app.client.setValue(this.confirmMainnetText, "MAINNET");
                    await app.client.waitForEnabled(this.confirmButton).click(this.confirmButton);
                }
                break;
            case "Mordor":
                if (selectedNetwork !== 'Mordor') {
                    await app.client.waitUntilWindowLoaded().click(this.networkDropDown);
                    await app.client.waitForEnabled(this.mordorNetwork, 5000).click(this.mordorNetwork);
                    await app.client.waitForEnabled(this.confirmButton).click(this.confirmButton);
                }
                break;
        }
    }
}

module.exports = new StartPage();