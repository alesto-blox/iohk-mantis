const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const { Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const app = require('../support/baseApp.js').app

When(/^I click send button on main page$/, async ()=>{

});
Then(/^I expect to see sent transaction page$/, async ()=>{

});
When(/^I enter recipient address on send transaction page$/, async ()=>{

});
When(/^I enter amount to send and select fee on send transaction page$/, async ()=>{

});
When(/^I click send button on send transaction page$/, async ()=>{

});
When(/^I enter my password on send transaction page$/, async ()=>{

});
When(/^I click confirm button on send transaction page$/, async ()=>{

});
Then(/^I expect to see that transaction on My transaction page$/, async ()=>{

});
When(/^I select recipient address from drop-down on send transaction page$/, async ()=>{

});
When(/^I click on advanced button on send transaction page$/, async ()=>{

});
When(/^I enter recipient address on send transaction page advanced tab$/, async ()=>{

});
When(/^I enter amount to send, gas limit and gas price on send transaction page$/, async ()=>{

});
When(/^I click send button on send transaction page advanced tab$/, async ()=>{

});
When(/^I enter my password on send transaction page advanced tab$/, async ()=>{

});
When(/^I click confirm button on send transaction page advanced tab$/, async ()=>{

});
When(/^I select recipient address from drop-down on send transaction page advanced tab$/, async ()=>{

});