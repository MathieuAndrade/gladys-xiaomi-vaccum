var miio = require('miio');
var config = require('../config.js');
var shared = require('./shared.js')

module.exports = function connect(){

    miio.device({
        address: config.address,
        token: config.token,
        model: config.model
    }).then(device => {
        sails.log.error('Connected to device');
        shared.device = device
        createDevice()
    }).catch(err => sails.log.error('Error occurred:', err));

}

function createDevice() {
  
    var newDevice = {
        device: {
            name: `Xiaomi Vaccum`,
            protocol: `xiaomi-vaccum`,
            service: `xiaomi-vaccum`,
            identifier: config.address
        },
        types: [{
            name: 'Clean session',
            type: 'binary',
            identifier: 'clean',
            sensor: false,
            min: 0,
            max: 1
        },
        {
            name: 'Find vaccum',
            type: 'binary',
            identifier: 'find',
            sensor: false,
            min: 0,
            max: 1
        }]
    };
  
    gladys.device.create(newDevice)
}