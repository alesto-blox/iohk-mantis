const {When, Then} = require('@cucumber/cucumber');
const sendPage = require('../pages/SendTransactionsPage.js');

When(/^I click send button on main page$/, async () => {
    await sendPage.clickSendButton();
});
Then(/^I click send$/, async () => {
    await sendPage.sendTransaction();
});
Then(/^I enter receiving address "([^"]*)"$/, async (address)=> {
    await sendPage.enterReceivingAddress(address);
});
Then(/^I enter amount to send "([^"]*)"$/, async (amount)=>  {
    await sendPage.enterAmountToSend(amount);
});
Then(/^I enter password "([^"]*)"$/, async (pass)=> {
    await sendPage.enterPassword(pass);
});
Then(/^I confirm transaction$/, async ()=> {
    await sendPage.confirmTransaction();
});