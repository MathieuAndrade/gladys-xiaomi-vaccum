const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function start() {

  return shared.device.activateCleaning()
    .then(() => {
      sails.log.info('Xiaomi vaccum: Start cleaning');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};