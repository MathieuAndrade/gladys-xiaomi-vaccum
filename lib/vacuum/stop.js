const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function stop() {

  return shared.device.activateCharging()
    .then(() => {
      sails.log.info('Xiaomi vacuum: Stop cleaning');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};