const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const helpers = require('../support/helpers.js');
const app = require('../support/baseApp.js').app
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');

Given(/^I open the Mantis wallet app$/, async () => {
    await helpers.timeout(5000);
    await app.start();
});

When(/^I choose the available Network "([^"]*)" in Mantis Wallet$/, async (network) => {
    await startPage.login(network, app);
});

Then(/^I should see that I am syncing or connecting to the selected Network "([^"]*)"$/, async (network) => {
    await homePage.isMantisStartedForTheSelectedNetwork(app,network);
});

Then(/^I should close the Mantis Wallet application$/, async ()=> {
    return await app.stop();
});

Then(/^I should reset Mantis Wallet config\.json$/, function () {
    helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH,APP_CONF.APP_CONF_PATH);
});
Then(/^I choose Sagano Network in Mantis Wallet$/, async () => {
    await startPage.login("Sagano Testnet", app);
});