const { When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const loggedInPage = require('../pages/LoggedInPage.js')
const supportPage = require('../pages/SupportPage.js')

When(/^I click on support button on main page$/, async ()=>{
   await loggedInPage.goToSupport(app)
});
Then(/^I expect to see support page$/, async ()=>{
   await supportPage.checkIfYouAreOnSupportPage(app)
});