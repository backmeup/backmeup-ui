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
		var success = null;
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
		var success = null;
		try {
			app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	definePluginEvents : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		var success = null;
		try {
			app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	pageSpecificEvents : function(container) {
		var success = null;
		try {
			app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// private methods
	getPreferedServer : function() {
		app.debug.alert("plugin_WebServiceClient.getPreferedServer()", 14);
		if (!plugin_WebServiceClient.config.preferedServer.scheme || !plugin_WebServiceClient.config.preferedServer.scheme_specific_part || !plugin_WebServiceClient.config.preferedServer.host || !plugin_WebServiceClient.config.preferedServer.port) {
			plugin_WebServiceClient.setPreferedServer();
		}
		return plugin_WebServiceClient.config.preferedServer;
	},

	setPreferedServer : function() {
		app.debug.alert("plugin_WebServiceClient.setPreferedServer() ... mehrere server implementieren", 14);
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme", plugin_WebServiceClient.config.server.first.scheme);
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme_specific_part", plugin_WebServiceClient.config.server.first.scheme_specific_part);
		app.info.set("plugin_WebServiceClient.config.preferedServer.host", plugin_WebServiceClient.config.server.first.host);
		app.info.set("plugin_WebServiceClient.config.preferedServer.port", plugin_WebServiceClient.config.server.first.port);
	},

	getAjax : function(url, data, type, method, timeout, async) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ", " + async + ")", 14);
		app.debug.alert("Call webservice: " + url + "?" + data, 60);
		var json = null;

		var dfd = null;
		if (async) {
			dfd = $.Deferred();
			json = dfd.promise();
		}

		if (method.toLowerCase() == "post") {
			// dirty
			alert(data);
			var obj = {};
			var pairs = data.split('&');
			for (i in pairs) {
				var split = pairs[i].split('=');
				if (split[1].substr(0, 1) == "{" || split[1].substr(0, 1) == "[") {
					alert(split[1]);
					split[1] = JSON.parse(split[1]);
					alert(JSON.stringify(split[1]));
				}
				obj[split[0]] = split[1];
			}
			data = JSON.stringify(obj);
			alert(data);
		}

		try {
			$.ajax({
				url : url,
				data : data,// ?key=value
				dataType : type, // json
				contentType : "application/json; charset=utf-8",
				async : async, // false
				method : method, // post
				timeout : timeout, // 5000
				beforeSend : function(jqXHR, settings) {
					if (plugin_WebServiceClient.config.useHeaderToken) {
						jqXHR.setRequestHeader(plugin_WebServiceClient.config.headerToken.key, app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value));
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

		getJson : function(path, data, method, timeout, async, local) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + path + ", " + data + ", " + method + ", " + timeout + ", " + async + ", " + local + ")", 20);
			var url = null;
			if (local === true)
				url = path;
			else {
				var server = plugin_WebServiceClient.getPreferedServer();
				url = server.scheme + server.scheme_specific_part + server.host + ":" + server.port + path;
			}
			var json = plugin_WebServiceClient.getAjax(url, data, "json", method, timeout, async);
			return json;
		},

		// ask first or second or third or fourth or fifth server for the
		// prefered server
		askForPreferedServer : function() {
			var preferedServer = null;
			var success = null;
			plugin_WebServiceClient.config.preferedServer = preferedServer;
			return success;
		},
		keepAliveRequest : function() {

		}
	}
};