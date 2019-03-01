const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function activateCharging() {

  return shared.device.activateCharging()
    .then(() => {
      sails.log.info('Xiaomi vaccum: Start charging');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};