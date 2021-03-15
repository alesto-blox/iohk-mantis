const {When, Then} = require('@cucumber/cucumber');
const sendPage = require('../pages/SendTransactionsPage.js');
const TD = require('../test_data/testData.json');
const app = require('../support/baseApp.js').app

When(/^I click send button on main page$/, async () => {
    await sendPage.clickSendButton(app);
});
Then(/^I click send$/, async () => {
    await sendPage.sendTransaction(app);
});
Then(/^I enter receiving address "([^"]*)"$/, async (address)=> {
    await sendPage.enterReceivingAddress(app,address);
});
Then(/^I enter amount to send "([^"]*)"$/, async (amount)=>  {
    await sendPage.enterAmountToSend(app,amount);
});
Then(/^I enter password "([^"]*)"$/, async (pass)=> {
    await sendPage.enterPassword(app,pass);
});
Then(/^I confirm transaction$/, async ()=> {
    await sendPage.confirmTransaction(app);
});