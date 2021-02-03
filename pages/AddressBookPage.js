//

class AddressBookPage {

    get myAddressBookText() { return ('//div[@class="main-title"]') }
    get firstContactText() { return ('//div[@class="row"][1]/span[@class="label"]')}
    get firstContactAddress() { return ('//div[@class="row"][1]/span[@class="address"]')}
    get firstContactRecicleBin() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="delete"]')}  
    get firstContactEdit() { return ('//div[@class="row"][1]/span[@class="actions"]/span[@class="edit"]')}  
    get firstContactCopy() { return ('//div[@class="row"][1]/span[@class="address"]/span')}
    get addNewButton() { return ('//div[@class="main-buttons"]/button')}
    get newContactText() { return ('//div[@class="title" and contains(text(),"New Contact") ]')}
    get addressText() { return ('//label[contains(text(),"Address")]')}
    get addressField() { return ('//label[contains(text(),"Address")]/..//input')}
    get labelText() { return ('//label[contains(text(),"Label")]')}
    get labelField() { return ('//label[contains(text(),"Label")]/..//input')}
    get saveContactButton() { return ('//span[contains(text(),"Save Contact")]')}
    get cancelButton() { return ('//span[contains(text(),"Cancel")]')}
    //Find selector for x for closing popup
    get cancelModalX() { return ('')}

}

module.exports = new AddressBookPage()