
module.exports = function (sails) {

    const install = require('./lib/install.js')
    const init = require('./lib/init')
    const setup = this.require('./setup.js')
    const exec = require('./lib/exec')

    gladys.on('ready', function(){
        init();
    });
      
    return {
        install,
        init,
        setup,
        exec,
    };
};