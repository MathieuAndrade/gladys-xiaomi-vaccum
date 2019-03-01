const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function pause() {

  return shared.device.pause()
    .then(() => {
      sails.log.info('Xiaomi vaccum: Pause cleaning');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};