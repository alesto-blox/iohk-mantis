//Steps for support.feature

const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app
const loggedInPage = require('../pages/LoggedInPage.js')
const supportPage = require('../pages/SupportPage.js')

When(/^I click on support button on main page$/, async ()=>{
   await loggedInPage.goToSupport(app)
});
Then(/^I expect to see support page$/, async ()=>{
   await supportPage.checkIfYouAreOnSupportPage(app)
});