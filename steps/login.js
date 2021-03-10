const APP_CONF = require('../config/appConfig.js')[process.env.ENV];
const {Given, When, Then} = require('@cucumber/cucumber');
const helpers = require('../support/helpers.js');
const startPage = require('../pages/StartPage.js');
const homePage = require('../pages/HomePage.js');
const statusPage = require('../pages/StatusPage.js');
const restorePage = require('../pages/RestorePage.js');
const app = require('../support/baseApp.js').app;

Given(/^I open the Mantis wallet app$/, async () => {
    await helpers.timeout(5000);
    await app.start();
});
When(/^I choose the available Network "([^"]*)" in Mantis Wallet$/, async (network) => {
    await startPage.login(network, app);
});
Then(/^I should see that I am syncing or connecting to the selected Network "([^"]*)"$/, async (network) => {
    await homePage.isMantisStartedForTheSelectedNetwork(app, network);
});
Then(/^I should close the Mantis Wallet application$/, async () => {
    await app.stop();
});
Then(/^I choose Sagano Network in Mantis Wallet$/, async () => {
    await startPage.login("Sagano Testnet", app);
});
Given(/^I reset Mantis Wallet config\.json$/, async () => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
});
Then(/^I can see details of system$/, async () => {
    await startPage.clickOnShowDetails(app)
    await statusPage.checkIfYouAreOnStatusPage(app)
    await statusPage.closeStatusPage(app)
});
Given(/^I restore Mantis Wallet on "([^"]*)"$/, async (network) => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
    await helpers.timeout(5000);
    await app.start();
    await startPage.login(network, app);
    await homePage.acceptTermsAndConditions(app);
    await homePage.clickRestoreWalletButton(app);
    await restorePage.enterRestoreDetails(app);
});
Then(/^I close Mantis Wallet$/, async () => {
    await app.stop();
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
});
Given(/^I start creation of a wallet on "([^"]*)"$/, async (network) => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
    await helpers.timeout(5000);
    await app.start();
    await startPage.login(network, app);
    await homePage.acceptTermsAndConditions(app);
    await homePage.createWallet(app);
});
Given(/^I start Mantis Wallet on "([^"]*)" and accept terms and conditions$/, async (network) => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
    await helpers.timeout(5000);
    await app.start();
    await startPage.login(network, app);
    await homePage.acceptTermsAndConditions(app);
});
Given(/^I start restoring a wallet on "([^"]*)"$/, async (network) => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
    await helpers.timeout(5000);
    await app.start();
    await startPage.login(network, app);
    await homePage.acceptTermsAndConditions(app);
    await homePage.clickRestoreWalletButton(app);
});
Given(/^I start Mantis wallet on "([^"]*)"$/, async (network) => {
    await helpers.resetMantisConfig(APP_CONF.TEST_CONF_PATH, APP_CONF.APP_CONF_PATH);
    await helpers.timeout(5000);
    await app.start();
    await startPage.login(network, app);
    await homePage.isMantisStartedForTheSelectedNetwork(app, network);
});