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

}

module.exports = new BasePage();
