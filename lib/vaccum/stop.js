const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function stop() {

  return shared.device.deactivateCleaning()
    .then(() => {
      sails.log.info('Xiaomi vaccum: Stop cleaning');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};