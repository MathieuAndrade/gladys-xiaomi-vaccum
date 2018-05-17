const shared = require('./shared.js')
const Promise = require('bluebird');
const device = shared.device

module.exports = function exec(params){

    if(!device) return Promise.reject('Device not connected !')

    if(params.state.value = 1){
        switch(params.deviceType.identifier){
            case 'start':
                device.clean()
                break;
            case 'stop':
                device.deactivateCleaning()
                break;
            case 'pause':
                device.pause()
                break;
            case 'find':
                device.find()
                break;
        }
    }
    
    return Promise.resolve()
}