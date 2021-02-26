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

When(/^I choose Create wallet button$/, function () {

});
Then(/^I enter wallet name and passwords$/, function () {

});
Then(/^I confirm that private key is there$/, function () {

});
Then(/^I remember recovery phrase$/, function () {

});
Then(/^I re input recovery phrase$/, function () {

});
Then(/^I expect to see main page$/, function () {

});