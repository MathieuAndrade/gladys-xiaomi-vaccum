var shared = require('./shared.js')
var Promise = require('bluebird');

module.exports = function exec(params){
    var device = shared.device

    if(!device) return Promise.reject('Device not connected !')

    if(params.state.value == 1 && params.deviceType.deviceTypeIdentifier == 'clean'){
        device.clean()
    }else if(params.state.value == 0 && params.deviceType.deviceTypeIdentifier == 'clean'){
        device.activateCharging()
    }else if(params.state.value == 1 && params.deviceType.deviceTypeIdentifier == 'find'){
        device.find()
    }
    
    return Promise.resolve()
}