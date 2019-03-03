const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function pause() {

  return shared.device.pause()
    .then(() => {
      sails.log.info('Xiaomi vacuum: Pause cleaning');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};