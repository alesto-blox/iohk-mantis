const {When, Then} = require('@cucumber/cucumber');
const myTransactionsPage = require('../pages/MyTransactionPage.js')
const loggedInPage = require('../pages/LoggedInPage')

When(/^I click on transactions button on main page$/, async () => {
    await loggedInPage.goToTransactions()
});
Then(/^I expect to see my transactions page$/, async () => {
    await myTransactionsPage.IsMyTransactionsDisplayed();
});