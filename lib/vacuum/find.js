const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function find() {

  return shared.device.find()
    .then(() => {
      sails.log.info('Xiaomi vacuum: Finded');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
};