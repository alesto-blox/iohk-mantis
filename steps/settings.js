const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app
const settingsPage = require('../pages/SettingsPage')
const loggedInPage = require('../pages/LoggedInPage.js')

When(/^I click on settings button on main page$/, async ()=>{
    await loggedInPage.goToSettings(app)
});
Then(/^I expect to see my settings page$/, async ()=>{
 await settingsPage.checkIfYouAreOnSettingsPage(app)
});