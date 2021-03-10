const {When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const addressBook = require('../pages/AddressBookPage.js');
const loggedInPage = require('../pages/LoggedInPage')
const TD = require('../test_data/testData.json');

When(/^I click on address book button on main page$/, async () => {
    await loggedInPage.goToAddressBook(app)
});
Then(/^I expect to see address book page on Mantis wallet$/, async () => {
    await addressBook.checkIfYouAreOnAddressBookPage(app)
});
Then(/^I choose add new button$/, async () => {
    await addressBook.clickOnAddNewContact(app)
});
Then(/^I enter new contact address and label$/, async () => {
    await addressBook.addNewContactAddress(app, TD.Addresses.WalletAddress)
    await addressBook.addNewContactLabel(app, TD.Addresses.WalletName)
    await addressBook.clickSaveNewContact(app)
});
Then(/^I expect to see new contact in my address book$/, async () => {
    await addressBook.checkForNewContact(app, TD.Addresses.WalletName)
});
Then(/^I enter new contact with empty address and label$/, async () => {
    await addressBook.addNewContactAddress(app, TD.Addresses.EmptyWalletAddress)
    await addressBook.addNewContactLabel(app, TD.Addresses.WalletName)
});
Then(/^Save button should be non\-clickable$/, async () => {
    await addressBook.saveButtonIsNonClickable(app)
    await addressBook.closeAddNewContact(app)
});
Then(/^I enter new contact with address and empty label$/, async () => {
    await addressBook.addNewContactAddress(app, TD.Addresses.WalletAddress)
    await addressBook.addNewContactLabel(app, TD.Addresses.EmptyWalletName)
});
Then(/^I enter new contact with invalid address and label$/, async () => {
    await addressBook.addNewContactAddress(app, TD.Addresses.InvalidWalletAddress)
    await addressBook.addNewContactLabel(app, TD.Addresses.WalletName)
    await addressBook.clickSaveNewContact(app)
});
Then(/^I should see error message$/, async () => {
    await addressBook.saveInvalidContactErrorMessage(app)
    await addressBook.closeAddNewContact(app)
});
Then(/^I edit existing contact$/, async () => {
    await addressBook.clickEditContact(app)
    await addressBook.addNewContactLabel(app, TD.Addresses.EditedWalletName)
    await addressBook.clickSaveNewContact(app)
});
When(/^I expect to see edited contact$/, async () => {
    await addressBook.checkForNewContact(app, TD.Addresses.WalletName + TD.Addresses.EditedWalletName)
});
Then(/^I delete existing contact$/, async () => {
    await addressBook.deleteExistingContact(app)
});
When(/^I should have empty address book$/, async () => {
    await addressBook.checkIfAddressBookIsEmpty(app)
});