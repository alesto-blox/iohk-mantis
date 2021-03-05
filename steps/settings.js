const { When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const settingsPage = require('../pages/SettingsPage')
const loggedInPage = require('../pages/LoggedInPage.js')

When(/^I click on settings button on main page$/, async ()=>{
    await loggedInPage.goToSettings(app)
});
Then(/^I expect to see my settings page$/, async ()=>{
    await settingsPage.checkIfYouAreOnSettingsPage(app)
});

Then(/^I click enable dark mode$/, async ()=>{
    await settingsPage.darkModeToggle(app)
});

Then(/^I expect to see color theme changed$/, async ()=>{
    await settingsPage.checkColorThemeChanges(app)
});

Then(/^I can change language, date format and time format$/, async ()=> {
    await settingsPage.checkLanguageOptions(app)
    await settingsPage.checkDateOptions(app)
    await settingsPage.checkTimeOptions(app)
});

Then(/^I change "([^"]*)" in Settings$/, async (network)=> {
    await settingsPage.checkNetworkOptions(network,app)
});

Then(/^I can check wallet directory$/, async ()=> {
    await settingsPage.checkCurrentDirectory(app)
});