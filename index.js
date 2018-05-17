
module.exports = function (sails) {

    const connect = require('./lib/xiaomi.vaccum.connect');
    const exec = require('./lib/xiaomi.vaccum.exec');

    gladys.on('ready', function(){
        connect();
    });
      
    return {
        connect,
        exec,
    };
};