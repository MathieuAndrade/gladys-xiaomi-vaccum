const miio = require('miio');
const shared = require('./shared.js');
const vaccum = require('./vaccum/index');

module.exports = function connect() {

  miio.device({
    address: shared.xiaomiVaccumAddressValueParam,
    token: shared.xiaomiVaccumTokenValueParam,
  }).then((device) => {
    sails.log.info('Xiaomi vaccum: Connected to vaccum');
    shared.device = device;
    vaccum.loadProperties();
  }).catch((err) => {
    sails.log.error('Xiaomi vaccum: Error occurred:', err);
  });

};