'use strict';

var fs = require('fs');
var ClientApi = require('./methods.js');
const args = require('yargs').argv;
//study=test%40reference_grch37%3A1kG_phase3

console.log("Host: " + args.host);
console.log("SID: " + args.sid)
console.log('Study: ' + args.study);
console.log('SampleID: ' + args.sampleid);
console.log('Json sample: ' + args.sample);

let hostApi = args.host;
let sidToken = args.sid;
//let filePath = "/home/amartinez/Proyectos/script_nodejs_create_sample_individual_opencga/data/sample.json";
let samplePathJSON = args.sample;
let newFile = fs.readFileSync(samplePathJSON);
var jsonSample = JSON.parse(newFile);
let study = args.study;
let sampleID = args.sampleid;
let variableSetId = args.variablesetid;
ClientApi.init({ host:hostApi })

ClientApi.updateSample({sid:sidToken, sample: sampleID, json: jsonSample, study: study, variableSetId: variableSetId, host: host});