const shared = require('../shared');
const Promise = require('bluebird');
const connect = require('../connect');

module.exports = function loadProperties() {

  if (!shared.device) {
    connect();
  } else {
    return getProperties();
  }

};

function getProperties() {
  return shared.device.loadProperties(shared.usefulProperties)
    .then((data) => {

      data.mainBrushWorkTime = getPercentage(shared.careTime.mainBrush, data.mainBrushWorkTime);
      data.sideBrushWorkTime = getPercentage(shared.careTime.sideBrush, data.sideBrushWorkTime);
      data.filterWorkTime = getPercentage(shared.careTime.filter, data.filterWorkTime);
      data.sensorDirtyTime = getPercentage(shared.careTime.sensors, data.sensorDirtyTime);

      return saveState(data);
    })
    .then(() => {
      sails.log.info('Xiaomi vacuum: Properties updated');
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });
}

function saveState(data) {

  return gladys.deviceState.createByDeviceTypeIdentifier('battery', 'xiaomi-vacuum', {
      value: data.batteryLevel
    })
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('fan_speed', 'xiaomi-vacuum', {
        value: data.fanSpeed
      });
    })
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('filter', 'xiaomi-vacuum', {
        value: data.filterWorkTime
      });
    })
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('main_brush', 'xiaomi-vacuum', {
        value: data.mainBrushWorkTime
      });
    })
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('side_brush', 'xiaomi-vacuum', {
        value: data.sideBrushWorkTime
      });
    })
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('sensors', 'xiaomi-vacuum', {
        value: data.sensorDirtyTime
      });
    })
    .then(() => {
      return Promise.resolve();
    })
    .catch((err) => {
      sails.log.error(`Xiaomi vacuum: Error : ${err}`);
      return Promise.reject();
    });

}

function getPercentage(careTime, usedTime) {
  let decreaseTime = careTime - usedTime;
  return Math.round((decreaseTime / careTime) * 100);
}