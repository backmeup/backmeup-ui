/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_RestClient = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		
		try {
			// load the webservice definitions
			$.each(plugin_RestClient.config.wsdFiles, function(path, loadFile) {
				if (loadFile) {
					var json = JsonLoader(path);
					// alert(JSON.stringify(json));
					$.each(json, function(name, values) {
						plugin_RestClient.config.webservices[name] = values;
					});
				}
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
	},

	definePluginEvents : function() {
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},

	functions : {
		addWebserviceDefinition : function(name, path, method, timeout, cachetime, local) {
			plugin_RestClient.config.webservices[name] = {
				"url" : path,
				"method" : method,
				"timeout" : timeout,
				"cachetime" : cachetime,
				"local" : local
			};
			return true;
		},
		getJson : function(service, parameter, async) {
			app.debug.alert("plugin_RestClient.functions.getJson(" + service + ", " + JSON.stringify(parameter) + ")", 20);
			// get multible json objects; async = false
			if (typeof service == "object" && (parameter == false || parameter == undefined)) {
				app.debug.alert("plugin_RestClient: Get multible json objects; async = false", 60);
				var jsonObject = {};
				$.each(service, function(key, call) {
					var serviceName = call[0], parameter = call[1];
					// get the path wich is defined in wsd file
					var path = plugin_RestClient.config.webservices[serviceName].url;
					// set async to false (in each case)
					async = false;
					// replace the parameters in path string
					if (parameter != undefined) {
						$.each(parameter, function(key, value) {
							path = path.replace('{' + key + '}', value);
						});
					}
					var data = path.split('?')[1];
					// if webservice has no parameter
					if (data == undefined)
						data = "";
					// URL of the webservice provider including the path to
					// webservice
					var pathX = path.split('?')[0];
					// ask for the json file
					var json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[serviceName].method, plugin_RestClient.config.webservices[serviceName].timeout, async, plugin_RestClient.config.webservices[serviceName].local);
					// add language wildcards wich could be defined in
					// webservice response
					if (plugin_MultilanguageIso639_3 != undefined) {
						if (json.language != undefined) {
							$.each(json.language, function(key, value) {
								app.lang.addParameter(key, value);
							});
						}
					}
					jsonObject[serviceName] = json;
				});
				return jsonObject;
			}

			// get multible json objects; async = true
			else if (typeof service == "object" && parameter == true) {
				app.debug.alert("plugin_RestClient: Get multible json objects; async = true", 60);
				// the deferred object for the caller
				var dfd = $.Deferred();
				var promiseArray = [], webserviceNamesArray = [];
				var async = true;
				$.each(service, function(key, call) {
					var serviceName = call[0], parameter = call[1];
					// get the path wich is defined in wsd file
					var path = plugin_RestClient.config.webservices[serviceName].url;
					// replace the parameters in path string
					if (parameter != undefined) {
						$.each(parameter, function(key, value) {
							path = path.replace('{' + key + '}', value);
						});
					}
					var data = path.split('?')[1];
					// if webservice has no parameter
					if (data == undefined)
						data = "";
					// URL of the webservice provider including the path to
					// webservice
					var pathX = path.split('?')[0];
					// ask for the deferred promise object
					var promise = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[serviceName].method, plugin_RestClient.config.webservices[serviceName].timeout, async, plugin_RestClient.config.webservices[serviceName].local);
					promiseArray.push(promise);
					webserviceNamesArray.push(serviceName);
				});
				// alert("promiseArray: " + JSON.stringify(promiseArray));
				$.when.apply($, promiseArray).then(function() {
					// alert(JSON.stringify([].slice.apply(arguments)));
					var argumentsArray = [].slice.apply(arguments);
					var resultObject = {};
					$.each(webserviceNamesArray, function(key, value) {
						resultObject[value] = argumentsArray[key];
					});
					dfd.resolve(resultObject);
				}, function(errorObject) {
					dfd.reject(errorObject);
				});

				return dfd.promise();
			}

			// get a single json object; async = false
			else if (typeof service == "string" && (parameter == undefined || typeof parameter == "object") && (async == undefined || async == false)) {
				app.debug.alert("plugin_RestClient: Get a single json object; async = false", 60);
				// get the path wich is defined in wsd file
				var path = plugin_RestClient.config.webservices[service].url;
				// set async to false (in each case)
				async = false;
				// replace the parameters in path string
				if (parameter != undefined) {
					$.each(parameter, function(key, value) {
						path = path.replace('{' + key + '}', value);
					});
				}
				var data = path.split('?')[1];
				// if webservice has no parameter
				if (data == undefined)
					data = "";
				// URL of the webservice provider including the path to
				// webservice
				var pathX = path.split('?')[0];
				// ask for the json file
				var json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout, async, plugin_RestClient.config.webservices[service].local);
				// add language wildcards wich could be defined in webservice
				// response
				if (plugin_MultilanguageIso639_3 != undefined) {
					if (json.language != undefined) {
						$.each(json.language, function(key, value) {
							app.lang.addParameter(key, value);
						});
					}
				}
				return json;
			}
			// get a single json object; async = true
			else if (typeof service == "string" && (parameter == undefined || typeof parameter == "object") && async == true) {
				app.debug.alert("plugin_RestClient: Get a single json object; async = true; async = false", 60);
				// the deferred object for the caller
				var dfd = $.Deferred();
				// get the path wich is defined in wsd file
				var path = plugin_RestClient.config.webservices[service].url;
				// replace the parameters in path string
				if (parameter != undefined) {
					$.each(parameter, function(key, value) {
						if (typeof value == "object") {
							value = JSON.stringify(value);
						}
						path = path.replace('{' + key + '}', value);
					});
				}
				var data = path.split('?')[1];
				// if webservice has no parameter
				if (data == undefined)
					data = "";
				// URL of the webservice provider including the path to
				// webservice
				var pathX = path.split('?')[0];
				// ask for the json file
				var promise = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout, async, plugin_RestClient.config.webservices[service].local);
				// add language wildcards wich could be defined in webservice
				// response

				promise.done(function(json) {
					// alert("async webservice call done", 60);
					if (plugin_MultilanguageIso639_3 != undefined) {
						if (json.language != undefined) {
							$.each(json.language, function(key, value) {
								app.lang.addParameter(key, value);
							});
						}
					}
					dfd.resolve(json);
				});

				promise.fail(function(jqXHR) {
					app.debug.alert("async webservice call failed", 60);
					dfd.reject(jqXHR);
				});

				return dfd.promise();
			}
			return null;
		}
	}
};
