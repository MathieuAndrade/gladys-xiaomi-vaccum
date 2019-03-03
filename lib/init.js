const Promise = require("bluebird");
const shared = require("./shared");
const connect = require("./connect");

module.exports = function init() {
  return getParam(shared.vacuumAddress.name)
    .then(value => {
      shared.vacuumAddress.value = value;
      return getParam(shared.vacuumToken.name);
    })
    .then(value => {
      shared.vacuumToken.value = value;
    })
    .then(() => {
      connect();
      return Promise.resolve();
    });
};

function getParam(name) {
  return gladys.param
    .getValue(name)
    .then(value => {
      return Promise.resolve(value);
    })
    .catch(err => {
      sails.log.error(`Xiaomi vacuum: Error when getting the param : ${err}`);
      return Promise.reject();
    });
}