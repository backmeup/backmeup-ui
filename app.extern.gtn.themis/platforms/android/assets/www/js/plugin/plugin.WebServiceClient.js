/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_WebServiceClient = {
	config : null,
	interval : null,
	constructor : function() {

	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);

		try {
			// first keep alive
			if (plugin_WebServiceClient.config.useKeepAlive) {
				plugin_WebServiceClient.keepAliveRequest();
				plugin_WebServiceClient.interval = window.setInterval("plugin_WebServiceClient.keepAliveRequest()", plugin_WebServiceClient.config.keepAlive.keepAliveIntervalInS * 1000);
			}

			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	pagesLoaded : function() {

		try {
			app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	definePluginEvents : function() {

		try {
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {

		try {
			app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	pageSpecificEvents : function(container) {

		try {
			app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// private methods
	getPreferedServer : function(name) {
		app.debug.alert("plugin_WebServiceClient.getPreferedServer()", 14);
		plugin_WebServiceClient.setPreferedServer(name);
		if (name != undefined)
			return plugin_WebServiceClient.config.preferedServer[name];
		return plugin_WebServiceClient.config.preferedServer;
	},

	// server anhand der namen speichern
	// server pingen
	setPreferedServer : function() {
		app.debug.alert("plugin_WebServiceClient.setPreferedServer() ... mehrere server implementieren", 14);
		// old
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme", plugin_WebServiceClient.config.server.first.scheme);
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme_specific_part", plugin_WebServiceClient.config.server.first.scheme_specific_part);
		app.info.set("plugin_WebServiceClient.config.preferedServer.host", plugin_WebServiceClient.config.server.first.host);
		app.info.set("plugin_WebServiceClient.config.preferedServer.port", plugin_WebServiceClient.config.server.first.port);
		// for each server farm
		$.each(plugin_WebServiceClient.config.server, function(serverName, data) {
			// alert(JSON.stringify(data));
			if (data.active === true) {
				app.info.set("plugin_WebServiceClient.config.preferedServer." + serverName, {});
				app.info.set("plugin_WebServiceClient.config.preferedServer." + serverName + ".scheme", data.first.scheme);
				app.info.set("plugin_WebServiceClient.config.preferedServer." + serverName + ".scheme_specific_part", data.first.scheme_specific_part);
				app.info.set("plugin_WebServiceClient.config.preferedServer." + serverName + ".host", data.first.host);
				app.info.set("plugin_WebServiceClient.config.preferedServer." + serverName + ".port", data.first.port);
			}
		});
	},

	getAjax : function(url, data, type, method, timeout, async, dataType) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ", " + async + ")", 14);
		app.debug.alert("Call webservice: " + url + "?" + data, 60);
		var json = null;

		var dfd = null;
		if (async) {
			dfd = $.Deferred();
			json = dfd.promise();
		}

		// get headers from data
		var headers = null;
		if (data.indexOf('§') != -1) {
			var splittedData = data.split("§");
			headers = splittedData[1];
			data = splittedData[0];
		}

		var contentType="application/x-www-form-urlencoded";
		if (dataType != undefined && dataType.toLowerCase() == "json") {
			// (nicht mehr so) dirty
			// alert(data);
			var obj = {};
			var pairs = data.split('&');
			for (i in pairs) {
				var split = pairs[i].split('=');
				if (split[1].substr(0, 1) == "{" || split[1].substr(0, 1) == "[") {
					// alert(split[1]);
					try {
						split[1] = JSON.parse(split[1]);
						obj[split[0]] = split[1];
					} catch (e) {
						alert("Ein parameter ist nicht gesetzt: " + split[0]);
					}
					// alert(JSON.stringify(split[1]));
				} else {
					obj[split[0]] = split[1];
				}

			}
			data = JSON.stringify(obj);
			contentType="application/json; charset=utf-8"
			// alert(data);
		}

		try {
			$.ajax({
				url : url,
				data : data,// ?key=value
				dataType : type, // json
				contentType : contentType,
				async : async, // false
				method : method, // post
				timeout : timeout, // 5000
				beforeSend : function(jqXHR, settings) {
					if (plugin_WebServiceClient.config.useHeaderToken) {
						jqXHR.setRequestHeader(plugin_WebServiceClient.config.headerToken.key, app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value));
					}
					if (headers != null) {
						var obj = {};
						var pairs = headers.split('&');
						for (i in pairs) {
							var split = pairs[i].split('=');
							jqXHR.setRequestHeader(split[0], split[1]);
						}
					}
				},
				success : function(data, textStatus, jqXHR) {
					json = data;
					if (dfd != undefined && dfd != null) {
						// alert("ws success -- resolve dfd");
						dfd.resolve(json);
					}
				},
				error : function(jqXHR, textStatus, errorThrown) {
					app.debug.alert("Error in: plugin_WebServiceClient.getAjax(). Error: " + errorThrown, 50);
					json = false;
					if (dfd != undefined && dfd != null) {
						// alert("now, reject it");
						dfd.reject({
							"call" : {
								"url" : url,
								"data" : data,
								"type" : type,
								"async" : async,
								"mehtod" : method,
								"timeout" : timeout
							},
							"jqXHR" : JSON.parse(JSON.stringify(jqXHR))
						});
					}
				}
			});
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			json = false;
		}
		app.debug.alert("Webservice returns: " + JSON.stringify(json, null, 4), 60);
		return json;
	},

	keepAliveStartTime : 0.0,

	keepAliveSuccess : function(data, textStatus, jqXHR) {
		app.debug.alert("plugin_WebServiceClient.keepAliveSuccess()", 14);
		var wsDuration = Date.now() - plugin_WebServiceClient.keepAliveStartTime;
		if (wsDuration >= plugin_WebServiceClient.config.keepAlive.maximumResponseTime) {
			app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", false);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 2);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "Timeout error");
		} else {
			app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration", wsDuration);
			app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", true);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 0);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "No error");
		}
		if (!plugin_WebServiceClient.config.keepAlive.isAlive) {
			app.debug.alert("KeepAlive request failed.\nReason: " + plugin_WebServiceClient.config.keepAlive.error.text + "\nTime: " + wsDuration, 60);
		}

	},

	keepAliveError : function(jqXHR, textStatus, errorThrown) {
		app.debug.alert("plugin_WebServiceClient.keepAliveError()", 14);
		var wsDuration = Date.now() - plugin_WebServiceClient.keepAliveStartTime;
		app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration", wsDuration);
		app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", false);
		app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 1);
		app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "Webservice Error");
		if (!plugin_WebServiceClient.config.keepAlive.isAlive) {
			app.debug.alert("KeepAlive request failed.\nReason: " + plugin_WebServiceClient.config.keepAlive.error.text + "\nTime: " + wsDuration + "\n\n" + JSON.stringify(errorThrown, null, 4), 60);
		}
	},

	keepAliveAjax : function(url, data, type, method, timeout) {
		app.debug.alert("plugin_WebServiceClient.keepAliveAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ")", 14);
		try {
			$.ajax({
				url : url,
				data : data,// ?key=value
				dataType : type, // json
				async : true,
				method : method, // post
				timeout : timeout, // 5000
				success : plugin_WebServiceClient.keepAliveSuccess,
				error : plugin_WebServiceClient.keepAliveError
			});
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
		}
	},

	/*
	 * 
	 * 0 OK; 1 Webservice failed; 2 Timeout Error
	 */
	keepAliveRequest : function() {
		app.debug.alert("plugin_WebServiceClient.keepAliveRequest()", 14);
		var path = plugin_WebServiceClient.config.keepAlive.keepAlivePath;
		var data = "";
		var method = plugin_WebServiceClient.config.keepAlive.method;
		var timeout = plugin_WebServiceClient.config.keepAlive.timeout;
		var server = plugin_WebServiceClient.getPreferedServer();
		var url = server.scheme + server.scheme_specific_part + server.host + ":" + server.port + path;
		var wsDuration = 0;
		switch (plugin_WebServiceClient.config.keepAlive.type) {
		case "json":
			plugin_WebServiceClient.keepAliveStartTime = Date.now();
			plugin_WebServiceClient.keepAliveAjax(url, data, "json", method, timeout);
			break;
		case "xml":
			alert("still not implemented");
			break;
		case "text":
			alert("still not implemented");
			break;
		case "html":
			alert("still not implemented");
			break;
		default:
			alert("keepAliveRequest: no such type: " + plugin_WebServiceClient.config.keepAlive.type);
		}
	},

	functions : {
		getXml : function(uri, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getXml(" + uri + ", " + data + ", " + method + ", " + type + ")", 20);
			var xml = plugin_WebServiceClient.getAjax(uri, data, "xml");
			return xml;
		},

		getJson : function(path, data, method, timeout, async, local, server) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + path + ", " + data + ", " + method + ", " + timeout + ", " + async + ", " + local + ")", 20);
			var url = null;
			var dataType = null;
			if (local === true)
				url = path;
			else {
				var serverConfig = plugin_WebServiceClient.getPreferedServer(server);
				url = serverConfig.scheme + serverConfig.scheme_specific_part + serverConfig.host + ":" + serverConfig.port + path;
				var dataType = plugin_WebServiceClient.config.server[server].mappings[method.toLowerCase()];
				alert(dataType);
			}

			var json = plugin_WebServiceClient.getAjax(url, data, "json", method, timeout, async, dataType);
			return json;
		},

		// ask first or second or third or fourth or fifth server for the
		// prefered server
		askForPreferedServer : function() {
			var preferedServer = null;

			plugin_WebServiceClient.config.preferedServer = preferedServer;
			return success;
		},
		keepAliveRequest : function() {

		}
	}
};