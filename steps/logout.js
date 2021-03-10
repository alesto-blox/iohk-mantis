const {When, Then} = require('@cucumber/cucumber');
const logoutPage = require('../pages/LogoutPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app
const TD = require('../test_data/testData.json');

When(/^I click Log out button on main page$/, async () => {
    await logoutPage.logout(app);
});
When(/^I enter my password and check checkbox on remove wallet page$/, async () => {
    await logoutPage.enterPasswordAndCheckCheckbox(app, TD.RestoreWallet.Password);
});
When(/^I click on remove wallet button on remove wallet page$/, async () => {
    await logoutPage.removeWallet(app);
});
Then(/^I expect to be logged out of Mantis wallet$/, async () => {
    await homePage.verifyLogout(app);
});
Then(/^I log out$/, async () => {
    await logoutPage.logout(app);
    await logoutPage.enterPasswordAndCheckCheckbox(app, TD.RestoreWallet.Password);
    await logoutPage.removeWallet(app);
});