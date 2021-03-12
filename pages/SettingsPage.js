//Setting Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const configFilePath = require('../config/appConfig')[process.env.ENV].APP_CONF_PATH
const TD = require('../test_data/testData.json')
const helpers = require('../support/helpers')
class SettingsPage {

    get mySettingsText() { return ('//div[contains(text(),"My settings")]') }
    get enableDarkModeText() { return ('//div[contains(text(),"Enable Dark")]')}
    get enableDarkModeSwitch() { return ('//div[contains(text(),"Enable Dark")]/..//button')}
    get colorThemeAtribute() { return ('//*[@id="Mantis"]')}
    get languageText() { return ('//div[contains(text(),"Language")]')}
    get languageDropDown() { return ('//div[contains(text(),"Language")]/../div[@class="settings-input"]')}
    get dateFormatText() { return ('//div[contains(text(),"Date Format")]')}
    get dateFormatDropDown() { return ('//div[contains(text(),"Date Format")]/../div[@class="settings-input"]')}
    get timeFormatText() { return ('//div[contains(text(),"Time Format")]')}
    get timeFormatDropDown() { return ('//div[contains(text(),"Time Format")]/../div[@class="settings-input"]')}
    get networkText() { return ('//div[contains(text(),"Network")]')}
    get networkDropDown() { return ('//div[contains(text(),"Network")]/../div[@class="settings-input"]')}
    get exportPrivateKeyButton() { return ('//button[contains(text(),"Export")]')}
    get exportPrivateKeyText() { return ('//div[contains(text(),"Export")]')}
    get enterYourPasswordText() { return ('//div[contains(text(),"Enter your pass")]')}
    get enterYourPasswordField() { return ('//div[contains(text(),"Enter your pass")]/../..//input')}
    get closeButton() { return ('//span[contains(text(),"Close")]')}
    get unlockButton() { return ('//span[contains(text(),"Unlock")]')}
    get revealPrivateKeyText() { return ('//div[contains(text(),"Reveal")]')}
    get errorMessageText() { return ('//div[@class="DialogError"]')}
    get securityInfoText() { return ('//div[contains(text(),"Please, make sure your screen")]')}
    get revealPrivateKeyButton() { return ('//button[@title="Reveal Private Key"]')}
    get blurredPrivateKey() { return ('//div[contains(@class,"DialogQRCode")]')}
    get privateKeyValue() { return ('//div[@class="qr-content"]')}
    get downloadPrivateKeyButton() { return ('//button[contains(text(), "Download")]')}
    get saganoNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Sagano")]') }
    get mainnetNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Mainnet")]') }
    get mordorNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Mordor")]') }
    get customNetwork() { return ('//div[@class="ant-select-item-option-content" and contains(text(),"Custom")]') }
    get confirmButton() { return ('//button[@data-testid="right-button"]') }
    get confirmMainnetText() { return ('//input[@class="ant-input input"]') }
    get mantisDataDirectoryText() { return ('//div[text()="Mantis data directory"]')}
    get mantisDataDirectoryValue() { return ('//div[text()="Mantis data directory"]/..//input')}

    async checkIfYouAreOnSettingsPage(app) {
        expect(await app.client
            .waitForVisible(this.mySettingsText, WAIT)
            .getText(this.mySettingsText)
        )
            .to.equal('My settings')
    }

    async darkModeToggle(app) {
        await this.checkDarkModeText(app)
        await this.checkDarkModeClass(app)
        await this.clickToggleSwitch(app)
    }

    async checkDarkModeText(app){
        expect(await app.client
            .waitForVisible(this.enableDarkModeText, WAIT)
            .getText(this.enableDarkModeText)
        )
            .to.equal('Enable Dark Mode')
    }

    async checkDarkModeClass(app){
        expect(await app.client
            .getAttribute(this.colorThemeAtribute,'class')
        )
            .to.equal('theme-dark')
    }

