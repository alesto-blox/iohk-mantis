const { When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const loggedInPage = require('../pages/LoggedInPage.js')
const statusPage = require('../pages/StatusPage.js')

When(/^I click on status button on main page on Mantis wallet$/, async ()=>{
    await loggedInPage.goToStatus(app)
});
Then(/^I expect to see status page on Mantis wallet$/, async ()=>{
    await statusPage.checkIfYouAreOnStatusPage(app)
});