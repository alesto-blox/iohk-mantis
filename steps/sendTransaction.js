const {When, Then} = require('@cucumber/cucumber');
const sendPage = require('../pages/SendTransactionsPage.js');
const TD = require('../test_data/testData.json');
const app = require('../support/baseApp.js').app

When(/^I click send button on main page$/, async () => {
    await sendPage.clickSendButton(app);
});
Then(/^I enter amount$/, async () => {
    await sendPage.enterAmountToSend(app,amount);
});
Then(/^I click send$/, async () => {
    await sendPage.sendTransaction(app);
});
Then(/^I enter receiving address "([^"]*)"$/, async (address)=> {
    await sendPage.enterReceivingAddress(app,address);
});