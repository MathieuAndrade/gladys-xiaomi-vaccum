var miio = require('miio');
var shared = require('./shared.js')

module.exports = function connect(){

    miio.device({
        address: shared.xiaomiVaccumAddressValueParam,
        token: shared.xiaomiVaccumTokenValueParam,
    }).then((device) => {
        sails.log.error('Xiaomi vaccum: Connected to vaccum');
        shared.device = device
    }).catch((err) => {
        sails.log.error('Xiaomi vaccum: Error occurred:', err)
    });

}