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