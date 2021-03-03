//Setting Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
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
    get securityInfoText() { return ('//div[contains(text(),"Please, make sure your screen")]')}
    get revealPrivateKeyButton() { return ('//button[@title="Reveal Private Key"]')}
    get privateKeyValue() { return ('//div[@class="qr-content"]')}
    get downloadPrivateKeyButton() { return ('//button[contains(text(), "Download")]')}git

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
            .waitForVisible(this.languageText)
            .getText(this.languageText)
        )
            .to.equal('Language')
        const language = await app.client
            .getText(this.languageDropDown)
        console.log(language)
    }
    async checkDateOptions(app) {
        expect(await app.client
            .waitForVisible(this.dateFormatText)
            .getText(this.dateFormatText)
        )
            .to.equal('Date Format')
        const language = await app.client
            .getText(this.dateFormatDropDown)
        console.log(language)
    }
    async checkTimeOptions(app) {
        expect(await app.client
            .waitForVisible(this.timeFormatText)
            .getText(this.timeFormatText)
        )
            .to.equal('Time Format')

        const language = await app.client
            .click(this.timeFormatDropDown)
            .getText(this.timeFormatDropDown)
        console.log(language)
    }
}

module.exports = new SettingsPage()