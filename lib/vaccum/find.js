const shared = require('../shared');
const Promise = require('bluebird');

module.exports = function find() {

  return shared.device.find()
    .then(() => {
      sails.log.info('Xiaomi vaccum: Finded !');
      return Promise.resolve();
    })
    .catch((e) => {
      sails.log.error(`Xiaomi vaccum: Error : ${e}`);
      return Promise.reject();
    });
};