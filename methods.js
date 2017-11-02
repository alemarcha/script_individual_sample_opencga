var Client = require('node-rest-client').Client;
 

var client = new Client();
 
// direct way 


// registering remote methods 
client.registerMethod("pruebaInicial", "http://localhost:8080/opencga-1.3.0-dev/webservices/rest/v1/projects/search", "GET");
client.registerMethod("updateSampleMethod", "http://localhost:8080/opencga-1.3.0-dev/webservices/rest/v1/samples/${id}/update", "POST");
client.registerMethod("updateAnnotationSetMethod", "http://localhost:8080/opencga-1.3.0-dev/webservices/rest/v1/samples/${id}/annotationsets/create", "POST");
client.registerMethod("createIndividualMethod", "http://localhost:8080/opencga-1.3.0-dev/webservices/rest/v1/individuals/create", "POST");

exports.prueba = function (params){
	console.log("prueba");
	let args = {
		parameters: { sid: params.sid },
	}
	client.methods.pruebaInicial(args, function (data, response) {
	    // parsed response body as js object 
	    console.log(data);
	    // raw response 
	    console.log(response);
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
	    console.log(data);
	    // raw response 
	   // console.log(response);
	   	if(dataAnnotations){
			let argsAnnotation = {
				data: dataAnnotations,
				parameters: { study: params.study, sid: params.sid, variableSet: params.variableSetId},
				headers: {"Content-Type":"application/json"},
				path:{id: params.sample}
			}
	
			client.methods.updateAnnotationSetMethod(argsAnnotation, function (data, response) {
			    // parsed response body as js object 
			   	console.log("UPDATE ANNOTATION SETSSAMPLE FINISH");

			    console.log(data);
			    // raw response 
			   // console.log(response);
			});
		}
	});

}

exports.createIndividual = function (params){
	console.log("CREATE Individual");
	let dataIndividual =  Object.assign({},params.json);
	let args = {
			data: dataIndividual,
			parameters: { study: params.study, sid: params.sid},
			headers: {"Content-Type":"application/json"}
		}
	client.methods.createIndividualMethod(args, function (data, response) {
	    // parsed response body as js object 
	    console.log(data);
	    // raw response 
//	    console.log(response);
	});
}




