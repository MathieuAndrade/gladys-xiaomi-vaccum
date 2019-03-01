const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function changeFanSpeed(speed) {

  return shared.device.changeFanSpeed(speed)
    .then(() => {
      sails.log.info('Xiaomi vaccum: Fan speed changed !');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};