const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function changeFanSpeed(speed) {

  return shared.device.changeFanSpeed(speed)
    .then(() => {
      sails.log.info('Xiaomi vacuum: Fan speed changed');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};