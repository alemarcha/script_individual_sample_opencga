'use strict';

var fs = require('fs');
var ClientApi = require('./methods.js');
const args = require('yargs').argv;

console.log("SID: " + args.sid)
console.log('Study: ' + args.study);
console.log('Json individual: ' + args.individual);  

let sidToken = args.sid;

let individualPathJSON = args.individual;
let newFile = fs.readFileSync(individualPathJSON);
var jsonIndividual = JSON.parse(newFile);
//console.log(jsonSample);

let study = args.study;
//console.log(study);


//console.log(ClientApi.prueba({sid:sidToken}));
ClientApi.createIndividual({sid:sidToken, json: jsonIndividual, study: study});