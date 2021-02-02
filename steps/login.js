const Application = require('spectron').Application;
const APP_PATH = require('../config/appConfig.js').PATH[process.env.APP_PATH];
const APP_CONF = require('../config/appConfig.js');
const { Given, When, Then, And } = require('@cucumber/cucumber');
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

Then(/^I should see the Mantis Wallet Main page$/, async () => {
    //TODO add some expects here
    return await app.stop();
});

Then(/^I should be able to accept Terms and conditions$/, async () => {
    expect(await homePage.verifyTermsAndConditions(app)).to.equal(true);
    await homePage.acceptTermsAndConditions(app);
});

Then(/^I should see Create new Wallet and Restore Wallet options$/, async ()=> {
    expect(await homePage.verifyWalletOptionsAreDisplayed(app)).to.equal(true);
});

When(/^I do not accept Terms and conditions$/, async ()=> {
    await homePage.verifyTermsAndConditions(app,expect);
    await homePage.doNotAcceptTermsAndConditions(app);
});

Then(/^I should see an Error Message$/, async ()=> {
    expect(await homePage.verifyErrorMessageWhenTermsAreNotAccepted(app)).to.equal(true);
});