
module.exports = function (sails) {

    const connect = require('./lib/connect');
    const exec = require('./lib/exec');

    gladys.on('ready', function(){
        connect();
    });
      
    return {
        connect,
        exec,
    };
};