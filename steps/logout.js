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
When(/^I try to log out without password$/, async () => {
    await logoutPage.logout(app);
    await logoutPage.checkCheckbox(app);
    await logoutPage.removeWallet(app);
});
Then(/^I should see invalid key error$/, async () => {
    await logoutPage.invalidPass(app);
});
When(/^I try to log out without confirmation$/, async ()=> {
    await logoutPage.logout(app);
    await logoutPage.enterPassword(app, TD.RestoreWallet.Password);
    await logoutPage.removeWallet(app);
});
Then(/^I should see Additional Action Error$/, async ()=> {
    await logoutPage.additionalActionError(app);
});
When(/^I try to log out with wrong password$/, async ()=> {
    await logoutPage.logout(app);
    await logoutPage.enterPassword(app, "TestPass123123!");
    await logoutPage.checkCheckbox(app);
    await logoutPage.removeWallet(app);
});
When(/^I try to logout and I cancel$/, async ()=> {
    await logoutPage.logout(app);
    await logoutPage.enterPassword(app, TD.RestoreWallet.Password);
    await logoutPage.checkCheckbox(app);
    await logoutPage.cancelLogout(app);
});