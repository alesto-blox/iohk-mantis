const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app

When(/^I choose Create wallet button$/, async ()=>{

});
Then(/^I enter wallet name and passwords$/, async ()=>{

});
Then(/^I confirm that private key is there$/, async ()=>{

});
Then(/^I remember recovery phrase$/, async ()=>{

});
Then(/^I re input recovery phrase$/, async ()=>{

});