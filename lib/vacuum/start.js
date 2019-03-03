const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function start() {

  return shared.device.activateCleaning()
    .then(() => {
      sails.log.info('Xiaomi vacuum: Start cleaning');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};