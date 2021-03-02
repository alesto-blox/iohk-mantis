const {Then} = require('@cucumber/cucumber');
const homePage = require('../pages/HomePage.js');
const restorePage = require('../pages/RestorePage.js');
const app = require('../support/baseApp.js').app

Then(/^I choose Restore wallet button$/, async ()=> {
    await homePage.clickRestoreWalletButton(app);
});
Then(/^I enter wallet name, private key and passwords$/, async ()=> {
    await restorePage.enterRestoreDetails(app);
});
Then(/^I enter wallet name, recovery phrase and passwords$/, async ()=> {
    // TODO implement step
});