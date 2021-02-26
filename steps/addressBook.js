const Application = require('spectron').Application;
const APP_PATH = require('../config/appConfig.js')[process.env.ENV].APP_PATH;
const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const helpers = require('../support/helpers.js');
const app = require('../support/baseApp.js').app

const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js')
const addressBook = require(('../pages/AddressBookPage.js'))

// const app = new Application({
//     path: APP_PATH,
//     startTimeout: APP_CONF.START_TIMEOUT
//   })

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
});
Then(/^I expect to see new contact in my address book$/, async () => {
    await addressBook.checkForNewContact(app)
});