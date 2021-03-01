const APP_CONF = require('../config/appConfig.js');
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const createPage = require('../pages/CreatePage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app

When(/^I choose Create wallet button$/, async ()=>{
    await homePage.createWallet(app);
});
Then(/^I enter wallet name and passwords$/, async ()=>{
    await createPage.enterWalletNameAndPassword(app);
});
Then(/^I confirm that private key is there$/, async ()=>{
    const privateKey = await createPage.getPrivateKey(app);
    helpers.writeToFileAppended(APP_CONF.TEST_DATA.CreateWallet,privateKey);
});
Then(/^I remember recovery phrase$/, async ()=>{
    const recoveryPhrase = await createPage.getRecoveryPhrase(app);
    helpers.writeToFileAppended(APP_CONF.TEST_DATA.CreateWallet,recoveryPhrase);
});
Then(/^I re input recovery phrase$/, async ()=>{
    const phrase = await helpers.readFileToArray(APP_CONF.TEST_DATA.CreateWallet);
    await createPage.reInputRecoveryPhrase(app,phrase)
    await helpers.clearFileContent(APP_CONF.TEST_DATA.CreateWallet);
});