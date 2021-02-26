const Application = require('spectron').Application;
const APP_PATH = require('../config/appConfig.js')[process.env.ENV].APP_PATH;
const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
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

Then(/^I should be able to accept Terms and conditions$/, async () => {
    await homePage.verifyTermsAndConditions(app);
    await homePage.acceptTermsAndConditions(app);
});

Then(/^I should see Create new Wallet and Restore Wallet options$/, async ()=> {
    await homePage.verifyWalletOptionsAreDisplayed(app);
});

When(/^I do not accept Terms and conditions$/, async ()=> {
    await homePage.verifyTermsAndConditions(app);
    await homePage.doNotAcceptTermsAndConditions(app);
});

Then(/^I should see an Error Message$/, async ()=> {
    await homePage.verifyErrorMessageWhenTermsAreNotAccepted(app);
});