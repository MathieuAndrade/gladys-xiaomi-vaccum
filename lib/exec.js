const shared = require("./shared");
const Promise = require("bluebird");
const vacuum = require("./vacuum/index");

module.exports = function exec(params) {
  if (!shared.device) {
    return Promise.reject("Xiaomi vacuum: Device not connected");
  }

  switch (params.deviceType.deviceTypeIdentifier) {
    case "start":
      vacuum.start();
      break;
    case "stop":
      vacuum.stop();
      break;
    case "pause":
      vacuum.pause();
      break;
    case "find":
      vacuum.find();
      break;
    case "start_current_spot":
      vacuum.startCurrentSpot();
      break;
    case "fan_speed":
      vacuum.changeFanSpeed(params.state.value);
      break;
  }
};