const {When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const settingsPage = require('../pages/SettingsPage')
const loggedInPage = require('../pages/LoggedInPage.js')
const TD = require('../test_data/testData.json')

When(/^I click on settings button on main page$/, async () => {
    await loggedInPage.goToSettings(app)
});
Then(/^I expect to see my settings page$/, async () => {
    await settingsPage.checkIfYouAreOnSettingsPage(app)
});
Then(/^I click enable dark mode$/, async () => {
    await settingsPage.darkModeToggle(app)
});
Then(/^I expect to see color theme changed$/, async () => {
    await settingsPage.checkColorThemeChanges(app)
});
Then(/^I can change language, date format and time format$/, async () => {
    await settingsPage.checkLanguageOptions(app)
    await settingsPage.checkDateOptions(app)
    await settingsPage.checkTimeOptions(app)
});
Then(/^I change "([^"]*)" in Settings$/, async (network) => {
    await settingsPage.checkNetworkOptions(network, app)
});
Then(/^I can check wallet directory$/, async () => {
    await settingsPage.checkCurrentDirectory(app)
});
Then(/^I click Export private key button$/, async ()=> {
    await settingsPage.clickOnExportPrivateKey(app)
});
Then(/^I enter my password and click unlock$/, async ()=> {
    await settingsPage.enterPassword(app,TD.RestoreWallet.Password)
    await settingsPage.clickOnUnlockButton(app)
});
Then(/^I expect to see export private key and it is blurred$/, async ()=> {
    await settingsPage.checkIfYouAreOnExportPrivateKey(app)
    await settingsPage.checkIfPrivateKeyIsBlurred(app, TD.PVKBlurred.True)
});
When(/^I click on switch$/, async ()=> {
    await settingsPage.blurredToggle(app)
});
Then(/^I should see private key$/, async ()=> {
    await settingsPage.checkIfPrivateKeyIsBlurred(app, TD.PVKBlurred.False)
    await settingsPage.clickCloseButton(app)
});
Then(/^I enter "([^"]*)" and click unlock$/, async (pass)=>  {
    await settingsPage.enterPassword(app, pass)
    await settingsPage.clickOnUnlockButton(app)
});
Then(/^I should see error message for wrong pass$/, async ()=>  {
    await settingsPage.errorMessageDisplayed(app)
    await settingsPage.clickCloseButton(app)
});