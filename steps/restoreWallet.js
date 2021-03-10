const {Then, When} = require('@cucumber/cucumber');
const homePage = require('../pages/HomePage.js');
const restorePage = require('../pages/RestorePage.js');
const app = require('../support/baseApp.js').app

When(/^I choose Restore wallet button$/, async ()=> {
    await homePage.clickRestoreWalletButton(app);
});
Then(/^I enter wallet name, private key and passwords$/, async ()=> {
    await restorePage.enterRestoreDetails(app);
});
Then(/^I enter wallet name, recovery phrase and passwords$/, async ()=> {
    await restorePage.enterRestorePhrasesDetails(app);
});
Then(/^I enter private key and passwords without the wallet name$/, async ()=> {
    await restorePage.enterRestorePhrasesDetailsWithoutWalletName(app);
});