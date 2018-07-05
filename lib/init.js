const Promise = require('bluebird')
const shared = require('./shared.js')
const connect = require('./connect.js')

module.exports = function init(){

    return getParam(shared.xiaomiVaccumAddressNameParam)
        .then((value) => {
            shared.xiaomiVaccumAddressValueParam = value
            return getParam(shared.xiaomiVaccumTokenNameParam)
        })
        .then((value) => {
            shared.xiaomiVaccumTokenValueParam = value
        })
        .then(() => {
            connect()
            return Promise.resolve()
        })

}

function getParam(name){
    return gladys.param.getValue(name)
        .then((value) => {
            return Promise.resolve(value)
        })
        .catch((err) => {
            sails.log.error(`Xiaomi vaccum: Error when getting the param : ${err}`)
            return Promise.reject()
        })
}