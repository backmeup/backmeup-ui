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

	getAjax : function(uri, data, type, method, timeout) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + uri + ", " + data + ", " + type + ", " + method + ", " + timeout + ")", 5);
	},
	functions : {
		getXml : function(uri, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getXml(" + uri + ", " + data + ", " + method + ", " + type + ")", 5);
			var xml = plugin_WebServiceClient.getAjax(uri, data, "xml");
			return xml;
		},
		getXmlFromPreferedServer : function(data, method, timeout) {
		},
		getJson : function(uri, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + uri + ", " + data + ", " + method + ", " + timeout + ")", 5);
			var json = plugin_WebServiceClient.getAjax(uri, data, "json");
			return json;
		},
		getJsonFromPreferedServer : function(data, method, timeout) {
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