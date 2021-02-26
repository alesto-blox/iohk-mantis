const Application = require('spectron').Application;
const APP_PATH = require('../config/appConfig.js').PATH[process.env.APP_PATH];
const APP_CONF = require('../config/appConfig.js');

const app = new Application({
    path: APP_PATH,
    startTimeout: APP_CONF.START_TIMEOUT
})

module.exports = {
    app
}