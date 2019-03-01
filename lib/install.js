const Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function install() {

  return createDevice()
    .then(() => {
      const param = {
        name: shared.vaccumAddress.name,
        value: shared.vaccumAddress.value,
      };
      createParam(param);
    })
    .then(() => {
      const param = {
        name: shared.vaccumToken.name,
        value: shared.vaccumToken.value,
      };
      createParam(param);
    })
    .then(() => {
      sails.log.info('Xiaomi vaccum: Module installed with success !');
      return Promise.resolve();
    });

};

function createDevice() {

  const newDevice = {
    device: {
      name: `Xiaomi Vaccum`,
      protocol: `xiaomi-vaccum`,
      service: `xiaomi-vaccum`,
      identifier: `xiaomi-vaccum`
    },
    types: [{
      name: 'Start',
      type: 'push',
      identifier: 'clean',
      sensor: false,
      min: 1,
      max: 1
    },
    {
      name: 'Stop',
      type: 'push',
      identifier: 'stop',
      sensor: false,
      min: 1,
      max: 1
    },
    {
      name: 'Pause',
      type: 'push',
      identifier: 'pause',
      sensor: false,
      min: 1,
      max: 1
    },
    {
      name: 'Activate charging',
      type: 'push',
      identifier: 'activate_charging',
      sensor: false,
      min: 1,
      max: 1
    },
    {
      name: 'Find vaccum',
      type: 'push',
      identifier: 'find',
      sensor: false,
      min: 1,
      max: 1
    },
    {
      name: 'Fan speed',
      type: 'multilevel',
      identifier: 'fan_speed',
      sensor: false,
      min: 30,
      max: 80
    },
    {
      name: 'Battery level',
      type: 'multilevel',
      identifier: 'battery',
      sensor: true,
      min: 0,
      max: 100,
    }
    ]
  };

  return gladys.device.create(newDevice)
    .then(function() {
      sails.log.info('Xiaomi vaccum: Device created !');
      return Promise.resolve();
    })
    .catch(function(err) {
      sails.log.error(`Xiaomi vaccum: Error when creating device : ${err}`);
      return Promise.reject();
    });
}

function createParam(param) {

  return gladys.param.setValue(param)
    .then(() => {
      sails.log.info('Xiaomi vaccum: Param iserted !');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vaccum: Error when inserting param: ${err}`);
      return Promise.reject();
    });
}