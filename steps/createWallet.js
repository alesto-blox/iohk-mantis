const { When, Then} = require('@cucumber/cucumber');
const createPage = require('../pages/CreatePage.js');
const homePage = require('../pages/HomePage.js');
const TD = require('../test_data/testData.json');
const app = require('../support/baseApp.js').app
let recoveryPhrase = "";

When(/^I choose Create wallet button$/, async ()=>{
    await homePage.createWallet(app);
});
Then(/^I enter wallet name and passwords$/, async ()=>{
    await createPage.enterWalletNameAndPasswords(app);
});
Then(/^I confirm that private key is there$/, async ()=>{
    TD.CreateWallet.PVK = await createPage.getPrivateKey(app);
});
Then(/^I remember recovery phrase$/, async ()=>{
    recoveryPhrase = await createPage.getRecoveryPhrase(app);
});
Then(/^I re input recovery phrase$/, async ()=>{
    await createPage.reInputRecoveryPhrase(app,recoveryPhrase)
});
Then(/^I should see an Error (.*)$/, async (message)=> {
    await createPage.validateErrorMessages(app,message);
});
Then(/^I enter wallet "([^"]*)" and passwords$/, async (name)=> {
    await createPage.enterWalletNameAndPassword(app,name);
});
Then(/^I should see a wallet name Error "([^"]*)"$/, async (message)=> {
    await createPage.validateWalletNameErrorMessages(app,message);
});
Then(/^I enter wallet name and "([^"]*)" and "([^"]*)"$/, async (pass,confirmPass)=> {
     await createPage.enterWalletNameAndPasswordValidations(app,pass,confirmPass);
});