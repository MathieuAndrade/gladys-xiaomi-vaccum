const vacuum = {
  start: require('./start'),
  stop: require('./stop'),
  pause: require('./pause'),
  find: require('./find'),
  startCurrentSpot: require('./start_current_spot'),
  changeFanSpeed: require('./change_fan_speed'),
  loadProperties: require('./load_properties'),
};

module.exports = vacuum;