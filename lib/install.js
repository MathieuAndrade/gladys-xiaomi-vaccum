const Promise = require('bluebird')
const shared = require('./shared.js')

module.exports = function install(){

	return createDevice()
		.then(() => {
			var param = {
				name: shared.xiaomiVaccumAddressNameParam,
				value: shared.xiaomiVaccumAddressValueParam,
		    }
			createParam(param)
		})
		.then(() => {
			var param = {
				name: shared.xiaomiVaccumTokenNameParam,
				value: shared.xiaomiVaccumTokenValueParam,
		    }
			createParam(param)
		})
		.then(() => {
			sails.log.info('Xiaomi vaccum: Module installed with success !')
			return Promise.resolve()
		})

};

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
  
    return gladys.device.create(newDevice)
		.then(function(){
			sails.log.info('Xiaomi vaccum: Device created !')
			return Promise.resolve()
		})
		.catch(function(err){
			sails.log.info(`Xiaomi vaccum: Error when creating device : ${err}`)
			return Promise.reject()
		});
}

function createParam(param){
   
   return gladys.param.setValue(param)
        .then(() => {
			sails.log.info('Xiaomi vaccum: Param iserted !')
            return Promise.resolve();
        })
        .catch((err) => {
            sails.log.error(`Xiaomi vaccum: Error when inserting param: ${err}`)
            return Promise.reject()
		})
}
