module.exports = function (sails) {

  const install = require('./lib/install');
  const init = require('./lib/init');
  const setup = require('./lib/setup');
  const exec = require('./lib/exec');

  gladys.on('ready', () => {
    init();
  });

  return {
    install,
    init,
    setup,
    exec,
  };
};