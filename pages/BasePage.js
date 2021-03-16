
const app = require('../support/baseApp.js').app
const WAIT = require('../config/appConfig.js').WAIT;
const expect = require('chai').expect;
const helpers = require('../support/helpers.js');

class BasePage {

    async click(element){
        await app.client
            .waitForVisible(element, WAIT)
            .click(element);
    }

    async getText(element){
        return app.client
            .waitForVisible(element, WAIT)
            .getText(element)
    }

    async typeText(element, text){
        await app.client
            .waitForVisible(element, WAIT)
            .setValue(element, text);
    }

    async getHTML(element){
        return  app.client
            .waitForVisible(element, WAIT)
            .getHTML(element)
    }

    async getAttributeClass(element){
        return app.client
            .waitForVisible(element, WAIT)
            .getAttribute(element,'class')
    }

    async getValue(element){
        return app.client
            .waitForVisible(element, WAIT)
            .getValue(element)
    }

}

module.exports = new BasePage();