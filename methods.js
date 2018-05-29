var Client = require('node-rest-client').Client;
 

var client = new Client();

// registering remote methods 

exports.init = function (params){
	let host = params.host;
	console.log("INIT WEBServices with: " + params.host);
	client.registerMethod("ping", host + "/webservices/rest/v1/projects/search", "GET");
	client.registerMethod("createSampleMethod", host + "/webservices/rest/v1/samples/create", "POST");
	client.registerMethod("updateSampleMethod", host + "/webservices/rest/v1/samples/${id}/update", "POST");
	client.registerMethod("updateAnnotationSetMethod", host + "/webservices/rest/v1/samples/${id}/annotationsets/create", "POST");
	client.registerMethod("createIndividualMethod", host + "/webservices/rest/v1/individuals/create", "POST");
}

// remote Methods
exports.ping = function (params){
	console.log("PING");
	let args = {
		parameters: { sid: params.sid },
	}
	client.methods.ping(args, function (data, response) {
	    // parsed response body as js object 
		if(Buffer.isBuffer(data)){
			data = data.toString('utf8');
		} else {
			data = JSON.stringify(data);
		}
		console.log(data);
	    // raw response 
	    //console.log(response);
	});
}

exports.createSampleMethod = function (params){
	console.log("UPDATE Sample");


	console.log(params.json.annotationSets);
	
	let dataAnnotations = Object.assign({},params.json.annotationSets);
	let dataSample =  Object.assign({},params.json, {annotationSets:undefined});
	console.log(dataSample);
	let argsSample = {
		data: dataSample,
		parameters: { study: params.study, sid: params.sid},
		headers: {"Content-Type":"application/json"},
		path:{id: params.sample}
	}

	
	//console.log(args);
	client.methods.updateSampleMethod(argsSample, function (data, response) {
	    // parsed response body as js object 
	    console.log("CREATE SAMPLE FINISH");
		if(Buffer.isBuffer(data)){
			data = data.toString('utf8');
		} else {
			data = JSON.stringify(data);
		}
		console.log(data);
	});

}

exports.updateSample = function (params){
	console.log("UPDATE Sample");


	console.log(params.json.annotationSets);
	
	let dataAnnotations = Object.assign({},params.json.annotationSets);
	let dataSample =  Object.assign({},params.json, {annotationSets:undefined});
	console.log(dataSample);
	let argsSample = {
		data: dataSample,
		parameters: { study: params.study, sid: params.sid},
		headers: {"Content-Type":"application/json"},
		path:{id: params.sample}
	}

	
	//console.log(args);
	client.methods.updateSampleMethod(argsSample, function (data, response) {
	    // parsed response body as js object 
		console.log("UPDATE SAMPLE FINISH");
		if(Buffer.isBuffer(data)){
			data = data.toString('utf8');
		} else {
			data = JSON.stringify(data);
		}
	    console.log(data);
	    // raw response 
	   // console.log(response);
	   	if (dataAnnotations) {
			let argsAnnotation = {
				data: dataAnnotations,
				parameters: { study: params.study, sid: params.sid, variableSet: params.variableSetId},
				headers: {"Content-Type":"application/json"},
				path:{id: params.sample}
			}
	
			client.methods.updateAnnotationSetMethod(argsAnnotation, function (data, response) {
			    // parsed response body as js object 
			   	console.log("UPDATE ANNOTATION SETS FINISH");
				if(Buffer.isBuffer(data)){
					data = data.toString('utf8');
				} else {
					data = JSON.stringify(data);
				}
	    		console.log(data);
			    // raw response 
			   // console.log(response);
			});
		}
	});

}

exports.createIndividual = function (params){
	console.log("CREATE Individual");
	console.log("")
	let dataIndividual =  Object.assign({},params.json);
	let args = {
			data: dataIndividual,
			parameters: { study: params.study, sid: params.sid},
			headers: {"Content-Type":"application/json"}
		}

	client.methods.createIndividualMethod(args, function (data, response) {
	    // parsed response body as js object 
		if(Buffer.isBuffer(data)){
			data = data.toString('utf8');
		} else {
			data = JSON.stringify(data);
		}
		console.log(data);
	    // raw response 
	    // console.log(response);
	});
}




