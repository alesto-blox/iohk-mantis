const { When, Then} = require('@cucumber/cucumber');
const app = require('../support/baseApp.js').app
const receiveAddressPage = require('../pages/ReceiveTransactionPage.js')
const loggedInPage = require('../pages/LoggedInPage.js')

When(/^I click on receive button on main page on Mantis wallet$/, async ()=>{
    await loggedInPage.goToReceiveAddress(app)
});

Then(/^I expect to see my address on Mantis wallet$/, async ()=>{
    await receiveAddressPage.checkIfYouAreOnReceiveAddressPage(app)
});