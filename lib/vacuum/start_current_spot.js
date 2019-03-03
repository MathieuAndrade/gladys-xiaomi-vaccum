const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function startCurrentSpot() {

  return shared.device.activateSpotClean()
    .then(() => {
      sails.log.info('Xiaomi vacuum: Start on the current spot');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};