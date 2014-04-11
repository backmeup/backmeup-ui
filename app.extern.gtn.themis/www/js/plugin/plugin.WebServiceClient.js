/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
plugin_WebServiceClient = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
	},

	// called after all pages are loaded
	pagesLoaded : function() {
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

	getAjax : function(url, data, type, method, timeout) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ")", 14);
		var json = null;
		$.ajax({
			url : url,
			data : data,// ?key=value
			dataType : type, // json
			async : false,
			method : method, // post
			timeout : timeout, // 5000
			success : function(data, textStatus, jqXHR) {
				json = data;
			},
			error : function(jqXHR, textStatus, errorThrown) {
				app.debug.alert("Error in: plugin_WebServiceClient.getAjax(). Error: " + errorThrown, 13);
				json = false;
			}
		});
		return json;
	},
	functions : {
		getXml : function(uri, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getXml(" + uri + ", " + data + ", " + method + ", " + type + ")", 20);
			var xml = plugin_WebServiceClient.getAjax(uri, data, "xml");
			return xml;
		},

		getJson : function(path, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + path + ", " + data + ", " + method + ", " + timeout + ")", 20);
			var server = plugin_WebServiceClient.getPreferedServer();
			var url = server.scheme + server.scheme_specific_part + server.host + ":" + server.port + path;
			var json = plugin_WebServiceClient.getAjax(url, data, "json", method, timeout);
			return json;
		},

		// ask first or second or third or fourth or fifth server for the
		// prefered server
		askForPreferedServer : function() {
			var preferedServer = null;
			var success = null;
			plugin_WebServiceClient.config.preferedServer = preferedServer;
			return success;
		}
	}
};