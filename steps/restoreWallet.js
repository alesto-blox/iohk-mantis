const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
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

});