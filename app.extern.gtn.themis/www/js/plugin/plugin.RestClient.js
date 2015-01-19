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
		// load the webservice definitions
		$.each(plugin_RestClient.config.wsdFiles, function(path, loadFile) {
			if (loadFile) {
				plugin_RestClient.loadDefinitionFile(path);
			}
		});
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

	loadDefinitionFile : function(path) {
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.loadDefinitionFile(" + path + ")", 20);
		var json = JsonLoader(path);
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.loadDefinitionFile() - add each webservice definition", 20);
		$.each(json, function(name, values) {
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.loadDefinitionFile() - add: " + name, 20);
			plugin_RestClient.config.webservices[name] = values;
		});
	},

	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// JSON functions
	// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	getSingleJson : function(service, parameter, async) {
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getSingleJson() - get a single json object; async = false", 60);
		var server, path, pathX, data, json;
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getSingleJson() - get server name", 20);
		if (service.indexOf('.') != -1) {
			var splittedService = service.split(".");
			server = splittedService[0];
			service = splittedService[1];
		} else {
			server = plugin_WebServiceClient.config.defaultServer;
		}

		// get the path wich is defined in wsd file
		path = plugin_RestClient.config.webservices[service].url;
		// set async to false (in each case)
		async = false;
		// replace the parameters in path string
		if (parameter != undefined) {
			$.each(parameter, function(key, value) {
				path = path.replace('{' + key + '}', value);
			});
		}
		data = path.split('?')[1];
		// if webservice has no parameter
		if (data == undefined)
			data = "";
		// URL of the webservice provider including the path to
		// webservice
		pathX = path.split('?')[0];
		// ask for the json file
		json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout, async,
				plugin_RestClient.config.webservices[service].local, server);
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
	},
	getSingleJsonAsync : function(service, parameter, async) {
		app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.getSingleJsonAsync() - get a single json object; async = true;", 60);
		// the deferred object for the caller
		var dfd = $.Deferred(), server, path, pathX, data, promise;

		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getSingleJsonAsync() - get server name", 20);
		if (service.indexOf('.') != -1) {
			var splittedService = service.split(".");
			server = splittedService[0];
			service = splittedService[1];
		} else {
			server = plugin_WebServiceClient.config.defaultServer;
		}

		app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.getSingleJsonAsync() server: " + server + "; service: " + service, 33);

		// get the path wich is defined in wsd file
		path = plugin_RestClient.config.webservices[service].url;
		// replace the parameters in path string
		if (parameter != undefined) {
			$.each(parameter, function(key, value) {
				if (typeof value == "object") {
					value = JSON.stringify(value);
				}
				path = path.replace('{' + key + '}', value);
			});
		}
		data = path.split('?')[1];
		// if webservice has no parameter
		if (data == undefined)
			data = "";
		// URL of the webservice provider including the path to
		// webservice
		pathX = path.split('?')[0];

		// ask for the json file
		promise = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout,
				async, plugin_RestClient.config.webservices[service].local, server);
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
			app.debug.alert("pugin.RestClient.js Webservice call done: " + JSON.stringify(json), 60);
			dfd.resolve(json);
		});

		promise.fail(function(jqXHR) {
			app.debug.alert("pugin.RestClient.js Webservice call failed: " + JSON.stringify(jqXHR), 60);
			dfd.reject(jqXHR);
		});

		return dfd.promise();
	},

	getMultipleJson : function(service, parameter, async) {
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - get multible json objects; async = false", 60);
		var jsonObject = {};
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - generate ajax call for each webservice", 20);
		$.each(service, function(key, call) {
			var serviceName = call[0], parameter = call[1], server, path, pathX, json, data;

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - get server name", 20);
			if (serviceName.indexOf('.') != -1) {
				var splittedService = serviceName.split(".");
				server = splittedService[0];
				serviceName = splittedService[1];
			} else {
				server = plugin_WebServiceClient.config.defaultServer;
			}
			// set async to false (in each case)
			async = false;

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - get webservice path from wsd file", 20);
			path = plugin_RestClient.config.webservices[serviceName].url;

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - replace parameters in path", 20);
			if (parameter != undefined) {
				$.each(parameter, function(key, value) {
					path = path.replace('{' + key + '}', value);
				});
			}

			data = path.split('?')[1];
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - data = " + data, 20);
			if (data == undefined) {
				app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - case: data == undefined", 20);
				data = "";
			}

			pathX = path.split('?')[0];
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - server path = " + pathX, 20);

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() -  ask for the json file", 20);
			json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[serviceName].method,
					plugin_RestClient.config.webservices[serviceName].timeout, async, plugin_RestClient.config.webservices[serviceName].local, server);

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - add language wildcards wich could be defined in webservice response",
					20);
			if (plugin_MultilanguageIso639_3 != undefined) {
				if (json.language != undefined) {
					$.each(json.language, function(key, value) {
						app.lang.addParameter(key, value);
					});
				}
			}
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJson() - add result to resultObject", 20);
			jsonObject[serviceName] = json;
		});
		return jsonObject;
	},

	getMultipleJsonAsync : function(service, parameter, async) {
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - get multible json objects; async = true", 60);
		// the deferred object for the caller
		var dfd = $.Deferred(), promiseArray = [], webserviceNamesArray = [], async = true;
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - generate a ajax call for each webservice", 20);
		$.each(service, function(key, call) {
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - generate single async ajax call", 20);
			var serviceName = call[0], parameter = call[1], server, path, pathX, data, promise;

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - get server name", 20);
			if (serviceName.indexOf('.') != -1) {
				var splittedService = serviceName.split(".");
				server = splittedService[0];
				serviceName = splittedService[1];
			} else {
				server = plugin_WebServiceClient.config.defaultServer;
			}

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - get webservice path from wsd file", 20);
			path = plugin_RestClient.config.webservices[serviceName].url;
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - replace parameters in path", 20);
			if (parameter != undefined) {
				$.each(parameter, function(key, value) {
					path = path.replace('{' + key + '}', value);
				});
			}

			data = path.split('?')[1];
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - data = " + data, 20);
			if (data == undefined) {
				app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - case: data == undefined", 20);
				data = "";
			}

			pathX = path.split('?')[0];
			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - server path = " + pathX, 20);

			app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - ask for the deferred promise object", 20);

			promise = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[serviceName].method,
					plugin_RestClient.config.webservices[serviceName].timeout, async, plugin_RestClient.config.webservices[serviceName].local, server);

			promiseArray.push(promise);

			webserviceNamesArray.push(serviceName);
		});
		// alert("promiseArray: " + JSON.stringify(promiseArray));
		// http://stackoverflow.com/questions/4878887/how-do-you-work-with-an-array-of-jquery-deferreds
		// http://stackoverflow.com/questions/5627284/pass-in-an-array-of-deferreds-to-when
		$.when.apply($, promiseArray).then(
				function() {
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - all async webservices are done", 20);
					// alert(JSON.stringify([].slice.apply(arguments)));
					var argumentsArray = [].slice.apply(arguments), resultObject = {};
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - add each result to resultObject", 20);
					$.each(webserviceNamesArray, function(key, value) {
						resultObject[value] = argumentsArray[key];
					});
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - async webservice call done: "
							+ JSON.stringify(resultObject), 60);
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - resolve deferred object", 20);
					dfd.resolve(resultObject);
				},
				function(errorObject) {
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - error on ohne or more async webservices", 20);
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - async webservice call failed: "
							+ JSON.stringify(errorObject), 60);
					app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - reject deferred object", 20);
					dfd.reject(errorObject);
				});
		app.debug.alert("pugin.RestClient.js ~ plugin_RestClient.getMultipleJsonAsync() - return: deferred promise", 20);
		return dfd.promise();
	},
	functions : {
		addWebserviceDefinition : function(name, path, method, timeout, cachetime, local) {
			app.debug.alert("plugin.RestClient.js plugin_RestClient.functions.addWebserviceDefinition(" + name + ", " + path + ", " + method + ", " + timeout
					+ ", " + cachetime + ", " + local + ")", 5);
			plugin_RestClient.config.webservices[name] = {
				"url" : path,
				"method" : method,
				"timeout" : timeout,
				"cachetime" : cachetime,
				"local" : local
			};
			return true;
		},
		addWebserviceDefinitionFile : function(path) {
			app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.addWebserviceDefinitionFile(" + path + ")", 5);
			plugin_RestClient.loadDefinitionFile(path);
		},
		getJson : function(service, parameter, async, attempts, dfd) {
			app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson(" + service + ", " + parameter + ", " + async + ")", 20);

			if (typeof service == "object" && (parameter == false || parameter == undefined)) {
				app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - case: get multible json objects; async = false", 5);
				for ( var i = 0; i < attempts; i++) {
					app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - AJAX attempt " + i + " of " + attempts, 5);
					var json = plugin_RestClient.getMultipleJson(service, parameter, async);
					if (json != null)
						return json;
				}
			}

			else if (typeof service == "object" && parameter == true) {
				app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - case: get multible json objects; async = true", 5);
				var promise = plugin_RestClient.getMultipleJsonAsync(service, parameter, async);

				if (dfd == null || dfd == undefined)
					dfd = $.Deferred();

				promise.done(function(json) {
					dfd.resolve(json);
				});

				promise.fail(function(errorObject) {
					if (async > 1) {
						async--;
						plugin_RestClient.functions.getJson(service, parameter, async, null, dfd);
					} else {
						dfd.reject(errorObject);
					}
				});

				return dfd.promise();

			}

			else if (typeof service == "string" && (parameter == undefined || typeof parameter == "object") && (async == undefined || async == false)) {
				app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - case: get a single json object; async = false", 5);
				for ( var i = 0; i < attempts; i++) {
					app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - AJAX attempt " + i + " of " + attempts, 5);
					var json = plugin_RestClient.getSingleJson(service, parameter, async);
					if (json != null)
						return json;
				}
			}

			else if (typeof service == "string" && (parameter == undefined || typeof parameter == "object") && async == true) {
				app.debug.alert("plugin.RestClient.js ~ plugin_RestClient.functions.getJson() - case: get a single json object; async = true", 5);
				var promise = plugin_RestClient.getSingleJsonAsync(service, parameter, async);

				if (dfd == null || dfd == undefined)
					dfd = $.Deferred();

				promise.done(function(json) {
					dfd.resolve(json);
				});

				promise.fail(function(errorObject) {
					if (attempts > 1) {
						attempts--;
						plugin_RestClient.functions.getJson(service, parameter, async, attempts, dfd);
					} else {

						dfd.reject();
					}
				});

				return dfd.promise();
			}

			return null;
		}
	}
};
