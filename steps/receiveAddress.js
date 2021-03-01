const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app

When(/^I click on receive button on main page on Mantis wallet$/, async ()=>{

});
Given(/^I am logged in Mantis wallet and I am on main page$/, async ()=>{

});
Then(/^I expect to see my address on Mantis wallet$/, async ()=>{

});