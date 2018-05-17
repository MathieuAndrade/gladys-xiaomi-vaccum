const miio = require('miio');
const config = require('../config.js');
const shared = require('./shared.js')

module.exports = function connect(){

    // Create a new device over the given address
    miio.device({
        address: config.address,
        token: config.token,
        model: config.model
    })
    .then(device => {
        sails.log.info('Connected to device');
        shared.device = device
        createDevice(device)
    })
    .catch(err => sails.log.error('Error occurred:', err));

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
            name: 'Start clean session',
            type: 'binary',
            identifier: 'start',
            sensor: false,
            min: 0,
            max: 1
        },
        {
            name: 'Stop clean session',
            type: 'binary',
            identifier: 'stop',
            sensor: false,
            min: 0,
            max: 1
        },
        {
            name: 'Pause clean session',
            type: 'binary',
            identifier: 'pause',
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