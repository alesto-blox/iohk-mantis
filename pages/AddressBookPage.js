//Address Book Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const TD = require('../test_data/testData.json');

class AddressBookPage {

    get myAddressBookText() { return ('//div[@class="main-title"]')}
    get firstContactText() { return ('//div[@class="row"][1]/span[@class="label"]')}
    get firstContactAddress() { return ('//div[@class="row"][1]/span[@class="address"]')}
    get firstContactRecycleBin() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="delete"]')}
    get firstContactEdit() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="edit"]')}  
    get firstContactCopy() { return ('//div[@class="row"][1]/span[@class="address"]/span')}
    get deleteContact() { return ('//span[@class="delete"]')}
    get deleteContactText() { return ('//div[text()="Delete Contact"]')}
    get areYouSureDeleteContactText() {return ('//p[contains(text(),"Are you sure")]')}
    get deleteButtonOnPopup() { return ('//span[text()="Delete"]')}
    get noSavedContactText() { return ('//div[text()="No saved contacts"]')}
    get editContact() { return ('//span[@class="edit"]')}
    get addNewButton() { return ('//button[text()="Add new"]')}
    get newContactText() { return ('//div[@class="title" and contains(text(),"New Contact") ]')}
    get addressText() { return ('//label[contains(text(),"Address")]')}
    get addressField() { return ('//input[@id="contact-address"]')}
    get labelText() { return ('//label[contains(text(),"Label")]')}
    get labelField() { return ('//input[@id="contact-label"]')}
    get saveContactButton() { return ('//span[contains(text(),"Save Contact")]/..')}
    get cancelButton() { return ('//span[contains(text(),"Cancel")]')}
    get addressMustBeSetText() { return ('//div[@class="ant-form-item-explain"]')}
    get labelMustBeSetText() { return ('//div[text()="Label must be set"]')}
    get errorMessage() { return ('//*[@class="DialogError"]')}
    // TODO Find selector for x for closing popup
    get cancelModalX() { return ('//button[@class="ant-modal-close"]')}

    async checkIfYouAreOnAddressBookPage(app) {
        expect(await app.client
            .waitForVisible(this.myAddressBookText, WAIT)
            .getText(this.myAddressBookText)
        )
            .to.equal('My contacts')
    }

    async clickOnAddNewContact(app) {
        await app.client
            .waitForEnabled(this.addNewButton, WAIT)
            .click(this.addNewButton)
    }

    async addNewContactAddress(app, address){
        await app.client
            .waitForEnabled(this.addressField,WAIT)
            .setValue(this.addressField,address)
    }

    async addNewContactLabel(app, label){
        await app.client
            .waitForEnabled(this.labelField, WAIT)
            .setValue(this.labelField,label)
    }

    async clickSaveNewContact(app){
        await app.client
            .waitForEnabled(this.saveContactButton, WAIT)
            .click(this.saveContactButton)
    }

    async checkForNewContact(app, label) {
        await this.checkForContactLabel(app, label)
        await this.checkForContactAddress(app)
    }

    async checkForContactLabel(app, label){
        expect(await app.client
            .waitForVisible(this.firstContactText,WAIT)
            .getText(this.firstContactText)
        )
            .to.equal(label)
    }

    async checkForContactAddress(app){
        expect(await  app.client
            .waitForVisible(this.firstContactAddress,WAIT)
            .getText(this.firstContactAddress)
        )
            .to.equal(TD.Addresses.WalletAddress)
    }

    async saveButtonIsNonClickable(app) {
        expect(await app.client.getHTML(this.saveContactButton))
            .to.include('disabled')
    }

    async closeAddNewContact(app) {
        await app.client
            .waitForVisible(this.cancelModalX,WAIT)
            .click(this.cancelModalX)
    }

    async saveInvalidContactErrorMessage(app) {
        await this.someFieldsError(app)
        await this.invalidAddressError(app)

    }

    async someFieldsError(app){
        expect(await app.client
            .waitForVisible(this.errorMessage, WAIT)
            .getText(this.errorMessage))
            .to.equal(TD.Addresses.NewContactError)
    }

    async invalidAddressError(app){
        expect(await app.client
            .waitForVisible(this.addressMustBeSetText, WAIT)
            .getText(this.addressMustBeSetText))
            .to.equal(TD.Addresses.InvalidAddressError)
    }

    async clickEditContact(app) {
        await app.client
            .waitForVisible(this.editContact,WAIT)
            .click(this.editContact)
    }

    async deleteExistingContact(app) {
        await this.clickDeleteContact(app)
        await this.checkDeleteContactText(app)
        await this.checkAreYouSureText(app)
        await this.clickDeleteButtonOnPopup(app)
    }

    async clickDeleteContact(app){
        await app.client
            .waitForVisible(this.deleteContact,WAIT)
            .click(this.deleteContact)
    }

    async checkDeleteContactText(app){
        expect(await app.client
            .waitForVisible(this.deleteContactText,WAIT)
            .getText(this.deleteContactText)
        )
            .to.equal(TD.Addresses.DeleteContactText)
    }

    async checkAreYouSureText(app){
        expect(await app.client
            .waitForVisible(this.areYouSureDeleteContactText,WAIT)
            .getText(this.areYouSureDeleteContactText)
        )
            .to.equal(TD.Addresses.AreYouSureText)
    }

    async clickDeleteButtonOnPopup(app){
        await app.client
            .waitForVisible(this.deleteButtonOnPopup,WAIT)
            .click(this.deleteButtonOnPopup)
    }

    async checkIfAddressBookIsEmpty(app) {
        expect(await app.client
            .waitForVisible(this.noSavedContactText,WAIT)
            .getText(this.noSavedContactText)
        )
            .to.equal(TD.Addresses.NoSavedContactText)
    }
}

module.exports = new AddressBookPage()