    async clickToggleSwitch(app){
        await app.client
            .waitForVisible(this.enableDarkModeSwitch, WAIT)
            .click(this.enableDarkModeSwitch)
    }

    async checkLightModeClass(app){
        expect(await app.client
            .getAttribute(this.colorThemeAtribute,'class')
        )
            .to.equal('theme-light')
    }

    async checkColorThemeChanges(app) {
        await this.checkLightModeClass(app)
        await this.clickToggleSwitch(app)
    }

    async checkLanguageText(app){
        expect(await app.client
            .waitForVisible(this.languageText, WAIT)
            .getText(this.languageText)
        )
            .to.equal('Language')
    }

    async checkLanguageOptions(app) {
        await this.checkLanguageText(app)
        await this.pickLanguageFormat(app)
    }

    async clickLanguageDropdown(app) {
        await app.client
            .waitForVisible(this.languageDropDown, WAIT)
            .click(this.languageDropDown)
    }

    async pickLanguageFormat(app){
        for(let i = 0; i<TD.LanguageFormat.length; i++){

            await this.clickLanguageDropdown(app)

            await app.client
                .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.LanguageFormat[i]+'"]',WAIT)
                .click('//div[@class="ant-select-item-option-content" and text()="'+TD.LanguageFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.language)
                .to.equal('en')
        }
    }

    async clickDateFormatDropdown(app){
        await app.client
            .waitForVisible(this.dateFormatDropDown, WAIT)
            .click(this.dateFormatDropDown)
    }

    async pickDateFormat(app){
        for(let i = 0; i<TD.DateFormat.length; i++){

            await this.clickDateFormatDropdown(app)

                await app.client
                    .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.DateFormat[i]+'"]',WAIT)
                    .click('//div[@class="ant-select-item-option-content" and text()="'+TD.DateFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.dateFormat)
                .to.equal(TD.DateFormat[i])
        }
    }

    async clickTimeFormatDropdown(app){
        await app.client
            .waitForVisible(this.timeFormatDropDown, WAIT)
            .click(this.timeFormatDropDown)
    }

    async pickTimeFormat(app){
        for(let i = 0; i<TD.TimeFormat.length; i++){

            await this.clickTimeFormatDropdown(app)

            await app.client
                .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.TimeFormat[i]+'"]',WAIT)
                .click('//div[@class="ant-select-item-option-content" and text()="'+TD.TimeFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.timeFormat)
                .to.equal(TD.TimeFormat[i])
        }

    }

    async checkDateFormatText(app){
        expect(await app.client
            .waitForVisible(this.dateFormatText)
            .getText(this.dateFormatText)
        )
            .to.equal('Date Format')
    }

    async checkDateOptions(app) {
        await this.checkDateFormatText(app)
        await this.pickDateFormat(app)
    }

    async checkTimeFormatText(app){
        expect(await app.client
            .waitForVisible(this.timeFormatText)
            .getText(this.timeFormatText)
        )
            .to.equal('Time Format')
    }

    async checkTimeOptions(app) {
        await this.checkTimeFormatText(app)
        await this.pickTimeFormat(app)
    }

    async clickConfirmButton(app){
        await app.client
            .waitForVisible(this.confirmButton,WAIT)
            .click(this.confirmButton);
    }

    async getSelectedNetworkText(app){
       return app.client
           .waitForVisible(this.networkDropDown, WAIT)
           .getText(this.networkDropDown);

    }

    async clickNetworkDropdown(app){
        await app.client
            .waitForVisible(this.networkDropDown,WAIT)
            .click(this.networkDropDown);

    }

    async clickOnNetwork(app, network){
        await app.client
            .waitForVisible('//div[@class="ant-select-item-option-content" and contains(text(),"'+network+'")]',WAIT)
            .click('//div[@class="ant-select-item-option-content" and contains(text(),"'+network+'")]');
    }

    async typeNetworkNameIntoField(app, name){
        await app.client
            .waitForVisible(this.confirmMainnetText,WAIT)
            .setValue(this.confirmMainnetText, name);
    }

    async checkNetworkOptions(network,app) {

        const selectedNetwork = await this.getSelectedNetworkText(app)

        switch (network) {
            case "Sagano Testnet":
                if (selectedNetwork !== 'Sagano Testnet') {
                    await this.clickNetworkDropdown(app)
                    await this.clickOnNetwork(app, "Sagano")
                    await this.clickConfirmButton(app)
                }

                expect(await this.getSelectedNetworkText(app))
                    .to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('testnet-internal-nomad')

                break;

            case "Mainnet":
                if (selectedNetwork !== 'Mainnet') {
                    await this.clickNetworkDropdown(app)
                    await this.clickOnNetwork(app,"Mainnet")
                    await this.typeNetworkNameIntoField(app, "MAINNET")
                    await this.clickConfirmButton(app)
                }

                expect(await this.getSelectedNetworkText(app))
                    .to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('etc')

                break;

            case "Mordor":
                if (selectedNetwork !== 'Mordor') {
                    await this.clickNetworkDropdown(app)
                    await this.clickOnNetwork(app,"Mordor")
                    await this.clickConfirmButton(app)
                }

                expect(await this.getSelectedNetworkText(app))
                    .to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('mordor')

                break;

            case "Custom":
                if (selectedNetwork !== 'Custom') {
                    await this.clickNetworkDropdown(app)
                    await this.clickOnNetwork(app,"Custom")
                    await this.typeNetworkNameIntoField(app, "Custom")
                    await this.clickConfirmButton(app)
                }

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('Custom')

                break;
        }
    }

    async checkMantisDataDirectoryText(app){
        expect(await app.client
            .waitForVisible(this.mantisDataDirectoryText, WAIT)
            .getText(this.mantisDataDirectoryText)
        )
            .to.equal('Mantis data directory')
    }

    async checkCurrentDirectory(app){

        await this.checkMantisDataDirectoryText(app)

        const walletDirectory = await app.client
            .waitForVisible(this.mantisDataDirectoryValue,WAIT)
            .getValue(this.mantisDataDirectoryValue)

        expect(
            helpers.readJSONFile(configFilePath).settings.mantisDatadir)
            .to.equal(walletDirectory)
    }

    async clickOnExportPrivateKey(app){
        await app.client
            .waitForVisible(this.exportPrivateKeyButton, WAIT)
            .click(this.exportPrivateKeyButton)
    }

    async enterPassword(app,pass){
        if(pass === "empty"){
            await app.client
                .waitForVisible(this.enterYourPasswordField, WAIT)
                .setValue(this.enterYourPasswordField,"")
        } else {
             await app.client
                 .waitForVisible(this.enterYourPasswordField, WAIT)
                 .setValue(this.enterYourPasswordField,pass)
        }
    }

    async clickOnUnlockButton(app){
        await app.client
            .waitForVisible(this.unlockButton, WAIT)
            .click(this.unlockButton)
    }

    async checkIfYouAreOnExportPrivateKey(app){
        expect(await app.client
            .waitForVisible(this.revealPrivateKeyText, WAIT)
            .getText(this.revealPrivateKeyText)
        )
            .to.equal('Reveal Private Key')
    }

    async checkIfPrivateKeyIsBlurred(app, blurred){
    expect(await app.client
        .getAttribute(this.blurredPrivateKey,'class')
    ).to.equal(blurred)
    }

    async blurredToggle(app){
        await app.client
            .waitForVisible(this.revealPrivateKeyButton, WAIT)
            .click(this.revealPrivateKeyButton)
    }

    async clickCloseButton(app) {
        await app.client
            .waitForVisible(this.closeButton, WAIT)
            .click(this.closeButton)
    }

    async errorMessageDisplayed(app){
        expect(await app.client
            .waitForVisible(this.errorMessageText,WAIT)
            .getText(this.errorMessageText)
        ).to.equal(TD.PVKIncorrectPassError)
    }

}

module.exports = new SettingsPage()