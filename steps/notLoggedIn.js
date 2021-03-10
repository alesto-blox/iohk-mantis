const {Then} = require('@cucumber/cucumber');
const homePage = require('../pages/HomePage.js');
const logoutPage = require('../pages/LogoutPage')
const app = require('../support/baseApp.js').app

Then(/^AddressBook should be Unavailable$/, async () => {
    await homePage.addressBookIsUnavailable(app)
});
Then(/^I should see Create and Restore options$/, async () => {
    await homePage.checkIfCreateButtonIsDisplayed(app)
    await homePage.checkIfRestoreButtonIsDisplayed(app)
});
Then(/^Logout button should be disabled$/, async () => {
    await logoutPage.checkIfLogoutButtonIsDisabled(app)
});