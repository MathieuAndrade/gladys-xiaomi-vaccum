const shared = require('./shared.js');
const Promise = require('bluebird');
const vaccum = require('./vaccum/index');

module.exports = function exec(params) {
  if (!shared.device) {
    return Promise.reject('Xiaomi vaccum: Device not connected !');
  };

  switch (params.deviceType.deviceTypeIdentifier) {
  case 'start':
    vaccum.start();
    break;
  case 'stop':
    vaccum.stop();
    break;
  case 'pause':
    vaccum.pause();
    break;
  case 'find':
    vaccum.find();
    break;
  case 'activate_charging':
    vaccum.activateCharging();
    break;
  case 'fan_speed':
    vaccum.changeFanSpeed(params.state.value);
    break;

  }
};