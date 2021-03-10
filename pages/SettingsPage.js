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
        expect(await app.client
            .waitForVisible(this.enableDarkModeText, WAIT)
            .getText(this.enableDarkModeText)
        )
            .to.equal('Enable Dark Mode')

        expect(await app.client
            .getAttribute(this.colorThemeAtribute,'class')
        )
            .to.equal('theme-dark')

        await app.client
            .waitForVisible(this.enableDarkModeSwitch, WAIT)
            .click(this.enableDarkModeSwitch)
    }
    async checkColorThemeChanges(app) {
        expect(await app.client
            .getAttribute(this.colorThemeAtribute,'class')
        )
            .to.equal('theme-light')

        await app.client
            .waitForVisible(this.enableDarkModeSwitch, WAIT)
            .click(this.enableDarkModeSwitch)
    }
    async checkLanguageOptions(app) {
        expect(await app.client
            .waitForVisible(this.languageText, WAIT)
            .getText(this.languageText)
        )
            .to.equal('Language')

        await this.pickLanguageFormat(app)
    }
    async pickLanguageFormat(app){
        for(let i = 0; i<TD.LanguageFormat.length; i++){
            await app.client
                .waitForVisible(this.languageDropDown, WAIT)
                .click(this.languageDropDown)

            await app.client
                .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.LanguageFormat[i]+'"]',WAIT)
                .click('//div[@class="ant-select-item-option-content" and text()="'+TD.LanguageFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.language)
                .to.equal('en')
        }
    }
    async pickDateFormat(app){
        for(let i = 0; i<TD.DateFormat.length; i++){
                await app.client
                    .waitForVisible(this.dateFormatDropDown, WAIT)
                    .click(this.dateFormatDropDown)

                await app.client
                    .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.DateFormat[i]+'"]',WAIT)
                    .click('//div[@class="ant-select-item-option-content" and text()="'+TD.DateFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.dateFormat)
                .to.equal(TD.DateFormat[i])
        }
    }
    async pickTimeFormat(app){
        for(let i = 0; i<TD.TimeFormat.length; i++){
            await app.client
                .waitForVisible(this.timeFormatDropDown, WAIT)
                .click(this.timeFormatDropDown)

            await app.client
                .waitForVisible('//div[@class="ant-select-item-option-content" and text()="'+TD.TimeFormat[i]+'"]',WAIT)
                .click('//div[@class="ant-select-item-option-content" and text()="'+TD.TimeFormat[i]+'"]')

            expect(
                helpers.readJSONFile(configFilePath).settings.timeFormat)
                .to.equal(TD.TimeFormat[i])
        }

    }
    async checkDateOptions(app) {
        expect(await app.client
            .waitForVisible(this.dateFormatText)
            .getText(this.dateFormatText)
        )
            .to.equal('Date Format')

         await this.pickDateFormat(app)
    }
    async checkTimeOptions(app) {
        expect(await app.client
            .waitForVisible(this.timeFormatText)
            .getText(this.timeFormatText)
        )
            .to.equal('Time Format')

        await this.pickTimeFormat(app)
    }
    async checkNetworkOptions(network,app) {

        const selectedNetwork = await app.client
            .waitForVisible(this.networkDropDown,WAIT)
            .getText(this.networkDropDown);

        switch (network) {
            case "Sagano Testnet":
                if (selectedNetwork !== 'Sagano Testnet') {
                    await app.client
                        .click(this.networkDropDown);

                    await app.client
                        .waitForVisible(this.saganoNetwork,WAIT)
                        .click(this.saganoNetwork);

                    await app.client
                        .waitForVisible(this.confirmButton,WAIT)
                        .click(this.confirmButton);
                }

                expect(await app.client
                    .waitForVisible(this.networkDropDown,WAIT)
                    .getText(this.networkDropDown)
                ).to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('testnet-internal-nomad')

                break;

            case "Mainnet":
                if (selectedNetwork !== 'Mainnet') {
                    await app.client
                        .click(this.networkDropDown);

                    await app.client
                        .waitForVisible(this.mainnetNetwork,WAIT)
                        .click(this.mainnetNetwork);

                    await app.client
                        .waitForVisible(this.confirmMainnetText,WAIT)
                        .setValue(this.confirmMainnetText, "MAINNET");

                    await app.client
                        .waitForVisible(this.confirmButton,WAIT)
                        .click(this.confirmButton);
                }

                expect(await app.client
                    .waitForVisible(this.networkDropDown,WAIT)
                    .getText(this.networkDropDown)
                )
                    .to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('etc')

                break;

            case "Mordor":
                if (selectedNetwork !== 'Mordor') {
                    await app.client
                        .click(this.networkDropDown);

                    await app.client
                        .waitForVisible(this.mordorNetwork,WAIT)
                        .click(this.mordorNetwork);

                    await app.client
                        .waitForVisible(this.confirmButton,WAIT)
                        .click(this.confirmButton);
                }

                expect(await app.client
                    .waitForVisible(this.networkDropDown,WAIT)
                    .getText(this.networkDropDown)
                ).to.equal(network);

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('mordor')

                break;

            case "Custom":
                if (selectedNetwork !== 'Custom') {
                    await app.client
                        .click(this.networkDropDown);

                    await app.client
                        .waitForVisible(this.customNetwork,WAIT)
                        .click(this.customNetwork);

                    await app.client
                        .waitForVisible(this.confirmMainnetText,WAIT)
                        .setValue(this.confirmMainnetText, "Custom");

                    await app.client
                        .waitForVisible(this.confirmButton,WAIT)
                        .click(this.confirmButton);
                }

                expect(
                    helpers.readJSONFile(configFilePath).networkName)
                    .to.equal('Custom')

                break;
        }
    }
    async checkCurrentDirectory(app){
        expect(await app.client
            .waitForVisible(this.mantisDataDirectoryText, WAIT)
            .getText(this.mantisDataDirectoryText)
        )
            .to.equal('Mantis data directory')

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