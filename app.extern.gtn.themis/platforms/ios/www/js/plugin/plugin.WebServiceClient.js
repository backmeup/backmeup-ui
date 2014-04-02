plugin_WebServiceClient = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
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

	getAjax : function(uri, data, type) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + uri + ", " + data + ", " + type + ")", 5);
	},
	functions : {
		getXml : function(uri, data) {
			app.debug.alert("plugin_WebServiceClient.functions.getXml(" + uri + ", " + data + ")", 5);
			var xml = plugin_WebServiceClient.getAjax(uri, data, "xml");
			return xml;
		},
		getJson : function(uri, data) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + uri + ", " + data + ")", 5);
			var json = plugin_WebServiceClient.getAjax(uri, data, "json");
			return json;
		}
	}
};