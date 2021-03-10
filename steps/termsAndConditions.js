const {When, Then} = require('@cucumber/cucumber');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app

Then(/^I should be able to accept Terms and conditions$/, async () => {
    await homePage.verifyTermsAndConditions(app);
    await homePage.acceptTermsAndConditions(app);
});
Then(/^I should see Create new Wallet and Restore Wallet options$/, async () => {
    await homePage.verifyWalletOptionsAreDisplayed(app);
});
When(/^I do not accept Terms and conditions$/, async () => {
    await homePage.verifyTermsAndConditions(app);
    await homePage.doNotAcceptTermsAndConditions(app);
});
Then(/^I should see an Error Message$/, async () => {
    await homePage.verifyErrorMessageWhenTermsAreNotAccepted(app);
});