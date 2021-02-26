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

Then(/^I choose Restore wallet button$/, function () {

});
Then(/^I enter wallet name, private key and passwords$/, function () {

});
Then(/^I enter wallet name, recovery phrase and passwords$/, function () {

});