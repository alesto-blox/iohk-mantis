const Application = require('spectron').Application;
const APP_PATH = require('../config/appConfig.js').PATH[process.env.APP_PATH];
const APP_CONF = require('../config/appConfig.js');
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const helpers = require('../support/helpers.js');

const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');

const app = new Application({
    path: APP_PATH,
    startTimeout: APP_CONF.START_TIMEOUT
  })

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
    helpers.resetMantisConfig(APP_CONF.BASE_CONF,APP_CONF.CONF_PATH);
});