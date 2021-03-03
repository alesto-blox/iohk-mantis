const { When, Then} = require('@cucumber/cucumber');
const createPage = require('../pages/CreatePage.js');
const homePage = require('../pages/HomePage.js');
const TD = require('../test_data/testData.json');
const app = require('../support/baseApp.js').app

When(/^I choose Create wallet button$/, async ()=>{
    await homePage.createWallet(app);
});
Then(/^I enter wallet name and passwords$/, async ()=>{
    await createPage.enterWalletNameAndPassword(app);
});
Then(/^I confirm that private key is there$/, async ()=>{
    TD.CreateWallet.PVK = await createPage.getPrivateKey(app);
});
Then(/^I remember recovery phrase$/, async ()=>{
    const recoveryPhrase = await createPage.getRecoveryPhrase(app);
    for(let i =0; i<recoveryPhrase.length; i++){
        TD.CreateWallet.Phrases[i] = recoveryPhrase[i];
    }
});
Then(/^I re input recovery phrase$/, async ()=>{
    await createPage.reInputRecoveryPhrase(app,TD.CreateWallet.Phrases)
});