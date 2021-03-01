const { Given, When, Then } = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const addressBook = require(('../pages/AddressBookPage.js'))

When(/^I click on address book button on main page$/, async () => {
    await addressBook.goToAddressBook(app)
});
Then(/^I expect to see address book page on Mantis wallet$/, async () => {
    await addressBook.checkIfYouAreOnAddressBookPage(app)
});
Then(/^I choose add new button$/, async () => {
    await addressBook.clickOnAddNewContact(app)
});
Then(/^I enter new contact address and label$/, async () => {
    await addressBook.addNewContactAddress(app)
    await addressBook.addNewContactLabel(app)
    await addressBook.clickSaveNewContact(app)

});
Then(/^I expect to see new contact in my address book$/, async () => {
    await addressBook.checkForNewContact(app)
});