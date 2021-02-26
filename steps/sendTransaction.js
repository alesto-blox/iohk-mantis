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

When(/^I click send button on main page$/, function () {

});
Then(/^I expect to see sent transaction page$/, function () {

});
When(/^I enter recipient address on send transaction page$/, function () {

});
When(/^I enter amount to send and select fee on send transaction page$/, function () {

});
When(/^I click send button on send transaction page$/, function () {

});
When(/^I enter my password on send transaction page$/, function () {

});
When(/^I click confirm button on send transaction page$/, function () {

});
Then(/^I expect to see that transaction on My transaction page$/, function () {

});
When(/^I select recipient address from drop-down on send transaction page$/, function () {

});
When(/^I click on advanced button on send transaction page$/, function () {

});
When(/^I enter recipient address on send transaction page advanced tab$/, function () {

});
When(/^I enter amount to send, gas limit and gas price on send transaction page$/, function () {

});
When(/^I click send button on send transaction page advanced tab$/, function () {

});
When(/^I enter my password on send transaction page advanced tab$/, function () {

});
When(/^I click confirm button on send transaction page advanced tab$/, function () {

});
When(/^I select recipient address from drop-down on send transaction page advanced tab$/, function () {

});