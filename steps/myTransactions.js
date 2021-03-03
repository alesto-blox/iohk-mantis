const { When, Then} = require('@cucumber/cucumber');
const myTransactionsPage = require('../pages/MyTransactionPage.js')
const app = require('../support/baseApp.js').app

When(/^I click on transactions button on main page$/, async ()=>{
    // TODO implement step
});
Then(/^I expect to see my transactions page$/, async ()=>{
    await myTransactionsPage.IsMyTransactionsDisplayed(app);
});