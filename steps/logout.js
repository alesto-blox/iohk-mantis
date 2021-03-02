const { When, Then} = require('@cucumber/cucumber');
const logoutPage = require('../pages/LogoutPage.js');
const app = require('../support/baseApp.js').app

When(/^I click Log out button on main page$/, async ()=>{
    await logoutPage.logout(app);
});
When(/^I enter my password and check checkbox on remove wallet page$/, async ()=>{
    await logoutPage.removeWallet(app);
});
When(/^I click on remove wallet button on remove wallet page$/, async ()=>{
    // TODO implement step
});
Then(/^I expect to be logged out of Mantis wallet$/, async ()=>{
    // TODO implement step
});