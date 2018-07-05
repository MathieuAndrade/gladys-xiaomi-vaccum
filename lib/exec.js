var shared = require('./shared.js')
var Promise = require('bluebird');

module.exports = function exec(params){
    var device = shared.device

    if(!device) return Promise.reject('Xiaomi vaccum: Device not connected !')

    if(params.state.value == 1 && params.deviceType.deviceTypeIdentifier == 'clean'){

        return device.clean()
            .then(() => {
                sails.log.info('Xiaomi vaccum: Start cleaning session')
                return Promise.resolve()
            })
            .catch((e) => {
                sails.log.error(`Xiaomi vaccum: Error : ${e}`)
                return Promise.reject()
            })

    }else if(params.state.value == 0 && params.deviceType.deviceTypeIdentifier == 'clean'){

        return device.activateCharging()
            .then(() => {
                sails.log.info('Xiaomi vaccum: Start charging')
                return Promise.resolve()
            })
            .catch((e) => {
                sails.log.error(`Xiaomi vaccum: Error : ${e}`)
                return Promise.reject()
            })

    }else if(params.state.value == 1 && params.deviceType.deviceTypeIdentifier == 'find'){

        return device.find()
            .then(() => {
                sails.log.info('Xiaomi vaccum: Finded !')
                return Promise.resolve()
            })
            .catch((e) => {
                sails.log.error(`Xiaomi vaccum: Error : ${e}`)
                return Promise.reject()
            })

    }
    
}