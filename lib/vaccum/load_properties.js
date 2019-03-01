const shared = require('../shared');
const Promise = require('bluebird');
const connect = require('../connect');

module.exports = function loadProperties() {

  setInterval(() => {

    if (!shared.device) {
      connect();
    } else {
      shared.device.loadProperties()
        .then((data) => {
          console.log(data);
          sails.log.info('Xiaomi vaccum: Properties loaded !');
          return Promise.resolve();
        })
        .catch((e) => {
          sails.log.error(`Xiaomi vaccum: Error : ${e}`);
          return Promise.reject();
        });
    }

  }, 1000 * 60 * 60);

};