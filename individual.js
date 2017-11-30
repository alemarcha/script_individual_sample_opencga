'use strict';

var fs = require('fs');
var ClientApi = require('./methods.js');
const args = require('yargs').argv;

console.log('Host: ' + args.host);
console.log("SID: " + args.sid)
console.log('Study: ' + args.study);
console.log('Json individual: ' + args.individual);  

let hostApi = args.host;
let sidToken = args.sid;
let individualPathJSON = args.individual;
let newFile = fs.readFileSync(individualPathJSON);
var jsonIndividual = JSON.parse(newFile);
let study = args.study;
ClientApi.init({ host: hostApi })
//console.log(ClientApi.prueba({sid:sidToken}));
ClientApi.createIndividual({sid:sidToken, json: jsonIndividual, study: study});