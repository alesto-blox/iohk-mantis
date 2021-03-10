const {When, Then} = require('@cucumber/cucumber');
const createPage = require('../pages/CreatePage.js');
const homePage = require('../pages/HomePage.js');
const TD = require('../test_data/testData.json');
const app = require('../support/baseApp.js').app
let recoveryPhrase = "";

When(/^I choose Create wallet button$/, async () => {
    await homePage.createWallet(app);
});
Then(/^I enter wallet name and passwords$/, async () => {
    await createPage.enterWalletNameAndPasswords(app);
});
Then(/^I confirm that private key is there$/, async () => {
    TD.CreateWallet.PVK = await createPage.getPrivateKey(app);
});
Then(/^I remember recovery phrase$/, async () => {
    recoveryPhrase = await createPage.getRecoveryPhrase(app);
});
Then(/^I re input recovery phrase$/, async () => {
    await createPage.reInputRecoveryPhrase(app, recoveryPhrase)
});
Then(/^I should see an Error (.*)$/, async (message) => {
    await createPage.validateErrorMessages(app, message);
});
Then(/^I enter wallet "([^"]*)" and passwords$/, async (name) => {
    await createPage.enterWalletNameAndPasswordNameValidations(app, name);
});
Then(/^I should see a wallet name Error "([^"]*)"$/, async (message) => {
    await createPage.validateWalletNameErrorMessages(app, message);
});
Then(/^I enter wallet name and "([^"]*)" and "([^"]*)"$/, async (pass, confirmPass) => {
    await createPage.enterWalletNameAndPasswordValidations(app, pass, confirmPass);
});
Then(/^I verify download button$/, async () => {
    await createPage.isDownloadButtonDisplayedAndClickable(app);
});
Then(/^I cancel creating wallet$/, async () => {
    await createPage.cancelWalletCreation(app);
});
Then(/^I click back$/, async () => {
    await createPage.clickBack(app);
});
Then(/^I re input recovery phrase without accepting Recovery conditions$/, async () => {
    await createPage.reInputRecoveryPhraseWithoutConditionsRecovery(app, recoveryPhrase);
});
Then(/^I re input recovery phrase without accepting Locally conditions$/, async () => {
    await createPage.reInputRecoveryPhraseWithoutConfirmationConditionsLocally(app, recoveryPhrase);
});
Then(/^I re input recovery phrase in wrong order$/, async () => {
    await createPage.reinputWordPhrasesIncorrectOrder(app, recoveryPhrase);
});
Then(/^I re input recovery phrase and I click back$/, async () => {
    await createPage.reinputWordPhrasesAndIClickBack(app, recoveryPhrase);
});
Then(/^I reinput recovery phrase and I clear text$/, async () => {
    await createPage.reinputWordPhrasesAndIClickClear(app, recoveryPhrase);
});
Then(/^I confirm that wallet cant be created without word phrases$/, async () => {
    await createPage.verifyFinishIsDisabled(app);
});