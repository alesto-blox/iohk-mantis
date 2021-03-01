//Address Book Page
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const helpers = require('../support/helpers')

class AddressBookPage {

    get addressBookLink() {return ('//div[text()="Address book"]')}
    get myAddressBookText() { return ('//div[@class="main-title"]') }
    get firstContactText() { return ('//div[@class="row"][1]/span[@class="label"]')}
    get firstContactAddress() { return ('//div[@class="row"][1]/span[@class="address"]')}
    get firstContactRecicleBin() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="delete"]')}  
    get firstContactEdit() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="edit"]')}  
    get firstContactCopy() { return ('//div[@class="row"][1]/span[@class="address"]/span')}
    get addNewButton() { return ('//button[text()="Add new"]')}
    get newContactText() { return ('//div[@class="title" and contains(text(),"New Contact") ]')}
    get addressText() { return ('//label[contains(text(),"Address")]')}
    get addressField() { return ('//input[@id="contact-address"]')}
    get labelText() { return ('//label[contains(text(),"Label")]')}
    get labelField() { return ('//input[@id="contact-label"]')}
    get saveContactButton() { return ('//span[contains(text(),"Save Contact")]')}
    get cancelButton() { return ('//span[contains(text(),"Cancel")]')}
    //Find selector for x for closing popup
    get cancelModalX() { return ('')}

    async goToAddressBook(app) {
        await app.client
            .waitForVisible(this.addressBookLink,30000)
            .click(this.addressBookLink)
    }

    async checkIfYouAreOnAddressBookPage(app) {
        expect(await app.client
            .waitForVisible(this.myAddressBookText, 10000)
            .getText(this.myAddressBookText)
        )
            .to.equal('My contacts')
    }

    async clickOnAddNewContact(app) {
        await app.client
            .waitForEnabled(this.addNewButton, 10000)
            .click(this.addNewButton)
    }

    async addNewContactAddress(app){
        await app.client
            .waitForEnabled(this.addressField,10000)
            .setValue(this.addressField,"0xec49c61786376007494af082b02fac4adb4e4292")
    }

    async addNewContactLabel(app){
        await app.client
            .waitForEnabled(this.labelField, 10000)
            .setValue(this.labelField,"My address")
    }

    async clickSaveNewContact(app){
        await app.client
            .waitForEnabled(this.saveContactButton, 10000)
            .click(this.saveContactButton)
    }

    async checkForNewContact(app) {
        expect(await app.client
            .waitForVisible(this.firstContactText,10000)
            .getText(this.firstContactText)
        )
            .to.equal("My address")

        expect(await  app.client
            .waitForVisible(this.firstContactAddress,10000)
            .getText(this.firstContactAddress)
        )
            .to.equal("0xec49c61786376007494af082b02fac4adb4e4292")
    }
}

module.exports = new AddressBookPage()