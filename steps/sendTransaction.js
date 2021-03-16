const {When, Then} = require('@cucumber/cucumber');
const sendPage = require('../pages/SendTransactionsPage.js');
const app = require('../support/baseApp.js').app

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
Then(/^I should see incorrect pass error$/, async ()=> {
    await sendPage.passErrorCheck(app);
});
Then(/^I should close send transaction window$/, async ()=> {
    await sendPage.closeSendTransaction(app);
});
Then(/^I should see pass not provided error$/, async ()=> {
    await sendPage.passNotProvided(app);
});
Then(/^I should see address not set error$/, async ()=> {
    await sendPage.addressNotSet(app);
});
Then(/^I should see invalid address error$/, async ()=> {
    await sendPage.invalidAddress(app);
});
Then(/^should see must be grater than zero error$/, async ()=> {
    await sendPage.graterThanZero(app);
});
Then(/^I choose a fee "([^"]*)"$/, async (fee)=> {
    await sendPage.chooseFee(app,fee);
});