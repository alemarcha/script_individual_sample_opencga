'use strict';

var fs = require('fs');
var ClientApi = require('./methods.js');
const args = require('yargs').argv;

console.log('Host: ' + args.host);
console.log("SID: " + args.sid);

let hostApi = args.host;
let sidToken = args.sid;

ClientApi.init({host: hostApi})
ClientApi.ping({sid:sidToken});